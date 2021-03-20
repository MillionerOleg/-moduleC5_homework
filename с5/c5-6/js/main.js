let text = document.querySelector("p")
    img = document.querySelector("img")
    btn = document.querySelector("button")

btn.addEventListener('click', () => {
    let width = document.getElementById("i2").value
        hieght = document.getElementById("i1").value
    if ((hieght <= 300 && width <= 300) && (width >= 100 && hieght >= 100)){
        fetch (`https://picsum.photos/${width}/${hieght}`)
            .then((result) => {
                img.setAttribute("src", result.url)
            })
    }
    else {
        text.removeAttribute("style")
        setTimeout(() => {
            text.setAttribute("style", "display: none;")
        }, 5000)
    }
})