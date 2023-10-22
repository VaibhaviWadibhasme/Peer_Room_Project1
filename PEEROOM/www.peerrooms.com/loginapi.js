const signIn = async (email, password) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": email,
      "password": password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const response = await fetch("http://localhost:3000/v1/auth/signin", requestOptions);
    const result = await response.text();

    if (result === "User not found.") {
      alert(result);

    } else { 
      //console.log(result)
      let Result = JSON.parse(result)
      const accessToken = Result.content.meta.access_token;
      console.log(accessToken);
      sessionStorage.setItem('TokenID', accessToken);
       window.location.href = 'file:///D:/Fourthyear/PEEROOM/www.peerrooms.com/User/myprofile.html';
    }
    
  } catch (error) {
    console.log('error', error);
  }
}

// document.getElementById("workingyear").addEventListener("submit", function(event) {
//   event.preventDefault();

//   const user_email = document.getElementById("user_email").value;
//   const user_password = document.getElementById("user_password").value;
//   alert("Hello");
//   signIn(user_email, user_password);
// });

// console.log("2222");
// const signIn = async (email, password) => {
//  var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "email": email,
//   "password": password
// });

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("http://localhost:3000/v1/auth/signin", requestOptions)
//   .then(response => response.text())
//   .then(result => 

//       result==="User not found."?alert(result):window.location.href = 'file:///D:/Fourthyear/PEEROOM/www.peerrooms.com/OLERJMAH1221.html'
//     )
// // Session Code Creation user ka token save hoga
//   .catch(error => console.log('error', error));
// }



document.getElementById("workingyear").addEventListener("submit", function(event) {
  event.preventDefault();
  // alert("Hello");
  // Retrieve form data

 const user_email= document.getElementById("user_email").value;
 const user_password= document.getElementById("user_password").value;
// 
  //console.log(user_email,user_password);
  signIn(user_email,user_password);
//  register(email,password)
});
console.log("2222");

