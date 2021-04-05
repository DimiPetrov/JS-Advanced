function editElement(ref, match, replacer) {
    const matcher = new RegExp(match, 'g');
    const result = ref.textContent.replace(matcher, replacer);
    ref.textContent = result;
}

// editElement(temp1, 'DOM', 'Document Object Model');


// function edit(ref, match, replacer) {
//    const content = ref.textContent;   
//     const matcher = new RegExp(match, 'g');
//     const edited = content.replace(matcher, replacer);   
//     ref.textContent = edited;    
// }