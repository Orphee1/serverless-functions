const result = document.querySelector(".result");

const fetchData = async () => {
  // console.log("second example");
  try {
    const { data } = await axios.get("/api/2-basic-api");
    // console.log(data);
    const products = data
      .map((product) => {
        const {
          id,
          name,
          image: { url },
          price,
        } = product;
        return `<article class="product">
      <img
        src="${url}"
        alt="${name}"
      />
      <div class="info">
        <h5>${name}</h5>
        <h5 class="price">$${price}</h5>
      </div>
    </article> 
      `;
      })
      .join("");

    // console.log(products);
    result.innerHTML = products;
  } catch (error) {
    console.log(error.response);
    result.innerHTML = `<h2>There was an error, please try again</h2>`;
  }
};

fetchData();
