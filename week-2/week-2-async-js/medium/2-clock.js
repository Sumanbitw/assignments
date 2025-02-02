// Using setInterval
// function clock() {
//   const date = new Date();

//   //24 hour format
//   const hours24 = date.getHours().toString().padStart(2, "0");
//   const minutes = date.getMinutes().toString().padStart(2, "0");
//   const seconds = date.getSeconds().toString().padStart(2, "0");

//   console.log(date.getHours());
//   //12 hour format
//   const hours12 = (date.getHours() % 12).toString().padStart(2, "0") || 12;
//   const ampm = date.getHours() >= 12 ? "PM" : "AM";

//   console.log(`${hours24}:${minutes}:${seconds}`);

//   //12hour format

//   console.log(`${hours12}:${minutes}:${seconds} ${ampm}`);
// }

// setInterval(clock, 1000);

// Using setTimeout

function clock() {
  const date = new Date();

  //24 hour format
  const hours24 = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  console.log(date.getHours());
  //12 hour format
  const hours12 = (date.getHours() % 12).toString().padStart(2, "0") || 12;
  const ampm = date.getHours() >= 12 ? "PM" : "AM";

  console.log(`${hours24}:${minutes}:${seconds}`);

  //12hour format

  console.log(`${hours12}:${minutes}:${seconds} ${ampm}`);
  setTimeout(clock, 1000);
}

clock();
