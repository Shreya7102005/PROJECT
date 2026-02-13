function addReview(){

let vehicle = document.getElementById("vno").value;
let text = document.getElementById("text").value;
let label = document.getElementById("label").value;

fetch("http://127.0.0.1:5000/addReview",{
 method:"POST",
 headers:{"Content-Type":"application/json"},
 body:JSON.stringify({
     vehicle: vehicle,
     text: text,
     label: label
 })
})
.then(res=>res.json())
.then(data=>{
 document.getElementById("msg").innerHTML =
 "Review Added Successfully!";
});

}
particlesJS("particles-js", {
  particles:{
    number:{ value:80 },

    color:{ value:"#9c27b0" },

    shape:{ type:"circle" },

    opacity:{ value:0.5 },

    size:{ value:3 },

    line_linked:{
      enable:true,
      color:"#7b1fa2"
    },

    move:{
      enable:true,
      speed:2
    }
  }
});
