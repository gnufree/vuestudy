define(function(){var a=function(a){for(var c="",i=0;i<a.length;i++){c+='<li><a href="/article/'+a[i].id+'?block_id=tuijian_wz" target="_blank" class="clearfix">';var g=a[i].title;c+=""!=a[i].pic?'<img src="//img.mukewang.com/'+a[i].pic+'-40-40.jpg"><div>'+g+"</div>":'<div style="width: 100%;">'+g+"</div>",c+="</a></li>"}$(".js-right-article").show().find("ul").html(c)},c=function(){$.ajax({url:"/article/ajaxcourserecommends",dataType:"json",data:{id:course_id},success:function(c){0===c.result&&c.data.length&&a(c.data)}})};c()});