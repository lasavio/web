
function setup(){
  console.log("dom carico");
  let menuButton = document.querySelector('#menu-button');
  let menu = document.querySelector('#menu');

  menuButton.onclick = function() {
    menu.classList.toggle('open');
    menuButton.classList.toggle('is-active');
  }
}
  
document.addEventListener('DOMContentLoaded', setup);
