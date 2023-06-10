import {render} from "./dom.js";

let arr=[]
let url="http://localhost:3000/stud"



async function get() {
    try {
        let {data} = await axios.get(url);
        arr=[...data]
        render();
        console.log(arr);
    } catch (error) {
        
    }
    
}

get()


async function edit(elem,key,day1input2) {
    let obj=arr.find(ele => ele.id ==elem)
  
    obj[key]=day1input2;
    console.log(obj.key,obj.value);
      try {
          let {data} = await axios.put(`${url}/${elem}`,obj);
        render()
      } catch (error) {
          
      }
      
  }

  export{
    edit,
    get,
    arr,
  }