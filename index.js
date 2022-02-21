const button = document.querySelectorAll('.icon')
console.log(button)


button.forEach(button =>{
    button.addEventListener('click', (event)=>{
        const style = event.currentTarget.classList
        if(style.contains('next')){
            console.log('next')
        }else if(style.contains('back')){
            console.log('back')
        }
    })
})