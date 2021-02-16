$(document).ready(function(){
    var activeImage = document.querySelector(".product-image .active");
    var productImages = document.querySelectorAll(".image-list img");
    var navItem = document.querySelector('a.toggle-nav');

    function changeImage(e) {
        activeImage.src = e.target.src;
    }

    function toggleNavigation(){
        this.nextElementSibling.classList.toggle('active');
    }

    productImages.forEach(image => image.addEventListener("click", changeImage));/*
    productImages.forEach((element) => {
        element.addEventListener("click", changeImage));
    });*/
    navItem.addEventListener('click', toggleNavigation);
});

/*$(function() {
  $('.product-image').click(function(e) {
    activeImage.src = e.target.src;
  });
});*/