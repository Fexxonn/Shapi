const container_products = document.getElementById("container_products");

const TargetsAll = (e) => {
  const Card = document.createElement("div");
  Card.className = "Card";
  Card.setAttribute("onclick", "start_modal()");
  container_products.appendChild(Card);

  Card.innerHTML = `
        <div class="img--container">
        <img
          src=${e.image}
          alt="" />
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
  });
};

API();

const modal = document.getElementById("modal");
const start_modal = () => {
  
  modal.style.display = "flex"
};

const end_modal = () => {

  modal.style.display = "none"
}

