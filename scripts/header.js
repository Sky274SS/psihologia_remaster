const $menuButton = document.querySelector('.header__button-img')
const $menu = document.querySelector('.menu')
const $menuItems = document.querySelectorAll('.menu__item')
let active = '#main'
$menuButton.addEventListener('click',()=>{
    if ($menu.classList.contains('block')){
        $menu.classList.remove('block')
        $menu.classList.add('none')
    }
    else {
        $menu.classList.remove('none')
        $menu.classList.add('block')
    }
})

$menuItems.forEach((el)=>{
    el.addEventListener('click', ()=>{
        active = el.children.item(0).hash
        for(let i= 0;i < $menuItems.length;i++){
            if ($menuItems[i].children.item(0).hash === active){
                $menuItems[i].classList.add('menu__item-active')
            }
            else{
                $menuItems[i].classList.remove('menu__item-active')
            }
        }
        setTimeout(()=>{
            for(let i= 0;i < $menuItems.length;i++){
                $menuItems[i].classList.remove('menu__item-active')
            }
            if ($menu.classList.contains('block')){
                $menu.classList.remove('block')
                $menu.classList.add('none')
            }
        },500)
    })
})

