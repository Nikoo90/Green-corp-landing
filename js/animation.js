const INCREASE_NUMBER_ANIMATION_SPEED = 50
let animationInited = false;

function increaseNumberAnimationStep(i, element, endNumber){
    
    if(i <= endNumber){
        if(i === endNumber){
            element.innerText = `${i}+`
        }else {
            element.innerText = i
        }
       i+=100
    }
    setTimeout(increaseNumberAnimationStep,INCREASE_NUMBER_ANIMATION_SPEED,i,element,endNumber)
}
function initIncreaseNumberAnimation(){
    const element = document.querySelector('.features__clients-count')
    increaseNumberAnimationStep(0,element,5000)

}


document.querySelector('#budget').addEventListener('change',function handleSelectChange(e){
  
    if(e.target.value === 'other'){
       const formContainer = document.createElement('div')
       formContainer.classList.add('form__group')
       formContainer.classList.add('form__other-input')

       const input = document.createElement('input')
       input.placeholder = 'Введите ваш вариант'
       input.type = 'text'
       formContainer.append(input)

       document.querySelector('#form form').insertBefore(formContainer, document.querySelector('.form__submit'))
    }
    const otherInput = document.querySelector('.form__other-input')
    if(e.target.value !== 'other' && otherInput ) {
        otherInput.remove()
       
    }
})

function updateScroll(){
 
    const header = document.querySelector('header')
    if(this.scrollY > 0) {
        header.classList.add('header__scrolled')
    }else header.classList.remove('header__scrolled')
    let countElementPosition = document.querySelector('.features__clients-count').offsetTop
    let windowBottomPosition = window.scrollY + window.innerHeight
    if(!animationInited && windowBottomPosition >= countElementPosition){
        initIncreaseNumberAnimation()
        animationInited = !animationInited 
    }
}

window.addEventListener('scroll', updateScroll)

function addSmoothScroll(anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
   
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
   
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    addSmoothScroll(anchor);
  });
  addSmoothScroll(document.querySelector('.more-button'));