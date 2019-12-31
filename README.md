# Maverick Theme Prism

一个 [Maverick](https://github.com/AlanDecode/Maverick)简洁风主题。

&nbsp;

## 介绍

*TODO*

&nbsp;

演示站点：[我的博客](https://www.akari-mori.com/)

&nbsp;

## 如何使用

### 方法一：下载发行版

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

      （**注意：** 请务必移除`conf.py`中其它的template属性，以免产生冲突。）

4. 大功告成～

&nbsp;

### 方法二：适用于按照[Maverick官方示例](https://github.com/AlanDecode/Blog-With-GitHub-Boilerplate)所搭建的博客

1. 完成[Maverick官方示例](https://github.com/AlanDecode/Blog-With-GitHub-Boilerplate)的README文档中提到的步骤。

2. 在博客根目录下执行：

   ```
   git submodule add -b deploy -- https://github.com/Reedo0910/Maverick-Theme-Prism.git Templates/Prism
   ```

   *该步骤会把最新的Prism主题文件下载到博客根目录的`Templates`目录下（若是没有该目录，则将自动创建一个）*

3. 在博客根目录的`conf.py`中，将template属性设置为：

   ```
   template = {
       "name": "Prism",
       "type": "local",
       "path": "../Templates/Prism"
   }
   ```

   （**注意：** 请务必移除`conf.py`中其它的template属性，以免产生冲突。）

4. 主题安装完成，尽情享用吧～

&nbsp;

## 更新主题

> 仅适用于通过上述“如何使用”中的**方法二**所安装的主题。若您使用的是方法一，则需要自行重新下载主题发行包并安装。

使用以下命令来更新Prism：

```
git submodule update --remote Templates/Prism
```

&nbsp;

© [Zeee](https://github.com/Reedo0910)