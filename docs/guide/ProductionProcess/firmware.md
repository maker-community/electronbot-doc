**此文档为速通方案烧录，不涉及固件源码的编译，所以适合小白入手，大家注意文档的顺序。**

**下载所涉及的固件请单击下面的图片**

[![winusb固件下载](/winusb-fw.png)](/eb-elite-fw.zip){target="_blank"}

## 一、 下载电子脑壳和调试工具

微软应用商店下载电子脑壳（第三方上位机操控软件）和调试工具（获取固件和舵机调试使用）

电子脑壳：https://www.microsoft.com/store/productId/9NQWDB4MQV0C

调试工具：https://www.microsoft.com/store/productId/9P9XF62G5R9S

![电子脑壳](/dianzinaoke.jpg)

![调试工具](/debugger.jpg)

### 1.1 主控固件获取方法1：

安装完调试工具会在电脑图片目录生成对应的应用目录，进入目录查看固件。
![调试工具目录](/debugger-folder.jpg) 

![iap固件](/iap.jpg) 

### 1.2 主控固件获取方法2：

[下载此压缩包，包含免驱固件和舵机固件以及IAP固件](/eb-elite-fw.zip)

![winusb固件](/winusb-fw.png) 


**注意事项 调试工具一定要学会使用，软件左上角有使用文档请注意查阅。**

[调试工具使用文档链接](https://docs.qq.com/doc/DRHRuTFhYaWJETU5s?groupUin=VRFNT55LSO%252BEJoEkMPpVUw%253D%253D&ADUIN=1580723783&ADSESSION=1667377579&ADTAG=CLIENT.QQ.5929_.0&ADPUBNO=27255&jumpuin=1580723783)

## 二、 主控烧录固件

+ 首先购买stlink烧录器 
+ 将主控板子和语音板子连接并且将语音板子的type c连接电脑或者普通充电器供电
+ 将stlink烧录器和主控板子3pin插槽连接，并且将烧录器usb连接到电脑
+ 使用ST-LINK Utility软件进行固件烧录（软件下载百度一大把，学会使用搜索引擎）

### 2.1 主控IAP固件烧录：

#### a. 主控接线如下:
如图所示：
![主控连接图](/mcu-main.jpg)

如果不懂怎么用可以去淘宝问卖家，连接电脑正常如图所示：
![烧录器](/stlink.jpg)

 打开ST-LINK Utility烧录软件
![utility-1.jpg](/utility-1.jpg)
![utility-2.jpg](/utility-2.jpg)

#### b. 首先选择要烧录的IAP固件
![utility-3.jpg](/utility-3.jpg)

固件路径示例如下：
C:\Users\gil\Pictures\ElectronBot-Debugger\ElectronBot-IAP

#### c. 然后选择target 如果软件和stlink烧录通讯正常会显示如下界面：
![utility-4.jpg](/utility-4.jpg)

#### d. 然后点击后面的开始按钮 等待进度条完成
![utility-5.jpg](/utility-5.jpg)

如果烧录完成，需要将电路板连接至电脑，如果已经连接请略过。

#### e. 烧录完之后主控屏幕是黑色的需要借助调试工具烧录app固件

请确保CP210x_Windows_Drivers串口驱动已经安装。 （这个驱动复刻群和百度都有，自己搜下解决）

如果安装正常电脑将识别出串口如下图所示：
![chuankou-1.jpg](/chuankou-1.jpg)

照着调试工具图上进行操作
![debugger-2.jpg](/debugger-2.jpg)

### 2.2 主控WinUsb免驱固件下载推荐：

选择winusb免驱固件推荐：
![winusb](/winusb-select.png)

识别出一下设备就算成功：
![winusb](/elite-winusb.png)

这个时候就可以通过电子脑壳进行操作了。

### 2.2 主控旧版本固件下载操作：

选择的固件路径如下图:
![debugger-3.jpg](/debugger-3.jpg)

等待烧录继续，烧录完成之后屏幕应该会出现雪花点，设备管理会出现如下设备：

![drive-1.jpg](/drive-1.jpg)

#### a. 电子驱动安装(**如果下载的是winusb固件可以省去这一步**)
+ 电脑关闭签名校验
+ 下载源码里的驱动文件
+ 进行驱动的安装

[Win10电脑怎么关闭数字签名？](https://www.xitongzhijia.net/xtjc/20210831/223863.html)

项目原地址如下：https://github.com/peng-zhihui/ElectronBot

如果需要集成包后期添加

原项目驱动文件路径如下：

![drive-2.jpg](/drive-2.jpg)

安装完驱动之后，就可以更新设备驱动了。
![drive-3.jpg](/drive-3.jpg)
![drive-4.jpg](/drive-4.jpg)
![drive-5.jpg](/drive-5.jpg)

如果下图的驱动安装正常，就可以用电子脑壳控制电子了。

![drive-6.jpg](/drive-6.jpg)


## 三、 舵机板子固件烧录

操作和主控一致。
打开ST-LINK Utility烧录软件
![utility-1.jpg](/utility-1.jpg)
![utility-2.jpg](/utility-2.jpg)

用烧录针顶住舵机板子的烧录点。

![烧录点](/elite-dr-fw.png)
烧录以下固件。
![elite-servo](/elite-fw-servo.png)





