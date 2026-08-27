
$('.header-wrapper').midnight();
gsap.registerPlugin(ScrollTrigger);
window.addEventListener("DOMContentLoaded", (event) => {
     document.querySelectorAll("#menu-btn-toggle").forEach((m)=>{
         m.addEventListener("click", () => {
          if ( document.querySelector("body").classList.contains("menu-open"))
              {
               document.querySelector("body").classList.remove("menu-open");
               document.querySelector(".simpleplan-hamburger-menu").classList.remove("active");
               setTimeout(function() {
                  document.querySelector(".simpleplan-overlay").classList.remove("active");
                }, 300);

              }
          else{
              document.querySelector("body").classList.add("menu-open");
              document.querySelector(".simpleplan-overlay").classList.add("active");
              document.querySelector(".simpleplan-hamburger-menu").classList.add("active");
              document.querySelector(".midnightHeader").classList.remove("white");
          }    
       });
     });
     var menu_links = document.querySelectorAll(".sp-menu-link");
     var menu_links_2 = document.querySelectorAll(".sp-menu-secondary-link");
     menu_links.forEach((element) =>{
        element.addEventListener("mouseover", ()=>{
            for (let i = 0; i < menu_links.length; i++) {
                if (menu_links[i] === element) {
                    menu_links[i].style.opacity = '1';
                } else {
                    menu_links[i].style.opacity = '0.5';
                }
              }
        });
     })
     menu_links.forEach((element) =>{
        element.addEventListener("mouseout", ()=>{
            for (let i = 0; i < menu_links.length; i++) {
                    menu_links[i].style.opacity = '1';
              }
        });
     })
     menu_links_2.forEach((element) =>{
        element.addEventListener("mouseover", ()=>{
            for (let i = 0; i < menu_links_2.length; i++) {
                if (menu_links_2[i] === element) {
                    menu_links_2[i].style.opacity = '1';
                } else {
                    menu_links_2[i].style.opacity = '0.5';
                }
              }
        });
     })
     menu_links_2.forEach((element) =>{
        element.addEventListener("mouseout", ()=>{
            for (let i = 0; i < menu_links_2.length; i++) {
                menu_links_2[i].style.opacity = '1';
              }
        });
     })
    
  });
 
  const headers = document.querySelectorAll('.simpleplan-logo');
  let lastScrollTop = 0;
  
  function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  headers.forEach((header)=>{
    if (scrollTop > lastScrollTop && scrollTop > 0) {
      header.classList.add('active');
  } else {
      header.classList.remove('active');
  }
  });
  lastScrollTop = scrollTop;
  }
  window.addEventListener('scroll', handleScroll);  

const $bigBall = document.querySelector('.cursor-circle.cursor-main');
const $smallBall1 = document.querySelector('.cursor-circle.cursor-3');
const $smallBall2 = document.querySelector('.cursor-circle.cursor-2');
const $hoverables = document.querySelectorAll('a');
const $hoverablesBtn = document.querySelectorAll('button');
const $whites = document.querySelectorAll('.bg-white');
// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}
for (let i = 0; i < $hoverablesBtn.length; i++) {
  $hoverablesBtn[i].addEventListener('mouseenter', onMouseHover);
  $hoverablesBtn[i].addEventListener('mouseleave', onMouseHoverOut);
}
for (let i = 0; i < $whites.length; i++) {
  $whites[i].addEventListener('mouseenter', colorWhite);
  $whites[i].addEventListener('mouseleave', colorRed);
}
document.querySelector('.midnightHeader.white').addEventListener('mouseenter', colorWhite);
document.querySelector('.midnightHeader.white').addEventListener('mouseleave', colorRed);
document.querySelector('.simpleplan-hamburger-menu').addEventListener('mouseenter', colorRed);
document.querySelector('.footer-top-left').addEventListener('mouseenter',colorWhite);
document.querySelector('.footer-top-left').addEventListener('mouseleave', colorRed);
// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .1, {
    x: e.clientX -15,
    y: e.clientY -15
  })
  TweenMax.to($smallBall2, .4, {
    x: e.clientX - 10,
    y: e.clientY - 10
  })
  TweenMax.to($smallBall1, .8, {
    x: e.clientX - 10,
    y: e.clientY - 10
  })
}

