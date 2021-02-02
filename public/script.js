const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')


for(let card of cards){
    card.addEventListener("click", ()=>{
        const videoId = card.getAttribute('id')
       // modalOverlay.classList.add('active')
        window.location.href = `/video?id=${videoId}`
    })
}
