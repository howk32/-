window.addEventListener('DOMContentLoaded', function() {
    const mossImgs = document.querySelectorAll('.moss-img');
    setTimeout(() => {
        mossImgs.forEach(img => img.classList.remove('moss-hidden'));
    }, 400);
}); 