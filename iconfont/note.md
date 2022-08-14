# 制作流程

1. 使用 Illustrator 绘制图标

2. 在 [IcoMoon](https://icomoon.io/app/#/projects) 中新建项目，上传图标，导出为字体，下载解压

3. 将字体复制到插件目录中，通过 IcoMoon 网站或压缩包内的示例网页找到需要的图标及其编码

4. 在 [`package.json`](../package.json) 里的 `contributes/icons` 项中添加，即可在别处引用

> 注：也可以使用 VSCode 的 Octicons Refsrc 插件代码
