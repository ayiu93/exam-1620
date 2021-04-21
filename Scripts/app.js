const albums = [
    { name: "Album 1", price: 12.99, inCart: false }, 
    { name: "Album 2", price: 14.99, inCart: false }, 
    { name: "Album 3", price: 9.99, inCart: false }, 
    { name: "Album 4", price: 19.99, inCart: false }
  ];

function updateImage() {
    for(i=1;i<5;i++) {
        document.querySelector(`[id="Album\ ${i}"]`).src = `Images\\Album${i}.png`;
    }
}

function addToCart() {

}

window.addEventListener('load', updateImage());
