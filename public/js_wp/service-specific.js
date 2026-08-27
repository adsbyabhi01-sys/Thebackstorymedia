window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".sp-service-spec-cta").classList.add("active");

});
window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".sp-about-banner-heading").classList.add("active");
  document.querySelector(".sp-about-banner-body").classList.add("active");

});  
$('[data-question-open]').click(function(){
  var questionTarget = $(this).data('question-open');
  $('[data-question-id="' + questionTarget + '"]').addClass('active').siblings().removeClass('active');
  setTimeout(function() {
     $('[data-question-id="' + questionTarget + '"]').siblings().removeClass('active');
  }, 800);
});
$('[data-question-close]').click(function(){
  $('[data-question-id]').removeClass('active');
});

const questions = document.querySelectorAll('.single-question');
const section = document.querySelector('.sp-about-banner');

const sectionHeight = section.clientHeight/2.4;

window.addEventListener('scroll', () => {

    const scrollPosition = window.scrollY;

    if (scrollPosition >= sectionHeight) {
        questions.forEach(question => {
            question.classList.remove('active');
        });
    } else {
        
    }
});

document.addEventListener("DOMContentLoaded", (event) => {
    const rotateMe = document.querySelector('.sp-about-orbit');
    
    window.addEventListener('scroll', () => {
        const maxRotation = 60; // Initial rotation in degrees
        const minRotation = -140; // Minimum rotation in degrees
        const scrollRange = window.innerHeight; // Adjust this value as needed
    
        // Calculate the rotation based on the scroll position
        const scrollY = window.scrollY;
        let rotation = maxRotation - (scrollY / scrollRange) * (maxRotation - minRotation);
    
        // Limit the rotation to the defined range
        if (rotation < minRotation) {
            rotation = minRotation;
        } else if (rotation > maxRotation) {
            rotation = maxRotation;
        }
    
        rotateMe.style.transform = `rotate(${rotation}deg) translate(-22.5vw)`;
    });
});

document.addEventListener("DOMContentLoaded", (event) => {
const $works = document.querySelectorAll(".sp-works-work-image-wrapper a");
for (let i = 0; i < $works.length; i++) {
  $works[i].addEventListener('mouseenter', colorTransparent);
  $works[i].addEventListener('mouseleave', colorWhite);
}
});

const $circlesHwd = document.querySelectorAll('.sp-how-we-do-circle');
document.getElementById("ws1D").click();
function openService(cityName) {
    // Declare all variables
      var i, tabcontent;
    // Get all elements with class="tabcontent" and hide them
     tabcontent = document.getElementsByClassName("ws1-tens");
       for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
     }
    
    // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(cityName).style.display = "flex";
     // })
   }  
document.getElementById("ws2D").click();
function openService1(cityName) {
    // Declare all variables
      var i, tabcontent;
    // Get all elements with class="tabcontent" and hide them
     tabcontent = document.getElementsByClassName("ws2-tens");
       for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
     }
    
    // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(cityName).style.display = "flex";
     // })
   } 
document.getElementById("ws3D").click();
function openService2(cityName) {
    // Declare all variables
      var i, tabcontent;
    // Get all elements with class="tabcontent" and hide them
     tabcontent = document.getElementsByClassName("ws3-tens");
       for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
     }
    
    // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(cityName).style.display = "flex";
     // })
   } 

for (let i = 0; i < $circlesHwd.length; i++) {
    $circlesHwd[i].addEventListener('mouseenter', onMouseHover);
    $circlesHwd[i].addEventListener('mouseleave', onMouseHoverOut);
  }

