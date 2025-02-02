// Solution using setInterval

let count = 0;

function updateCounter() {
  count += 1;
  console.log(`Counter`, count);
}
setInterval(updateCounter, 1000);
