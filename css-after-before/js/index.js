console.log("Index.js was loaded!");
let element = document.getElementById("figure");

element.addEventListener("mouseover",()=>{
    console.log("MouseOver");
})

function click_fn(e) {
  console.log("OnClickEvent");
  console.log("Event: ", e);
}
