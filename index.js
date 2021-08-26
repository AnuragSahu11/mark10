const currency = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

const paidBlock = document.querySelector('#paid')
const bill = document.querySelector(".input_bill");
const paid = document.querySelector(".input_paid");
const alert = document.querySelector(".alert");
const button = document.querySelector(".button");
const tbody = document.querySelector(".tbody");

function calcChange(money) {
  const note = [
    { name: 2000, num: 0 },
    { name: 500, num: 0 },
    { name: 200, num: 0 },
    { name: 200, num: 0 },
    { name: 50, num: 0 },
    { name: 20, num: 0 },
    { name: 10, num: 0 },
    { name: 5, num: 0 },
    { name: 2, num: 0 },
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
bill.addEventListener('input',()=>{
  paidBlock.classList.remove('is-hidden')
})

button.addEventListener("click", () => {
  
  tbody.innerHTML = "";
  let amount = paid.value - bill.value;
  if (amount < 0) {
    alert.innerHTML = "Do you want to wash dishes?";
  } else {
    note = calcChange(amount);
  }
  note.forEach((item) => {
    if (item.num > 0) {
      let a = document.createElement("tr");
      let b = document.createElement("td");
      let c = document.createElement("td");

      b.innerHTML = `${item.name}`;
      c.innerHTML = `${item.num}`;

      a.appendChild(b);
      a.appendChild(c);
      tbody.appendChild(a);
    }
  });
});
