const swiperLogos = new Swiper(".swiper-logos", {
  slidesPerView: "auto",
  spaceBetween: 50,

  navigation: {
    nextEl: ".swiper-button-next.logos",
    prevEl: ".swiper-button-prev.logos",
  },
});
const swiperCompanies = new Swiper(".swiper-companies", {
  slidesPerView: 3,
  spaceBetween: 22,
});
const swiperFeedback = new Swiper(".swiper-feedback", {
  slidesPerView: 3,
  spaceBetween: 40,

  navigation: {
    nextEl: ".swiper-button-next.feedback",
    prevEl: ".swiper-button-prev.feedback",
  },
});


const acc = document?.getElementsByClassName("accordion");

acc[0].classList.add("active");
if (window.matchMedia("(max-width: 768px)").matches) {
  acc[0].nextElementSibling.style.maxHeight =
    acc[0].nextElementSibling.scrollHeight + 20 + "px";
} else {
  acc[0].nextElementSibling.style.maxHeight =
    acc[0].nextElementSibling.scrollHeight + "px";
}

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}




for (let i of document.querySelectorAll(".phone-mask")) {
  IMask(i, {
    mask: "+{7}(000)000-00-00",
  });
}

