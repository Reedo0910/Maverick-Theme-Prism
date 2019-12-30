# Prism

Prism是一个适用于 [Maverick](https://github.com/AlanDecode/Maverick)的简洁风主题。



## 介绍

*TODO*



演示站点：[我的博客](https://www.akari-mori.com/)



## 如何使用

### 方法一：下载发行版

*TODO*



### 方法二：适用于按照[Maverick官方示例](https://github.com/AlanDecode/Blog-With-GitHub-Boilerplate)所搭建的博客

1. 在完成[Maverick官方示例](https://github.com/AlanDecode/Blog-With-GitHub-Boilerplate)的README文档中提到的步骤后，在博客根目录下创建一个文件夹，该文件夹应与`Maverick`和`src`等目录同级，将该新建的文件夹命名为`templates`。

2. 在博客根目录下执行：

   ```
   git submodule add -b deploy -- https://github.com/Reedo0910/Maverick-Theme-Prism.git templates/Prism
   ```

3. 在博客根目录的`conf.py`中，将template属性设置为：

   ```
   template = {
       "name": "Prism",
       "type": "local",
       "path": "../templates/Prism"
   }
   ```

   **注意：** 请务必移除`conf.py`中其它的template属性，以免产生冲突。

4. 主题安装完成，尽情享用吧～



## 更新主题

> 仅适用于通过上述“如何使用”中的**方法二**所安装的主题。若您使用的是方法一，则需要自行重新下载主题发行包并安装。

使用以下命令来更新Prism：

```
git submodule update --remote templates/Prism
```



© [Zeee](https://github.com/Reedo0910)