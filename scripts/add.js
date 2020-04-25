//this script for adding data to database
//+++++++++++++++++++++++++++++++++++++++++++++++

const form = document.querySelector("#add-cafe-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent deafult form acting
  db.collection("cafes").add({
    //creating new doc in collection
    name: form.name.value,
    city: form.city.value,
  });
  //reset form
  form.name.value = "";
  form.city.value = "";
});
