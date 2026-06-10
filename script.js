function showPage(pageId) {
    let pages=
    document.querySelectorAll(".page");
    pages.forEach(page=> {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add("active");
}

let images= ["images/laptob-demo.png","images/desktop-demo.png","images/tablet-demo.png","images/mobile-demo.png"];
let index= 0;
setInterval(()=> {
    index++;
    if(index>= images.length) index= 0; document.getElementById("slide").src= images[index];
}, 3000); // change every 3 sec