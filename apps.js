// #region NAVBAR
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');

openBtn.addEventListener('click', () => {
    nav.forEach(navEl => navEl.classList.add('visible'));
});

closeBtn.addEventListener('click', () => {
    nav.forEach(navEl => navEl.classList.remove('visible'));
});
// #endregion

// #region NAVBAR ACCORDIAN
const toggleBtn = document.querySelectorAll('.dropdown-toggle');
const toggleBtnParents = document.querySelectorAll('.dropdown');

toggleBtn.forEach(btn => {
    btn.addEventListener('click', ()=>{
        btn.parentNode.classList.toggle('active')
    })
});
    



// #endregion