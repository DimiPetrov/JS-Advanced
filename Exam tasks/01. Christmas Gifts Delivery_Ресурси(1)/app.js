function solution() {
    let btnAddGiftArray = document.getElementsByClassName('card');
    let btnAddGift = btnAddGiftArray[0];

    btnAddGift.addEventListener('click', e => {
        e.preventDefault();

        let listOfGifts = document.getElementById('h2');
        let addedGift = document.createElement('li');
        addedGift.setAttribute('class', 'gift');
        listOfGifts.appendChild(addedGift);

        let btnSend = document.createElement('button');
        btnSend.setAttribute('id', 'sendButton');
        btnSend.textContent = 'Send';
        addedGift.appendChild(btnSend);

        btnSend.addEventListener('click', e => {
            e.preventDefault();

            let sentGifts = document.getElementById('h2');
            let sentGift = document.createElement('li');
            sentGift.setAttribute('class', 'gift');
            sentGifts.appendChild(sentGift);
        });

        let btnDiscard = document.createElement('button');
        btnDiscard.setAttribute('id', 'discardButton');
        btnDiscard.textContent = 'Discard';
        addedGift.appendChild(btnDiscard);

        btnDiscard.addEventListener('click', e => {
            e.preventDefault();

            let discardedGifts = document.getElementById('h2');
            let discardedGift = document.createElement('li');
            sentGift.setAttribute('class', 'gift');
            discardedGifts.appendChild(discardedGift);
        });
    });
}