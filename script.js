const input = document.getElementById("input");
const result = document.getElementById("result");

let countries;
let newArray = [];

fetch("data/data.json")
  .then((res) => res.json())
  .then((data) => {
    countries = data;
  });

input.addEventListener("keyup", function (e) {

  let Val = input.value;

  // input value to lowercase
  let ValLower = Val.toLowerCase();

  // new filtered array
  newArray = countries.filter((matchCountry) => {
    // data to lowercase
    let dataLowerToName = matchCountry.name.toLowerCase();
    let dataLowerToCode = matchCountry.code.toLowerCase();

    // check if data includes input value
    return (
      dataLowerToName.startsWith(ValLower) ||
      dataLowerToCode.startsWith(ValLower)
    );
  });

  // new array length has to be greater than 0
  let strictData = newArray.length > 0;

  if (strictData) {
    // remove previous search
    result.innerHTML = "";

    // display the array
    for (let i = 0; i < newArray.length; i++) {
      let list = document.createElement("li");
      list.classList.add("listEl");
      let listEl = `${newArray[i].name} - ${newArray[i].code}`;
      list.append(listEl);
      result.append(list);
    }

    // remove if empty
    if (ValLower === "") {
      result.innerHTML = "";
    }
  }

  // otherwise
  else {
    result.innerHTML = "";
  }
});

