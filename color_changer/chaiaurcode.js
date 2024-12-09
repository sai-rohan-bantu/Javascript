const bg=document.querySelectorAll(".button");
const body=document.querySelector("body")

bg.forEach(function(button){
  console.log(button);
  button.addEventListener("click",function(e){
    console.log(e);
    console.log(e.target)
      const tar=e.target;
      if(tar.id === "grey"){
        body.style.backgroundColor="grey"
      }
      if(tar.id === "white"){
        body.style.backgroundColor="white"
      }
      if(tar.id === "yellow"){
        body.style.backgroundColor="yellow"
      }
      if(tar.id === "blue"){
        body.style.backgroundColor="blue"
      }
  })
})