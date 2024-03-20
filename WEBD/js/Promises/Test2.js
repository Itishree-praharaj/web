let aptiRound = new Promise((resolve, reject) => {
  let res = true;
  if (res) resolve("Apti round Cleared");
  else reject("Apti round is not cleared");
});
let techRound = new Promise((resolve, reject) => {
  let res = true;
  if (res) resolve("Tech round Cleared");
  else reject("Tech round is not cleared");
});
let mgrRound = new Promise((resolve, reject) => {
  let res = true;
  if (res) resolve("Mgr round Cleared");
  else reject("Mgr round is not cleared");
});
let hrRound = new Promise((resolve, reject) => {
  let res = true;
  if (res) resolve("HR round Cleared");
  else reject("HR round is not cleared");
});

aptiRound
  .then((result) => {
    console.log(result);
    techRound
      .then((result) => {
        console.log(result);
        mgrRound
          .then((result) => {
            console.log(result);
            hrRound
              .then((result) => {
                console.log(result);
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
