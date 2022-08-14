<!--20220813-->
<span id="jump-begin"/> <h1 align="center"> Octicons Refsrc </h1>

<div align=center>
<img alt="VS Market Version" src="https://img.shields.io/visual-studio-marketplace/v/liangruliu.customize-toolbar?color=0c649e&style=flat-square">
<img alt="VS Market Last Updated" src="https://img.shields.io/visual-studio-marketplace/last-updated/liangruliu.customize-toolbar?color=0c649e&style=flat-square">
<img alt="VS Market Installs" src="https://img.shields.io/visual-studio-marketplace/i/liangruliu.customize-toolbar?color=0c649e&style=flat-square">
<img alt="(Static) Extension's Keywords" src="https://img.shields.io/badge/keywords-shortcut%2C%20button%2C%20tool%2C%20menu%2C%20bar-0c649e?style=flat-square">
</div><br/>



<details align="center">
   <summary align="center"> 展开 中文版介绍 </summary>

   <p align="center">
      本插件可以为其他 VSCode 插件提供 Octicons 图标引用源。<br/>
      这和图标主题不是一回事，具体功能见后文。<br/>
   </p>
   <div align="left">


## 简介

+ 根据 [VSCode 官网](https://code.visualstudio.com/api/references/icons-in-labels) 介绍，插件可以在字符串中使用诸如 `$(iconId)` 的形式来引用图标，并且它的本质是 `图标字体`。
+ 软件原生提供的图标字体是 [Codicon](https://microsoft.github.io/vscode-codicons/dist/codicon.html)，而本插件又提供了一款 GitHub 出品的 [Octicons](https://primer.style/octicons/)。
+ 本插件的使用场景：
  1. 你是一位插件**开发者**，你的插件中需要大量使用 Octicons 的图标，则可以安装此插件，并要求使用者也要安装，然后你就能在插件里引用 Octicons 图标了。
  2. 你是一位插件**开发者**，如果你只想使用个别图标，或者想用的不是 Octicons，你可以自己做一个字体，但本插件的代码也可以作为工具。
  3. 你是一位插件**使用者**，你使用的某个插件提供了设置项，可以让你填写图标名来自定义图标，但你发现 Codicon 不够用而 Octicons 能满足需求时，可以使用此插件。


## 安装与使用

1. 点击 VSCode 左侧扩展按钮，在搜索框搜索，点击 `[安装]`。
2. 点开简介中的 Octicons 网站，找到所需图标及其名称（假设为 `iconId`），然后就能以 `$(octicons-iconId)` 格式引用。<br/>
   （例如图标 `alert-24` 对应的引用就是 `$(octicons-alert-24)`）


## 说明

1. 插件代码所在位置为（`Windows` 上的默认路径）：<br/>
   `C:/Users/<NAME>/.vscode/extensions/liangruliu.octicons-refsrc-<VER>`
2. 插件里面的代码是在插件开发时用的，插件运行时不需要执行代码。<br/>
   那些代码用来将图标正确转换为字体并进行注册，这也正是我所说的“可作为其他开发者的工具”。


**小图标，大用途！**



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
