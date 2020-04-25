//this script for deleting data from database
//+++++++++++++++++++++++++++++++++++++++++++++++

function del(el) {
  let id = el.path[1].dataset.id;
  console.log(db.collection("cafes").doc(id).delete());
}
