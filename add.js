//this script for adding data to database
//+++++++++++++++++++++++++++++++++++++++++++++++

const form = document.querySelector("#add-cafe-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("cafes").add({
    name: form.name.value,
    city: form.city.value,
  });
  form.name.value = "";
  form.city.value = "";
});
