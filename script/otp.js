const verificationInputs = document.querySelectorAll(".verification-input");

verificationInputs.forEach((input, index) => {
  input.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      if (index < 3) {
        verificationInputs[index + 1].focus();
      }
    } else if (e.key === "Backspace") {
      if (index > 0) {
        verificationInputs[index - 1].focus();
      }
    }
  });
});
