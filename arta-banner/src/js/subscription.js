export function initSubscription() {
  const links = {
    yearly: "https://apple.com/",
    weekly: "https://google.com/",
  };

  let selectedOption = null;

  const yearlyBtn = document.querySelector(".option--best-offer");
  const weeklyBtn = document.querySelector(".option--offer");
  const continueBtn = document.querySelector(".option--continue");

  function selectOption(option) {
    selectedOption = option;

    yearlyBtn.classList.remove("selected");
    weeklyBtn.classList.remove("selected");

    if (option === "yearly") {
      yearlyBtn.classList.add("selected");
    } else if (option === "weekly") {
      weeklyBtn.classList.add("selected");
    }
  }

  yearlyBtn.addEventListener("click", () => selectOption("yearly"));
  weeklyBtn.addEventListener("click", () => selectOption("weekly"));

  continueBtn.addEventListener("click", () => {
    if (selectedOption && links[selectedOption]) {
      window.location.href = links[selectedOption];
    } else {
      alert("Please select a subscription option.");
    }
  });
}
