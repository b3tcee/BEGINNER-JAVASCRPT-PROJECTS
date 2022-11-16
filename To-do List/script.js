
let todoItems = document.querySelector(".to-doItems"),
    input = document.getElementById("input"),
    trashIcon = document.getElementById("trash");
//===USING THE ENTER KEY TO SUBMIT===//
input.addEventListener("keydown", function(event){
    if(event.key == "Enter")
    addItem();
})

//===ADDING ITEMS TO THE LIST===//
function addItem(){
    var DivParent = document.createElement("div");
    var DivChild = document.createElement("div");
    var checkIcon= document.createElement("i");
    var trashIcon= document.createElement("i");

    //==CREATING DIV FOR INPUT==//
    DivParent.className = "item";
    DivParent.innerHTML = '<div>'+input.value+ '</div>';

    checkIcon.className = "fa-solid fa-square-check";
    checkIcon.style.color = "lightgray";
    checkIcon.style.marginRight= "10px";
    checkIcon.addEventListener("click", function(){
        checkIcon.style.color= "limegreen";
    })

    DivChild.appendChild(checkIcon);

    //==DELETE ITEMS FROM THE LIST===//

    trashIcon.className = "fa-sharp fa-solid fa-trash";
    checkIcon.style.color = "darkgray";
    checkIcon.addEventListener("click", Delete);
    function Delete(){
        DivParent.remove();
    }
    
    DivChild.appendChild(trashIcon);

    DivParent.appendChild (DivChild);

    todoItems.appendChild(DivParent);

    input.value= " ";
}


// document.querySelector("#input").addEventListener("keydown", (event) => {
//     if(event.key === "Enter"){
//       const input = document.querySelector("#input");
//       addItem(input.value);
//     }
      
//   });
  
//   document.querySelector("#add_item").addEventListener("click", () => {
//     const input = document.querySelector("#input");
//     addItem(input.value);
//   });
  
//   addItem = (input) => {
//     const item = document.createElement("div");
//     const div = document.createElement("div");
//     const checkIcon = document.createElement("i");
//     const trashIcon = document.createElement("i");
//     const text = document.createElement("p");
  
//     item.className = "item";
//     text.textContent = input;
  
//     checkIcon.className = "fas fa-check-square";
//     checkIcon.style.color = "lightgray";
//     checkIcon.addEventListener("click", () => {
//       checkIcon.style.color = "limegreen";
//     })
//     div.appendChild(checkIcon);
  
//     trashIcon.className = "fas fa-trash";
//     trashIcon.style.color = "darkgray";
//     trashIcon.addEventListener("click", () => {
//       item.remove();
//     })
//     div.appendChild(trashIcon);
  
//     item.appendChild(text);
//     item.appendChild(div);
  
//     document.querySelector("#to_do_list").appendChild(item);
//     document.querySelector("#input").value = "";
//   }