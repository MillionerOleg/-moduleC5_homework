window.onload = function() {
    const urlScroll = new Object(),
        impg = document.getElementById("slid"),
        btnRight = document.getElementById("rbtn"),
        btnLeft = document.getElementById("lbtn"),
        btn = document.getElementsByClassName("slide-button")
        process = document.getElementById("process")
        inpbtn = document.getElementById("inpbtn")
        numerror = document.getElementById("numerror")

    let i = 0,
        limit = 1

    const xhr = new XMLHttpRequest()

    function tabLodeButton () {
        limit = document.getElementById('inp').value

        if (limit > 10 || limit < 0 || isNaN(limit)) {
            numerror.classList.remove("d-none")
            limit = 1
            i = 0
            return 0
        }
        else {
            numerror.classList.add("d-none")
        }
        
        xhr.onprogress = function() {
            process.classList.toggle("d-none")
        }

        xhr.onload = function() {
            picList = JSON.parse(xhr.response)
            for (key in picList){
                urlScroll[key] = picList[key].download_url
            }
            process.classList.toggle("d-none")

            impg.src = urlScroll[i]
        }

        function tabButton() {
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

            impg.src = urlScroll[i]
        }

        function reverseTabButton() {
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

            impg.src = urlScroll[i]
        }

        document.onkeypress = function(event){
            if (event.code == "Space") {
                tabButton()
            }
        }

        btnRight.onclick = tabButton
        btnLeft.onclick = reverseTabButton
    
        xhr.onerror = function() {
            console.log('Ошибка запроса');
        }

        xhr.open("get", "https://picsum.photos/v2/list?limit=" + limit)
        xhr.send()
    }
    
    inpbtn.onclick = tabLodeButton
}

    // $.getJSON( "https://picsum.photos/v2/list?limit=" + limit, function ( data, textStatus, jqXHR ) {
    //     for (key in data){
    //         urlScroll[key] = data[key].download_url
    //     }

        // impg.src = urlScroll[i]
        // function tabButton() {
        //     impg.animate([
        //         {
        //           opacity: 0,
        //           color: "#fff"
        //         },
        //         {
        //           opacity: 1,
        //           color: "#000"
        //         }
        //       ], 1100);
        //     i = i + 1 <= limit - 1 ? i + 1 : 0

        //     impg.src = urlScroll[i]
        //     console.log(i)
        // }

        // function reverseTabButton() {
        //     impg.animate([
        //         {
        //           opacity: 0,
        //           color: "#fff"
        //         },
        //         {
        //           opacity: 1,
        //           color: "#000"
        //         }
        //       ], 1100);
        //     i = i - 1 >= 0 ? i - 1 : limit - 1

        //     impg.src = urlScroll[i]
        //     console.log(i)
        // }

        // document.onkeypress = function(event){
        //     console.log(event.code)
        //     if (event.code == "Space") {
        //         tabButton()
        //     }
        // }
        // btnRight.onclick = tabButton
        // btnLeft.onclick = reverseTabButton
    // })