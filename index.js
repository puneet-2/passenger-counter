let countel = document.getElementById("count-el")
let count =0;

function increment(){
    count += 1;
    countel.textContent=count
}
let saveel = document.getElementById("save-el")


function save(){
    let mess = count+  " - " 
    saveel.textContent += mess
    countel.textContent =0
    count =0
}



