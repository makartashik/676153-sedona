var search = document.querySelector(".search-section-container");
var button = search.querySelector(".search-section-button");
var blockForm = document.querySelector(".modal-search-form");
var form = document.querySelector(".search-form");
var arrival = form.querySelector("[name=arrival-date]");
var depart = form.querySelector("[name=departure-date]");
var adults = form.querySelector("[name=adults-amount]");
var child = form.querySelector("[name=child-amount]");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  blockForm.classList.toggle("modal-form-show");
    }
);

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !depart.value || !adults.value || !child.value) {
      evt.preventDefault();
      console.log("Заполните, пожалуйста, все поля");
    }
});
