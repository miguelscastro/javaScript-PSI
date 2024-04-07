function changeDiv() {
    let divs = document.querySelectorAll("div")
    let body = document.body

    divs.forEach(div => {
        let p = document.createElement("p")
        p.innerHTML = div.innerHTML
        body.replaceChild(p, div)
    })
}

function removeLi() {
    let ul2 = document.querySelector("#ul2")
    let lis = document.querySelectorAll("#ul2 li")
    lis.forEach(li => {
        ul2.removeChild(li)
    })
}

function removeAllLis() {
    let lis = document.querySelectorAll("body li")
    lis.forEach(li => {
        li.remove()
    })
}