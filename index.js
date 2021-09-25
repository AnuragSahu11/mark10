const currency = [2000, 500, 100, 20, 10, 5, 1];

const paidBlock = document.querySelector("#paid");
const bill = document.querySelector(".input_bill");
const paid = document.querySelector(".input_paid");
const alert = document.querySelector(".alert");
const button = document.querySelector(".button");
const thead = document.querySelector(".thead");

function calcChange(money) {
  const note = [
    { name: 2000, num: 0 },
    { name: 500, num: 0 },
    { name: 100, num: 0 },
    { name: 20, num: 0 },
    { name: 10, num: 0 },
    { name: 5, num: 0 },
    { name: 1, num: 0 },
  ];

  let i = 0;

  while (money > 0) {
    if (money === 0) {
      break;
    }
    if (money >= currency[i]) {
      money = money - currency[i];

      note[i].num++;
    }
    if (money < currency[i]) {
      i++;
    }
  }
  return note;
}
bill.addEventListener("input", () => {
  paidBlock.classList.remove("is-hidden");
});

button.addEventListener("click", () => {
  thead.innerHTML = "";
  if (paid.value > 0 && bill.value > 0) {
    let amount = paid.value - bill.value;
    
    if (amount < 0) {
      alert.innerHTML = "Do you want to wash dishes?";
    } else {
      note = calcChange(amount);
      alert.innerHTML = ``;
    }
    thead.innerHTML = `<tr>
    <th>Amount</th>
    <td>2000</td>
    <td>500</td>
    <td>100</td>
    <td>20</td>
    <td>10</td>
    <td>5</td>
    <td>1</td>
  </tr>
  <tr>
    <th>Quantity</th> 
    <td>${note[0].num}</td>
    <td>${note[1].num}</td>
    <td>${note[2].num}</td>
    <td>${note[3].num}</td>
    <td>${note[4].num}</td>
    <td>${note[5].num}</td>
    <td>${note[6].num}</td>
  </tr>`;
  } else {
    alert.innerHTML = "Enter correct amount";
  }
});

// note.forEach((item) => {
//   if (item.num > 0) {
//     let a = document.createElement("tr");
//     let b = document.createElement("td");
//     let c = document.createElement("td");

//     b.innerHTML = `${item.name}`;
//     c.innerHTML = `${item.num}`;

//     a.appendChild(b);
//     a.appendChild(c);
//     tbody.appendChild(a);
//   }
// });
