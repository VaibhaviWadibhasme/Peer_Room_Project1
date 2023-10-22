const createBooking = async (paymentId, accommodationId, numberOfGuests, status) => {
  // Create headers
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.MDNmYzRmNTMtZjVjNy00NjgyLTk0YTctNWFkMTQzN2QwMjRi.ayPwHFq_BHe-V7KXS05Nut3FLexbfMmML7NsDhdLUV0");

  // Create request body
  var raw = JSON.stringify({
    "paymentid": paymentId,
    "accomodationid": accommodationId,
    "numberofguest": numberOfGuests,
    "status": status
  });

  // Set request options
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  // Make the POST request using fetch
  fetch("http://localhost:3000/v1/booking/newbooking", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
alert("Hello");
// Usage example
const paymentId = "5232fff-f5c7-4682-94a7-5ad1437d024c";
const accommodationId = "523432eeee-f5c7-4682-94a7-5ad1437d024b";
const numberOfGuests = 2;
const status = true;

createBooking(paymentId, accommodationId, numberOfGuests, status);
