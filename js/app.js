document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form");
  form.addEventListener('submit', handleFormSubmit);

  const deleteForm = document.querySelector("#delete-all");
  deleteForm.addEventListener('click', handleDeleteButton);

})

const createNewItem = function(event) {
  const newItem = document.createElement('li');
  newItem.classList.add("list-item")

  const header = document.createElement('h2')
  header.textContent = `${event.target.title.value}`
  const smallHeader = document.createElement('h3')
  smallHeader.textContent = `${event.target.author.value}`
  const category = document.createElement('h4')
  category.textContent = `${event.target.category.value}`

  header.classList.add("list-item-text")
  smallHeader.classList.add("list-item-text")
  category.classList.add("list-item-text")

  newItem.appendChild(header)
  newItem.appendChild(smallHeader)
  newItem.appendChild(category)

  return newItem
}

const handleFormSubmit = function(event){
  event.preventDefault();

  const readingList = document.querySelector('#reading-list')
  readingList.appendChild(createNewItem(event))

  document.querySelector("#new-item-form").reset();
}


const handleDeleteButton = function(event){
  event.preventDefault();
  
  const listItems = document.querySelectorAll('li')
  const deleteList = document.querySelector('#reading-list');
  listItems.forEach(listItem => deleteList.removeChild(listItem))
}