////////////////////////////////////////////
// Creating a Responsive Navbar tabbed component
///////////////////////////////////////////

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerEle = document.querySelector(".header");

// when i scroll the window searchBar bar hide automatically by window scroll


mobile_nav.addEventListener("click", () => {
    headerEle.classList.toggle("active");
});

window.onscroll = () =>{
    headerEle.classList.remove('active');
}


// sticky navigation bar creating
const heroSection = document.querySelector(".section-hero");
const obsverver = new IntersectionObserver((entry) => {
    const ent = entry[0];

    !ent.isIntersecting
        ? document.body.classList.add("sticky")
        : document.body.classList.remove("sticky");

}, { root: null, threshold: 0 });

obsverver.observe(heroSection);


// scrolling effect
AOS.init({
    offset: 20,
    duration: 1000
  });


//   gsap trigger scrolling code
  
   gsap.from(".bar", {
    scrollTrigger: ".bar",
    left: 0,
    ease: Power2.ease,
    duration: 3,
    // stagger: 0.1
   })

   gsap.from(".bar span", {
    scrollTrigger: ".bar",
    width: "0px",
    ease: Power2.ease,
    duration: 3,
    // stagger: 0.
   })