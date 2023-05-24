const colorPicker = document.getElementById('color-picker');
const pages = Array.from(document.getElementsByClassName('page'));
pages[0].style.backgroundColor = 'white';
colorPicker.addEventListener('change', () => {
    const currentPage = document.querySelector('.page:not([style*="display: none"])');
    currentPage.style.backgroundColor = colorPicker.value;
});

// Set only the first page to be visible
pages.forEach((page, index) => {
    if (index !== 0) {
        page.style.display = 'none';
    }
});

// Set event listener for previous page arrow
document.getElementById('prev-btn').addEventListener('click', () => {
    const currentPage = document.querySelector('.page:not([style*="display: none"])');
    const currentPageIndex = pages.indexOf(currentPage);
    const prevPageIndex = currentPageIndex === 0 ? pages.length - 1 : currentPageIndex - 1;

    currentPage.style.display = 'none';
    pages[prevPageIndex].style.display = 'flex';
    colorPicker.value = 'ffffff'; // Reset color picker to white
});

// Set event listener for next page arrow
document.getElementById('next-btn').addEventListener('click', () => {
    const currentPage = document.querySelector('.page:not([style*="display: none"])');
    const currentPageIndex = pages.indexOf(currentPage);
    const nextPageIndex = currentPageIndex === pages.length - 1 ? 0 : currentPageIndex + 1;

    currentPage.style.display = 'none';
    pages[nextPageIndex].style.display = 'flex';
    colorPicker.value = 'ffffff'; // Reset color picker to white
});