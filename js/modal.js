
let flatsPath = document.querySelectorAll('.flats path');
let modal = document.querySelector('.modal');
let floorCounter = document.querySelector('.floor-counter');
let buttonPrimary = document.querySelector('.button-primary');
let flatItem = document.querySelectorAll('.flat-item');
let flatLink = document.querySelectorAll('.flat-link');

const openModal = ()=> {
    document.querySelector('.modal').classList.add('is-open');
    document.querySelector('.modal-counter').textContent = floorCounter.textContent; 
    disableScroll();
};

const closeModal = ()=> {
    document.querySelector('.modal').classList.remove('is-open'); 
    enableScroll();
};

for (let i = 0; i < floor.length; i++) {
    floor[i].addEventListener('click', openModal) 
};

modal.addEventListener('click', (event)=>{ 
    let target = event.target
    console.log(target)
    if(target.classList.contains('modal-close-button')||
    target.classList.contains('modal')){
        closeModal()
        location.reload('counter') 
    }
});

buttonPrimary.addEventListener('click', openModal) 
       



for (let i = 0; i < flatItem.length; i++) { 
    
    flatItem[i].addEventListener('mouseenter', function () { 

        for (let i = 0; i < flatsPath.length; i++) { 
            flatsPath[i].classList.remove('flat-floor-active'); 
        };

       flatsPath[i].classList.add('flat-floor-active') 

    });

};

for (let i = 0; i < flatItem.length; i++) { 
    
    flatItem[i].addEventListener('mouseleave', function () { 

       flatsPath[i].classList.remove('flat-floor-active');

    });

};






for (let i = 0; i < flatsPath.length; i++) {

    flatsPath[i].addEventListener('mouseenter', function () {

        for (let i = 0; i < flatLink.length; i++) {

            flatLink[i].classList.remove('flat-item-active');

        };

        flatLink[i].classList.add('flat-item-active')

    });


}
 
for (let i = 0; i < flatsPath.length; i++) {

    flatsPath[i].addEventListener('mouseleave', function () {


       flatLink[i].classList.remove('flat-item-active');

    });

}