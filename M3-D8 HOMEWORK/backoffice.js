//* This will help us to create new items by using the post method */
const url = "https://striveschool-api.herokuapp.com/api/product/";

const handleSubmit = (e) => {
  e.preventDefault(); // preventing the default browser event handling
  createProduct();
};

const createProduct = async () => {
  let myProduct = {
    // gathering the data from the form, field by field
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    brand: document.querySelector("#brand").value,
    imageUrl: document.querySelector("#image").value,
    price: document.querySelector("#price").value,
  };

  try {
    let response = await fetch(url, {
      // our POST request is made with the fetch method as well!
      method: "POST", // declaring the CRUD method
      body: JSON.stringify(myProduct), // we need to stringify the JS object in order to send it
      headers: new Headers({
        // we need also to declare the content type
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFkMjNmMmFkOGMzODAwMTc1YTMwNTAiLCJpYXQiOjE2MDUxODI0NTAsImV4cCI6MTYwNjM5MjA1MH0.4ORCkz8hmg1iguLxpA8mc8bmydX1CP6SCPkSXhMm8j4",

        "Content-Type": "application/json",
      }),
    });

    if (response.ok) {
      // checking the ok property which stores the successful result of the operation
      alert("Event created successfully");
      location.assign("index.html");
    } else {
      alert("Something went wrong!");
    }
  } catch (error) {
    console.log(error);
  }
};