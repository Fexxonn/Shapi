let data = [];
const container_products = document.getElementById("container_products");

const TargetsAll = (e) => {
  const Card = document.createElement("div");
  Card.className = "Card";
  Card.setAttribute("onclick", `start_modal(${JSON.stringify(e)})`);
  container_products.appendChild(Card);

  Card.innerHTML = `
    <div class="img--container">
      <img src="${e.image}" alt="" />
    </div>
    <p>${e.title}</p>
    <strong>€ ${e.price}</strong>
  `;
};

const API = async () => {
  const response = await fetch("./products.JSON");
  const information = await response.json();

  information.forEach((e) => {
    TargetsAll(e);
    data.push(e);
  });
};

API();

const modal = document.getElementById("modal");
const start_modal = (productData) => {
  modal.innerHTML = `
    <div class="container__modal">
      <span id="close" onclick="end_modal()">X</span>
      <div class="container__modal--img">
        <img src="${productData.image}" alt="Imagen" />
      </div>
      <div class="container__modal--txt">
        <h2>${productData.title}</h2>
        <p>${productData.category}</p>
        <h5>${productData.description || "No disponible"}</h5>
        <strong>€ ${productData.price}</strong>
      </div>
    </div>
  `;
  modal.style.display = "flex";
};

const end_modal = () => {
  modal.style.display = "none";
};
