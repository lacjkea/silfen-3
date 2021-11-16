const url = "https://zuzanacreates.com/wp21d/wp-json/wp/v2/bag?_embed";

getData();
function getData() {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(showItems);
}

function showItems(items) {
  console.log(items);
  items.forEach(showOneItem);
}

function showOneItem(item) {
  console.log(item);
  const myTemplate = document.querySelector("template").content;
  const myClone = myTemplate.cloneNode(true);
  myClone.querySelector(".title").textContent = item.bag_name;
  myClone.querySelector(".price").textContent = item.price;
  myClone.querySelector("img").src = item.post;

  //   if (item.instock == 1) {
  //     myClone.querySelector("img").classList.add("soldout");
  //     myClone.querySelector("aside").textContent = item.title.rendered;
  //     console.log(item.instock);
  //   }
  document.querySelector(".products").appendChild(myClone);
}
