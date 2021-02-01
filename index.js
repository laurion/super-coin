let turns = 0;
let money = 250;
let headsProbability = 0.6;
// var firebaseConfig = {
//   apiKey: "AIzaSyBxUpM2HJJwkfICQmsuYfonGxklDh5sfP4",
//   authDomain: "super-coin-13eab.firebaseapp.com",
//   projectId: "super-coin-13eab",
//   storageBucket: "super-coin-13eab.appspot.com",
//   messagingSenderId: "99550835437",
//   appId: "1:99550835437:web:f911c6e27dfe96443852e4",
//   measurementId: "G-GR31E5D3TC"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// const db = firebase.database();
document.getElementById("flip_button").onclick = (e) => { 
  console.log("@");
  
  let betAmount = parseInt(document.getElementById("sum").value);
  if(!betAmount || betAmount > money) return false;
  
  let headsChecked = document.getElementById("heads").checked
  let tailsChecked = document.getElementById("tails").checked
  
  if(!headsChecked && !tailsChecked) return false;
  
  turns += 1
  
  let betResult = Math.random() > headsProbability ? tailsChecked : headsChecked;
  
  if(betResult) money += betAmount
  else money -= betAmount;
  
  let resultsTable = document.getElementById("results")
  let row = resultsTable.insertRow(0)
  row.insertCell().innerHTML = turns;
  row.insertCell().innerHTML = headsChecked ? "Heads" : "Tails";
  row.insertCell().innerHTML = betAmount;
  row.insertCell().innerHTML = betResult ? "Win" : "Loss";
  row.insertCell().innerHTML = money;
  // db.ref('bets').push({turns,headsChecked,betAmount,betResult,money})
  return false;
}
