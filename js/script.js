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
  arrival.focus();
    }
);

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !depart.value || !adults.value || !child.value) {
      evt.preventDefault();
      console.log("Заполните, пожалуйста, все поля");
    }
  if (!arrival.value) {
      arrival.classList.remove("form-error");
      arrival.offsetWidth = arrival.offsetWidth;
      arrival.classList.add("form-error");
    }
  if (!depart.value) {
       depart.classList.remove("form-error");
       depart.offsetWidth = depart.offsetWidth;
       depart.classList.add("form-error");
      }
  if (!adults.value) {
       adults.classList.remove("form-error");
       adults.offsetWidth = adults.offsetWidth;
       adults.classList.add("form-error");
      }
  if (!child.value) {
       child.classList.remove("form-error");
       child.offsetWidth = child.offsetWidth;
       child.classList.add("form-error");
      }
});
