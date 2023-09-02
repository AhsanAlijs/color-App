const display = document.getElementById("color")
const color = ["Green","Red","Blue","Purple"];
// console.log(`${color}`);
display.innerHTML+=`<li><button class="green">${color.slice(0,1)}</button></li>`
display.innerHTML+=`<li><button class="red">${color.slice(1,2)}</button></li>`
display.innerHTML+=`<li><button class="blue">${color.slice(2,3)}</button></li>`
display.innerHTML+=`<li><button class="purple">${color.slice(3,4)}</button></li>`