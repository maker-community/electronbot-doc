## 1. 基础知识介绍

 首先恭喜你来到了稚晖君电子复刻这里并且看到了这个文档。电子本身是一个stm32单片机制作的PC配件，不能脱离电脑独立使用，所以你在知道这点之后可以选择是否继续复刻。

+ 电子主板是需要嘉立创或者其他平台根据PCB制版文件进行打板，这个过程称作PCB打样。
+ 打样之后的PCB需要根据购买的物料进行焊接，购买物料需要根据BOM清单进行购买，包含电容电阻和元器件。
+ 焊接之后的板子如果上电电压之类的是正常的，就可以进行固件烧录了，这个属于stm32固件烧录知识，类似搜索stlink烧录固件。
+ 固件烧录之后就可以在电脑安装stm32的usb驱动，这样电脑就可以通过usb通讯和电子的主板进行通讯，这个过程是软件开发调试的过程。
+ 目前有工具简化舵机调试和功能控制这个过程，如大明开发的[ElectronBot-Debugger](https://www.microsoft.com/store/productId/9P9XF62G5R9S?ocid=pdpshare)工具和[绿荫阿广](https://space.bilibili.com/25228512)开发的[电子脑壳](https://www.microsoft.com/store/productId/9NQWDB4MQV0C?ocid=pdpshare)。

## 2. 焊接工具介绍

俗话说的好，万事开头难，很多人都会被电子复刻过程中的工具购买和焊接劝退，很多人都会犹豫工具的钱都快赶上成品机器人的钱了，这样说确实不假，但是如果大家想亲自试试还是需要工具购买的，所以我来介绍一些我的工具，给大家介绍下。

1. <span style="color:red;">风枪和烙铁必须</span>（可以买风枪烙铁二合一的那种，烙铁头可以选择刀头。）
2. <span style="color:red;">焊接板子夹具必须</span>（由于板子被夹住悬空热量不容易传递走所以夹具是必须要有的，完全让你能够开心一点。）
3. <span style="color:red;">焊锡丝和锡膏必须</span>（焊锡丝最好选择细的这样针对电路板能够很好的处理，锡膏可以购买类似注射器保存的那种，结合风枪使用效果最佳。 ）
4. <span style="color:red;">洗板水必须</span>（洗板水用来清理焊接好的板子会比较干净。）
5. 焊油可选（这个可以在我们补救电路二次焊接的时候能够让焊锡容易吸附一些。）
6. <span style="color:red;">万用表必须</span>（用来检测电路的通断和电压是否正常至关重要。）



## 3. 外壳打印组装介绍

1. 可以选择嘉立创的三维猴平台打印也可以自己进行FDM打印。
2. 针对齿轮和支撑件可以选择嘉立创的PA12尼龙进行打印，精度高，外壳部分可以采用树脂打印。
3. 针对外壳颜色，尼龙包含灰色和黑色两种颜色，树脂一般是白色，可以通过购买油漆进行模型上色，这个过程注意防护。

## 4. PCB版本对比

由于电子的初版是稚晖君本人设计，在经过劲森小卡迭代之后，外形发生了很多的变化，尤其是在最近经过群友CCNC优化一版本之后，外形发生了更多的变化，所以特意出本文档进行说明，希望大家看完之后能够分清楚。

注意事项：
+ 稚晖君原版无语音功能。
+ 语音功能是劲森通过对接usb hub拓展了传感器板子实现的这个功能。
+ 小卡板子在优化了pcb结构，并没有更换元器件，所以小卡和劲森的板子物料是通用的。
+ CCNC修改过的版本是根据绿荫阿广的建议进行了小卡的语音板子和传感器板子合二为一并且重新布线，优化了舵机组装部分，所以物料会有部分差异，而且板子数量由之前的四类板子变成了三个。

之前让小卡做过一版本的传感器和语音板子二合一的版本，但是由于绿荫阿广也就是我本人对音质感觉不满意，所以让CCNC在之前的基础上修改了PCB和在嘉立创补充了原理图，并且将六个舵机板子合成了一个圆形舵机板子。
