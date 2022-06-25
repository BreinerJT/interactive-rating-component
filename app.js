const submitBtn = document.querySelector(".submit-btn")
const ratingNumber = document.querySelectorAll(".dial-item")
const ratingOverlay = document.querySelector(".rating-overlay")
const thanksOverlay = document.querySelector(".thanks-overlay")
const selection = document.querySelector(".selection")

let value 

ratingNumber.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const item = e.currentTarget
        ratingNumber.forEach(element => {
            if(element !== item){
                element.classList.remove("active")
            }
            item.classList.add("active")
            value = item.textContent
        })
    })
})

submitBtn.addEventListener("click", () => {
    if(value){
        selection.textContent = `You selected ${value} out of 5`
        swapOverlay()
        setTimeout(() => {
            selection.style.transform = `translateX(0)`
        }, 100)
    }
})

function swapOverlay (){
    ratingOverlay.classList.add("hide-overlay")
    thanksOverlay.classList.remove("hide-overlay")
}