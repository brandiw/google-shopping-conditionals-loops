var data = require('../products.json');

//QUESTION 1
// var count = 0;

// for(var i = 0; i < data.items.length; i++){
//   if(data.items[i].kind == "shopping#product"){
//     console.log(data.items[i].product.title);
//     count++;
//   }
// }

// console.log("TOTAL ITEMS FOUND: ", count);
// console.log("LOOKS LIKE WE ALSO HAVE THIS DATA STORED IN 'currentItemCount'");

//QUESTION 2
// for(var i = 0; i < data.items.length; i++){
//   if(data.items[i].product.inventories[0].availability == "backorder"){
//     console.log(data.items[i].product.title, "is currently on back order. :( :( :(");
//   }
// }

//QUESTION 3
for(var i = 0; i < data.items.length; i++){
  if(data.items[i].product.images.length > 1){
    console.log("LOOK AT ALL THE PICS OF", data.items[i].product.title);
  }
}

