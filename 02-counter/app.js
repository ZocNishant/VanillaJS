// set initial count
let count = 0;

// select value and button
const value = document.getElementById("value");

const buttons = document.querySelectorAll(".btn");

buttons.forEach((buttonItem) => {
  buttonItem.addEventListener("click", function (event) {
    const styles = event.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
      value.style.color = "red";
    } else if (styles.contains("increase")) {
      count++;
      value.style.color = "green";
    } else {
      count = 0;
      value.style.color = "#102A42";
    }
    value.textContent = count;
  });
});
