$(document).ready (function(){
    $("nav i").click(function() {
        $("ul").toggle();
           
    });
   
     $(".portifolio li").on("click" ,function(){
        $(".portifolio ul li").filter(".active").removeClass("active");
         $(this).addClass("active");
     });
     $(".portifolio i").click(function(){
         if($(".work-box").hasClass("hidden")){
            $(".hidden").removeClass("hidden").addClass("visible");

         } else if  ($(".work-box").hasClass("visible")) {
            $(".visible").removeClass("visible").addClass("hidden");
        
     }
     if ($(".portifolio .fas").hasClass("fa-download")){

        $(".portifolio .fa-download").removeClass("fa-download").addClass("fa-upload");
     }else if ($(".portifolio .fas").hasClass("fa-upload")){
        $(".portifolio .fa-upload").removeClass("fa-upload").addClass("fa-download");
     }

    });
    function filterProjects(x){
        $(".portifolio .work-box").filter(".hide").removeClass("hide");
        $(".portifolio .work-box").filter(".visible").removeClass("visible").addClass("hidden");
        $(".ourworks .work-box").not(x).addClass("hide");
        $(".ourworks .hidden").filter(".hide").removeClass("hide");
        $(".ourworks .hidden").filter(x).addClass("visible").removeClass("hidden");      
        $(".portifolio i").hide();
    }

    $(".portifolio ul .web").click(function(){
        filterProjects(".web");
        });
    $(".portifolio ul .photo").click(function(){
      filterProjects(".photo")
    });
    $(".portifolio ul .graphic").click(function(){
      filterProjects(".graphic")
    });
    $(".portifolio ul .all").click(function(){
        $(".portifolio .work-box").filter(".hide").removeClass("hide");
        $(".portifolio .work-box").filter(".visible").removeClass("visible").addClass("hidden");     
        $(".portifolio i").show();
    });    
    $(window).on("resize",function(){
    var d=$("nav .list i").css("display");
        if (d=="none"){
            $("nav ul").css({"display":"flex"});
        }else if (d=="flex"){
            $("nav ul").css({"display":"none"});
        }

    });

});
