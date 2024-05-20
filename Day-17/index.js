// Promise
function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = false; // backend api call ->  false
        if (result) {
          resolve("Data successfully recevied.");
        } else {
          reject("Data Failed.");
        }
      }, 5000);
    });
  }
  
  getData()
    .then((response) => {
      console.log(response, "Success");
    })
    .catch((error) => {
      console.error(error, "Failed");
    });