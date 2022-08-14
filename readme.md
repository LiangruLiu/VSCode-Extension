<!--20220709-->
<span id="jump-begin"/> <h1 align="center"> Extreme Dark Theme </h1>

<div align=center>
<img alt="VS Market Version" src="https://img.shields.io/visual-studio-marketplace/v/liangruliu.extreme-dark-theme?color=0c649e&style=flat-square">
<img alt="VS Market Last Updated" src="https://img.shields.io/visual-studio-marketplace/last-updated/liangruliu.extreme-dark-theme?color=0c649e&style=flat-square">
<img alt="VS Market Installs" src="https://img.shields.io/visual-studio-marketplace/i/liangruliu.extreme-dark-theme?color=0c649e&style=flat-square">
<img alt="(Static) Extension's Keywords" src="https://img.shields.io/badge/keywords-black%2C%20amoled%2C%20dark%2C%20night%2C%20high--contrast-0c649e?style=flat-square">
</div><br/>



<details align="center">
   <summary align="center"> 展开 中文版介绍 </summary>

   <p align="center">
      这是一个深色主题，非常非常暗！<br/>
      语法高亮配色可以在原始主题样式和 OneDarkPro 样式中选择。<br/>
      首先声明，它目前还不够完善，详见 <a href="#jump-ch">文末</a>。
   </p>
   <div align="left">


## 截图

