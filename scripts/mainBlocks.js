const $mainBlocks = document.querySelectorAll('.main__blocks_img')
const $mainModal = document.querySelector('.modal')
const $mainModalContainer = document.querySelector('.modal__main')



$mainBlocks.forEach(el => {
    el.addEventListener('click', (target) => {
        let path = target.currentTarget.getAttribute('data-path')
            $mainModal.classList.add('modal__visible')
            $mainModalContainer.classList.add('display__modal_flex')
            document.querySelector(`[data-target="${path}"]`).classList.add('display__modal_visible');
            $body.style.overflowY = 'hidden'
        $mainModal.addEventListener('click',()=>{
            $mainModalContainer.classList.remove('display__modal_flex')
            document.querySelector(`[data-target="${path}"]`).classList.remove('display__modal_visible');
            $body.style.overflowY = 'visible'
        })
    })
})

