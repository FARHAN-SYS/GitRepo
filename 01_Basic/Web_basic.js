// function bag_button() {
//   alert("Item(s) has been added to Bag");
// }

function bag_button() {
  let cartQuantity = 0;
  document.querySelector(
    "#cart-summary"
  ).innerText = `Your bag has ${cartQuantity} Items`;
}
