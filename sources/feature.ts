// 20220813
const svgFixer = require ("oslllo-svg-fixer")  // npm install oslllo-svg-fixer 不支持Ts所以不能用import
import * as fan from "fantasticon"  // npm install fantasticon
import * as path from "path"  // auto install
import * as fs from "fs"  // auto install
import * as thrd from "node-worker-threads-pool"  // npm install node-worker-threads-pool

// 修复图标，以防空心处被错误转换为实心
// 问题原理：https://github.com/nfroidure/svgicons2svgfont/issues/62
// 若只有少量图标，也可以使用 Inkscape 或 Figma 修正，之后可导入 IcoMoon 验证
export async function fixSvg () {
	// oslllo-svg-fixer库在批量处理方面有bug，只得自己实现一下
	async function fixedSvgFixer (src: string, dst: string,
			opt?: { throwIfDestinationDoesNotExist?: boolean; showProgressBar?: boolean; traceResolution?: number }) {
		const ary = fs.readdirSync (src)
		// 方法一：普通循环，很慢
		// for (const item of ary) {
		// 	await svgFixer( path.join (src,item), dst, opt ).fix()
		// 		.then(console.log("1"))
		// 	console.log("2")
		// }
		// 方法二：单线程的异步并不能起到加速作用
		// await Promise.all(ary.map(async (item) => {
		// 	await svgFixer( path.join (src,item), dst, opt ).fix()
		// 		.then(console.log("1"))
		// 	console.log("2")
		// }))
		// 方法三：通过库引入线程池可以加速
		const thrdPool = new thrd.StaticPool ({
			size: 8,
			task: async ([item, src, dst, opt]) => {
				const path = require ("path")
				const svgFixer = require ("oslllo-svg-fixer")
				await svgFixer( path.join (src,item), dst, opt ).fix()
				// 	.then(console.log("1"))
				// console.log("2")
			}
		})
		let tasks = []
		for (const item of ary) {
			const task = thrdPool.exec ([item, src, dst, opt])  // 这里加await就不能并发了
				// .then((result: any) => { console.log ("Result:", result) })
			tasks.push(task)
		}
		await Promise.all(tasks) .then(()=> thrdPool.destroy())
		// console.log("0")
	}
	const src = getGlobalPath ("iconfont/icons (octicons-17.4.0)")
	const dst = getGlobalPath ("iconfont/fonts/fixed-icons")
	fs.mkdirSync (dst, {recursive: true})
	await fixedSvgFixer (src, dst)
	console.log ("[fixSvg]: Done.")
}

// 将图标转为字体，并生成列表
export async function genFont () {
	const inputDir = getGlobalPath ("iconfont/fonts/fixed-icons")
	const outputDir = getGlobalPath ("iconfont/fonts")
	// if (!fs.existsSync (outputDir))
	fs.mkdirSync (outputDir, {recursive: true})
	await fan.generateFonts ({
		name: "octicons",
		fontTypes: [
			fan.FontAssetType.TTF,
			// fan.FontAssetType.WOFF,
			fan.FontAssetType.WOFF2,
		],
		assetTypes: [
			fan.OtherAssetType.CSS,
			fan.OtherAssetType.HTML,
			fan.OtherAssetType.JSON,
			// fan.OtherAssetType.TS,
		],
		formatOptions: { json: { indent: 2 } },
		templates: {},
		pathOptions: {},
		codepoints: {},
		// fontHeight: 300,
		round: undefined,
		descent: undefined,
		normalize: true,
		selector: "",
		tag: "i",
		prefix: "icon",
		fontsUrl: "",
		inputDir: inputDir,
		outputDir: outputDir,
	})
	console.log ("[genFont]: Done.")
}

// 根据列表，通过修改package.json的方式注册图标
export function modJson(clear = false) {
	const jsonPath = getGlobalPath ("iconfont/fonts/octicons.json")
	const contribPath = getGlobalPath ("package.json")
	const jsonData: { [key: string]: number } = JSON.parse( fs.readFileSync( jsonPath ).toString() )
	let contribData = JSON.parse( fs.readFileSync( contribPath ).toString() )
	let icons: any = {}
	if (!clear) for (const iconName in jsonData)
		icons ["octicons-" + iconName] = {
			"description": "_",
			"default": {
				"fontPath": "./iconfont/fonts/octicons.woff2",
				// 如果这样写，最后结果会是"\\uXXXX"而不是"\uXXXX"
				// "fontCharacter": "\\u" + jsonData[iconName] .toString(16).toUpperCase()
				// 这样可以用，但是是以乱码字符而非转义字符形式显示的
				// "fontCharacter": String.fromCharCode (jsonData[iconName])
				// 改进方案，先用占位符，最后再文本替换
				// "fontCharacter": "[BACKSLASH]u" + jsonData[iconName] .toString(16).toUpperCase()
				// 但其实这样也行，可以是"\uXXXX"也可以是"\\XXXX"
				"fontCharacter": "\\" + jsonData[iconName] .toString(16).toUpperCase()
			}
		}
	contribData ["contributes"] ["icons"] = icons
	fs.writeFileSync( contribPath,
		(JSON.stringify (contribData, null, "\t") +"\n")
			// .replaceAll ("[BACKSLASH]", "\\")
	)
	console.log ("[modJson]: Done.")
}

// 将相对于插件文件夹的路径转换为绝对路径
const getGlobalPath = (insidePath: string) =>
	path.resolve (process.cwd(), insidePath)
