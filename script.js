// 1. Magnetic Button Effect
const magnets = document.querySelectorAll('.magnetic');
magnets.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
        const position = btn.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
    });
});

// 2. Trailing Cursor
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    dot.style.top = `${e.clientY}px`;
    dot.style.left = `${e.clientX}px`;
    
    // Slight delay for the outline
    setTimeout(() => {
        outline.style.top = `${e.clientY}px`;
        outline.style.left = `${e.clientX}px`;
    }, 50);
});

// 3. Preloader Toggle
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.transform = 'translateY(-100%)';
    }, 1500);
});

// 4. Reveal on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 5. Initialize 3D Tilt
VanillaTilt.init(document.querySelectorAll(".project-card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
});
