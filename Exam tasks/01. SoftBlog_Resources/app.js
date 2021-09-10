function solve() {
   let btnCreateArray = document.getElementsByClassName('btn create');
   if (btnCreateArray.length !== 1) {
      return;
   }
   let btnCreate = btnCreateArray[0];

   let archivedTitles = [];

   btnCreate.addEventListener('click', e => {
      e.preventDefault();

      let author = document.getElementById('creator').value;
      let title = document.getElementById('title').value;
      let category = document.getElementById('category').value;
      let content = document.getElementById('content').value;

      let sectionArray = document.getElementsByTagName('section');
      if (sectionArray.length < 2) {
         return;
      }
      let sectionPosts = sectionArray[1];

      let article = document.createElement('article');
      sectionPosts.appendChild(article);

      let h1Title = document.createElement('h1');
      h1Title.innerHTML = title;
      article.appendChild(h1Title);

      let pCategory = document.createElement('p');
      pCategory.innerHTML = 'Category:' + '<strong>' + category + '</strong>';
      article.appendChild(pCategory);

      let pCreator = document.createElement('p');
      pCreator.innerHTML = 'Creator:' + '<strong>' + author + '</strong>';
      article.appendChild(pCreator);

      let pContent = document.createElement('p');
      pContent.innerHTML = content;
      article.appendChild(pContent);

      let divButtons = document.createElement('div');
      divButtons.setAttribute('class', 'buttons');
      article.appendChild(divButtons);

      let btnDelete = document.createElement('button');
      btnDelete.setAttribute('class', 'btn delete');
      btnDelete.textContent = 'Delete';
      divButtons.appendChild(btnDelete);

      btnDelete.addEventListener('click', e => {
         e.preventDefault();

         article.remove();
      });

      let btnArchive = document.createElement('button');
      btnArchive.setAttribute('class', 'btn archive');
      btnArchive.textContent = 'Archive';
      divButtons.appendChild(btnArchive);

      btnArchive.addEventListener('click', e => {
         e.preventDefault();

         archivedTitles.push(title);
         archivedTitles.sort((a,b) => a.localeCompare(b));

         let olElementsArray = document.getElementsByTagName('ol');
         if (olElementsArray.length === 0) {
            return;
         }
         let olArchivedPosts = olElementsArray[0];

         olArchivedPosts.innerHTML = '';
         // for (let child of olArchivedPosts.children) {
         //    child.remove();
         // }

         for (let archivedTitle of archivedTitles) {
            let liArchivedTitle = document.createElement('li');
            liArchivedTitle.innerHTML = archivedTitle;
            olArchivedPosts.appendChild(liArchivedTitle);
         }

         article.remove();
      });
   });
}