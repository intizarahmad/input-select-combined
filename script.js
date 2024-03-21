const combinedInput = document.getElementById('combinedInput');
const combinedSelect = document.getElementById('combinedSelect');

combinedSelect.addEventListener('change', function () {
  combinedInput.value = combinedSelect.value;
});

combinedInput.addEventListener('input', function () {
  const selectedIndex = combinedSelect.selectedIndex;
  const inputValue = combinedInput.value;
  if (
    selectedIndex !== -1 &&
    combinedSelect.options[selectedIndex].value !== inputValue
  ) {
    combinedSelect.selectedIndex = -1; // Deselect if the input value changes
  }
});
