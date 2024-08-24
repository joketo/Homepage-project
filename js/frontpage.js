$(document).ready(function(){
   // When the user scrolls the page, execute myFunction
   window.onscroll = function() {myFunction()};

   // Get the navbar
   var navbar = document.getElementById("navbar");

   // Get the offset position of the navbar
   var sticky = navbar.offsetTop;

   // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
   function myFunction() {
      console.log("MOIMIOOIO");
      if (window.scrollY >= sticky) {
         navbar.classList.add("sticky")
      } else {
         navbar.classList.remove("sticky");
      }
   } 
});

// Slows the scrolling down
$(function() {
   $('a[href*="#"]:not([href="#"])').click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       if (target.length) {
         $('html, body').animate({
           scrollTop: target.offset().top
         }, 1000);
         return false;
       }
     }
   });
 });