const form = document.querySelector("#js-form");
const formDate = form.querySelector("#beginningDate");
const formPrice = form.querySelector("#price");
const daysCount = form.querySelector("#countDays");
const visitsCount = form.querySelector("#countVisits");

const resultDate = document.querySelector("#resultDate");
const resultDaysCount = document.querySelector("#resultDays");
const resultVisitsCount = document.querySelector("#resultVisits");
const result = document.querySelector("#result");

// использовано 37 дней, 32 визита;


const getResultDate = () => {
  const count = +daysCount.value;
  const newDate = new Date(formDate.value);
  newDate.setDate(newDate.getDate() + count - 1);
  return newDate.toLocaleDateString();
}

const getResultDays = (days, date) => {
  const now = new Date();
  const count = +days;
  const milliseconds = now - date;
  const seconds = milliseconds / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const resultDays = Math.ceil(count - hours / 24);
  if (resultDays <= 0) resultDays = 0;
  return resultDays;
};


daysCount.addEventListener("change", (evt) => {
  evt.preventDefault();

  resultDaysCount.innerText = 0;
});


form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  resultDate.innerText = getResultDate();
  resultDaysCount.innerText = getResultDays(
    daysCount.value,
    new Date(formDate.value)
  );
  resultVisitsCount.innerText = visitsCount.value - countUsedVisits.value;
  result.innerText =
    (formPrice.value / daysCount.value) *
    getResultDays(daysCount.value, new Date(formDate.value));;


  console.log(formDate.value);
  console.log(formPrice.value);
  console.log(daysCount.value);
  console.log(visitsCount.value);

});
