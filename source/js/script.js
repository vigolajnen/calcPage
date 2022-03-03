const form = document.querySelector("#js-form");
const formDate = form.querySelector("#beginningDate");
const formPrice = form.querySelector("#price");
const daysCount = form.querySelector("#countDays");
const visitsCount = form.querySelector("#countVisits");

const resultDate = document.querySelector("#resultDate");
const resultDaysCount = document.querySelector("#resultDays");
const resultVisitsCount = document.querySelector("#resultVisits");
const result = document.querySelector("#result");

const getResultDate = () => {
  const count = +daysCount.value;
  const newDate = new Date(formDate.value);
  newDate.setDate(newDate.getDate() + count - 1);
  return newDate.toLocaleDateString();
};

let getResultDays = (days, date) => {
  const now = new Date();
  const count = +days;
  const milliseconds = now - date;
  const seconds = milliseconds / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  let resultDays = Math.ceil(count - hours / 24);

  if (resultDays <= 0) {
    return (resultDays = 0);
  } else {
    return resultDays - 1;
  }
};

daysCount.addEventListener("change", (evt) => {
  evt.preventDefault();
  resultDaysCount.innerText = 0;
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  resultDate.innerText = getResultDate();
  resultDaysCount.innerText = getResultDays(
    daysCount.value,
    new Date(formDate.value)
  );

  resultVisitsCount.innerText = visitsCount.value - countUsedVisits.value;

  const visitPrice =
    (formPrice.value / visitsCount.value) *
    (visitsCount.value - countUsedVisits.value);
  const price = (formPrice.value / daysCount.value) * resultDaysCount.value;

  if (visitPrice > price) {
    result.innerText = price;
  } else {
    result.innerText = visitPrice;
  }
});
