//this script for rendering fetched data from database
//+++++++++++++++++++++++++++++++++++++++++++++++

const cafeList = document.querySelector("#cafe-list"); //reference to list of cafes

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
