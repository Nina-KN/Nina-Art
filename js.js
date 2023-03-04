
const header = document.querySelector('.d-header');

window.addEventListener('scroll', function(){
  if (window.pageYOffset > 100) {
    header.classList.add('d-header-solid');
  } else {
    header.classList.remove('d-header-solid');
  }
})

// .hamb-menu 
const navBarEl = document.querySelector('.nav-bar')
const hambMenuEl = document.querySelector('.hamb-menu')
const dHeaderEl = document.querySelector('.d-header')
hambMenuEl.addEventListener('click', function(){
  navBarEl.classList.toggle('active')
  dHeaderEl.classList.toggle('active')
})



