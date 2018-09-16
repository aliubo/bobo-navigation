# bobo-navigation
hello world!  
这个是一个导航网站的模板  
极简主义的主页，既简单又美观，快来试试吧  
网站预览：[nav.liubo.pro](http://nav.liubo.pro)  

# 自定义图标的方法
1. 一切配置文件均在nav.json文件中，第一步先打开它  
2. "first"是首要图标的配置，数组大小推荐为8的倍数，以显示整洁美观  
   成员内容：[string:标题, string:图标地址, string:链接地址, string:背景颜色]  
   背景颜色为非必填，缺省为null  
   内容可参考下图所示  
   ![](image/readme-1.png)  
3. "second"是第二级图标的配置，数组大小推荐为6的倍数，以显示整洁美观  
   成员内容：[string:标题, string:图标地址, string:链接地址]  
   内容可参考下图所示  
   ![](image/readme-2.png)  
4. "third"是第三级图标的配置，数组大小推荐为3的倍数，以显示整洁美观  
   成员内容：{"name":string->分类名称, "val":Array->图标集（推荐9个成员）}  
       val成员内容：[string:标题, string:链接地址, string:文本颜色]  
       文本颜色为非必填，缺省为null  
       内容可参考下图所示  
       ![](image/readme-3.png)  


感谢您的浏览    

最后更新时间：2018-9-16  
