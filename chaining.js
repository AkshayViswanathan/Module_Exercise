const fetchData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("data fetched");
    }, 1000);
  });
};

const processData = (data2) => {
  return new Promise((res, rej) => {
    if (data2 == "data fetched") {
      setTimeout(() => {
        res("data processed");
      }, 2000);
    }
  });
};

fetchData().then((data) => {
  console.log(data);
  processData(data).then((item)=> console.log(item))
})