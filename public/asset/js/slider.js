document.querySelectorAll(".box , .offer").forEach(
    function(element){
        element.addEventListener("mouseover",function (){
            var offer=this.querySelector(".offer"); 
            offer.classList.add("animate__animated","animate__slideInLeft","WOW","data-wow-duration='8s'","block");
offer.classList.remove("invisible");
setTimeout(function(){
    element.addEventListener("mouseout",function(){
        offer.classList.add("invisible");
    offer.classList.remove("animate__animated","animate__slideInLeft","WOW","data-wow-duration='8s'","block")});
    });
});
});
    


document.querySelectorAll(".box , .pic").forEach(
    function(element){
        element.addEventListener("mouseover",function (){
            var pic=this.querySelector(".pic"); 
            pic.classList.add("-translate-y-0.5","scale-105");
setTimeout(function(){
    element.addEventListener("mouseout",function(){
    pic.classList.remove("-translate-y-0.5","scale-105")});
    });
});
});

document.querySelectorAll(".box , .fontawsomes").forEach(
    function(element){
        element.addEventListener("mouseover",function (){
            var fontaws=this.querySelector(".fontawsomes"); 
            fontaws.classList.add("animate__animated","animate__slideInRight","WOW","data-wow-duration='8s'");
fontaws.classList.remove("invisible");
setTimeout(function(){
    element.addEventListener("mouseout",function(){
        fontaws.classList.add("invisible");
    fontaws.classList.remove("animate__animated","animate__slideInRight","WOW","data-wow-duration='8s'")});
    });
});
});


