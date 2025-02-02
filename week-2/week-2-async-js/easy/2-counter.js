let count = 0;

function updateCount() {
  setTimeout(() => {
    count++;
    console.log("Counter:", count);
    updateCount();
  }, 1000);
}

updateCount();
