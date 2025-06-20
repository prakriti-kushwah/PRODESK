const poundsInput = document.getElementById("pounds");
const result = document.getElementById("result");

poundsInput.addEventListener("input", () => {
  const pounds = parseFloat(poundsInput.value);
  if (!isNaN(pounds)) {
    const kilograms = (pounds * 0.453592).toFixed(2);
    result.textContent = `Your weight in kg is: ${kilograms}`;

    setTimeout(() => {
      result.textContent = "";
      poundsInput.value = "";
    }, 10000); // 10 seconds
  } else {
    result.textContent = "";
  }
});