let letters = document.querySelectorAll(".container .letter-box");



letters.forEach(letter =>{
    letter.addEventListener('click',(e) =>{
        console.log(e.target)
    })
})
