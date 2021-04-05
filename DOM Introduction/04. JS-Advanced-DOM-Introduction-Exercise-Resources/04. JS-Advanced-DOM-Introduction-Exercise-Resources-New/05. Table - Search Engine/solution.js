function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const body = document.querySelector('tbody');
   let convertRows = function (rows, input) {
      return Array.from(rows).map(function selectRow(row) {
         if (row.textContent.includes(input)) {
            row.classList.add('select');
         } else {
            row.removeAttribute('class');
         }
         return row;
      });
   }

   function onClick() {
      const input = document.querySelector('#searchField').value;
      body.innerHtml = convertRows(body.children, input); 
      document.getElementById('result').innerText = convertRows(body.children, input.toLowerCase());  
   }

}