function extractText() {
    const liElements = [...document.getElementsByTagName('li')];
    const elementText = liElements.map(e => e.textContent);
    document.getElementById('result').value = elementText.join('\n');
}

// function extractText() {
//     let itemNodes = document.querySelectorAll("ul#items li");    
//     let textarea = document.querySelector("#result");   
//     for (let node of itemNodes) {   
//     textarea.value += node.textContent + "\n";   
//     }
// }