const likeBtn = document.getElementById('like-btn');
let isLiked = false;

likeBtn.addEventListener('click', () => {
    isLiked = !isLiked;
    likeBtn.classList.toggle('far', !isLiked);
    likeBtn.classList.toggle('fas', isLiked);
    likeBtn.classList.toggle('liked', isLiked);
});