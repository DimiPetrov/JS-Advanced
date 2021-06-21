// function solve() {
//   const textareas = document.querySelectorAll('textarea');
//   const buttons = document.querySelectorAll('button');
//   const body = document.querySelector('tbody');

//   buttons[0].addEventListener('click', function(e) {
//     const arr = JSON.parse(textareas[0].value);

//     for(let el of arr) {
//       const row = document.createElement('tr');

//       const cellImage = document.createElement('td');
//       const image = document.createElement('img');
//       image.setAttribute('src', el.img);
//       cellImage.appendChild(image);

//       const cellName = document.createElement('td');
//       const pName = document.createElement('p');
//       pName.textContent = el.name;
//       cellName.appendChild(pName);

//       const cellPrice = document.createElement('td');
//       const pPrice = document.createElement('p');
//       pPrice.textContent = el.price;
//       cellPrice.appendChild(pPrice);

//       const cellDecor = document.createElement('td');
//       const pDecor = document.createElement('p');
//       pDecor.textContent = el.decor;
//       cellDecor.appendChild(pDecor);
      
//       const cellCheck = document.createElement('td');
//       const input = document.createElement('input');
//       input.setAttribute('type', 'checkbox');
//       cellCheck.appendChild('input');

//       row.appendChild(cellImage);
//       row.appendChild(cellName);
//       row.appendChild(cellPrice);
//       row.appendChild(cellDecor);
//       row.appendChild(cellCheck);

//       body.appendChild(row);
//     }
//   });

//   buttons[1].addEventListener('click', function(e) {
//     const furniture = Array.from(body.querySelectorAll('input[type=checkbox]:checked'))
//     .map(input => input.parentNode.parentNode);

//     const result = furniture.reduce((result, row) => {
//       const cells = row.children;

//       const name = cells[0].children[0].textContent;
//       result.bought.push(name);

//       const price = Number(cells[2].children[0].textContent);
//       result.totalPrice += price;

//       const factor = Number(cells[3].children[0].textContent);
//       result.decFactorSum += factor;

//       return result;
//     }, {
//       bought: [],
//       totalPrice: 0,
//       decFactorSum: 0
//     });


//     textareas[1].value = `Bought furniture: ${result.bought.join(', ')}\nTotal price: ${result.totalPrice.toFixed(2)}
//     \nAverage decoration factor: ${(result.decFactorSum/furniture.length).toFixed(2)}`;
//   });
// }


function solve() {

  let textAreas = document.getElementsByTagName('textarea');
  let inputArea = textAreas[0];
  let outputArea = textAreas[1];
  let buttons = document.getElementsByTagName('button');
  let buttonGenerate = buttons[0];
  let buttonBuy = buttons[1];
  let tableBody = document.getElementsByTagName('tbody')[0];

  buttonGenerate.addEventListener('click', (e) => {
    let newFurniture = JSON.parse(inputArea.value);

    newFurniture.forEach(element => {
      let tableRow = document.createElement('tr');
      let furnitureObject = element;

      //Create table data
      let td;
      let row = [];
      for (const [key, value] of Object.entries(furnitureObject)) {
        td = document.createElement('td');
        if (key === 'img') {
          let image = document.createElement('img');
          image.src = value;
          td.appendChild(image)
          row.unshift(td);
        } else {
          let p = document.createElement('p');
          p.textContent = value;
          td.appendChild(p);
          row.push(td);
        }
      }
      row.map(x => tableRow.appendChild(x));

      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      td = document.createElement('td');
      td.appendChild(checkbox);

      //Append table data to new table row
      tableRow.appendChild(td);
      tableBody.appendChild(tableRow);
    });
  });

  buttonBuy.addEventListener('click', (e) => {
    let names = [];
    let price = 0;
    let decFactor = 0;
    let counter = 0;

    for (let i = 0; i < tableBody.children.length; i++) {
      let product = tableBody.children[i];
      if (product.querySelector('input[type="checkbox"]:checked')) {
        let paragraphs = product.querySelectorAll('p');
        names.push(paragraphs[0].textContent);
        price += Number(paragraphs[1].textContent);
        decFactor += Number(paragraphs[2].textContent);
        counter += 1;
      }
    }

    let boughtFurniture = `Bought furniture: ${names.join(', ')}`;
    price = price.toFixed(2);
    decFactor /= counter;

    outputArea.value = `${boughtFurniture}\nTotal price: ${price}\nAverage decoration factor: ${decFactor}`;
  });
}