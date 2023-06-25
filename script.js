
function setup(){
  console.log("dom carico");
  let menuButton = document.querySelector('#menu-button');
  let menu = document.querySelector('#menu');

  menuButton.onclick = function() {
    menu.classList.toggle('open');
    menuButton.classList.toggle('is-active');
  }

  const myModal = new bootstrap.Modal('#formModal', {
    keyboard: false
  })
  
  let modalToggle = document.querySelector('#modalBtn')
  modalToggle.onclick = function(){
    myModal.show()
  }

  
}
  
document.addEventListener('DOMContentLoaded', setup);
