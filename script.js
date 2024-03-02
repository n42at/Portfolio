function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');

}

function fadeInSalman() {
    var logo = document.getElementById('logo1');
    logo.textContent = 'Abdullah Nashat Salman';
    
}

function fadeOutSalman() {
    var logo = document.getElementById('logo1');
    logo.textContent = 'Abdullah Nashat';
 
}

var logo = document.getElementById('logo1');
logo.addEventListener('mouseover', fadeInSalman);
logo.addEventListener('mouseout', fadeOutSalman);