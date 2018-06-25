var search = document.querySelector(".search-section-container");
var button = search.querySelector(".search-section-button");
var form = document.querySelector(".modal-search-form");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("modal-form-show");
});
