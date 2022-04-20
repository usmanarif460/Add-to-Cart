const products = [
  {
    id: 1,
    name: "Cake",
    image: "/img/img-1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: 20,
  },
  {
    id: 2,
    name: "Pastery",
    image: "/img/img-2.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: 22,
  },
  {
    id: 3,
    name: "Biryani",
    image: "/img/img-3.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: 23,
  },
  {
    id: 4,
    name: "Chicken",
    image: "/img/img-5.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: 24,
  },
  {
    id: 5,
    name: "Cream Cake",
    image: "/img/img-4.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: 25,
  },
  {
    id: 6,
    name: "Pizza",
    image: "/img/img-6.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: 26,
  },
  {
    id: 7,
    name: "Mushroom-Pizza",
    image: "/img/img-7.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: 27,
  },
  {
    id: 8,
    name: "Ice-cream",
    image: "/img/img-8.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",

    price: 28,
  },
  {
    id: 9,
    name: "Salad",
    image: "/img/img-9.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    price: 29,
  },
];
// Function for Image Element
const createImageElement = (product) => {
  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", product.image);
  imageElement.setAttribute("alt", product.name);
  return imageElement;
};
// Function for paragraph Element
const createParagraphElement = (product) => {
  const paragraphElement = document.createElement("p");
  paragraphElement.innerText = product.name;
  paragraphElement.setAttribute("id", "name");
  return paragraphElement;
};

// function for Description element
const createDescriptionElement = (product) => {
  const descriptionElement = document.createElement("p");
  descriptionElement.innerText = product.description;
  descriptionElement.setAttribute("id", "description");
  return descriptionElement;
};
const createPriceElement = (product) => {
  const priceElement = document.createElement("p");
  priceElement.innerText = `Price: ${product.price}`;
  priceElement.setAttribute("id", "price");
  return priceElement;
};

const gridContainerElement = document.createElement("div");
gridContainerElement.classList.add("grid-container");

const createProductDynamically = (product) => {
  const div = document.createElement("div");
  div.classList.add("inner-div");
  div.onclick = () => {
    localStorage.setItem("product", JSON.stringify(product));
    window.open("/pages/product-page.html");
  };

  div.appendChild(createImageElement(product));
  div.appendChild(createParagraphElement(product));
  div.appendChild(createPriceElement(product));
  div.appendChild(createDescriptionElement(product));
  return div;
};

products.forEach((product) => {
  const innerStructure = createProductDynamically(product);
  gridContainerElement.appendChild(innerStructure);
});

document.body.append(gridContainerElement);
console.log("hello World");
