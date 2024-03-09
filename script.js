const h2s = document.querySelectorAll('h2');
const buttons = document.querySelectorAll('h2 > img')
const accordions = document.querySelectorAll('p');

let currentAccordion = null;

h2s.forEach((h2, index) => {
    h2.addEventListener('click', () => {
        accordions.forEach((accordion) =>  {
            if(accordion.classList.contains('active')){
                accordion.classList.remove('active');
            }
        })
        buttons.forEach((button) => {
            button.src = './assets/images/icon-plus.svg';
        })

        if(currentAccordion !== index) {
            currentAccordion = index;
            accordions[index].classList.add('active');
            buttons[index].src = './assets/images/icon-minus.svg';
        } else {
            currentAccordion = null;
        }
    })
});