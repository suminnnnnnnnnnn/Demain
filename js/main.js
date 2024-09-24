const menubtn = document.querySelector(".menu");
menubtn.addEventListener("click", function(){
  const side = document.querySelector(".sidebar");
  side.classList.toggle("active");
});

$(".sidemenu a").click(function() {
  $(this).next(".submenu").stop().slideToggle(300);
 $(this).toggleClass('on').siblings().removeClass('on');
 $(this).next(".submenu").siblings(".submenu").slideUp(300);
});

const menuTrigger = document.querySelector('.menu-trigger');

menuTrigger.addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('active-1');
});