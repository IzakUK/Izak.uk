function toggleDropdown() {
    const flags = document.querySelectorAll('.dropdown-flag');
    flags.forEach(flag => {
        flag.style.display = (flag.style.display === 'block') ? 'none' : 'block';
    });
}

document.body.addEventListener('keydown', function(e) {
    const sections = document.querySelectorAll('.section');
    const currentScroll = window.scrollY;

    // Get the closest section based on scroll position
    let closestSection = Array.from(sections).reduce((prev, curr) => 
        Math.abs(curr.offsetTop - currentScroll) < Math.abs(prev.offsetTop - currentScroll) ? curr : prev
    );

    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault(); // Prevent default arrow key behavior

        let targetSection;
        if (e.key === 'ArrowDown') {
            targetSection = closestSection.nextElementSibling || sections[0]; // Loop to first if at end
        } else {
            targetSection = closestSection.previousElementSibling || sections[sections.length - 1]; // Loop to last if at start
        }
        window.scrollTo({ top: targetSection.offsetTop, behavior: 'smooth' });
    } else if (e.key === 'Enter' && closestSection) {
        closestSection.click();
    }
});

window.addEventListener('click', function(e) {
    if (e.target.matches('.section')) {
        e.target.click();
    }
});
