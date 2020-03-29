define(function(require){require("/static/component/logic/common/userinfo.js"),require("/static/lib/layer/1.6.0/layer.min.js"),require("/static/lib/layer/1.6.0/skin/layer.css"),require("/static/component/base/placeholder/placeholder.js"),require("/static/page/course/common/autocomplete.js"),require("./comment.js");var a=require("./base.js"),c=(require("../../common/verify-code.js"),require("store")),h=null,v='<div class="publish-box"><a href="javascript:void(0)" class="moco-btn moco-btn-red moco-btn-lg js-comment-btn"><i class="imv2-chat_bubble"></i>我要评论</a>                        <a href="javascript:void(0)" class="moco-btn moco-btn-red moco-btn-lg js-qa-btn"><i class="imv2-help"></i>我有问题</a></div>',b='<div id="js-pub-container" class="issques qa-form no-border clearfix" style="border: none; padding-bottom: 0;">                            <div class="quesdetail" id="issuequestitle">                                <div class="question-area form-ctrl">                                    <a href="//www.imooc.com/wenda/detail/292353" target="_blank" class="another-meth">如何更好<br />的提问？</a>                                    <input type="text" id="ques-title" maxlength="255" name="title" {if empty($uInfo)}readonly{/if} placeholder="请输入问题标题"                                         class="autocomplete wgt-ipt custom-width block {if empty($uInfo)}js-unlogin{/if}" value="" />                                    <p class="errortip" ></p>                                    <dl class="send-area-result"></dl>                                </div>                            </div>                            <div class="quesdetail que-text-box" style="overflow:hidden;">                                <div id="editor-wrap" class="editor form-ctrl clearfix" >                                    <div class="textarea-unlogin {if empty($uInfo)}js-unlogin {/if} " >                                        <textarea name="" cols="30" rows="10" id="pub-editor" class="block block-editor" placeholder="请输入问答内容..."                                         {if empty($uInfo)}readonly{/if}>请输入问答内容...</textarea>                                    </div>                                </div>                                <p class="errortip"></p>                            </div>                            <div id="pub-btm" class="pub-btm clearfix" style="padding: 0;">                                <div class="captcha-verify-box js-verify-box hide"></div>                                <input type="button" id="js-pub-btn" class="moco-btn moco-btn-red moco-btn-lg r" data-cid="" value="提交">                                <div class="r errortip-btm js-error-big-tip"></div>                            </div>                        </div>',g=0,j=0;$(".comp-filter-bar").on("click",".js-pub-btn",function(){$.dialog(v,{title:"我要发布",width:460,height:168,modal:!0,callback:function(){}})});var y="",k="",w=function(){$(".js-verify-box").addClass("hide").html(""),y=""},C=function(){var a,c=$(this);return(a=$.trim(c.val())).length<5?(c.addClass("error").next("p").text("标题不能少于5个字符！").show(),!1):a.length>255?(c.addClass("error").next("p").text("标题不能大于255个字符！").show(),!1):void c.removeClass("error").next("p").hide()};$(document).on("click",".verify-code-around",function(){var a=$(this).prev("img");a.attr("src",a.attr("src").replace(/\?\.*/,"?"+Math.random()))}),$(document).on("click",".js-mocaptcha-close",function(){$(".captcha-verify-box").addClass("hide").html(""),y=""}),$(document).on("click",".js-qa-btn",function(a){if(a.preventDefault(),isLogin){h=$.dialog(b,{title:"我要提问",width:894,height:592,modal:!0,callback:function(){UE.getEditor("pub-editor").destroy(),$(".js-modal-close").click()}}),$("#js-pub-btn").attr("data-cid",course_id);var v=c.get("maybewenda_content");UE.getEditor("pub-editor",{initialFrameHeight:320,initialFrameWidth:"100%",autoFloatEnabled:!1,autoClearinitialContent:!0,isMoreInit:!0,initialStyle:"p{line-height:1.5em;font-size:13px;color:#444}",autoHeightEnabled:!1}),UE.getEditor("pub-editor").addListener("ready",function(){v&&(UE.getEditor("pub-editor").setContent(v),$("#ques-title").focus()),c.remove("maybewenda_content")}),UE.getEditor("pub-editor").addListener("focus",function(){$("#editor-wrap").next(".errortip").hide(),j.hide()});var g=$("#ques-title");$("#issuequestitle").on({focusin:function(){$("#ques-title").removeClass("defaultbox"),$("#ques-title").addClass("ipt-fake-focus")},focusout:function(){$("#ques-title").removeClass("ipt-fake-focus"),$("#ques-title").addClass("defaultbox")},keyup:function(){$.trim($("#ques-title").val());$("#ques-title").addClass("ipt-fake-focus")}}),void 0===g[0].placeholder&&g.focus(function(){$(this).removeClass("defaultbox"),$(this).addClass("ipt-fake-focus");var a=$(this);a.val()===a.attr("placeholder")&&a.val("").removeClass("placeholder")}).blur(function(){$(this).addClass("defaultbox"),$(this).removeClass("ipt-fake-focus");var a=$(this);a.val().length||a.val(a.attr("placeholder")).addClass("placeholder")});var j=function(){var a=$(".js-global-error");return{hide:function(){a.hide()},show:function(t){a.text(t).show()}}}();g.blur(C).focus(function(){$(this).removeClass("error").next("p").hide(),j.hide()})}else $(".js-unlogin").click(function(){require.async("login_sns",function(a){a.init()})})}),$(document).on("click",".ansmallPic",function(){var a;$(this).hide(),(a=$(this).parents(".answercon")).find(".anbigPic").show(),a.find(".intertime").removeClass("playtime_AS").addClass("playtime_Ac")}).on("click",".anbigPic",function(){var a;$(this).hide(),a=$(this).parents(".answercon"),a.find(".ansmallPic").show(),a.find(".intertime").removeClass("playtime_Ac").addClass("playtime_AS")}),$(document).on("click","#js-pub-btn",function(){var c,v,b={},E=$(this),_=$("#no-credit"),U=$("#enough-credit"),A=$("#interal-use");c=UE.getEditor("pub-editor").getContent(),c=$.trim(c),v=UE.getEditor("pub-editor").getContentTxt(),v=$.trim(v);var I=$("#ques-title");return C.call(I)===!1?void w():"请输入问答内容..."==v?($("#editor-wrap").next(".errortip").text("请输入问答内容").show(),void w()):v.length<5?($("#editor-wrap").next(".errortip").text("内容不能少于5个字！").show(),void w()):v.length>2e4?($("#editor-wrap").next(".errortip").text("内容长度不能超过20000个字符！建议您分多次发布！").show(),void w()):(b.content=c,b.cid=E.attr("data-cid"),b.mid=pageInfo.mid,b.title=I.val(),b.checkcount=g,"undefined"==typeof y||""==y?($(".js-verify-box").removeClass("hide"),k=new mocaptcha(".js-verify-box",{type:0,success:function(t){y=t,$("#js-pub-btn").trigger("click")}}),void $(".js-mocaptcha").append('<span class="js-mocaptcha-close imv2-close"></span>')):(b.token=y,E.attr("disabled","disabled").val("提交中..."),$(".js-error-big-tip").text(""),void $.ajax({url:"/course/ajaxsaveques",type:"post",dataType:"json",data:b,success:function(c){if(0==c.result)A.removeClass("interal-checked"),$(".js-modal-close").click(),$.prompt("发表成功"),w(),j=0,a.emit("qaPanel/render"),h.hide();else{if(1e3==c.result)return w(),$(".js-modal-close").click(),$.alert("发布成功，审核通过后才能显示",{callback:function(){h.hide()}}),g=0,void(j=0);-105001==c.result?(_.show(),_.find(".cancel-cf").on("click",function(){_.hide()}),w(),g=0,j=0):105002==c.result?(U.show(),$("#interal-cancel").on("click",function(){w(),U.hide()}),A.on("click",function(){g=1,j=1,$(this).addClass("interal-checked"),U.hide(),$(".js-verify-box").addClass("hide").html(""),E.removeAttr("disabled").val("提交"),$("#js-pub-btn").trigger("click")})):-103002==c.result?(k.reset(),y=""):($.prompt(c.msg,{icon:"error",timeout:3e3}),w())}},complete:function(){E.removeAttr("disabled").val("提交")}})))})});