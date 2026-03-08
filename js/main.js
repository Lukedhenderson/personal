(function () {
    const sheen = document.querySelector('.light-reflections');
    const art = document.querySelector('.art-wrapper');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        sheen.style.transform = `translate(${x * -2}%, ${y * -2}%)`;

        const moveX = (x - 0.5) * 10;
        const moveY = (y - 0.5) * 10;
        art.style.transform = `perspective(1000px) rotateY(${moveX * 0.5}deg) rotateX(${moveY * -0.5}deg)`;
    });
})();
