<!--20221013-->
<span id="jump-begin"/> <h1 align="center"> Line Number </h1>

<div align=center>
<img alt="VS Market Version" src="https://img.shields.io/visual-studio-marketplace/v/liangruliu.line-number?color=0c649e&style=flat-square">
<img alt="VS Market Last Updated" src="https://img.shields.io/visual-studio-marketplace/last-updated/liangruliu.line-number?color=0c649e&style=flat-square">
<img alt="VS Market Installs" src="https://img.shields.io/visual-studio-marketplace/i/liangruliu.line-number?color=0c649e&style=flat-square">
<img alt="(Static) Extension's Keywords" src="https://img.shields.io/badge/keywords-line--number%2C%20copy%2C%20rich--text%2C%20editor-0c649e?style=flat-square">
</div><br/>



<details align="center">
   <summary align="center"> 展开 中文版介绍 </summary>

   <p align="center">
      这个插件可以给代码添加行号。<br/>
      它比同类插件的优点是，能保留代码原本的颜色。<br/>
      首先声明，它目前还不够完善，详见 <a href="#jump-ch">文末</a>。
   </p>
   <div align="left">


## 截图

+ [略](#jump-pic)


## 前言及简介

+ 在向 Word 等富文本编辑器中粘贴代码时，会有带行号粘贴的需求。
+ 插件市场中那些生成行号的插件，要么是只能粘贴纯文本，要么是重新给代码着色而不能保留在 VSCode 中的颜色。
+ 本插件不仅能实现保留原本的颜色，还提供了一些个性化选项。


## 安装与使用

1. 点击 VSCode 左侧扩展按钮，在搜索框搜索，点击 `[安装]`。
2. 在 [命令面板](command:workbench.action.showCommands) 中执行 [`Line Number: Open Panel`](command:line-number.open-panel)，打开处理面板。
3. 在处理面板上方设置好参数，从 VSCode 的编辑窗口复制所需代码，粘贴到处理面板，会立刻生成行号并自动复制，之后去所需位置粘贴即可。


## 说明

1. 插件代码所在位置为（`Windows` 上的默认路径）：<br/>
   `C:/Users/<NAME>/.vscode/extensions/liangruliu.line-number-<VER>`
2. <span id="jump-ch"/>
   这个插件存在三个缺点：
   一是只能处理来自 VSCode 的内容，
   二是对未知语言（即无着色的代码）和部分第三方颜色主题可能无法支持，
   三是操作略显繁琐且配置不能保存。
3. 制作这个插件存在一个难点：Node.js 和 VSCode 所提供的读取剪贴板功能，似乎只能读到纯内容而无法得到富文本。<br/>
   所以我把插件做成一个处理面板的形式，其实不是为了有预览功能什么的，而是因为能够利用到操作系统的复制粘贴功能。<br/>
   如果你有解决这个问题的思路，或者有什么建议，欢迎通过邮箱 <LiangruLiu@outlook.com> 与我联系。


**开启个性化的 VSCode！**



   <br/><br/><br/><br/>
   <h2 align="center"> 英文版介绍 </h2>
   </div>
</details>

<p align="center">
   This plugin can add line numbers to code. <br/>
   Its advantage over similar plugins is that it retains the original color of the code. <br/>
   First of all, it's not perfect at present, see <a href="#jump-en">end of article</a> for details.
</p>


## Screenshot

<span id="jump-pic"/> [![Screenshot][github.raw]][github.raw]

[github.raw]: https://raw.githubusercontent.com/LiangruLiu/VSCode-Extension/line-number/images/screenshot.png


## Preface & Introduction

+ When pasting code into rich text editors such as Word, there will be a need to paste with line numbers.
+ Plugins in the marketplace that generate line numbers either can only paste plain text, or recolor the code and not keep the colors in VSCode.
+ This plugin can not only keep the original colors, but also provide some personalization options.


## Installation & Usage

1. Click the extension button on the left side of VSCode, search in the search box, and click `[install]`.
2. Execute [`Line Number: Open Panel`](command:line-number.open-panel) in the [Command Panel](command:workbench.action.showCommands) to open the processing panel.
3. Set the parameters above the processing panel, copy the code you want from the editing window of VSCode, paste it into the processing panel, the line number will be generated immediately and automatically copied, then you can paste it to the desired location.


## Description

1. The location of the plugin code is (Default path on `Windows`): <br/>
   `C:/Users/<NAME>/.vscode/extensions/liangruliu.line-number-<VER>`
2. <span id="jump-en"/>
   This plugin has three disadvantages:
   one is that it can only process content from VSCode,
   the other is that it may not support unknown languages (that is, uncolored code) and some third-party color themes,
   and the third is that the operation is slightly cumbersome and the configuration cannot be saved.
3. There is a difficulty in making this plugin: the read clipboard function provided by Node.js and VSCode seems to only read plain content and cannot get rich text. <br/>
   So I made the plugin in the form of a processing panel, not to have a preview function or something, but to be able to use the copy and paste function of the operating system. <br/>
   If you have ideas to solve this problem or have any suggestions, feel free to contact me via email <LiangruLiu@outlook.com>.


**Enjoy!**



<br/>

-----
<!-- <p align="center"> Visual Studio Marketplace </p> -->
<div align=center> <a href="#jump-begin">
   <img src="https://liangruliu.github.io/images/vscodeExt/icon-small.png" width="32pt">
</a> </div>
