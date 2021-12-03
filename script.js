const box = document.querySelector('.btn-container');
const content = document.querySelectorAll('.content');
const btns = document.querySelectorAll('.tab-btn');

box.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    btns.forEach(function(btn){
        btn.classList.remove('active');
        e.target.classList.add('active');
    });
    content.forEach(function(text){
        text.classList.remove('active');
    });
    const element = document.getElementById(id);
    element.classList.add('active');
});