var nav_data={};
var onloadnav=function(){
    nav.display=nav_data.display;
    nav.first=nav_data.first;
    nav.second=nav_data.second;
    nav.third=nav_data.third;
    var searchbar=document.querySelector(".main>.header .searchbar");
    var searchbutton=document.querySelector(".main>.header .searchbutton");
    setTimeout(function(){
        searchbar.focus();
    },200);
    searchbutton.onclick=function(e){
        var url="";
        var query=searchbar.value;
        var engine=searchbutton.dataset.engine;
        if(engine!='other'){
            query=query.slice(2);
        }
        query=encodeURI(query);
        switch(engine){
            case 'g':
                url='https://www.google.com/search?q='+query;
            break;
            case 'b':
                url='https://www.baidu.com/s?wd='+query;
            break;
            default:
                url='https://www.baidu.com/s?wd='+query;
            break;
        }
        open(url);
    }
    searchbar.onkeydown=function(e){
        if(e.which==13){
            searchbutton.onclick();
        }
    }
    searchbar.onkeyup=function(e){
        var el_val=e.target.value.slice(0,2).toLocaleLowerCase();
        if(el_val[1]=='：'||el_val[1]==':')el_val=el_val[0];
        else el_val="other";
        if(el_val=="g"){
            searchbutton.style.background='url("img/google.svg") no-repeat scroll center / 60%';
            searchbutton.dataset.engine="g";
        }else if(el_val=="b"){
            searchbutton.style.background='url("img/baidu.svg") no-repeat scroll center / 60%';
            searchbutton.dataset.engine="b";
        }else{
            searchbutton.style.background='#3d9be7 url(img/search.png) no-repeat scroll center / 60%';
            searchbutton.dataset.engine="other";
        }
    }
}

onload=function(){
    window.nav=new Vue({
        'el':'.main',
        'data':{
            display:false,
            first:[],
            second:[],
            third:[]
        }
    });
    var ajax_query=new XMLHttpRequest();
    ajax_query.open("GET","nav.json");
    ajax_query.onreadystatechange=function(){
        if (ajax_query.readyState==4 && ajax_query.status==200){
            nav_data=JSON.parse(ajax_query.responseText);
            onloadnav();
        }
    };
    ajax_query.send();
}