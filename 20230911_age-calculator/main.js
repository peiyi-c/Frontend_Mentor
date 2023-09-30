const form = document.querySelector("form");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const inputs = document.querySelectorAll("input[type=number]");
const resultDay = document.querySelector(".result-day");
const resultMonth = document.querySelector(".result-month");
const resultYear = document.querySelector(".result-year");

// state of "to calculate"
let state = true;

// alert message content
const alert = (reason, data) => {
  const messages = {
    require: "This field is required.",
    invalid: `Must be a valid ${data}.`,
  };
  return `${messages[reason]}`;
};

// display alert
const displayAlert = (field, reason, data) => {
  if (data === "date") {
    day.nextElementSibling.innerHTML = alert(reason, "date");
    field.previousElementSibling.style.color = "var(--lightRed)";
    field.style.borderColor = "var(--lightRed)";
  } else {
    field.nextElementSibling.innerHTML = alert(reason, field.name);
    field.previousElementSibling.style.color = "var(--lightRed)";
    field.style.borderColor = "var(--lightRed)";
  }
};

// remove an alert
const removeAlert = (field) => {
  field.nextElementSibling.innerHTML = "";
  field.previousElementSibling.style.color = "var(--smokeyGrey)";
  field.style.borderColor = "var(--lightGrey)";
};

// remove all alerts
const resetAlerts = () => {
  removeAlert(day);
  removeAlert(month);
  removeAlert(year);
};

// make result fields empty
const refreshResult = () => {
  resultDay.innerText = "- -";
  resultMonth.innerText = "- -";
  resultYear.innerText = "- -";
};

// BEFORE SUBMIT: check if values fall in valid range
const checkValidity = (field, max, min = 1) => {
  // empty the result before input is done
  refreshResult();
  // reset if the previous value was invalid
  if (!state) {
    removeAlert(field);
    state = true;
  }
  // check value min and max
  if (field.value > max || field.value < min) {
    displayAlert(field, "invalid", field.name);
    state = false;
  }
};

day.addEventListener("input", () => {
  checkValidity(day, 31);
});
day.addEventListener("change", () => {
  checkValidity(day, 31);
});
month.addEventListener("input", () => {
  checkValidity(month, 12);
});
month.addEventListener("change", () => {
  checkValidity(month, 12);
});
year.addEventListener("input", () => {
  checkValidity(year, new Date().getFullYear());
});
year.addEventListener("change", () => {
  checkValidity(year, new Date().getFullYear());
});

// After submit: check if required fields filled and if the date exists & in the past. If not, display alerts. If yes, calculate the age.

const checkRequired = (field) => {
  return !field.value ? false : true;
};

const checkDate = (d, m, y) => {
  const mIndex = Number(m.value) - 1;
  const date = new Date(y.value, mIndex, d.value);
  const today = new Date();
  //  if the date is invalid or in the future
  return date.getDate() !== Number(d.value) ||
    date.getMonth() !== mIndex ||
    date.getFullYear() !== Number(y.value) ||
    date > today
    ? false
    : true;
};

const calculateAge = (d, m, y) => {
  if (!state) {
    return;
  }
  if (d.split("").length < 2) {
    d = `0${d}`;
  }
  if (m.split("").length < 2) {
    m = `0${m}`;
  }

  const birthday = moment(`${y}-${m}-${d}`);
  const today = moment();
  const diff = moment.preciseDiff(birthday, today, true); // format esp.{ years: 32, months: 0, days: 10}

  resultYear.innerText = diff["years"];
  resultMonth.innerText = diff["months"];
  resultDay.innerText = diff["days"];
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (!state) {
    return;
  }
  // remove out-dated alerts
  resetAlerts();
  // check if all required fields are filled
  if (!checkRequired(day)) {
    displayAlert(day, "require");
  }
  if (!checkRequired(month)) {
    displayAlert(month, "require");
  }
  if (!checkRequired(year)) {
    displayAlert(year, "require");
  }
  if (!checkRequired(day) || !checkRequired(month) || !checkRequired(year)) {
    state = false;
    return;
  }
  // check if the date exists and was in the past.
  if (!checkDate(day, month, year)) {
    displayAlert(day, "invalid", "date");
    displayAlert(month, "invalid", "date");
    displayAlert(year, "invalid", "date");
    state = false;
    return;
  }
  // calculate age
  calculateAge(day.value, month.value, year.value);
};

form.addEventListener("submit", handleSubmit);
