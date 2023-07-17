
let modal = document.querySelector("#Mymodal");
let add = document.querySelector('#add');
add.onclick = function(){
    modal.style.display = "block";
}
document.querySelector(".close").addEventListener("click",function(){
    modal.style.display = 'none';
})
window.onclick = function(e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  }




// ADD ITEM
document.querySelector("#addBtn").addEventListener("click",function(){
  let container = document.querySelector(".container");
  let box = document.createElement("div");
  let span1 = document.createElement("span");
  let span2 = document.createElement("span");
  let span3 = document.createElement("span");
  let span4 = document.createElement("span");
  let tv = document.querySelector("#c-title").value;
  let tn = document.querySelector("#c-number").value;
  let ts = document.querySelector("#c-status").value;
  
  let btn1 = document.createElement('button')
  let btn2 = document.createElement('button')
  btn1.className = "btn";
  btn2.className = "btn";
  btn1.innerText = "Update";
  btn2.innerText = "Delete";

let title = document.createTextNode(tv);
let number = document.createTextNode(tn);
let status = document.createTextNode(ts);

  span1.className = "contents-title";
  span2.className = "contents-number";
  span3.className = 'contents-status';
  span4.className = "contents-btn";
  
  if(tv === ""){
    alert('You must input title');
  }else{
    span1.appendChild(title);
   
  }
  if(tn === ""){
    alert('You must input quantity');
  }else{
    span2.appendChild(number);


  }
  if(ts === ""){
    alert('You must input status');
  }else{
    span3.appendChild(status);
    
  }
  if(ts === ""||tn ===""||tv ===""){
    
  }else{
    span4.appendChild(btn1);
    span4.appendChild(btn2);
    box.appendChild(span1);
    box.appendChild(span2);
    box.appendChild(span3);
    box.appendChild(span4);
    container.appendChild(box);
    document.querySelector("#c-title").value = "";
    document.querySelector("#c-number").value = "";
    document.querySelector("#c-status").value = ""; 
    modal.style.display = 'none';
  }
  
  box.className = "box";
 
})

