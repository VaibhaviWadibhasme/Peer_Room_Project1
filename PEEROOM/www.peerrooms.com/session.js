var myHeaders = new Headers();
var accessToken = sessionStorage.getItem('TokenID');
console.log('Session ID:', accessToken);
myHeaders.append("Authorization", "Bearer " + accessToken);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000/v1/auth/me", requestOptions);
    let result = await response.text();
    result = JSON.parse(result)
    const name = result.content.data.name;
    const email = result.content.data.email;
    const mobileno = result.content.data.mobileno;
    const dob = result.content.data.created_at;
    // const name = result.content.data.name;
    console.log(name);
    
    console.log(result);
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const mobilenoElement = document.getElementById('mobileno');
    const dobElement = document.getElementById('dob');
    nameElement.value = result.content.data.name;
    emailElement.value = result.content.data.email;
    mobilenoElement.value = result.content.data.mobileno;
    dobElement.value = result.content.data.created_at;
  } catch (error) {
    console.log('Error:', error);
  }
}

fetchData();

// var myHeaders = new Headers();
// var accessToken = sessionStorage.getItem('TokenID');
// console.log('Session ID:', accessToken);
// myHeaders.append("Authorization", "Bearer " + accessToken);

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// async function fetchData() {
//   try {
//     const response = await fetch("http://localhost:3000/v1/auth/me", requestOptions);
//     const result = await response.text();
//     
//     console.log(result);
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }

// fetchData();
