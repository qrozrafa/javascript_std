/* ======= DARK LIGHT TEMA =======*/
const themeButton = document.getElementById('theme-button') 
const darkTheme = 'dark-theme' 
const iconTheme = 'bx-sun'

// Thema fica salvo
const selectedTheme = localStorage.getItem('selected-theme') 
const selectedIcon = localStorage.getItem('selected-icon') 

// Obtemos o tema atual que a interface possui validando a classe dark-theme
const getCurrentTheme= () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon= () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// Validamos se o usuário já escolheu um tópico
if(selectedTheme){
    // Se a validação for cumprida, perguntamos qual foi o problema para saber se ativamos ou desativamos o escuro
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}


// Activate / deactivate o tema manualmente com o botão
themeButton.addEventListener('click', ()=>{
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Salvamos o tema e o ícone atual que o usuário escolheu
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/* =======  SCROLL REVEAL ANIMATION =======*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal('.calculadora',{
    interval: 200
});