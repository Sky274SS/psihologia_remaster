const $diploma = document.querySelector('.section__education_diploma')
const $diplomaButton = document.querySelector('#diploma-button')
const $educationModal = document.querySelector('.modal')
const $modalDiploma = document.querySelector('.modal__diploma')
const $modalDiplomaEl = document.querySelector('.modal__diploma_el')
const $body = document.querySelector('body')

const diplomaNames = ['src/images/diploma_1.jpg','src/images/diploma_2.jpg', 'src/images/diploma_3.png']
let currentElement = 0
$diplomaButton.addEventListener('click', () => {
    let currentElement = $diploma.attributes[1].nodeValue
    diplomaNames.forEach((el,id) =>{
        if(currentElement === el){
            if (id === diplomaNames.length - 1){
                currentElement = 0
            }
            else{
                currentElement = id + 1
            }
            $diploma.attributes[1].nodeValue = diplomaNames[currentElement]
            $modalDiplomaEl.attributes[1].nodeValue = diplomaNames[currentElement]
        }
    })
})

$diploma.addEventListener('click', () => {
    $educationModal.classList.add('modal__visible')
    $modalDiploma.classList.add('display__modal_visible')
    $body.style.overflowY = 'hidden'
})

$educationModal.addEventListener('click',()=>{
    $educationModal.classList.remove('modal__visible')
    $modalDiploma.classList.remove('display__modal_visible')
    $body.style.overflowY = 'scroll'
})