// Hover an element
function onMouseHover() {
  if (!$(event.target).closest('.service-highlights .sh-highlights a').length) {
    TweenMax.to($bigBall, .3, {
      scale: 1.5,
      opacity: 0.5
    });
  }
  else{
      TweenMax.to($bigBall, .3, {
      scale: 1,
    });
  }
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1,
    opacity:1
  })
}

function colorWhite(){
  TweenMax.to($bigBall, {
    backgroundColor: '#D8031D'
  })
  TweenMax.to($smallBall2, {
    backgroundColor: '#D8031D'
  })
  TweenMax.to($smallBall1, {
    backgroundColor: '#D8031D'
  })
}

function colorRed(){
  TweenMax.to($bigBall, {
    backgroundColor: '#FFFFFF'
  })
  TweenMax.to($smallBall2, {
    backgroundColor: '#FFFFFF'
  })
  TweenMax.to($smallBall1, {
    backgroundColor: '#FFFFFF'
  })
}

function colorTransparent(){
  TweenMax.to($bigBall, {
    backgroundColor: 'transparent'
  })
  TweenMax.to($smallBall2, {
    backgroundColor: 'transparent'
  })
  TweenMax.to($smallBall1, {
    backgroundColor: 'transparent'
  })
}


function setScaleIfElementExists(selector) {
    var element = document.querySelector(selector);
    if (element) {
        gsap.set(selector, {
            scale: 0.4
        });
    }
}

// Call the function for each selector
setScaleIfElementExists('.say-molecules-1 .say-molecule-1');
setScaleIfElementExists('.say-molecules-2 .say-molecule-1');
setScaleIfElementExists('.say-molecules-3 .say-molecule-1');


// gsap.set('.say-molecules-1 .say-molecule-1',{
//   scale:0.4
// })
// gsap.set('.say-molecules-2 .say-molecule-1',{
//   scale:0.4
// })
// gsap.set('.say-molecules-3 .say-molecule-1',{
//   scale:0.4
// })

var defaultOpenElement = document.getElementById('defaultOpen');

if (defaultOpenElement) {
    defaultOpenElement.click();
}
function openCity(evt, cityName) {
 // Declare all variables
   var i, tabcontent, tablinks;
 // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
 // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
 // Show the current tab, and add an "active" class to the button that opened the tab
   document.getElementById(cityName).style.display = "flex";
   document.querySelectorAll('.say-molecule').forEach((em)=>{
     em.style.transform= "translate(0px,0px)";
   })
   document.querySelectorAll('.say-molecule .say-molecule-1').forEach((em)=>{
      gsap.set(em,{
        scale:0.4
      })
  })
   gsap.to('#'+cityName+' .say-molecules-1 .say-molecule-1',
   {
    scale:1,
    x:50,
    y:40,
    ease: Power1.easeOut
   }

   )
   gsap.to('#'+cityName+' .say-molecules-1 .say-molecule-2',
   {
    opacity:1,
    scale:1,
    x:-30,
    y:20,
    ease: Power1.easeOut
   }

   )
   gsap.to('#'+cityName+' .say-molecules-1 .say-molecule-3 ',
   {
    opacity:1,
    scale:1,
    x:40,
    y:-50,
    ease: Power1.easeOut
   }

   )
   gsap.to('#'+cityName+' .say-molecules-1 .say-molecule-text',
   {
    opacity:1,
    ease: Power1.easeOut
   }

   )
   gsap.to('#'+cityName+' .say-molecules-2 .say-molecule-1',
   {
    scale:1,
    x:-50,
    y:30,
    ease: Power1.easeOut
   }

   )
   gsap.to('#'+cityName+' .say-molecules-2 .say-molecule-2',
   {
    opacity:1,
    scale:1,
    x:30,
    y:-10,
    ease: Power1.easeOut
   }

   )
   gsap.to('#'+cityName+' .say-molecules-2 .say-molecule-3 ',
   {
    opacity:1,
    scale:1,
    x:-50,
    y:-40,
    ease: Power1.easeOut
   }

   )
   gsap.to('#'+cityName+' .say-molecules-2 .say-molecule-text',
   {
    opacity:1,
    ease: Power1.easeOut
   }

   )
   gsap.to('#'+cityName+' .say-molecules-3 .say-molecule-1',
   {
    scale:1,
    x:40,
    y:-55,
    ease: Power1.easeOut
   }

   )
   gsap.to('#'+cityName+' .say-molecules-3 .say-molecule-2',
   {
    opacity:1,
    scale:1,
    x:20,
    y:20,
    ease: Power1.easeOut
   }

   )
   gsap.to('#'+cityName+' .say-molecules-3 .say-molecule-3 ',
   {
    opacity:1,
    scale:1,
    x:-30,
    y:20,
    ease: Power1.easeOut
   }

   )
   gsap.to('#'+cityName+' .say-molecules-3 .say-molecule-text',
   {
    opacity:1,
    ease: Power1.easeOut
   }

   )
  // var moleNon= document.querySelectorAll(".sp-are-you-molecules");
  // moleNon.forEach((m)=>{
  //   m.classList.remove("active");
  // })
  // var mole = document.querySelectorAll("#"+cityName+" .sp-are-you-molecules");
  // console.log(mole);
  // mole.forEach((m)=>{
  //  m.classList.add("active");
  // })
    evt.currentTarget.className += " active";
}            


