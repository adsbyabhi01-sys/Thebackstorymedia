
window.addEventListener("DOMContentLoaded", (event) => {

gsap.registerPlugin(CSSPlugin);

gsap.to('.circle-1', {
  duration: 2.5,
  y: -26,
  x: -30,
  z: 20,
  rotate: -1,
  repeat: -0.1,
  yoyo: true,
  ease: 'power1.inOut'
});
gsap.to('.circle-2', {
  duration: 2,
  y: -10,
  x: 18,
  rotate: -1,
  repeat: -0.1,
  yoyo: true,
  ease: 'power1.inOut'
});
gsap.to('.circle-3', {
  duration: 2.5,
  y: 10,
  x: 10,
  rotate: -1,
  repeat: -0.1,
  yoyo: true,
  ease: 'power1.inOut'
});
gsap.to('.circle-4', {
  duration: 2,
  y: 20,
  x: -10,
  rotate: -1,
  repeat: -0.1,
  yoyo: true,
  ease: 'power1.inOut'
});
gsap.to('.circle-5', {
  duration: 2,
  y: 10,
  x: 10,
  rotate: -1,
  repeat: -0.1,
  yoyo: true,
  ease: 'power1.inOut'
});
gsap.to('.circle-6', {
  duration: 2,
  y: 0,
  x: 0,
  z: -1,
  rotate: -1,
  repeat: -0.1,
  yoyo: true,
  ease: 'power1.inOut'
});

const circle1 = document.getElementById('circle-1');

if (circle1) {
  circle1.onclick = function(){
   document.querySelector('.sp-quite-simple-svg svg path').classList.add("path-1");
   document.querySelector('.sp-quite-simple-svg svg path').classList.remove("path-3");
   this.classList.add("path-1");
   this.classList.remove("path-3");
   this.classList.add("active");
   document.querySelectorAll('.circle-1-active').forEach((e)=>{
      e.classList.add("active");
   });
   document.querySelectorAll('.circle-3-active').forEach((e)=>{
    e.classList.remove("active");
    });
 document.querySelectorAll('.circle-2-active').forEach((e)=>{
  e.classList.remove("active");
    });
    document.querySelector('.circle-1-path').classList.remove("path-1"); 
    document.querySelector('.circle-1-path').classList.remove("path-2");
    document.querySelector('.circle-1-path').classList.remove("path3");
   document.querySelector('.circle-1-path').classList.add("path-3");
   document.querySelector('.circle-2-path').classList.remove("path-1"); 
   document.querySelector('.circle-2-path').classList.remove("path-2");
   document.querySelector('.circle-2-path').classList.remove("path3");
  document.querySelector('.circle-2-path').classList.add("path-3");
  document.querySelector('.circle-3-path').classList.remove("path-1"); 
  document.querySelector('.circle-3-path').classList.remove("path-2");
  document.querySelector('.circle-3-path').classList.remove("path3");
 document.querySelector('.circle-3-path').classList.add("path-3");
   document.getElementById('circle-2').classList.add("path-1");
   document.getElementById('circle-3').classList.add("path-1");
   document.getElementById('circle-2').classList.remove("path-3");
   document.getElementById('circle-3').classList.remove("path-3");
   document.getElementById('circle-2').classList.remove("active");
   document.getElementById('circle-3').classList.remove("active");
}
}

const circle2 = document.getElementById('circle-2');

if (circle2) {
  circle2.onclick = function(){
 document.querySelector('.sp-quite-simple-svg svg path').classList.remove("path-1"); 
 document.querySelector('.sp-quite-simple-svg svg path').classList.remove("path-3"); 
 this.classList.add("active");
 this.classList.remove("path-1");
 this.classList.remove("path-3");
 document.querySelectorAll('.circle-2-active').forEach((e)=>{
  e.classList.add("active");
});
document.querySelectorAll('.circle-3-active').forEach((e)=>{
e.classList.remove("active");
});
document.querySelectorAll('.circle-1-active').forEach((e)=>{
e.classList.remove("active");
});
document.querySelector('.circle-1-path').classList.remove("path-3"); 
document.querySelector('.circle-1-path').classList.remove("path-1");
document.querySelector('.circle-1-path').classList.remove("path3");
document.querySelector('.circle-1-path').classList.add("path-2");
document.querySelector('.circle-2-path').classList.remove("path-3"); 
document.querySelector('.circle-2-path').classList.remove("path-1");
document.querySelector('.circle-2-path').classList.remove("path3");
document.querySelector('.circle-2-path').classList.add("path-2");
document.querySelector('.circle-3-path').classList.remove("path-3"); 
document.querySelector('.circle-3-path').classList.remove("path-1");
document.querySelector('.circle-3-path').classList.remove("path3");
document.querySelector('.circle-3-path').classList.add("path-2");
 document.getElementById('circle-1').classList.remove("path-1");
 document.getElementById('circle-3').classList.remove("path-1");
 document.getElementById('circle-1').classList.remove("path-3");
 document.getElementById('circle-3').classList.remove("path-3");
 document.getElementById('circle-1').classList.remove("active");
 document.getElementById('circle-3').classList.remove("active");
}
}

const circle3 = document.getElementById('circle-3');

if (circle3) {
  circle3.onclick = function(){
document.querySelector('.sp-quite-simple-svg svg path').classList.add("path-3");
document.querySelector('.sp-quite-simple-svg svg path').classList.remove("path-1");
this.classList.add("path-3");
this.classList.remove("path-1");
this.classList.add("active");
document.querySelectorAll('.circle-3-active').forEach((e)=>{
  e.classList.add("active");
});
document.querySelectorAll('.circle-2-active').forEach((e)=>{
e.classList.remove("active");
});
document.querySelectorAll('.circle-1-active').forEach((e)=>{
e.classList.remove("active");
});
document.querySelector('.circle-1-path').classList.remove("path-3"); 
document.querySelector('.circle-1-path').classList.remove("path-2");
document.querySelector('.circle-1-path').classList.remove("path-1");
document.querySelector('.circle-1-path').classList.add("path3");
document.querySelector('.circle-2-path').classList.remove("path-3"); 
document.querySelector('.circle-2-path').classList.remove("path-2");
document.querySelector('.circle-2-path').classList.remove("path-1");
document.querySelector('.circle-2-path').classList.add("path3");
document.querySelector('.circle-3-path').classList.remove("path-3"); 
document.querySelector('.circle-3-path').classList.remove("path-2");
document.querySelector('.circle-3-path').classList.remove("path-1");
document.querySelector('.circle-3-path').classList.add("path3");
document.getElementById('circle-2').classList.add("path-3");
document.getElementById('circle-1').classList.add("path-3");
document.getElementById('circle-2').classList.remove("path-1");
document.getElementById('circle-1').classList.remove("path-1");
document.getElementById('circle-2').classList.remove("active");
document.getElementById('circle-1').classList.remove("active");
}
}




});

