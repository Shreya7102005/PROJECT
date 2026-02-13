// ===== ADD REVIEW =====
function addReview(){

 let vehicle = document.getElementById("vno").value;
 let text = document.getElementById("text").value;
 let label = document.getElementById("label").value;
 let rating = document.getElementById("rating").value;

 if(vehicle === "" || text === "" || label === ""){
  document.getElementById("msg").innerHTML =
  "❗ Please fill all fields";
  return;
 }

 fetch("http://127.0.0.1:5000/addReview",{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({
     vehicle: vehicle,
     text: text,
     label: label,
     rating: rating
  })
 })
 .then(res=>res.json())
 .then(data=>{
  document.getElementById("msg").innerHTML =
  "✅ Review Submitted Successfully!";
 })
 .catch(err=>{
  document.getElementById("msg").innerHTML =
  "⚠️ Server not running!";
 });
}


// ===== SELECT REVIEW TYPE =====
function selectType(type){

 let boxes = document.querySelectorAll(".type-box");
 boxes.forEach(b => b.classList.remove("active"));

 event.target.classList.add("active");

 document.getElementById("label").value = type;
}


// ===== STAR RATING =====
function rate(n){

 let stars = document.querySelectorAll(".stars span");

 stars.forEach((s,i)=>{
  if(i < n){
    s.classList.add("active");
  } else {
    s.classList.remove("active");
  }
 });

 document.getElementById("rating").value = n;
}


// ===== VERIFY RIDE =====
function verifyRide(){

 let vehicle = document.getElementById("vehicle").value;

 if(vehicle === ""){
  document.getElementById("result").innerHTML =
  "❗ Enter vehicle number";
  return;
 }

 document.getElementById("result").innerHTML =
 "Checking safety...";

 setTimeout(()=>{

  let random = Math.random();

  if(random > 0.6){
   document.getElementById("result").innerHTML =
   "✅ SAFE Ride";
  }
  else if(random > 0.3){
   document.getElementById("result").innerHTML =
   "⚠️ Be cautious";
  }
  else{
   document.getElementById("result").innerHTML =
   "🚨 UNSAFE Ride";
  }

 },1500);
}


// ===== SOS =====
function sendSOS(){

 alert("🚨 SOS sent!");

 if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(pos=>{
   console.log("Location:",
   pos.coords.latitude,
   pos.coords.longitude);
  });
 }
}


// ===== FAKE CALL =====
function fakeCall(){

 alert("📞 Incoming call...");

 let audio = new Audio("https://www.soundjay.com/phone/cell-phone-ring-01.mp3");
 audio.play();
}


// ===== PARTICLES =====
if(typeof particlesJS !== "undefined"){
 particlesJS("particles-js", {
  particles:{
    number:{ value:80 },
    color:{ value:"#ff0a3b" },
    shape:{ type:"circle" },
    opacity:{ value:0.5 },
    size:{ value:3 },
    line_linked:{
      enable:true,
      color:"#ff0a3b"
    },
    move:{
      enable:true,
      speed:2
    }
  }
 });
}
