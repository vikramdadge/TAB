const c1 = console.log;

const lis = [...document.querySelectorAll('.tabHeading li ')]


const onTabClick = () => {
    c1('Clicked !!!')
    let activecard = document.querySelector('.tabcontent .card.active')
    c1(activecard)
    activecard.classList.remove('active')
    let activeLi = document.querySelector('.tabHeading li.active')
    activeLi.classList.remove('active')

    //muje data-id attribute cahiye , but ?? 

    event.target.classList.add('active')
    let getId = event.target.getAttribute('data-id')
    c1(getId)

    document.getElementById(getId).classList.add('active')
}


lis.forEach(li => {
    c1(li)
    li.addEventListener("click", onTabClick)
})






