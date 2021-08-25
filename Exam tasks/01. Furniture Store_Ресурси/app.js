window.addEventListener('load', solve);

function solve() {
    let btnAdd = document.getElementById('add');

    btnAdd.addEventListener('click', e => {
        e.preventDefault();

        let inputModel = document.getElementById('model');
        let model = inputModel.value;

        let inputYear = document.getElementById('year');
        let year = inputYear.value;

        let inputDescription = document.getElementById('description');
        let description = inputDescription.value;

        let inputPrice = document.getElementById('price');
        let price = inputPrice.value;

        let furnitureList = document.getElementById('furniture-list');

        let trInfo = document.createElement('tr');
        trInfo.setAttribute('class', 'info');
        furnitureList.appendChild(trInfo);

        let tdModel = document.createElement('td');
        let tdPrice = document.createElement('td');
        tdModel.innerHTML = model;
        tdPrice.innerHTML = price;
        trInfo.appendChild(tdModel);
        trInfo.appendChild(tdPrice);

        let tdButtons = document.createElement('td');
        trInfo.appendChild(tdButtons);

        let moreButton = document.createElement('button');
        moreButton.setAttribute('class', 'moreBtn');
        moreButton.textContent = 'More Info';

        let buyButton = document.createElement('button');
        buyButton.setAttribute('class', 'buyBtn');
        buyButton.textContent = 'Buy it';

        tdButtons.appendChild(moreButton);
        tdButtons.appendChild(buyButton);

        let trMoreInfo = document.createElement('tr');
        trMoreInfo.setAttribute('class', 'hide');
        furnitureList.appendChild(trMoreInfo);

        let tdYear = document.createElement('td');
        tdYear.innerHTML = 'Year: ' + year;
        trMoreInfo.appendChild(tdYear);

        let tdDescription = document.createElement('td');
        tdDescription.setAttribute('colspan', '3');
        tdDescription.innerHTML = 'Description: ' + description;
        trMoreInfo.appendChild(tdDescription);

        moreButton.addEventListener('click', e => {
            e.preventDefault();

            if(moreButton.textContent === 'More Info') {
                moreButton.textContent = 'Less Info';
                trMoreInfo.setAttribute('style', 'display:contents');
            } else {
                moreButton.textContent = 'More Info';
                trMoreInfo.setAttribute('style', 'display:none');
            }           
        });

        buyButton.addEventListener('click', e => {
            e.preventDefault();

            trInfo.remove();
            trMoreInfo.remove();

            let results = document.getElementsByClassName('total-price');

            if (results.length > 0) {
                let tdTotalPrice = results[0];
                let newTotalPrice = Number(tdTotalPrice.innerHTML) + Number(price);                
                tdTotalPrice.innerHTML = newTotalPrice.toFixed(2);
            }
            
        });
    });
}
