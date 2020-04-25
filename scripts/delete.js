//this script for deleting data from database
//+++++++++++++++++++++++++++++++++++++++++++++++

function del(el) {
  let id = el.path[1].dataset.id; //getting parent of el
  db.collection("cafes").doc(id).delete().then(console.log("cafe was deleted")); //deleting this doc in database
}
