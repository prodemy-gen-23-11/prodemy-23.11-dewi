axios
  .get("https://dummyjson.com/recipes/")
  .then((response) => {
    console.log("products:", response.data);
  })
  .catch((error) => console.log(error));
