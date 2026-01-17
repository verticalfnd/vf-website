document.addEventListener('DOMContentLoaded', function() {
    // Animate progress bars on page load
    const progressBars = document.querySelectorAll('.progress-bar');

    // Small delay to ensure CSS transition is visible
    setTimeout(() => {
        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            const fill = bar.querySelector('.progress-fill');
            fill.style.width = progress + '%';
        });
    }, 300);

    // Optional: Replay animation when scrolled into view
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const progress = bar.getAttribute('data-progress');
                const fill = bar.querySelector('.progress-fill');
                fill.style.width = progress + '%';
            }
        });
    }, observerOptions);

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
});
