# Prism

> A theme for [Maverick](https://github.com/AlanDecode/Maverick)

一个 [Maverick](https://github.com/AlanDecode/Maverick)简洁风主题。

![Prism Screenshot](https://github.com/Reedo0910/Maverick-Theme-Prism/blob/master/Prism-Screenshot.png?raw=true)

演示站点：[灯森](https://www.akari-mori.com/)

&nbsp;

## 介绍

Prism主题的设计借鉴自 *[Hello Sandwich](http://www.hellosandwich.jp/)*。

我一直以来很想做一个符合「侘寂」（Wabi-sabi）美学的主题。直到某天看到了Hello Sandwich的网站设计后，着实被惊艳了一把，认为这种以素简的博客框架突出文章图片和文字的设计风格和自己的想法十分符合。于是，我试图往这种设计中加入自己对「侘寂」的理解，Prism就诞生了。

和*Hello Sandwich*一样，Prism鼓励在文章首页显示文章全文。而如果想对整个博客的文章标题一目了然的话，则可以前往“归档”查看。Prism希望通过这种方式，让内容创作者和访客都能沉浸在网站内容里，而非被网站的其他元素吸引了注意。

&nbsp;

**其他特点：**

1. Prism支持Maverick 1.1的[Markdown扩展语法](https://github.com/AlanDecode/Maverick#markdown)。

2. Prism对Maverick自带搜索的界面和Valine的评论界面作了定制，使它们与Prism的设计风格保持一致。

&nbsp;

## 如何使用

### 方法一：直接通过git引用

> 该方法适用于：
>
> 1. 想开箱即用的用户
> 2. 想时刻将主题保持在最新版本的用户

在根目录的`conf.py`中，将template属性设置为：

```
template = {
    "name": "Prism",
    "type": "git",
    "url": "https://github.com/Reedo0910/Maverick-Theme-Prism.git",
    "branch": "deploy"
}
```

&nbsp;

### 方法二：通过git submodule安装

> 该方法适用于：
>
> ​	想自己把握主题更新节奏的用户

安装路径参考：[Maverick官方示例](https://github.com/AlanDecode/Blog-With-GitHub-Boilerplate)

（若希望自定义主题安装的路径，则自行将下面的`Templates`改成自定义的路径）。

1. 在博客根目录下执行：

   ```
   git submodule add -b deploy -- https://github.com/Reedo0910/Maverick-Theme-Prism.git Templates/Prism
   ```

   该步骤会把最新的Prism主题文件下载到博客根目录的`Templates`目录下（若是没有该目录，则将自动创建）

2. 在博客根目录的`conf.py`中，将template属性设置为：

   ```
   template = {
       "name": "Prism",
       "type": "local",
       "path": "../Templates/Prism"
   }
   ```


&nbsp;

### 方法三：下载发行版

> 该方法适用于：
>
> 1. 想自己选择主题版本的用户
> 2. 想自定义主题的用户

1. 到[主题下载页面](https://github.com/Reedo0910/Maverick-Theme-Prism/releases)获取最新的主题包（**注意：** 请下载名为`Prism-x.x.x.zip`的文件，而非`Source Code`）

2. 解压文件

3. 根据自己情况从下面**二选一**：

   1. **安装主题到Maverick：** 将解压后得到的`Prism`文件夹移动到博客根目录的Templates目录下（与`Galileo`文件夹同级）。然后在根目录的`conf.py`中，将template属性设置为：

      ```
      template = "Prism"
      ```

   2. **从自定义目录下引用主题：** 将解压后得到的`Prism`文件夹移动到博客根目录下的任意目录（以下将该目录称为`path-to-your-themes`）。然后在博客根目录的`conf.py`中，将template属性设置为：

      ```
      template = {
          "name": "Prism",
          "type": "local",
          "path": "path-to-your-themes/Prism"
      }
      ```

&nbsp;

------

若要了解更多有关主题安装的内容，请参考Maverick官方文档的**[主题](https://github.com/AlanDecode/Maverick#themes)**部分

&nbsp;

## 更新主题（仅适用于方法二）

> 仅适用于通过上述“如何使用”中的**方法二**所安装的主题。
>
> 若您使用的是方法一。不用担心，您的主题将时刻保持最新版本。
>
> 若您使用的是方法三。你可能需要自行重新下载主题发行包并安装。

使用以下命令来更新Prism：

```
git submodule update --remote Templates/Prism
```

&nbsp;

------

© [Zeee](https://github.com/Reedo0910)