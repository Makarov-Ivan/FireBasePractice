//this script for fetching data from database
//+++++++++++++++++++++++++++++++++++++++++++++++

const cafeList = document.querySelector("#cafe-list"); //reference to list of cafes

//create elements and render cafe
function renderCafe(doc) {
  let li = document.createElement("li");
  let name = document.createElement("span");
  let city = document.createElement("span");
  let cross = document.createElement("div");

  li.setAttribute("data-id", doc.id); //adding data-id to li
  name.textContent = doc.data().name; //determine text of name span
  city.textContent = doc.data().city; //the same for city span
  cross.textContent = "X";

  cross.addEventListener("click", del);
  //nesting elements
  li.appendChild(name);
  li.appendChild(city);
  li.appendChild(cross);

  cafeList.appendChild(li);
}

db.collection("cafes")
  .get() //this grab all documents form CAFES collection in our DataBase
  .then((snapshot) => {
    //.get is an asynchronous function, so we use then. parameter is an spashot of our DataBase(array). for getting an data form DB, we should use .data() method for elements in this snapshot
    snapshot.docs.forEach((doc) => {
      renderCafe(doc);
    });
  });
