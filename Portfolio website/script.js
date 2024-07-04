document.addEventListener("click", function () {
    const loadMoreButton = document.querySelector('.new');
    console.log("button clicked")
    const gallery = document.querySelector('.gallery');


    let visibleImages = 3;

    const totalImages = gallery.querySelectorAll('img').length;


    function loadMore() {
        for (let i = visibleImages; i < visibleImages + 3 && i < totalImages; i++) {
            gallery.children[i].style.display = 'block';
        }
        visibleImages += 3;

        if (visibleImages >= totalImages) {
            loadMoreButton.style.display = 'none';
        }
    }
    loadMoreButton.addEventListener('click', loadMore);
});
