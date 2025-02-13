// A list of h2 elements. Event listeners will be added to all of these
const h2s = document.querySelectorAll('h2');

// A list of the expand and collapse buttons. This array is used to update their image to a + or - sign depending on if the accordian is expanded.
const buttons = document.querySelectorAll('h2 > img');

// A list of paragraph elements. 
const accordions = document.querySelectorAll('p');

// The currently selected accordian by index. If null, none are selected.
let currentAccordion = null;

/*
    array.forEach is a shorthand for a for loop. The block below is very similar to:

    for (let index = 0; index < h2s.length; index++) {
    
    }

    Each loop, the variable 'h2' is equal to 'h2s[index]'
*/
h2s.forEach((h2, index) => {

    // Within the loop, we are adding an event listener to each h2 element. 
    h2.addEventListener('click', () => {

        // When this h2 is clicked, we loop over each 'p' element in the accordians array. In this forEach, we omit the "index" variable because we don't need to use it within o
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