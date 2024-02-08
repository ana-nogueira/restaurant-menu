const btn = document.querySelectorAll(".btn");
const item = document.querySelectorAll(".menu-item");
const imgs = document.querySelectorAll (".menu-item img");


function activeAll() {
    item.forEach ((element) => {
    element.classList.add ('active');
 }); 
}

function removeAll() {
    item.forEach ((element) => {
    element.classList.remove ('active');
 }); 
}


function activeMenu (tipo) {
if (tipo != "All") {
    removeAll();
    imgs.forEach ((img)=> {
        if (img.getAttribute('alt') === tipo) {
            img.parentElement.classList.add ('active');
        }
    })

 }
 else {
    activeAll();
 }
}



btn.forEach ((element) => {
   const tipo = element.innerHTML;
   element.addEventListener ('click', ()=> {
       activeMenu (tipo);
   })
})

 activeAll();