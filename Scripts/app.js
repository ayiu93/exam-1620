function update_image() {
    for(i=1;i<5;i++) {
        document.querySelector(`[id="Album\ ${i}"]`).src = `Images\\Album${i}.png`
    }
}

window.addEventListener('load', update_image())