// function init(){
    
//   const loader = document.getElementById('loader');

//   // reset position of the loading screen
//   gsap.set(loader, {
//       scaleX: 0, 
//       rotation: 10, 
//       xPercent: -5,
//       yPercent: -50, 
//       transformOrigin: 'left center', 
//       autoAlpha: 1
//   });

//   function loaderIn() {
//       // GSAP tween to strech the loading screen across the whole screen
//       return gsap.fromTo(loader, 
//           {
//               rotation: 10,
//               scaleX: 0,
//               xPercent: -5
//           },
//           { 
//               duration: 0.8,
//               xPercent: 0,
//               scaleX: 1, 
//               rotation: 0,
//               ease: 'Power4.inOut', 
//               transformOrigin: 'left center'
//           });
//   }

//   function loaderAway() {
//       // GSAP tween to hide loading screen
//       return gsap.to(loader, { 
//           duration: 0.8, 
//           scaleX: 0,
//           xPercent: 5, 
//           rotation: -10, 
//           transformOrigin: 'right center', 
//           ease: 'Power4.inOut'
//       });
//   }

//   // do something before the transition starts
//   barba.hooks.before(() => {
//       document.querySelector('html').classList.add('is-transitioning');
//       barba.wrapper.classList.add('is-animating');

//   });

//   // do something after the transition finishes
//   barba.hooks.after(() => {

//       const bottomDOM = document.getElementsByTagName("body")[0]
//       const newScript = document.createElement("script")
//       const oldScript = document.querySelector(".main-script")
//       newScript.src = "index.js"
//       newScript.className = "main-script"
//       oldScript.remove()
//       bottomDOM.appendChild(newScript)

//       document.querySelector('html').classList.remove('is-transitioning');
//       barba.wrapper.classList.remove('is-animating');
//       ga('set', 'page', window.location.pathname);
//       ga('send', 'pageview');
//   });

//   // scroll to the top of the page
//   barba.hooks.enter(() => {

//       window.scrollTo(0, 0);

//   });

//   barba.init({
//       transitions: [{
//           async leave() {
//               await loaderIn();
      
//           },
//           enter() {
//               loaderAway();
//           }
//       }]
//   })

// }

// window.addEventListener('load', function(){
//   init();
// });

document.querySelectorAll('.footer-top-circle').forEach((e)=>{
   e.addEventListener("mouseenter", ()=>{
    document.querySelectorAll('.footer-top-circle').forEach((f)=>{
       f.style.transition=".4s ease all";
       f.style.transitionDelay="0s";
       f.classList.remove('active');
    })
     e.classList.add('active');
   })
});

const map = document.querySelector('.find-us-map-box');
if (map) {
    map.addEventListener("mouseenter", colorTransparent);
    map.addEventListener("mouseleave", colorWhite);
}
