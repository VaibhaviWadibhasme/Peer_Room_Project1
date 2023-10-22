const register = async(name,email,mobileno,password)=>{
  


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": name,
  "email": email,
  "password": password,
  "mobileno": mobileno
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

let result = await fetch("http://localhost:3000/v1/auth/signup", requestOptions);
result = await result.text();
result = JSON.parse(result);
console.log(result);
if(result.status == true){
  alert("register successfullY");
  window.location.href = 'file:///D:/Fourthyear/PEEROOM/www.peerrooms.com/User/myprofile.html';
}else{
  alert(result.error);
}

}


document.getElementById("F_cregister").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Retrieve form data
 const name= document.getElementById("name").value;
 const email=document.getElementById("email").value;
 const password=document.getElementById("password").value;
 const mobileno=document.getElementById("mobileno").value;
  // console.log(mobileno);
 register(name,email,mobileno,password)
});


