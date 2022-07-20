var elModalOpenButton = document.querySelector(".header-under__button");
var elModal = document.querySelector(".modal");

elModalOpenButton.addEventListener("click", function(){
  elModal.classList.add("modal-show");
})


var elModalCloseButton = document.querySelector(".modal__x");

elModalCloseButton.addEventListener("click" , function (){
  elModal.classList.remove("modal-show");
})