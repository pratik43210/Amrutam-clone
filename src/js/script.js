const carousel1=document.querySelector(".carousel-1");
const wrapper1=document.querySelector(".wrapper-1");
const arrowBtns1=[...document.querySelectorAll(".c1-btn")];
const arrowBtns2=[...document.querySelectorAll(".c2-btn")];
const imgsCarousel1=[...document.querySelectorAll(".slide-1")]

//function to change button Opacity depending on currentscroll position
setOpacity=(carousel,arrBtn)=>{
    const maxScroll=(carousel.scrollWidth-carousel.clientWidth);
    if(carousel.scrollLeft<=1) {
        arrBtn[0].style.opacity=0.4;
        arrBtn[1].style.opacity=1;
    }
    else if(maxScroll-carousel.scrollLeft<=1) {
        arrBtn[0].style.opacity=1;
        arrBtn[1].style.opacity=0.4;
    }
    else{
        arrBtn[0].style.opacity=1;
        arrBtn[1].style.opacity=1;
    }
}


arrowBtns1.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        const imgWidthC1=carousel1.clientWidth;
        carousel1.scrollLeft+=btn.id==="l1"?-imgWidthC1:imgWidthC1;
    })
})

wrapper1.addEventListener('mouseover',()=>{
    setOpacity(carousel1,arrowBtns1);
})

wrapper1.addEventListener('mouseout',()=>{
    arrowBtns1.forEach(btn=>btn.style.opacity=0);
})

// second carousel
const carousel2=document.querySelector('.carousel-2');
arrowBtns2.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        const imgWidthC1=(carousel2.scrollWidth)/4+10;
        carousel2.scrollLeft+=btn.id==="l2"?-imgWidthC1:imgWidthC1;
    })
})
// const cards=document.querySelectorAll('card');

// let isDragStart=false, prevPageX, prevScroll;

// const dragStart=(e)=>{
//     isDragStart=true;
//     e.target.classList.add("dragging");
//     // initial cursor position and position of carousel
//     prevPageX=e.pageX;
//     prevScroll=e.target.scrollLeft;
// }

// const dragStop=(e)=>{
//     isDragStart=false;
//     e.target.classList.remove("dragging");
// }

// const dragging=(e)=>{
//     if(!isDragStart) return;
//     e.preventDefault();
//     console.log(e.pageX);
//     let positionDiff=e.pageX-prevPageX;
//     carousel2.scrollLeft=prevScroll-(positionDiff);
// }

// carousel2.addEventListener('mousedown',dragStart);
// carousel2.addEventListener('mousemove',dragging);
// carousel2.addEventListener('mouseout',dragStop);