
setTimeout(()=>{
    document.querySelector('#four').innerHTML = "09"
     setTimeout(()=>{
        document.querySelector('#four').innerHTML = "08"
         setTimeout(()=>{
            document.querySelector('#four').innerHTML = "07"
            setTimeout(()=>{
                document.querySelector('#four').innerHTML = "06"
                 setTimeout(()=>{
                    document.querySelector('#four').innerHTML = "05"
                     setTimeout(()=>{
                        document.querySelector('#four').innerHTML = "04"
                        setTimeout(()=>{
                            document.querySelector('#four').innerHTML = "03"
                            setTimeout(()=>{
                                document.querySelector('#four').innerHTML = "02"
                                 setTimeout(()=>{
                                    document.querySelector('#four').innerHTML = "01"
                                    setTimeout(()=>{
                                        document.querySelector('#four').innerHTML = "00"
                                         setTimeout(()=>{
                                            document.body.style.backgroundColor="#fff"
                                            document.body.innerHTML = `<div class="container">
                                            <div class="countdown">
                                            <img style="width:75%" src="img/independence-01.png" alt="">
                                            </div>
                                        </div>`
                                         })
                                    },1000)
                                 },1000)
                            },1000)
                        },1000)
                     },1000)
                 },1000)
            },1000)
         },1000)
     },1000)
},1000)