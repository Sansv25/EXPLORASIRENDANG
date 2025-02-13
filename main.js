document.addEventListener("DOMContentLoaded", () => {
    const blobRefs = [
        document.getElementById("blob1"),
        document.getElementById("blob2"),
        document.getElementById("blob3"),
        document.getElementById("blob4")
    ];

    const initialPositions = [
        { x: -4, y: 0 },
        { x: -4, y: 0 },
        { x: 20, y: -8 },
        { x: 20, y: -8 },
    ];

    let currentScroll = 0;
    let requestId;

    const handleScroll = () => {
        const newScroll = window.pageYOffset;
        currentScroll = newScroll;

        blobRefs.forEach((blob, index) => {
            const initialPos = initialPositions[index];

            // Calculating movement in both X and Y direction
            const xOffset = Math.sin(newScroll / 100 + index * 0.5) * 340; // Horizontal movement
            const yOffset = Math.cos(newScroll / 100 + index * 0.5) * 40; // Vertical movement

            const x = initialPos.x + xOffset;
            const y = initialPos.y + yOffset;

            // Apply transformation with smooth transition
            blob.style.transform = `translate(${x}px, ${y}px)`;
            blob.style.transition = "transform 1.4s ease-out";
        });

        requestId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('welcome-screen').style.display = 'none';
    }, 7000);
});

document.addEventListener('DOMContentLoaded', () => {
    function toggleMobileMenu() {
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('block');
        } else {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('block');
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
    setTimeout(() => {
        const welcomeScreen = document.getElementById('welcome-screen');
        const background = document.getElementById('background-blob');
        const grid = document.getElementById('grid');
        const body = document.body;
        welcomeScreen.classList.add('transition-all', 'duration-1000', 'ease-in-out', 'blur-sm', 'scale-110', 'opacity-0');
        grid.classList.add('fixed');
        background.classList.remove('hidden');
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
            body.classList.remove('overflow-y-hidden');

        }, 1000);
    }, 6000);
});
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('block');
    } else {
        mobileMenu.classList.remove('block');
        mobileMenu.classList.add('hidden');
    }
};
document.addEventListener("DOMContentLoaded", () => {
    const blobs = [
        { element: document.getElementById("blob1"), x: -4, y: 0 },
        { element: document.getElementById("blob2"), x: -4, y: 0 },
        { element: document.getElementById("blob3"), x: 20, y: -8 },
        { element: document.getElementById("blob4"), x: 20, y: -8 }
    ];

    const updateBlobPosition = () => {
        const scrollOffset = window.scrollY;

        blobs.forEach((blob, index) => {
            const xOffset = Math.sin(scrollOffset / 100 + index * 0.5) * 340; // Horizontal movement
            const yOffset = Math.cos(scrollOffset / 100 + index * 0.5) * 40;  // Vertical movement

            const x = blob.x + xOffset;
            const y = blob.y + yOffset;

            blob.element.style.transform = `translate(${x}px, ${y}px)`;
        });

        requestAnimationFrame(updateBlobPosition);
    };

    // Apply transition effect to blobs
    blobs.forEach((blob) => {
        blob.element.style.transition = "transform 0.3s ease-out";
    });

    // Start animation
    updateBlobPosition();
});

const text = 'Website Dibuat Oleh I Made Putra Sanjaya';
let index = 0;
function type() {
    if (index < text.length) {
        document.getElementById('welcome-info').textContent += text.charAt(index);
        index++;
        setTimeout(type, 85); // Adjust typing speed here
    }
};
document.addEventListener("DOMContentLoaded", type);

const words = ["DIBUAT OLEH SANJAYA", "SMK TI BALI GLOBAL BADUNG", "SISWA KELAS XPPLG 1"];
let wordIndex = 0;
let charIndex = 0;
let isTyping = true;
const typingSpeed = 100;
const erasingSpeed = 50;
const pauseDuration = 2000;
const typingElement = document.getElementById("typing-text");

function typeEffect() {
    if (isTyping) {
        if (charIndex < words[wordIndex].length) {
            typingElement.innerHTML += words[wordIndex][charIndex];
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else {
            setTimeout(() => {
                isTyping = false;
                typeEffect();
            }, pauseDuration);
        }
    } else {
        if (charIndex > 0) {
            typingElement.innerHTML = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeEffect, erasingSpeed);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            isTyping = true;
            setTimeout(typeEffect, typingSpeed);
        }
    }
}
document.addEventListener("DOMContentLoaded", typeEffect);
// Fungsi untuk mengubah atribut data-aos berdasarkan media query
function updateAosAttributeOnResize() {
if (window.matchMedia('(max-width: 40rem)').matches) {
    var fadeLeftElements = document.querySelectorAll('[data-aos="fade-left"]');
    var fadeRightElements = document.querySelectorAll('[data-aos="fade-right"]');
    fadeLeftElements.forEach(function(element) {
        element.setAttribute('data-aos', 'fade-up');
    });
    fadeRightElements.forEach(function(element) {
        element.setAttribute('data-aos', 'fade-up');
    });
} 

AOS.refresh(); // Memperbarui AOS setelah mengubah atribut
}

// Memantau perubahan ukuran layar
window.addEventListener('resize', updateAosAttributeOnResize);

// Inisialisasi awal
document.addEventListener('DOMContentLoaded', function() {
updateAosAttributeOnResize();
});
// Array yang berisi URL foto
const images = [
    'asset/minangkabau.jpg',
    'asset/minangkabau1.jpg',
];

let currentIndex = 0;

function changeImage() {
    const imgElement = document.getElementById('filosofi');
    imgElement.classList.remove('visible'); // Hilangkan visibilitas gambar sebelum mengubah src
    setTimeout(() => {
        imgElement.src = images[currentIndex];
        imgElement.classList.add('visible'); // Tampilkan gambar baru dengan transisi
        currentIndex = (currentIndex + 1) % images.length; // Berpindah ke foto berikutnya, ulangi dari awal jika sudah di akhir array
    }, 500); // Sesuaikan durasi timeout dengan durasi transisi fade out
}

// Panggil fungsi changeImage setiap 3 detik
setInterval(changeImage, 3000);

// Set foto pertama saat halaman dimuat
window.onload = () => {
    const imgElement = document.getElementById('filosofi');
    imgElement.src = images[currentIndex];
    imgElement.classList.add('visible'); // Tampilkan gambar pertama dengan transisi
};
