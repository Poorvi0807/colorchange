const button = document.querySelector("button");
const body=document.querySelector("body");

const color=['beige','red','green','blue','yellow','pink','beige','purple','greenyellow'];

body.style.backgroundColor=color[0];

button.addEventListener("click",changeBackground);

function changeBackground(){
    const colorIndex= parseInt(Math.random()*color.length)
     body.style.backgroundColor = color[colorIndex];
}