$(document).ready(function(){
    var $left_li = $(".left>li");
    var $left_li_a = $left_li.children("a");
    var $tab_div =$(".DW>div");
    var isBlock = true;
 
    $left_li.on("click",function (e) {
        e.preventDefault();
 
        var el= this;
        var target = $(el).children("a").attr("href");
        var isActive= $(el).children("a").hasClass("on");
 
        if(!isActive && isBlock){
            activateBtn(el);
            activatePanel(target);
        }
 
        
    });
 
    function activateBtn(el) {
        $left_li_a.removeClass("on");
        $(el).children("a").addClass("on")
        
    }
 
    function activatePanel(el) {
        isBlock = false;
        $tab_div.stop().fadeOut(500);
 
        $(el).stop().fadeIn(500, function () {
            $(".detailedPageWrap").removeClass("on");
            $(this).addClass("on");
 
            isBlock= true;
            
        });
        
    }
 })