document.querySelector('.sp-hwd-circle-1 .sp-how-we-do-circle-wrapper').addEventListener('click', ()=>{
     setTimeout(() => {
        document.querySelector('.sp-hwd-circle-1 .sp-how-we-do-cont').classList.add('active');
        document.querySelector('.header-wrapper').classList.add('active');
        document.body.classList.add('menu-open');
        document.querySelector('.sp-hwd-circle-1 .sp-how-we-do-cont').addEventListener('mouseleave', colorRed);
        document.querySelector('.sp-hwd-circle-1 .sp-how-we-do-cont').addEventListener('mouseenter', colorRed);
        colorRed();
    })  
},1000);  
document.querySelector('.sp-hwd-circle-2 .sp-how-we-do-circle-wrapper').addEventListener('click', ()=>{
    setTimeout(() => {
    document.querySelector('.sp-hwd-circle-2 .sp-how-we-do-cont').classList.add('active');
    document.querySelector('.header-wrapper').classList.add('active');
    document.body.classList.add('menu-open');
    document.querySelector('.sp-hwd-circle-2 .sp-how-we-do-cont').addEventListener('mouseleave', colorRed);
    document.querySelector('.sp-hwd-circle-2 .sp-how-we-do-cont').addEventListener('mouseenter', colorRed);
    colorRed();
})  
},1000);
document.querySelector('.sp-hwd-circle-3 .sp-how-we-do-circle-wrapper').addEventListener('click', ()=>{
    setTimeout(() => {
    document.querySelector('.sp-hwd-circle-3 .sp-how-we-do-cont').classList.add('active');
    document.querySelector('.header-wrapper').classList.add('active');
    document.body.classList.add('menu-open');
    document.querySelector('.sp-hwd-circle-3 .sp-how-we-do-cont').addEventListener('mouseleave', colorRed);
    document.querySelector('.sp-hwd-circle-3 .sp-how-we-do-cont').addEventListener('mouseenter', colorRed);
    colorRed();
})  
},1000);
document.querySelectorAll('.sp-how-we-do-cross').forEach((e)=>{
    e.addEventListener('click', ()=>{
        document.querySelectorAll('.sp-how-we-do-cont').forEach((e)=>{
            setTimeout(() => {
                e.classList.remove('active');
            }, 0); // Set the delay time in milliseconds (500 milliseconds in this example)

            setTimeout(() => {
                document.querySelector('.header-wrapper').classList.remove('active');
                document.body.classList.remove('menu-open');
            }, 600); // You can adjust the delay time for these actions

        });
        colorWhite();
    });
})

document.querySelectorAll('a[href^="#top-trigger"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = -100;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


function initScrollTrigger() {
    gsap.registerPlugin(ScrollTrigger);
    let mm3 = gsap.matchMedia();
    mm3.add("(min-width: 991px)", () => {
    
        gsap.to(".sp-quite-simple-wrapper",{
          scrollTrigger:{
              trigger: '.sp-how-we-do',
               pin: true, 
               start:"10% top",
               end:"180% bottom",
               markers:false,
          }
        });
    });
    }
    window.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {initScrollTrigger();}, 3000);// Initialize GSAP ScrollTrigger after scrolling to the top
    });

    $(document).ready(function(){
      $(".sp-hwd-circle-1 .what-we-do-button button").click(function(){
        $(".sp-hwd-circle-1 .what-we-do-button button").removeClass('active');
        $(this).addClass('active');
      });
      $(".sp-hwd-circle-2 .what-we-do-button button").click(function(){
        $(".sp-hwd-circle-2 .what-we-do-button button").removeClass('active');
        $(this).addClass('active');
      });
      $(".sp-hwd-circle-3 .what-we-do-button button").click(function(){
        $(".sp-hwd-circle-3 .what-we-do-button button").removeClass('active');
        $(this).addClass('active');
      });
      $(".sp-serv-deliv-deliverable-wrapper").hover(function(){
        $(".sp-serv-deliv-deliverable-wrapper").css({"filter":"grayscale(1)", "opacity":"0.4"});
        $(this).css({"filter":"grayscale(0)", "opacity":"1"});
      },
      function() {
        // Mouseout (hover-out) event
        $(".sp-serv-deliv-deliverable-wrapper").css({"filter":"grayscale(0)", "opacity":"1"});
      });
    });
    
    const $service = document.querySelectorAll(".sp-serv-deliv-deliverable-wrapper");
    for (let i = 0; i < $service.length; i++) {
        $service[i].addEventListener('mouseenter', colorTransparent);
        $service[i].addEventListener('mouseleave', colorWhite);
    }
    

    // pin scroll animaition
