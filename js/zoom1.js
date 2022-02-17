let icon=document.querySelector("nav i"),
    ul=document.querySelector("nav ul");
icon.onclick=function()  {//function to toggle nav bar in small screen on click on icon
    "use strict";
    ul.classList.toggle("sm-hidden");
}
function filter(x){//to filter projects
    'use restrict';

    for (let i=0;i<ulli.length;i++){
        ulli[i].classList.remove("active");
    }

    for (let i=0;i<workBox.length;i++){
        if (workBox[i].classList.contains("visible")){
            workBox[i].classList.add("hidden");
            workBox[i].classList.remove("visible");
        }
        if(workBox[i].classList.contains("hide")){
            workBox[i].classList.remove("hide");
        }
        
    }

        for (let i=0;i<workBox.length;i++){

        if(!workBox[i].classList.contains(x) && !workBox[i].classList.contains("hidden")  ){
            workBox[i].classList.add("hide");
        }else if (workBox[i].classList.contains(x) ){
           if(workBox[i].classList.contains("hidden")) {
            workBox[i].classList.add("visible");
            workBox[i].classList.remove("hidden");

               
           }
        }
        portifolioIcon.style.display="none";


    }


}
let web =document.querySelector(".portifolio ul .web");
let workBox=document.querySelectorAll(".portifolio .work-box");
let hidden=document.querySelectorAll(".portifolio .hidden");
let hide=document.querySelectorAll(".portifolio .hide");
let photo =document.querySelector(".portifolio ul .photo");
let portifolioIcon=document.querySelector(".portifolio i");
let ulli=document.querySelectorAll(".portifolio li");
let graphic =document.querySelector(".portifolio ul .graphic");
let all =document.querySelector(".portifolio ul .all");

web.onclick=function() {
    "use strict";
    filter("web");
    this.classList.add("active");

}
photo.onclick=function() {
    filter("photo");
    this.classList.add("active");

}
graphic.onclick=function() {
    filter("graphic");
    this.classList.add("active");

}
all.onclick=function() {//function to show all projects that does not have class hidden
    this.classList.add("active");

    for (let i=0;i<workBox.length;i++){
        if (workBox[i].classList.contains("visible")){
            workBox[i].classList.add("hidden");
            workBox[i].classList.remove("visible");
        }
        if(workBox[i].classList.contains("hide")){
            workBox[i].classList.remove("hide");
        }}
        portifolioIcon.style.display="block";


}
portifolioIcon.onclick=function() {//finction to show more or hide some projects
    if (this.classList.contains("fa-download")){
        for (let i =0;i<hidden.length;i++){
            hidden[i].classList.add("visible");
            hidden[i].classList.remove("hidden");
            portifolioIcon.classList.remove("fa-download");
            portifolioIcon.classList.add("fa-upload");

        }
    } else {
        for (let i =0;i<workBox.length;i++){
            if(workBox[i].classList.contains("visible")){
                workBox[i].classList.add("hidden");
                workBox[i].classList.remove("visible");
                portifolioIcon.classList.add("fa-download");
                portifolioIcon.classList.remove("fa-upload");
            }

        }
    }
}
let navli=document.querySelectorAll("nav li");
navli.forEach(el=>el.onclick=function(){//to add class active on list item you click on
    navli.forEach(el=>el.classList.remove("active"));
    this.classList.add("active");
    let w=window.innerWidth;
    console.log(w)
    if (w<767){
        ul.classList.add("sm-hidden");


    }
}
)