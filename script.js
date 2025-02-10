const nav = document.getElementById('navbar-top');
window.onscroll = function () { 
    if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
        nav.classList.add("add-nav-white");
        nav.classList.remove("add-nav-transparent");
    } 
    else {
        nav.classList.add("add-nav-transparent");
        nav.classList.remove("add-nav-white");
    }
};

// var classList = document.getElementById('navbar').classList;

// const minWidth992 = window.matchMedia("(min-width: 992px)");



// function match() {
//     minWidth992.matches ? classList.add('fixed-top') : classList.remove('fixed-top');
// }

// minWidth992.addListener(match);
// minWidth992.addEventListener("change", () => {
//     match();
// });
// mql.onchange = (e) => { 
//     match();
//   }

// match();


// const toggleFixedNavbar=()=>{
// const navbarvar=document.getElementById('.navbar-top');
// if(window.innerWidth>991){
//     navbarvar.classList.add('fixed-top');
// }
// else{
//     navbarvar.classList.remove('fixed-top');
// }
// }
// window.addEventListener('resize', toggleFixedNavbar);
// window.addEventListener('load', toggleFixedNavbar);


// window.addEventListener('resize', ()=>{
//     const navbarvar=document.querySelector('.navbar');
//     if(window.matchMedia('(min-width:992px)').matches){
//         navbarvar.classList.add('fixed-top');
//         }
//     else if(window.matchMedia('(max-width:991px)').matches){
//         navbarvar.classList.remove('fixed-top');
//         }
// })




// let multipleCardCarousel=document.querySelector("#carouselExampleControls");

// if(window.matchMedia('(min-width:768px)').matches){
//     let carousel = new bootstrap.Carousel(multipleCardCarousel, {
//         interval: false,
//         wrap: false
//       })
// let carouselWidth=document.querySelector('.carousel-inner').scrollWidth;
// var cardWidth=document.querySelector('.carousel-item').offsetWidth;

// let scrollPosition=0;

// document.querySelector('.carousel-control-next').addEventListener('click', ()=>{
//     if(scrollPosition<(carouselWidth-(cardWidth*4))){
//         scrollPosition=scrollPosition+cardWidth;
//         document.querySelector('.carousel-inner').scroll({left:scrollPosition});
//     }
//     else{
//         scrollPosition=0;
//         document.querySelector('.carousel-inner').scroll({left:scrollPosition});
//     }
// })

// document.querySelector('.carousel-control-prev').addEventListener('click', ()=>{
//     if(scrollPosition>0){
//         scrollPosition=scrollPosition-cardWidth;
//         document.querySelector('.carousel-inner').scroll({left:scrollPosition});
//     }
// })


// }
// else{
    
// }