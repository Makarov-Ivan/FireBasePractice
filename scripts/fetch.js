//this script for fetching data from database
//+++++++++++++++++++++++++++++++++++++++++++++++

//this approach doesn't react to changes in firebase
// db.collection("cafes") //query to this collection in our firebase
//   // .where("city", "==", "Moscow") //selecting only cafes in Moscow
//   .orderBy("name") //ordering them in specific way
//   .get() //this grab all documents form CAFES collection in our DataBase
//   .then((snapshot) => {
//     //.get is an asynchronous function, so we use then. parameter is an spashot of our DataBase(array). for getting an data form DB, we should use .data() method for elements in this snapshot
//     snapshot.docs.forEach((doc) => {
//       renderCafe(doc);
//     });
//   });

//permanent listening
db.collection("cafes")
  .orderBy("city")
  .onSnapshot((snapshot) => {
    let changes = snapshot.docChanges();
    console.log(changes);
    changes.forEach((change) => {
      if (change.type == "added") {
        renderCafe(change.doc);
      } else {
        let li = document.querySelector("[data-id=" + change.doc.id + "]");
        cafeList.removeChild(li);
      }
    });
  });
