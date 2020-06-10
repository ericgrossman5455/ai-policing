//Shoutout to Dominic Gaiero for the help

document.addEventListener('scroll', stickMenu);

var breakpoint = 225

function stickMenu() {
   var scrollDown = window.scrollY;
   var navigation = document.getElementById('js-menu');

   if (scrollDown >= breakpoint) {
      navigation.classList.add('js-sticky-menu')
   }

   else {
      navigation.classList.remove('js-sticky-menu')
   }
}

document.addEventListener('scroll', stickMenuMobile);

function stickMenuMobile() {
   var scrollDown = window.scrollY;
   var navigation = document.getElementById('js-menu-mobile');

   if (scrollDown >= breakpoint) {
      navigation.classList.add('js-sticky-menu')
   }

   else {
      navigation.classList.remove('js-sticky-menu')
   }
}

