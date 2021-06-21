// function solve() {
//   let textAreaElement = document.getElementById('input');
//   let text = textAreaElement.value;
//   let sentences = text.split('.')
//   .filter(x => x !== '')
//   .map(x => x + '.');

//   let paragraphRoof = Math.ceil(centences.length / 3);
//   let resultDiv = document.getElementById('output');

//   for(let index = 0; index < paragraphRoof; index++) {
//     resultDiv.innerHTML += `<p>${sentences.splice(0, 3).join('')}</p>`;
//   }
// }

function solve() {
  let inputStr = document.getElementById('input').value;
  let output = document.getElementById('output');

  let input = inputStr.split('.').filter((p) => p.length > 0);

  for (let i = 0; i < input.length; i += 3) {
      let arr = [];
      for (let y = 0; y < 3; y++) {
          if (input[i + y]) {
              arr.push(input[i + y]);
          }
      }
      let paragraph = arr.join('. ') + '.';
      output.innerHTML += `<p>${paragraph}</p>`;
  }
}