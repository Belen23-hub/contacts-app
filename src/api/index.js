// async function fetchAPI(url, method="GET", sendData=null) {
//   const fetchOptions = {
//     method: method,
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlbGVuIiwiaWF0IjoxNjA1NTc0MDc0LCJleHAiOjE2MDYxNzg4NzR9.Z_8nOmNP4zfSnx_KM1NqrieX1rybNGQpQXhGwIZPOQI'
//     }
//   };

//   if (sendData) {
//     fetchOptions.body = JSON.stringify(sendData);
//   }

//   const response = await fetch(url, fetchOptions);
//   const data = await response.json();

//   return data;
// }