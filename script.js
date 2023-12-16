const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
  menu.classList.toggle('ativo');
  navMenu.classList.toggle('ativo');
})

navMenu.addEventListener('click', () => {
  menu.classList.remove('ativo');
  navMenu.classList.remove('ativo');
})


// btn top

const btn = document.getElementById("btnTop");

btn.addEventListener("click", function(){
  window.scroll({
    top: 0,
    behavior: "smooth",
  })
})


// Mantém o botão invisível até certa altura da página
document.addEventListener('scroll', hide)

function hide(){
  if(window.scrollY > 0){ 
    btn.style.display = "flex"
  } else {
    btn.style.display = "none"
  }
}

hide();