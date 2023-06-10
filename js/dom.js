
import { edit, arr,} from "./app.js";

function render() {
    let tbody = document.querySelector("tbody");

tbody.innerHTML="";


arr.forEach(elem => {
let cnt=0;
let tr = document.createElement("tr");
tbody.appendChild(tr);
let name=document.createElement("td");
tr.appendChild(name);
let suma=document.createElement("td");
name.innerHTML=elem.name;




for (const key in elem) {
if(key!="name"&&key!="id"&&key!="suma" &&key!="comp"){

cnt=cnt+Number(elem[key]);
if (cnt<80) {
    suma.style.backgroundColor="red";
} else  {
    suma.style.backgroundColor="green";
}
console.log(cnt);
let day1=document.createElement("td");
let day1input=document.createElement("input");
day1input.type="checkbox";
let day1num=document.createElement("td");
let day1span=document.createElement("span");
let day1input2=document.createElement("input");
let day1input3=document.createElement("input");
day1input3.type="button";
day1input3.classList.add("check");
day1input2.type="number";
day1input2.value=elem[key];


  
if (day1input.checked) {
    day1input2.disabled = false; 
}
day1input2.classList.add("num")
day1input3.value="√"
day1input2.onclick=()=>{
    day1input3.style.display="block"
   }




tr.appendChild(day1);
day1.appendChild(day1input);
tr.appendChild(day1num);
day1num.appendChild(day1span);
day1span.appendChild(day1input2);
day1span.appendChild(day1input3);


day1input3.onclick=()=>{
    edit(elem.id,key,day1input2.value)
   console.log(day1input2.value,elem.id,key);
    }
    

}
}
tr.appendChild(suma);
suma.innerHTML=cnt
})

}


export{

    render,
}