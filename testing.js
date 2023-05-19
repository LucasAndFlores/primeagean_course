const http = require("http");

function handler() {
  //debugger;
  function bubble_sort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          const tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
        }
      }
    }
    return arr;
  }

  const test = bubble_sort([
    "ana@gmail.com",
    "breno@gmail.com",
    "daniel@gmail.com",
    "zalando@gmail.com",
    "wellignton@gmail.com",
    "bianca@gmail.com",
    "david@gmail.com",
    "felipe@gmail.com",
    "monica@gmail.com",
    "lucas@gmail.com",
    "nicolas@gmail.com",
  ]);
  console.log(test);
}

http
  .createServer((req, res) => {
    if (req.url === "/ok") {
      return handler();
    }
  })
  .listen(2222, () => {
    console.log("server is listening at 2222");
  });
