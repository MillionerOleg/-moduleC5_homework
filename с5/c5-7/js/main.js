window.onload = function() {
    const impg = document.getElementById("slid"),
        btnRight = document.getElementById("rbtn"),
        btnLeft = document.getElementById("lbtn"),
        inpbtn = document.getElementById("inpbtn"),
        numerror = document.getElementById("numerror")
        
    let i = 0,
        limit, page = 1
    
    if (localStorage.getItem(0)){
        i = localStorage.getItem("count") ? Number(localStorage.getItem("count")) : 0
        impg.src = localStorage.getItem(i)
        limit = Number(localStorage.getItem("limit"))
    }

    function tabLodeButton () {
        let limitCheck = document.getElementById('inp2').value,
            pageCheck = document.getElementById('inp').value

        if ((pageCheck > 10 || pageCheck < 1 || isNaN(pageCheck)) && (limitCheck <= 10 
            && limitCheck >= 1 && !(isNaN(limitCheck)))){
            numerror.innerHTML = "Номер страницы вне диапазона от 1 до 10"
        }
        else if ((limitCheck > 10 || limitCheck < 1 || isNaN(limitCheck)) && (pageCheck > 10 
            || pageCheck < 1 || isNaN(pageCheck))) {
            numerror.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10"
        }
        else {
            numerror.innerHTML = "Лимит вне диапазона от 1 до 10."
        }

        if (limitCheck > 10 || limitCheck < 1 || pageCheck > 10 || pageCheck < 1 
            || isNaN(pageCheck) || isNaN(limitCheck)) {
            numerror.classList.remove("d-none")

            limit, page = 1
            i = 0
            
            return 0
        }
        else {
            numerror.classList.add("d-none")

            limit = limitCheck
            page = pageCheck
        }

        fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        .then((response) => {
            localStorage.clear()
            localStorage.setItem("limit", limit)

            i = 0

            return response.json()
        })
        .then((result) => {
            for (key in result){
                localStorage.setItem(key, result[key].download_url)
            }

            impg.src = localStorage.getItem(i)
        })
    
        .catch((reject) => {
            console.log(`Ошибка запроса. \n${reject}`);
        })
    }

    function tabButton() {
        if (localStorage.getItem(0)){
            impg.animate([
                {
                opacity: 0,
                color: "#fff"
                },
                {
                opacity: 1,
                color: "#000"
                }
            ], 1100);
            i = i + 1 <= limit - 1 ? i + 1 : 0

            localStorage.setItem("count", i)
            impg.src = localStorage.getItem(i)
        }
    }

    function reverseTabButton() {
        if (localStorage.getItem(0)){
            impg.animate([
                {
                opacity: 0,
                color: "#fff"
                },
                {
                opacity: 1,
                color: "#000"
                }
            ], 1100);
            i = i - 1 >= 0 ? i - 1 : limit - 1

            localStorage.setItem("count", i)
            impg.src = localStorage.getItem(i)
        }
    }

    btnRight.onclick = tabButton
    btnLeft.onclick = reverseTabButton
    inpbtn.onclick = tabLodeButton

    document.onkeypress = function(event){
        if (event.code == "Space") {
            tabButton()
        }
    }
}