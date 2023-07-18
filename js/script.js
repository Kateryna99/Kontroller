const itemCollection = document.querySelectorAll('.controller__button')
const iconCollection = document.querySelectorAll('.controller__icon')

function startButtonAction(elements) {
    for (let item of elements){
        item.addEventListener('click',(event)=>{
            const currentItem = event.target
            if(currentItem.tagName==='BUTTON'){
                if(!currentItem.classList.contains('controller__button--active')) {
                    for (let item of elements) {
                        item.classList.remove('controller__button--active')
                    }
                    currentItem.classList.add('controller__button--active')
                }
            }else if(currentItem.tagName==='SPAN'){
                if(!currentItem.parentNode.classList.contains('controller__button--active')) {
                    for (let item of elements) {
                        item.classList.remove('controller__button--active')
                    }
                    currentItem.parentNode.classList.add('controller__button--active')
                }

            }



        })
    }

}

startButtonAction(itemCollection)