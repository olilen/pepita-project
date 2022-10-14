//ALL SELECTORS//

//Nav Selectors
const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");
const mainBody = document.querySelector(".main");

//Ticket Selectors
const ticketDaysContainer = document.querySelector(".tickets__days");
const ticketDays = document.querySelectorAll(".tickets__day");

const ticketDatesContainer = document.querySelectorAll(".tickets__date");
const ticketDateToday = document.querySelector(".tickets__date-today");
const ticketDateTomorrow = document.querySelector(".tickets__date-tomorrow");
const ticketDateOther = document.querySelector(".tickets__date-other");

//Ticket amount and summary selectors
//Ticket selectors for students
const student = document.querySelector(".purchase__amount-student");

const studentPlus = document.querySelector(".plus-student");
const studentMinus = document.querySelector(".minus-student");

//Ticket selectors for seniors
const senior = document.querySelector(".purchase__amount-senior");
const seniorPlus = document.querySelector(".plus-senior");
const seniorMinus = document.querySelector(".minus-senior");

//Ticket selectors for adults
const adult = document.querySelector(".purchase__amount-adult");
const adultPlus = document.querySelector(".plus-adult");
const adultMinus = document.querySelector(".minus-adult");

//Total price of the tickets
const totalTicketPrice = document.querySelector(".total-price");

//Hamburger Menu Code
let showMenu = false;

menuBtn.addEventListener("click", function () {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    mainBody.classList.add("translate");
    mainBody.classList.remove("translate-back");

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    mainBody.classList.remove("translate");
    mainBody.classList.add("translate-back");

    showMenu = false;
  }
});

// Ticket Days Tab Code //

//Getting current date:
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const date = new Date();
const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];

const dateToday = `${monthNames[month]} ${day}, ${year}`;

const dateTomorrow = `${monthNames[month]} ${day + 1}, ${year}`;

//Displaying date:
const displayDates = function (day) {
  if (day === "today") {
    ticketDateToday.textContent = `
  ${dateToday}
  Open 10:30am-5:30pm
  `;
  }

  if (day === "tomorrow") {
    ticketDateTomorrow.textContent = `
    ${dateTomorrow}
    Open 10:30am-5:30pm
    `;
  }
};
displayDates("today");
displayDates("tomorrow");

//Changing Days Tabs
ticketDaysContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tickets__day");

  // Guard clause
  if (!clicked) return;

  // Remove active classes

  ticketDays.forEach(function (day) {
    day.classList.remove("active-day");
  });

  // Activate tab
  clicked.classList.add("active-day");

  ticketDatesContainer.forEach(function (date) {
    date.classList.remove("visible");
  });

  if (clicked.dataset.day === "today") {
    ticketDateToday.classList.add("visible");
  }
  if (clicked.dataset.day === "tomorrow") {
    ticketDateTomorrow.classList.add("visible");
  }
  if (clicked.dataset.day === "other") {
    ticketDateOther.classList.add("visible");
  }
  // if (clicked.dataset.day === "today") {
  //   ticketDatesContainer.forEach(function (day) {
  //     day.classList.remove("active-day");
  //   });
  // }
});

// Adding and removing tickets //
//Variables and functions//
let totalPrice = 0;

const studentTicketPrice = 4;
let studentTicketAmount = 0;

const seniorTicketPrice = 4;
let seniorTicketAmount = 0;

const adultTicketPrice = 8;
let adultTicketAmount = 0;

const displayTickets = function (amount, person) {
  person.textContent = amount;

  amount > 0 ? person.classList.add("active-ticket") : person.classList.remove("active-ticket");
};

const calcTotalPrice = function (person, value) {
  if (value === "add") {
    totalPrice += person;
    totalTicketPrice.textContent = `$${totalPrice}`;
  }

  if (value === "subtract") {
    totalPrice -= person;
    totalTicketPrice.textContent = `$${totalPrice}`;
  }
};

//Student Ticket Code//

studentPlus.addEventListener("click", function () {
  studentTicketAmount += 1;

  displayTickets(studentTicketAmount, student);
  calcTotalPrice(studentTicketPrice, "add");
});

studentMinus.addEventListener("click", function () {
  if (studentTicketAmount === 0) {
    return;
  } else {
    studentTicketAmount -= 1;
  }

  displayTickets(studentTicketAmount, student);
  calcTotalPrice(studentTicketPrice, "subtract");
});

//Senior Ticket Code//

seniorPlus.addEventListener("click", function () {
  seniorTicketAmount += 1;

  displayTickets(seniorTicketAmount, senior);
  calcTotalPrice(seniorTicketPrice, "add");
});

seniorMinus.addEventListener("click", function () {
  if (seniorTicketAmount === 0) {
    return;
  } else {
    seniorTicketAmount -= 1;
  }

  displayTickets(seniorTicketAmount, senior);
  calcTotalPrice(seniorTicketPrice, "subtract");
});

//Adult Ticket Code//

adultPlus.addEventListener("click", function () {
  adultTicketAmount += 1;

  displayTickets(adultTicketAmount, adult);
  calcTotalPrice(adultTicketPrice, "add");
});

adultMinus.addEventListener("click", function () {
  if (adultTicketAmount === 0) {
    return;
  } else {
    adultTicketAmount -= 1;
  }

  displayTickets(adultTicketAmount, adult);
  calcTotalPrice(adultTicketPrice, "subtract");
});