let scrollsectionMedia = gsap.matchMedia();
scrollsectionMedia.add("(min-width: 991px)", () => {   
  const cards = document.querySelectorAll(".sp-serv-deliv-deliverable");
  const numbersContainer = document.querySelector(".sp-service-deliv-numbers ul");
  numbersContainer.innerHTML = "";

  // Dynamically create number indicators
  cards.forEach((card, index) => {
    const number = document.createElement("li");
    number.classList.add("number-scroll");
    number.textContent = index + 1;
    numbersContainer.appendChild(number);
  });

  const numbers = document.querySelectorAll(".number-scroll");

  // Function to activate card and corresponding number
  function activateCard(index) {
    cards.forEach((card, i) => {
      if (i === index) {
        card.classList.add("active");
        numbers[i].classList.add("active");
      } else {
        card.classList.remove("active");
        numbers[i].classList.remove("active");
      }
    });
  }

  // Calculate the total scrollable width dynamically
  let totalWidth = 0;
  cards.forEach((card) => {
    totalWidth += card.offsetWidth;
  });

  // Setup GSAP ScrollTrigger for horizontal scroll
  const scrollTween = gsap.to(".sp-serv-deliv-deliverables-wrapper", {
    x: -(totalWidth - cards[0].offsetWidth), // Total scroll distance
    ease: "none",
    scrollTrigger: {
      trigger: ".sp-service-deliverables-wrapper",
      pin: true,
      scrub: 1.5, // Adjust scrub value for smoother scroll speed
      end: () => "+=100%",
      anticipatePin: 1,
      fastScrollEnd: true,
      pinnedContainer: ".sp-service-deliverables-wrapper",
    },
  });

  // Setup ScrollTriggers for each card to activate it when in center
  cards.forEach((card, index) => {
    ScrollTrigger.create({
      trigger: card,
      containerAnimation: scrollTween,
      start: "80% 30%",
      onEnter: (self) => {
        activateCard(index);
      },
      onLeaveBack: (self) => {
        activateCard(index);
      },
    });
  });

    // Special ScrollTrigger for the last card
    const lastCardIndex = cards.length - 1;
    ScrollTrigger.create({
      trigger: cards[lastCardIndex],
      containerAnimation: scrollTween,
      start: "40% 30%", 
      onEnter: () => activateCard(lastCardIndex),
      onEnterBack: () => activateCard(lastCardIndex),
    });

  // Add click event to numbers to scroll to the corresponding card and activate it
  numbers.forEach((number, index) => {
    number.addEventListener("click", () => {
      gsap.to(".sp-serv-deliv-deliverables-wrapper", {
        x: () => {
          let cardLeft = 0;
          for (let i = 0; i < index; i++) {
            cardLeft += cards[i].offsetWidth;
          }
          return -cardLeft; 
        },
        duration: 1,
        onComplete: () => {
          activateCard(index);
        },
      });
    });
  });

  return () => {
    
    ScrollTrigger.getAll().forEach((st) => st.kill());
  };
});


scrollsectionMedia.add("(max-width: 990px)", () => {
  const cards = document.querySelectorAll(".sp-serv-deliv-deliverable");
  const numbersContainer = document.querySelector(".sp-service-deliv-numbers ul");
  numbersContainer.innerHTML = "";

  // Dynamically create number indicators
  cards.forEach((card, index) => {
    const number = document.createElement("li");
    number.classList.add("number-scroll");
    number.textContent = index + 1;
    numbersContainer.appendChild(number);
  });

  const numbers = document.querySelectorAll(".number-scroll");

  // Function to activate card and corresponding number
  function activateCard(index) {
    cards.forEach((card, i) => {
      if (i === index) {
        card.classList.add("active");
        numbers[i].classList.add("active");
      } else {
        card.classList.remove("active");
        numbers[i].classList.remove("active");
      }
    });
  }
 // Add click event to numbers to scroll to the corresponding card and activate it
 numbers.forEach((number, index) => {
  number.addEventListener("click", () => {
    gsap.to(".sp-serv-deliv-deliverables-wrapper", {
      x: () => {
        let cardLeft = 0;
        for (let i = 0; i < index; i++) {
          cardLeft += cards[i].offsetWidth;
        }
        return -cardLeft; // Align the card to the start of the container
      },
      duration: 1,
      onComplete: () => activateCard(index), // Activate the clicked card
    });
  });
 });
  activateCard(0);
});


// Refresh scrollTrigger on window resize
window.addEventListener("resize", () => {
ScrollTrigger.refresh();
});
      

