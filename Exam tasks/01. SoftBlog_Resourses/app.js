function solve() {
   //get the create button
   let createButton = document.querySelector('.btn');
   let postsSection = document.querySelector(`.site-content main section`);
   //input data
   let creatorElement = document.querySelector('section form #creator');
   let titleElement = document.querySelector('section form #title');
   let categoryElement = document.querySelector('section form #category');
   let contentElement = document.querySelector('section form #content');
   //array to sort archive
   let arrayArchive = [];
   //stop the create button default function
   createButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      addAllElements();

      //Empty the input
      creatorElement.value = '';
      titleElement.value = '';
      categoryElement.value = '';
      contentElement.value = '';

   });




   function addAllElements() {
      //add the article to the posts section
      let article = document.createElement(`article`);
      //get h1tag
      let h1Tag = document.createElement(`h1`);
      //get the tittle and implement
      let getTitle = document.getElementById("title").value;
      h1Tag.textContent = getTitle;
      article.appendChild(h1Tag);
      postsSection.appendChild(article);

      //get the category and implement
      let getCategory = document.getElementById("category").value;
      let CategoryTag = document.createElement(`p`);
      CategoryTag.textContent = `Category: `;
      let CategoryStrongTag = document.createElement(`strong`);
      CategoryStrongTag.textContent = getCategory;
      CategoryTag.appendChild(CategoryStrongTag);
      article.appendChild(CategoryTag);
      postsSection.appendChild(article);

      //get creator and implement
      let author = document.getElementById("creator").value;
      let CreatorTag = document.createElement(`p`);
      CreatorTag.textContent = `Creator: `;
      let CreatorStrongTag = document.createElement(`strong`);
      CreatorStrongTag.textContent = author;
      CreatorTag.appendChild(CreatorStrongTag);
      article.appendChild(CreatorTag);
      postsSection.appendChild(article);

      //get the text content
      let contentText = document.getElementById("content").value;
      let contentTag = document.createElement(`p`);
      contentTag.textContent = contentText;
      article.appendChild(contentTag);
      postsSection.appendChild(article);

      //add the delete / archive buttons
      let div = document.createElement(`div`);
      div.classList.add(`buttons`);
      //create buttons and add them
      let deleteButton = document.createElement(`button`);
      deleteButton.classList.add(`btn`, `delete`);
      deleteButton.textContent = `Delete`;
      div.appendChild(deleteButton);
      article.appendChild(div);

      let archiveButton = document.createElement(`button`);
      archiveButton.classList.add(`btn`, `archive`);
      archiveButton.textContent = `Archive`;
      div.appendChild(archiveButton);
      article.appendChild(div);


      // add event listeners to the buttons
      archiveButton.addEventListener(`click`, (e) => {
         let archiveSection = document.querySelector(`.archive-section ol`);
         //every time push the archive element into the array
         arrayArchive.push(getTitle);

         //sort the array
         arrayArchive.sort((a, b) => a.localeCompare(b));
         //clears the archive section to remake it again
         archiveSection.innerHTML = '';
         //every time when archive is pressed will rearange the array and remake it from 0
         for (const title of arrayArchive) {
            let liElement = document.createElement('li');
            console.log(title)
            liElement.textContent = title;
            //append ordered archive names
            archiveSection.appendChild(liElement);
         }

         article.remove(article);
      });
      //the delete button
      deleteButton.addEventListener(`click`, (e) => {
         article.remove(article);
      });

   }
}

// function solve(){
//    let createButton = document.querySelector('site-content aside button.btn.create');
//    createButton.addEventListener('click', createArticleHandler);

//    function createArticleHandler(e) {
//       e.preventDefault();

//       let authorInput = document.querySelector('#creator');
//       let titleInput = document.querySelector('#title');
//       let categoryInput = document.querySelector('#category');
//       let contentTextArea = document.querySelector('#content');

//       let articleElement = document.createElement('article');

//       let titleHeading = document.createElement('h1');
//       titleHeading.textContent = titleInput.value;

//       let categoryParagraph = document.createElement('p');
//       categoryParagraph.textContent = 'Category:';
//       let categoryStrong = document.createElement('strong');
//       categoryStrong.textContent = categoryInput.value;
//       categoryParagraph.appendChild(categoryStrong);

//       let creatorParagraph = document.createElement('p');
//       creatorParagraph.textContent = 'Creator:';
//       let creatorStrong = document.createElement('strong');
//       creatorStrong.textContent = authorInput.value;
//       creatorParagraph.appendChild(creatorStrong);

//       let contentParagraph = document.createElement('p');
//       contentParagraph.textContent = contentTextArea.value;

//       let buttonsDiv = document.createElement('div');
//       buttonsDiv.classList.add('buttons');

//       let deleteButton = document.createElement('button');
//       deleteButton.textContent = 'Delete';
//       deleteButton.classList.add('btn', 'delete');
//       deleteButton.addEventListener('click', deleteArticleHandler);

//       let archiveButton = document.createElement('button');
//       archiveButton.textContent = 'Archive';
//       archiveButton.classList.add('btn', 'archive');
//       archiveButton.addEventListener('click', archiveArticleHandler);

//       buttonsDiv.appendChild(deleteButton);
//       buttonsDiv.appendChild(archiveButton);

//       articleElement.appendChild(titleHeading);
//       articleElement.appendChild(categoryParagraph);
//       articleElement.appendChild(creatorParagraph);
//       articleElement.appendChild(contentParagraph);
//       articleElement.appendChild(buttonsDiv);

//       let postSection = document.querySelector('site-content main section');
//       postSection.appendChild(articleElement);

//    }

//    function deleteArticleHandler() {
//       let deleteButton = e.target;
//       let articleToDelete = deleteButton.parentElement.parentElement;
//       articleToDelete.remove();
//    }

//    function archiveArticleHandler() {
//       let articleToArchive = e.target.parentElement.parentElement;
//       let archiveOl = document.querySelector('.archive-section ol');

//       let archiveLis = Array.from(archiveOl.querySelectorAll('li'));
//       let articleTitleHeading = articleToArchive.querySelector('h1');
//       let articleTitle = articleTitleHeading.textContent;

//       let newTitleLi = document.createElement('li');
//       newTitleLi.textContent = articleTitle;

//       archiveLis.push(newTitleLi);
//       archiveLis.sort((a, b) => a.textContent.localeCompare(b.textContent))
//       .forEach(li => archiveOl.appendChild(li));
//    }
// }