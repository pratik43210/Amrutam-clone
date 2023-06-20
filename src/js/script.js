const carouselFirst=document.querySelector(".carousel-1");
const wrapper1=document.querySelector(".wrapper-1");
const arrowBtns0=[...document.querySelectorAll(".c1-btn")];
const imgsCarousel1=[...document.querySelectorAll(".slide-1")]

//function to change button Opacity depending on currentscroll position
setOpacity=()=>{
    const maxScroll=(carouselFirst.scrollWidth-carouselFirst.clientWidth);
    if(carouselFirst.scrollLeft<=1) {
        arrowBtns0[0].style.opacity=0.4;
        arrowBtns0[1].style.opacity=1;
    }
    else if(maxScroll-carouselFirst.scrollLeft<=1) {
        arrowBtns0[0].style.opacity=1;
        arrowBtns0[1].style.opacity=0.4;
    }
    else{
        arrowBtns0[0].style.opacity=1;
        arrowBtns0[1].style.opacity=1;
    }
}

arrowBtns0.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        const imgWidthC1=carouselFirst.clientWidth;
        carouselFirst.scrollLeft+=btn.id==="l1"?-imgWidthC1:imgWidthC1;
    })
})

wrapper1.addEventListener('mouseover',()=>{
    setOpacity();
})

wrapper1.addEventListener('mouseout',()=>{
    arrowBtns0.forEach(btn=>btn.style.opacity=0);
})

