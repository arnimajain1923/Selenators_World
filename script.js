//Swiper slider


    var swiper = new Swiper(".bg-slider-thumbs", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 0,
    });
    var swiper2 = new Swiper(".bg-slider", {
      loop: true,
      spaceBetween: 0,
      thumbs: {
        swiper: swiper,
      },
    });




const navbarToggle = document.getElementById("navbarToggle");
const navbarLinks = document.getElementById("navbarLinks");

navbarToggle.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});






 

