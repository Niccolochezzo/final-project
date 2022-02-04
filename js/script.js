let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let filterBtn = document.querySelectorAll('.filter-buttons .buttons');
let filterItem = document.querySelectorAll('.Paintings .box-container .box');

filterBtn.forEach(button =>{

  button.onclick = () =>{
    filterBtn.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    let datafilter = button.getAttribute('data-filter');

    filterItem.forEach(item =>{

      item.classList.remove('active')
      item.classList.add('hide')

      if(item.getAttribute('data-item') == datafilter || datafilter == 'all'){
        item.classList.remove('hide')
        item.classList.add('active')
      }
    });

  }

});

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
        autoplay: {
          delay: 9500,
          disableOnInteraction: false,
        },
    pagination: {
      el: ".swiper-pagination",
    },
    
  });