document.addEventListener('mousemove', e => {
    gsap.to(['.circle-1 .circle-wrapper', '.circle-3 .circle-wrapper', '.circle-5 .circle-wrapper'], {
      x: e.clientX * 0.02 + 1,
      y: e.clientY * 0.01 - 1,
      rotate: 0.1,
    });
    gsap.to(['.circle-2 .circle-wrapper', '.circle-4 .circle-wrapper', '.circle-6 .circle-wrapper'], {
      x: -e.clientX * 0.02 - 1,
      y: e.clientY * 0.01 + 1,
      rotate: 0.1,
    });
    // gsap.to('.circle-3 .circle-wrapper', {
    //   x: -e.clientX * 0.02 + 1,
    //   y: e.clientY * 0.01 - 1,
    //   rotate: 0.1
    // });
    // gsap.to('.circle-4 .circle-wrapper', {
    //   x: -e.clientX * 0.02 + 1,
    //   y: e.clientY * -0.01 + 1,
    //   rotate: 0.1
    // });
  });
  
  const $awards = document.querySelectorAll(".sp-gob-awards-award");
  const $works = document.querySelectorAll(".sp-works-work-image-wrapper a");
  // document.querySelector('.sp-glad-picture a').addEventListener('mouseenter', colorTransparent);
  // document.querySelector('.sp-glad-picture a').addEventListener('mouseleave', colorRed);

  const gladPictureLink = document.querySelector('.sp-glad-picture a');

if (gladPictureLink) {
  gladPictureLink.addEventListener('mouseenter', colorTransparent);
  gladPictureLink.addEventListener('mouseleave', colorRed);
}

  for (let i = 0; i < $awards.length; i++) {
    $awards[i].addEventListener('mouseenter', colorTransparent);
    $awards[i].addEventListener('mouseleave', colorRed);
  }
  for (let i = 0; i < $works.length; i++) {
    $works[i].addEventListener('mouseenter', colorTransparent);
    $works[i].addEventListener('mouseleave', colorWhite);
  }
  


  function changeActiveClasses() {
    const smallDivs = document.querySelectorAll('.circle-small');

    if (smallDivs.length > 0) {
      const bigDivs = document.querySelectorAll('.circle-big');

    const activeSmallDiv = document.querySelector('.circle-small.active');
    const activeBigDiv = document.querySelector('.circle-big.active');
    setTimeout(() => {
      if (activeSmallDiv && activeBigDiv) {
        activeSmallDiv.classList.remove('active');
        setTimeout(() => {
            activeBigDiv.classList.remove('active');
        }, 1000);
    }
    },1500);
  
  setTimeout(() => {
      smallDivs[currentIndex].classList.add('active');
  
      setTimeout(() => {
          bigDivs[currentIndex].classList.add('active');
      }, 500);
  }, 1000);

    currentIndex = (currentIndex + 1) % smallDivs.length;
    }
    
}

