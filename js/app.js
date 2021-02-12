document.addEventListener('DOMContentLoaded', () =>{
    console.log('JavaScript loaded');

    const inputForm = document.querySelector('#input-form');
    inputForm.addEventListener('submit', handleFormSubmit)

    const deleteAll = document.querySelector('#delete-all-button');
    deleteAll.addEventListener('click', handleDeleteButton)

})

const handleFormSubmit = function(event){
    event.preventDefault();

    const listItem = createListItem(event.target);
    const list = document.querySelector('#list');
    list.appendChild(listItem);

    event.target.reset();
}

const createListItem = function(form){
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');

    const artist = document.createElement('h3');
    artist.textContent = `Artist: ${form.artist.value}`;
    listItem.appendChild(artist);

    const album = document.createElement('h3');
    album.textContent = `Album: ${form.album.value}`;
    listItem.appendChild(album);

    const platform = document.createElement('h3');
    platform.textContent = `Platform: ${form.platform.value}`;
    listItem.appendChild(platform);

    // const link = document.createElement('a');
    // link.textContent = `Link: ${form.link.value}`;
    // listItem.appendChild(link);

    return listItem;
}

const handleDeleteButton = function(event){
    const list = document.querySelector('#list');
    list.innerHTML = '';
}