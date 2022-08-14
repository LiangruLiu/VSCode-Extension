// 20220812
// 这个代码是在插件开发时用的，插件运行时不需要执行代码
import * as feature from "./feature"

// console.log ("Hello, world!")

// 注意此代码和 feature.ts 中，Promise、then、async、await 的使用

// 方法一
(async () => {
	console.time ("Time cost")
	console.log ("Start! (It takes about half a minute)")
	await feature.fixSvg ()
	await feature.genFont ()
	feature.modJson ()
	process.stdout.write ("Finish! ")
	console.timeEnd ("Time cost")
}) ()

// 方法二
// console.time ("Time cost")
// console.log ("Start! (It takes about half a minute)")
// feature.fixSvg ()
// .then(()=> feature.genFont ())
// .then(()=> feature.modJson ())
// .then(()=> {
// 	process.stdout.write ("Finish! ")
// 	console.timeEnd ("Time cost")
// })
