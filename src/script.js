let sum = (function () {
  let total = 0;
  return function (number) {
    total += number;
    return total;
  };
})();

function addNumber() {
  const num = parseInt(document.getElementById("inputValue").value, 10);
  const total = sum(num);
  document.getElementById("result").innerText = "Сума: " + total;
}