+ [略](#jump-pic)


## 前言及简介

+ 不知是否有人和我一样，喜欢纯黑色的界面。（也许多数人对于深色界面的审美，正如多数软件设计的一样，是深灰色的背景）
+ 在我看来，默认的深色主题背景不够暗，导致文字的醒目易读性稍差，而且夜晚光线较暗时有些晃眼。
+ 这个主题就很好地解决了问题，不过也有一个缺陷，就是周围光线过强时，屏幕反光会更严重，此时应该换成浅色主题。


## 安装与使用

1. 点击 VSCode 左侧扩展按钮，在搜索框搜索，点击 `[安装]`。
2. 点击 VSCode 左侧设置按钮，点击 `[颜色主题]`，选择 `[Extreme Dark]`。
3. 可在 `[扩展设置]` 中选择语法高亮配色。


## 设计理念

1. 一切皆为显示清晰服务。
2. 所有背景都是纯黑，因此大量依靠线条来划分板块。（但设置页面的控件是个例外，这是我做出的尝试）
3. 元素尽量丰富。（比如平时、悬停、选中，被设计为多级效果）
4. 颜色尽量统一。（在注释中列出了颜色清单）
5. 在颜色的饱和度方面，线条和报错及警告（因其重要而）倾向于鲜艳，色块会相对适中，彩色文字及图标（为了融进其他白色文字故）倾向于黯淡。
6. 对于列表性质的弹窗、菜单等，采用半透明背景。
7. 密集的文字本就显得杂乱，故从不在文字当中加边框。
8. 代码颜色可能很丰富，因此文字当中的色块尽量设计为黑色白色。
9. 小细节：有时代码中某个词满足多个条件而被层层高亮，反而使文字看不清，我会有意设计为变暗。


## 说明

1. 插件代码所在位置为（`Windows` 上的默认路径）：<br/>
   `C:/Users/<NAME>/.vscode/extensions/liangruliu.extreme-dark-theme-<VER>`
2. 我做这个主题更多是为了自用。不过学习如何制作主题、一点点摸索设置项的含义，都花费了我很长时间。因此我想做成插件分享出来。<br/>
   如果你也想自定义一个主题，并且你也说中文的话，建议下载看一看。代码中写有中文注释，包括代码条目与界面元素的对应、可供参考的网站、注意事项，也许能有所帮助。
3. <span id="jump-ch"/>
   这个主题之所以保留了默认主题的语法高亮，是因为我只是编程初学者，会的语言很少，不了解其他语言如何高亮为好。
   （其实我自己用的是这个插件的另一个版本，是我自定义的高亮策略）<br/>
   现在我为插件加上了设置项，使得语法高亮配色可以在原始主题样式和 OneDarkPro 样式间切换，但这就引入了两个问题：
   一是我不太会开发插件，目前切换样式的实现逻辑不太好，程序有出错的可能；
   二是原版 OneDarkPro 主题可能是动态调整的，而我只是摘出了主要的静态部分。
4. 作为初学者，我接触不到 VSCode 的全部功能，因此这个主题还不完善。<br/>
   如果你在使用过程中，遇到和周围风格不符的颜色（多半是刺眼的品红色），或是有元素显示不出来，那往往就是我所接触不到的。欢迎将详细的截图发送至邮箱 <LiangruLiu@outlook.com> 反馈给我。


**新主题，新体验！**



   <br/><br/><br/><br/>
   <h2 align="center"> 英文版介绍 </h2>
   </div>
</details>

<p align="center">
   This is a dark theme, very, very dark! <br/>
   The syntax highlighting color scheme can be chosen between the original theme style and the OneDarkPro style.<br/>
   First of all, it's not perfect at present, see <a href="#jump-en">end of article</a> for details.
</p>


## Screenshot

<!-- <span id="jump-pic"/> [![Screenshot](https://z3.ax1x.com/2021/05/12/g0G5U1.png)](https://imgtu.com/i/g0G5U1) -->
<span id="jump-pic"/> [![Screenshot](https://liangruliu.github.io/images/vscodeExt/EDT_screenshot.png)](https://liangruliu.github.io/images/vscodeExt/EDT_screenshot.png)


## Preface & Introduction

+ I don’t know if anyone likes a pure black interface like me. (Perhaps most people's aesthetic for the dark interface, like most software designs, is a dark gray background)
+ In my opinion, the background of the default dark theme is not dark enough, causing the text to be less eye-catching and legible, and it is a bit dazzling when the light is dim at night.
+ This theme is a good solution to the problem, but there's also a flaw. When the surrounding light is too strong, the screen reflection will be more serious. At this time, you should change to a light-colored theme.


## Installation & Usage

1. Click the extension button on the left side of VSCode, search in the search box, and click `[install]`.
2. Click the settings button on the left side of VSCode, click `[Color Theme]`, select `[Extreme Dark]`.
3. The syntax highlighting color scheme can be selected in `[Extension Settings]`.


## Design concept

1. Everything is in the service of display clarity.
2. All backgrounds are solid black, so it relies heavily on lines to divide the plates. (One exception is the controls in the settings page, which is an attempt I made)
3. Elements are as rich as possible. (For example, normal, hovering, selection, are designed as multi-level effects)
4. Colors are as uniform as possible. (There's a color list in the notes)
5. In terms of color saturation, lines and errors and warnings tend to be bright (because of their importance), color blocks are relatively moderate, colored text and icons tend to be dull (in order to blend in with other white text).
6. Use semi-transparent backgrounds for pop-ups, menus, etc. of list nature.
7. Dense text is inherently cluttered, so borders are never added among the text.
8. Code can be very colorful, so the color blocks in the text should be designed to be black and white.
9.  Small details: Sometimes a word in the code meets multiple conditions and is highlighted layer by layer, making the text unclear instead. Then I'd intentionally design it to be darker.


## Description

1. The location of the plugin code is (Default path on `Windows`): <br/>
   `C:/Users/<NAME>/.vscode/extensions/liangruliu.extreme-dark-theme-<VER>`
2. I made this theme mainly for my own use. But whether learning how to make a theme, or figuring out the meaning of setting items little by little, all took me a long time. So I want to make a plugin to share it. <br/>
   If you also want to customize a theme, and you also speak Chinese, it's recommended to download it and take a look. Chinese comments are written in the code, including the correspondence between code entries and interface elements, websites for reference, and precautions, which may be helpful.
3. <span id="jump-en"/>
   The reason why this theme retains the syntax highlighting of the default theme is that I'm just a beginner in programming and know very few languages, so I don't know how to highlight other languages properly.
   (Actually, I myself use another version of this plug-in, which is my customized highlighting strategy) <br/>
   Now I've added a setting item to the plugin so that the syntax highlighting color scheme can be switched between the original theme style and the OneDarkPro style, but this introduces two problems:
   One is that I'm not good at developing plug-ins. The current implementation logic of switching styles is not very good, and there's a possibility of program errors;
   The second is that the original OneDarkPro theme may be dynamically adjusted, while I just picked out the main static part.
4. As a beginner, there are many features in VSCode that I have never used, so this theme is not complete yet. <br/>
   If you encounter a color that doesn't match the surrounding style (mostly dazzling magenta) or an element that cannot be displayed during use, it's often beyond my reach. Welcome to send detailed screenshots to email <LiangruLiu@outlook.com> to give me feedback.


**Enjoy!**



<br/>

-----
<!-- <p align="center"> Visual Studio Marketplace </p> -->
<div align=center> <a href="#jump-begin">
   <img src="https://liangruliu.github.io/images/vscodeExt/icon-small.png" width="32pt">
</a> </div>
