let icon=document.querySelector("nav i"),
    ul=document.querySelector("nav ul");
icon.onclick=function()  {
    "use strict";
    ul.classList.toggle("sm-hidden");
}
function filter(x){
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
    console.log("fuck 1");
    this.classList.add("active");

}
photo.onclick=function() {
    filter("photo");
    this.classList.add("active");

    console.log("fuck 2");
}
graphic.onclick=function() {
    filter("graphic");
    this.classList.add("active");

    console.log("fuck 3");
}
all.onclick=function() {
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
portifolioIcon.onclick=function() {
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
navli.forEach(el=>el.onclick=function(){
    navli.forEach(el=>el.classList.remove("active"));
    this.classList.add("active");
    let w=window.innerWidth;
    console.log(w)
    if (w<767){
        ul.classList.add("sm-hidden");


    }
}
)