let currentIndex = 0; 
let intervalId = null;

function startInterval() {
    if (intervalId !== null) {
        clearInterval(intervalId);
    }


    intervalId = setInterval(changeActiveClasses, 3000);
}

changeActiveClasses();

startInterval();



  const t = document.querySelector(".sp-gob-awards");
  t && t.querySelectorAll(".sp-gob-awards-award").forEach((t=>{
    const e = t.querySelector(".sp-award-image");
      t.addEventListener("mousemove", (i=>{
        const r = t.getBoundingClientRect()
          , n = i.clientX - r.x
          , s = i.clientY - r.y;
          gsap.to(e,{
            x: n,
            y: s,
            duration: .4
          })
         }
        )),
        t.addEventListener("mouseenter", (i=>{
        const r = t.getBoundingClientRect()
          , n = i.clientX - r.x
          , s = i.clientY - r.y;
          gsap.set(e,{
            x: n,
            y: s
          })
          }
          ))
            }
            ))

            gsap.registerPlugin(ScrollTrigger);
            let mm3 = gsap.matchMedia();
            document.addEventListener("DOMContentLoaded", (event) => {

              mm3.add("(min-width: 991px)", () => {
                gsap.to(".sp-quite-simple",{
                 scrollTrigger:{
                     trigger: '.sp-quite-simple',
                      pin: true, 
                      start:"5% top",
                      end:"150% bottom",
                      markers:false
                    }
               })
               gsap.to(".sp-we-do",{
                 scrollTrigger:{
                     trigger: '.sp-we-do',
                      pin: true, 
                      start:"10% top",
                      end:"150% bottom",
                      markers:false
                    }
               })
               // gsap.to(".video-sec",{
               //   scrollTrigger:{
               //       trigger: '.video-sec',
               //        pin: true,
               //        start:"5% top",
               //        end:"150% bottom",
               //        markers:false
               //      }
               // })
               gsap.to(".sp-glad-meet",{
                 scrollTrigger:{
                     trigger: '.sp-glad-meet',
                      pin: true, 
                      start:"10% top",
                      end:"150% bottom",
                      markers:false
                    }
               })
               
             });

            });
            
            
           // document.querySelector('.spwd-circle-1').addEventListener("mouseenter", colorWhite);
           // document.querySelector('.spwd-circle-1').addEventListener("mouseleave", colorRed);   
           // document.querySelector('.spwd-circle-3').addEventListener("mouseenter", colorWhite);
           // document.querySelector('.spwd-circle-3').addEventListener("mouseleave", colorRed); 
           // document.querySelector('.sp-ticker-container ').addEventListener("mouseenter", colorWhite); 
           // document.querySelector('.sp-ticker-container ').addEventListener("mouseleave", colorRed);

          const circle1 = document.querySelector('.spwd-circle-1');
          const circle3 = document.querySelector('.spwd-circle-3');
          const tickerContainer = document.querySelector('.sp-ticker-container');

          if (circle1) {
            circle1.addEventListener("mouseenter", colorWhite);
            circle1.addEventListener("mouseleave", colorRed);
          }

          if (circle3) {
            circle3.addEventListener("mouseenter", colorWhite);
            circle3.addEventListener("mouseleave", colorRed);
          }

          if (tickerContainer) {
            tickerContainer.addEventListener("mouseenter", colorWhite);
            tickerContainer.addEventListener("mouseleave", colorRed);
          }
           // document.querySelectorAll('.cls-2').forEach((e)=>{
           //    e.addEventListener("mouseenter", colorTransparent);
           //    e.addEventListener("mouseleave", colorWhite);
           // })        
         
         const cls2Elements = document.querySelectorAll('.cls-2');
        cls2Elements.forEach((e) => {
          if (e) {
            e.addEventListener("mouseenter", colorTransparent);
            e.addEventListener("mouseleave", colorWhite);
          }
        });