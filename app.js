const display = document.getElementById("color")
const color = ["Green", "Red", "Blue", "Purple"];
const back = document.querySelector("body")
// console.log(`${color}`);
display.innerHTML += `<li><button onclick="green()" class="green">${color.slice(0, 1)}</button></li>`
display.innerHTML += `<li><button onclick="red()" class="red">${color.slice(1, 2)}</button></li>`
display.innerHTML += `<li><button onclick="blue()" class="blue">${color.slice(2, 3)}</button></li>`
display.innerHTML += `<li><button onclick="purple()" class="purple">${color.slice(3, 4)}</button></li>`

function green(){
    switch (back) {
        case back.style.backgroundColor == "white":

            break;
        case back.style.backgroundColor = "green":
            break;
    }
}
function red(){
    switch (back) {
        case back.style.backgroundColor == "green":

            break;
        case back.style.backgroundColor = "red":
            break;
    }
}
function blue(){
    switch (back) {
        case back.style.backgroundColor == "red":

            break;
        case back.style.backgroundColor = "blue":
            break;
    }
}
function purple(){
    switch (back) {
        case back.style.backgroundColor == "blue":

            break;
        case back.style.backgroundColor = "purple":
            break;
    }
}


