const menuToggle = document.getElementById('toggle-menu');
const sideBar = document.getElementById('sidebar');
const closeButton = document.getElementById('close-button');

menuToggle.addEventListener('click', function(){

    sideBar.classList.toggle('active');
});
closeButton.addEventListener('click', function(){
    sideBar.classList.remove('active');
});