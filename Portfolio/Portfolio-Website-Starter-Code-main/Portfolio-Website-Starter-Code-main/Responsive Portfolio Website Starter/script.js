let menuIcon = document.querySelector('.bx-icon')
let navBar = document.querySelector('.nav-bar')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  menuIcon.classList.toggle('active')
}