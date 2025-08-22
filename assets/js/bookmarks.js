document.addEventListener("DOMContentLoaded", function() {
    const bookmarkIcons = document.querySelectorAll('.bookmark-icon');
    let bookmarkedPosts = JSON.parse(localStorage.getItem('bookmarkedPosts')) || [];

    function updateBookmarkIcons() {
        bookmarkIcons.forEach(icon => {
            const postId = icon.dataset.postId;
            if (bookmarkedPosts.includes(postId)) {
                icon.innerHTML = '<i class="fas fa-bookmark"></i>';
            } else {
                icon.innerHTML = '<i class="far fa-bookmark"></i>';
            }
        });
    }

    bookmarkIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const postId = this.dataset.postId;
            if (bookmarkedPosts.includes(postId)) {
                bookmarkedPosts = bookmarkedPosts.filter(id => id !== postId);
                this.innerHTML = '<i class="far fa-bookmark"></i>';
            } else {
                bookmarkedPosts.push(postId);
                this.innerHTML = '<i class="fas fa-bookmark"></i>';
            }
            localStorage.setItem('bookmarkedPosts', JSON.stringify(bookmarkedPosts));
        });
    });

    if (document.getElementById('bookmarked-posts')) {
        const bookmarkedPostsContainer = document.getElementById('bookmarked-posts');
        const bookmarkCount = document.getElementById('bookmark-count');
        bookmarkCount.textContent = bookmarkedPosts.length;

        if (bookmarkedPosts.length > 0) {
            fetch('/search.json')
                .then(response => response.json())
                .then(posts => {
                    const bookmarked = posts.filter(post => bookmarkedPosts.includes(post.url.replace(/\/$/, "").split('/').pop()));
                    bookmarked.forEach(post => {
                        const postElement = document.createElement('div');
                        postElement.classList.add('col-md-4', 'mb-4');
                        postElement.innerHTML = `
                            <div class="card h-100">
                                <a href="${post.url}">
                                    <img class="img-fluid rounded-top" src="${post.image}" alt="${post.title}">
                                </a>
                                <div class="card-body">
                                    <h2 class="card-title h4 serif-font">
                                        <a href="${post.url}">${post.title}</a>
                                    </h2>
                                </div>
                            </div>
                        `;
                        bookmarkedPostsContainer.appendChild(postElement);
                    });
                });
        } else {
            bookmarkedPostsContainer.innerHTML = '<p>You have no bookmarked posts.</p>';
        }
    }

    updateBookmarkIcons();
});
