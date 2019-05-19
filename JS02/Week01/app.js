let booksList = ["animals", "math", "physic", "sport", "nature", "space", "kids", "dic", "java", "software"];
// console.log(booksList);
// console.log(booksList.length);

function generateList() {
  const newList = document.createElement('ul');

  for (let i = 0; i < booksList.length; i++) {
    const book = booksList[i];
    newList.innerHTML += `<li>${book}</li>`;
  }

  return newList;
}

document.body.append(generateList());
