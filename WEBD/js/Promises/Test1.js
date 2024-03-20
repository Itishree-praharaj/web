let p1 = new Promise((resolve, reject) => {
  let isDataReceived = false;
  if (isDataReceived) resolve("Data is Received");
  else reject("Data is not received");
});
p1.then((result) => {
  console.log(result);
}).catch((err) => {
  console.error(err);
});
