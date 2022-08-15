<!--20220816-->
<span id="jump-begin"/> <h1 align="center"> Clock And Battery </h1>

<div align=center>
<img alt="VS Market Version" src="https://img.shields.io/visual-studio-marketplace/v/liangruliu.clock-and-battery?color=0c649e&style=flat-square">
<img alt="VS Market Last Updated" src="https://img.shields.io/visual-studio-marketplace/last-updated/liangruliu.clock-and-battery?color=0c649e&style=flat-square">
<img alt="VS Market Installs" src="https://img.shields.io/visual-studio-marketplace/i/liangruliu.clock-and-battery?color=0c649e&style=flat-square">
<img alt="(Static) Extension's Keywords" src="https://img.shields.io/badge/keywords-shortcut%2C%20button%2C%20tool%2C%20menu%2C%20bar-0c649e?style=flat-square">
</div><br/>



<details align="center">
   <summary align="center"> 展开 中文版介绍 </summary>

   <p align="center">
      这个插件可以在状态栏添加日期时间指示器和电池电量指示器。<br/>
      它和现有的同类插件相比，界面更精致，功能更丰富。<br/>
   </p>
   <div align="left">


## 截图

+ [略](#jump-pic)


## 前言

+ 插件市场中已有好几个同类插件，我发现它们各有长处，所以我写了这个插件，将长处集于一体。
+ 插件的功能分为两部分：日期时间指示器和电池电量指示器。将来可能会增加性能相关的指示器，比如处理器、内存、网络等。


## 功能

1. 日期时间指示器
   + 文字前面有随昼夜切换的小图标；点击状态栏项可以向当前编辑器插入日期时间。
   + 以下内容均可自定义：是否启用、项在状态栏的位置、小图标及其切换时机、显示的日期时间的格式、插入的日期时间的格式、项的刷新周期。
2. 电池电量指示器
   + 文字前面有随电池状态切换的小图标。
   + 以下内容均可自定义：是否启用、项在状态栏的位置、小图标及其切换时机、项的刷新周期。


## 安装与使用

1. 点击 VSCode 左侧扩展按钮，在搜索框搜索，点击 `[安装]`。
2. 可以去 `[扩展设置]` 看看，有许多内容可以自定义。


## 说明

1. 插件代码所在位置为（`Windows` 上的默认路径）：<br/>
   `C:/Users/<NAME>/.vscode/extensions/liangruliu.clock-and-battery-<VER>`
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
