const $blogElements = document.querySelectorAll('.blog__container_element')

$blogElements.forEach((el,id)=>{
    let $showButton = el.querySelector('.blog-button')
    let $blogText = el.querySelector('.blog__text')

    $showButton.addEventListener('click',()=>{
        if ($showButton.textContent === 'Показать'){
            $showButton.textContent = 'Скрыть'
            $blogText.classList.add('blog__visible')
        }
        else{
            $showButton.textContent = 'Показать'
            $blogText.classList.remove('blog__visible')
        }
    })

})