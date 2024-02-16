fetch("./class.json")
  .then((res) => res.json())
  .then((data) => {
    const cardList = document.getElementById("cardList");
    const card = data.map(
      (item) => `
  <div class="card">
    <img src=${item.ImageUrl} alt="Hello"/>
    <div class="card-body">
      <h5 class="card-title">${item.Name}</h5>
      <p class="card-text">${item.ShortDesc.slice(0, 65)}...</p>
      <button class="btn btn-outline-dark">View</button>
    </div>
  </div>
  `
    );
    cardList.innerHTML = card.join("");
  });
