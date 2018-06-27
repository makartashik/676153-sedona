var search = document.querySelector(".search-section-container");
var button = search.querySelector(".search-section-button");
var blockForm = document.querySelector(".modal-search-form");
var form = document.querySelector(".search-form");
var arrival = form.querySelector("[name=arrival-date]");
var depart = form.querySelector("[name=departure-date]");
var adults = form.querySelector("[name=adults-amount]");
var child = form.querySelector("[name=child-amount]");
var isStorageSupport = true;
var storageAd = "";
var storageCh = "";

try {
    storageAd = localStorage.getItem("adults");
    storageCh = localStorage.getItem("child");
} catch (err) {
    isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  blockForm.classList.toggle("modal-form-show");
  arrival.focus();
  if (storageAd) {
      adults.value = storageAd;
    }
  if (storageCh) {
      child.value = storageCh;
    }
  }
);

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !depart.value || !adults.value || !child.value) {
      evt.preventDefault();
      console.log("Заполните, пожалуйста, все поля");
      blockForm.classList.remove("form-error");
      blockForm.offsetWidth = blockForm.offsetWidth;
      blockForm.classList.add("form-error");
    }
  else {
        if (isStorageSupport) {
          localStorage.setItem("adults", adults.value);
      }
        if (isStorageSupport) {
          localStorage.setItem("child", child.value);
      }
    }
});
