function update_image() {
    for(i=1;i<5;i++) {
        console.log(i)
       let img = document.querySelector(`'id=Album ${i}'`).setAttribute("src",`'images\\Album${i}.png'`)
    }
}

window.addEventListener('load', update_image())