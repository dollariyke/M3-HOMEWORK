     
    /* The code below will add retrieval of data from the API using GET method */
     window.onload = async () => {
        const url = "https://striveschool-api.herokuapp.com/api/product/";
        let wrapper = document.querySelector("#card-container");
        try {
          let response = await fetch(url, {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFkMjNmMmFkOGMzODAwMTc1YTMwNTAiLCJpYXQiOjE2MDUxODI0NTAsImV4cCI6MTYwNjM5MjA1MH0.4ORCkz8hmg1iguLxpA8mc8bmydX1CP6SCPkSXhMm8j4",
            },
          });
          let data = await response.json();
          console.log(data);
          if (data.length > 0) {
            data.forEach((e) => {
              wrapper.innerHTML += `<div class="col-md-3" id="card-con"><div class="card">
            <img src=${e.imageUrl} class="card-img-top image-fluid" alt="..." />
            <div class="card-body">
              <h6 class="card-title">${e.brand}</h6>
              <p class="card-text">
              ${e.description} 
              </p>
              <div class="bottom-details d-flex justify-content-between">
              <span class="card-text">USD${e.price}</span> 
              <a href="#" class="btn btn-success">EDIT</a>
              </div>
            </div>
          </div> </div>`;
            });
          } else {
            wrapper.innerHTML = "<h1> No products for now</h1>";
          }
        } catch (error) {
          alert("Something went wrong");
        }
      };