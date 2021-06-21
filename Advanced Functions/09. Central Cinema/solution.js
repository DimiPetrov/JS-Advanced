function solve() {

    const $inputFields = document.getElementById('container');
    const $formButton = document.querySelector('#add-new div button')
    const $clearButton = Array.from(document.querySelectorAll('button')).filter(x => x.textContent === 'Clear')[0];
    let [name, hall, ticketPrice] = Array.from($inputFields.children);

    $formButton.addEventListener('click', e => {
        e.preventDefault();

        if (!name.value || !hall.value || !Number(ticketPrice.value)) {
            return;
        }

        let $moviesUl = document.querySelector('#movies ul');
        let $liEl = document.createElement('li');
        let $span = document.createElement('span');
        let $div = document.createElement('div');
        let $input = document.createElement('input');
        let $archiveButton = document.createElement('button');

        $span.textContent = name.value;
        $liEl.appendChild($span);
        $liEl.innerHTML += `<strong>Hall: ${hall.value}</strong>`;

        $div.innerHTML += `<strong>${Number(ticketPrice.value).toFixed(2)}</strong>`;
        $input.placeholder = "Tickets Sold";

        $archiveButton.textContent = 'Archive';

        $div.appendChild($input);
        $div.appendChild($archiveButton);

        $liEl.appendChild($div);
        $moviesUl.appendChild($liEl);

        name.value = '';
        hall.value = '';
        ticketPrice.value = '';

        $archiveButton.addEventListener('click', e => {

            if (!Number($input.value)) {
                return;
            }
            let $archiveSection = document.querySelector('#archive ul');
            let $archiveLi = document.createElement('li');
            let $archiveSpan = document.createElement('span');
            let $deleteButton = document.createElement('button');
            let $finalTicketPrice = document.querySelector('#movies ul li div strong');
            let $finalName = document.querySelector('#movies ul li span')
            let totalSum = Number($input.value) * Number($finalTicketPrice.textContent);
            $deleteButton.textContent = 'Delete';

            $archiveSpan.textContent = $finalName.textContent;
            $archiveLi.appendChild($archiveSpan);
            $archiveLi.innerHTML += `<strong>Total amount: ${totalSum.toFixed(2)}</strong>`;
            $archiveLi.appendChild($deleteButton);

            $archiveSection.appendChild($archiveLi);

            e.target.parentElement.parentElement.remove()

            $deleteButton.addEventListener('click', e => {
                e.currentTarget.parentElement.remove();
            });

            $clearButton.addEventListener('click', e => {
                document.querySelector('#archive ul').innerHTML = '';
            });
        });
    })

}

// function solve() {
//     const formElements = document.querySelector('#container').children;
//     const inputs = Array.from(formElements).slice(0, formElements.length - 1);
//     const onScreenBtn = Array.from(formElements).slice(formElements.length - 1);
//     const moviesUl = document.querySelector('#movies>ul');
//     const archiveUl = document.querySelector('#archive>ul');
//     const clearBtn = document.querySelector('#archive>button');

//     function clear(e) {
//         e.target.parentNode.children[1].innerHTML = '';
//     }
    
//     function archive(e) {
//         const li = e.target.parentNode.parentNode;
//         const div = e.target.parentNode;
//         const input = div.children[1];

//         if(input.value == '') {
//             return;
//         }

//         const span = document.createElement('span');
//         const name = li.children[0].textContent;
//         span.textContent = name;

//         const strong = document.createElement('strong');

//         const price = +div.children[0].textContent;
//         const totalPrice = price + Number(input.value);
//         strong.textContent = `Total amount: ${totalPrice.toFixed(2)}`;

//         const deleteBtn = document.createElement('button');
//         deleteBtn.textContent = 'Delete';
//         deleteBtn.addEventListener('click', (e) => {
//             e.target.parentNode.remove();
//         });

//         const resultLi = document.createElement('li');
//         resultLi.appendChild(span);
//         resultLi.appendChild(strong);
//         resultLi.appendChild(deleteBtn);

//         archiveUl.appendChild(resultLi);

//         li.remove();
//     }


//     function createMovie(e) {
//         e.preventDefault();
        
//         const name = inputs[0].value;
//         const hall = inputs[1].value;
//         const price = Number(inputs[2]).value;

//         if(!name || !hall || !price) {
//              return; 
//         }

//         inputs[0].value = '';
//         inputs[1].value = '';
//         inputs[2].value = '';

//         const li = document.createElement('li');

//         const span = document.createElement('span');
//         span.textContent = name;
//         li.appendChild(span);

//         const strong = document.createElement('strong');
//         strong.textContent = `Hall: ${hall}`;
//         li.appendChild(strong);

//         const div = document.createElement('div');

//         const innerStrong = document.createElement('innerStrong');
//         innerStrong.textContent = price.toFixed(2);

//         const input = document.createElement('input');
//         input.setAttribute('placeholder', 'Tickets Sold');

//         const archiveBtn = document.createElement('button');
//         archiveBtn.textContent = 'Archive';
//         archiveBtn.addEventListener('click', archive);


//         div.appendChild(innerStrong);
//         div.appendChild(input);
//         div.appendChild(archiveBtn);

//         li.appendChild(div);

//         moviesUl.appendChild(li);
//     }

//     clearBtn.addEventListener('click', clear);
//     onScreenBtn.addEventListener('click', createMovie);

// }