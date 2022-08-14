<!--20220709-->
<span id="jump-begin"/> <h1 align="center"> Customize Toolbar </h1>

<div align=center>
<img alt="VS Market Version" src="https://img.shields.io/visual-studio-marketplace/v/liangruliu.customize-toolbar?color=0c649e&style=flat-square">
<img alt="VS Market Last Updated" src="https://img.shields.io/visual-studio-marketplace/last-updated/liangruliu.customize-toolbar?color=0c649e&style=flat-square">
<img alt="VS Market Installs" src="https://img.shields.io/visual-studio-marketplace/i/liangruliu.customize-toolbar?color=0c649e&style=flat-square">
<img alt="(Static) Extension's Keywords" src="https://img.shields.io/badge/keywords-shortcut%2C%20button%2C%20tool%2C%20menu%2C%20bar-0c649e?style=flat-square">
</div><br/>



<details align="center">
   <summary align="center"> 展开 中文版介绍 </summary>

   <p align="center">
      这个插件可以给界面右上角工具栏添加自定义按钮。<br/>
      插件本身不提供实质性功能，而是提供了为任意命令设立按钮的途径。<br/>
      首先声明，它目前还不够完善，详见 <a href="#jump-ch">文末</a>。
   </p>
   <div align="left">


## 截图

+ [略](#jump-pic)


## 前言及简介

+ 对于那些常用的功能，为了更便于使用，你可以给它们绑定快捷键，但其实还有一个方法：在工具栏添加按钮。
+ 一直以来，我使用的是一个叫做 [Shortcut Menu Bar](https://marketplace.visualstudio.com/items?itemName=jerrygoyal.shortcut-menu-bar) 的插件来实现添加按钮。然而它不支持自定义图标，这对于对美观度要求较高的我来说是个问题。
+ 现在我自己做了一个插件，不仅能自定义图标，还支持根据文件名决定是否显示按钮。


## 安装与使用

1. 点击 VSCode 左侧扩展按钮，在搜索框搜索，点击 `[安装]`。
2. 在安装后的初次启动，请打开 `[扩展设置]`，按照 `Button Config` 项的介绍刷新一次。
3. 在 `Button Config` 项中点击 `[在 settings.json 中编辑]`，然后可以根据代码提示来设置自己的按钮。代码提示里写得足够详细，这里就不再赘述了。
4. 这个插件本身是不提供实质性功能的。默认配置里，有几个按钮调用的不是 VSCode 自带的命令，而是其他插件提供的命令，如果你没有安装的话是无法使用的。


## 说明

1. 插件代码所在位置为（`Windows` 上的默认路径）：<br/>
   `C:/Users/<NAME>/.vscode/extensions/liangruliu.customize-toolbar-<VER>`
2. <span id="jump-ch"/>
   我制作这个插件，一方面是需要这个功能，另一方面其实也是一个学习的过程，因为我既不太会 Node.js，也不太会 VSCode 插件开发。<br/>
   目前该插件的功能的代码实现逻辑很不好：我只会静态设置按钮，没找到动态设置按钮的方法，所以每次修改设置，其实是在通过文件读写修改源码的方式来修改功能。这也正是每次应用更改都需要重启两次的原因。<br/>
   我甚至认为这个程序有出错的可能，因此添加了手动刷新的功能。<br/>

   如果你有解决这个问题的思路，或者有什么建议，欢迎通过邮箱 <LiangruLiu@outlook.com> 与我联系。


**开启个性化的 VSCode！**



   <br/><br/><br/><br/>
   <h2 align="center"> 英文版介绍 </h2>
   </div>
</details>

<p align="center">
   This plugin can add custom buttons to the toolbar in the upper right corner of the interface. <br/>
   The plugin itself does not provide substantial functionality, but provides a way to set up buttons for arbitrary commands. <br/>
   First of all, it's not perfect at present, see <a href="#jump-en">end of article</a> for details.
</p>


## Screenshot

<span id="jump-pic"/> [![Screenshot](https://liangruliu.github.io/images/vscodeExt/CT_screenshot.png)](https://liangruliu.github.io/images/vscodeExt/CT_screenshot.png)


## Preface & Introduction

+ For those frequently used functions, for easier use, you can bind shortcut keys to them, but there is actually another way: add buttons to the toolbar.
+ In the past, I used a plugin called [Shortcut Menu Bar](https://marketplace.visualstudio.com/items?itemName=jerrygoyal.shortcut-menu-bar) to add buttons. However, it doesn't support customizing icons, which is a problem for me, who has high requirements for aesthetics.
+ Now I've made my own plugin, which can not only customizes the icon, but also supports showing the button based on the filename.


## Installation & Usage

1. Click the extension button on the left side of VSCode, search in the search box, and click `[install]`.
2. In the first startup after installation, please open `[Extension Settings]` and refresh it once as described in the `Button Config` item.
3. In the `Button Config` item, click `[Edit in settings.json]`, and then you can set your own button according to the code hints. The code hints are detailed enough, so I won't repeat them here.
4. This plugin itself doesn't provide substantial functionality. In the default configuration, there are several buttons that call commands not from VSCode but from other plugins, which are not available if you don't have them installed.


## Description

1. The location of the plugin code is (Default path on `Windows`): <br/>
   `C:/Users/<NAME>/.vscode/extensions/liangruliu.customize-toolbar-<VER>`
2. <span id="jump-en"/>
   I created this plugin. On the one hand, I need this feature; on the other hand, it's actually a learning process, because I'm neither good at Node.js nor VSCode plugin development. <br/>
   At present, the code implementation logic of this plugin's feature is very bad: I only know how to set buttons statically and haven't found a way to set them dynamically, so behind each modification of the settings, it's actually modifying the source code through file reading and writing to implement changes to the functionality. That's why you need to restart twice every time you apply a change. <br/>
   I even thought there's a possibility of program errors in this program, so I added the ability to manually refresh it. <br/>

   If you have ideas to solve this problem or have any suggestions, feel free to contact me via email <LiangruLiu@outlook.com>.


**Enjoy!**



<br/>

-----
<!-- <p align="center"> Visual Studio Marketplace </p> -->
<div align=center> <a href="#jump-begin">
   <img src="https://liangruliu.github.io/images/vscodeExt/icon-small.png" width="32pt">
</a> </div>
