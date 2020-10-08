'use strict'; {
    const images = [
        'chachaphoto/chacha1.jpg',
        'chachaphoto/chacha2.jpg',
        'chachaphoto/chacha3.jpg',
        'chachaphoto/chacha4.jpg',
        'chachaphoto/chacha5.jpg',
        'chachaphoto/chacha6.jpg',
        'chachaphoto/chacha7.jpg',
    ];
    let currentIndex = 0;

    const mainImage = document.getElementById('main_cha');

    mainImage.src = images[currentIndex];

    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;

        const li = document.createElement('li');
        if (index === currentIndex) {
            li.classList.add('current');
        }
        li.addEventListener('click', () => {
            mainImage.src = image;
            const thumbnails = document.querySelectorAll('.thumbnails > li');
            currentIndex = index;
            thumbnails[currentIndex].classList.add('current');
        });

        li.appendChild(img);
        document.querySelector('.thumbnails').appendChild(li);
    });

    const next = document.getElementById('next');
    next.addEventListener('click', () => {
        let target = currentIndex + 1;
        if (target === images.length) {
            target = 0;
        }
        document.querySelectorAll('.thumbnails > li')[target].click();
    });

    const prev = document.getElementById('prev');
    prev.addEventListener('click', () => {
        let target = currentIndex - 1;
        if (target < 0) {
            target = images.length - 1;
        }
        document.querySelectorAll('.thumbnails > li')[target].click();
    });

    let timeoutId;

    function playSlideshow() {
        timeoutId = setTimeout(() => {
            next.click();
            playSlideshow();
        }, 1000);
    }

    let isPlaying = false;

    const play = document.getElementById('play');
    play.addEventListener('click', () => {
        if (isPlaying === false) {
            playSlideshow();
            play.textContent = 'Pause';
        } else {
            clearTimeout(timeoutId);
            play.textContent = 'play';
        }
        isPlaying = !isPlaying;
    });
}