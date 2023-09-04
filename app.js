const display = document.getElementById("color")
const color = ["Green", "Red", "Blue", "Purple","Pink","Black","Brown","Yellow","Orange","Silver"];
const back = document.querySelector("body")
// console.log(`${color}`);

for (let i=0; i<color.length;i++){
    display.innerHTML += `<button onclick="colorChanger(${i})" class="green">${color[i]}</button>`
}

function colorChanger(i){
    back.style.backgroundColor=`${color[i]}`
}




