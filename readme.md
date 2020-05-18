# bobo-navigation

传送门至[中文文档](https://github.com/bobodesu/bobo-navigation/blob/master/readme-zh.md)  
  
  
This is a navigation website template.  
Very simple and easy to modify.  
May this project allow you to quickly create pages.  

Website Demo: [nav.liubo.pro](http://nav.liubo.pro)  

# Instructions
1. Download the repository and unzip, then we open the configuration file ```nav.json```.
2. ```first``` is the top navigation configuration. The ```first``` array length is recommended to be a multiple of 8. The format is like this:  
   ```json
      "first":[
      ["Name", "Icon url", "Link address", "TextColor(CSS)"],
      ["Name", "Icon url", "Link address", "TextColor(CSS)"],
      ...
   ]
   ```   
   Text color can be ```null```  
   For example:   
   ![](https://github.com/bobodesu/bobo-navigation/blob/master/image/readme-1.png)  
3. ```second``` is second navigation configurations. The ```second``` array length is recommended to be a multiple of 6. The format is like this:  
   ```json  
      "second":[
         ["Name", "Icon url", "Link address"],
         ["Name", "Icon url", "Link address"],
         ...
      ]
   ```  
   For example:   
   ![](https://github.com/bobodesu/bobo-navigation/blob/master/image/readme-2.png)  
4. ```third``` is third navigation configurations. The ```third``` array length is recommended to be a multiple of 3. The format is like this:  
   ```json
      "third":[
         {
            "name":"Type name",
            "val":[
               ["WebName", "Link address", "TextColor(CSS)"],
               ["WebName", "Link address", "TextColor(CSS)"],
               ...
            ]
         },
         {
            "name":"Type name",
            "val":[
               ["WebName", "Link address", "TextColor(CSS)"],
               ["WebName", "Link address", "TextColor(CSS)"],
               ...
            ]
         },
         ...
      ]
   ```
   The number of links in each category is recommended to be a multiple of 9.  
   For example:    
   ![](https://github.com/bobodesu/bobo-navigation/blob/master/image/readme-3.png)  


Thanks for your watch    
