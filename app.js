const display = document.getElementById("color")
const color = ["Green","Red","Blue","purple"];
// console.log(`${color}`);
display.innerHTML+=`<li><button>${color.slice(0,1)}</button></li>`
display.innerHTML+=`<li><button>${color.slice(1,2)}</button></li>`
display.innerHTML+=`<li><button>${color.slice(2,3)}</button></li>`
display.innerHTML+=`<li><button>${color.slice(3,4)}</button></li>`