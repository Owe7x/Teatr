const   burger = document.querySelector('#burger'),
        modals = document.querySelector('#modal'),
        closemodal = document.querySelector('.modal__close'),
        mouse = document.querySelector('#mouse'),
        show = document.querySelector('#show');
        mouse1 = document.querySelector('#mouse1'),
        show1 = document.querySelector('#show1');
        mouse2 = document.querySelector('#mouse2'),
        show2 = document.querySelector('#show2');
        mouse3 = document.querySelector('#mouse3'),
        show3 = document.querySelector('#show3');

console.log(mouse);

burger.addEventListener('click', () => {
    if(modals.classList.contains('hide')) {
        modals.classList.remove('hide');
    } else {
        modals.classList.add('hide');
    }
})

closemodal.addEventListener('click', () => {
    modals.classList.add('hide')
})


mouse.addEventListener('mouseover', () => {
    show.classList.remove('hide')
})
mouse.addEventListener('mouseout', () => {
    show.classList.add('hide')
})
mouse1.addEventListener('mouseover', () => {
    show1.classList.remove('hide')
})
mouse1.addEventListener('mouseout', () => {
    show1.classList.add('hide')
})
mouse2.addEventListener('mouseover', () => {
    show2.classList.remove('hide')
})
mouse2.addEventListener('mouseout', () => {
    show2.classList.add('hide')
})
mouse3.addEventListener('mouseover', () => {
    show3.classList.remove('hide')
})
mouse3.addEventListener('mouseout', () => {
    show3.classList.add('hide')
})




var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters

        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
  

  })