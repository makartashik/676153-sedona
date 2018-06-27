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

var less = document.querySelectorAll(".less-amount-button");
var more = document.querySelectorAll(".more-amount-button");
var ad = adults.value;
var ch = child.value;


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

less.addEventListener("click", function (evt) {
    if (ad >= 2) {
        ad.value = parseInt("ad", 10) - 1;
    }
    if (ch >= 1) {
        ad.value = parseInt("ch", 10) - 1;
    }
    else {
      evt.preventDefault();
    }
});

more.addEventListener("click", function (evt) {
    if (ad >= 0) {
        ad.value = parseInt("ad", 10) + 1;
    }
    if (ch >= 0) {
        ad.value = parseInt("ch", 10) + 1;
    }
    else {
      evt.preventDefault();
    }
});
