const allItems = document.getElementsByClassName('item');
const openIcon = document.getElementsByClassName('iconOpen');
const closeIcon = document.getElementsByClassName('iconClose');

for (let i = 0; i < allItems.length; i++) {
  closeIcon[i].style.display = 'none';
  allItems[i].addEventListener('click', () => {
    for (let j = 0; j < allItems.length; j++) {
      if (j !== i && allItems[j].classList.contains('active')) {
        allItems[j].classList.remove('active');
        closeIcon[j].style.display = 'none';
        openIcon[j].style.display = 'block';
      }
    }

    const result = allItems[i].classList.toggle('active');
    if (result) {
      closeIcon[i].style.display = 'block';
      openIcon[i].style.display = 'none';
    } else {
      closeIcon[i].style.display = 'none';
      openIcon[i].style.display = 'block';
    }
  });
}
