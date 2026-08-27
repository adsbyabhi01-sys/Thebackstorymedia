 // Questions
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

//  window.addEventListener("DOMContentLoaded", () => {
//     document.querySelector(".services-banner-heading").classList.add("active");
//     document.querySelector(".services-banner-bottom-body").classList.add("active");
//     document.querySelector(".services-explainer").classList.add("active");

// });

 window.addEventListener("DOMContentLoaded", () => {
    const headingElement = document.querySelector(".services-banner-heading");
    const bottomBodyElement = document.querySelector(".services-banner-bottom-body");
    const explainerElement = document.querySelector(".services-explainer");

    if (headingElement) {
        headingElement.classList.add("active");
    }

    if (bottomBodyElement) {
        bottomBodyElement.classList.add("active");
    }

    if (explainerElement) {
        explainerElement.classList.add("active");
    }
});


const questions = document.querySelectorAll('.single-question');
const section = document.querySelector('.services-banner');

let sectionHeight = 0; // Declare sectionHeight in a broader scope

if (section) {
    sectionHeight = section.clientHeight / 1.3; // Set sectionHeight only if section exists
}

if (questions.length > 0 && section) { // Ensure questions and section exist
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionHeight) {
            questions.forEach(question => {
                question.classList.remove('active');
            });
        } else {
            // Add any logic for when scrollPosition is below sectionHeight
        }
    });
}




