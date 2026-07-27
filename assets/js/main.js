document.addEventListener('DOMContentLoaded', () => {
    // --- Konstanta & Elemen DOM ---
    const PAW_SVG = `<svg viewBox="0 0 512 512"><path d="M256 512c-20.5 0-39.8-8-54.3-22.5l-1.2-1.2c-33-33-33-86.6 0-119.6c16.4-16.4 39.2-25.7 62.7-25.7H352c23.5 0 46.3 9.3 62.7 25.7c33 33 33 86.6 0 119.6l-1.2 1.2C295.8 504 276.5 512 256 512zM128.4 352c-23.5 0-46.3-9.3-62.7-25.7c-33-33-33-86.6 0-119.6c16.4-16.4 39.2-25.7 62.7-25.7h1.6c23.5 0 46.3 9.3 62.7 25.7c33 33 33 86.6 0 119.6c-16.4 16.4-39.2 25.7-62.7 25.7h-1.6zM448 184c-23.5 0-46.3-9.3-62.7 25.7c-33 33-33-86.6 0 119.6c16.4 16.4 39.2 25.7 62.7 25.7h1.6c23.5 0 46.3-9.3 62.7-25.7c33-33 33-86.6 0-119.6c-16.4-16.4-39.2-25.7-62.7-25.7h-1.6zM256 128c-20.5 0-39.8-8-54.3-22.5c-33-33-33-86.6 0-119.6C218.2-10.5 237.5-18.5 258-18.5c19.3 0 37.8 7.3 52.1 20.3c33.3 29.9 34.4 82.1 2.5 113.7C295.8 120 276.5 128 256 128z"/></svg>`;
    const LOVE_SVG = `<svg viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>`;
    const FLOWER_SVG = `<svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="7" fill="pink"/><circle cx="8" cy="16" r="5" fill="yellow"/><circle cx="24" cy="16" r="5" fill="yellow"/><circle cx="16" cy="8" r="5" fill="yellow"/><circle cx="16" cy="24" r="5" fill="yellow"/></svg>`;
    const KEY_SVG = `<svg viewBox="0 0 24 24" fill="#FFD700"><path d="M18.5,4.5c-1.9,0-3.5,1.6-3.5,3.5s1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5S20.4,4.5,18.5,4.5z M18.5,9.5c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S19.3,9.5,18.5,9.5z"/><path d="M12.3,10.7c-0.6,0.6-1.5,0.6-2.1,0L5.5,6.1C5.2,5.8,4.8,5.5,4.5,5.5c-0.4,0-0.8,0.2-1.1,0.4L2.1,7.2C1.5,7.8,1.5,8.8,2.1,9.4l4.7,4.7l-3.2,3.2c-0.6,0.6-0.6,1.5,0,2.1l1.4,1.4c0.6,0.6,1.5,0.6,2.1,0l3.2-3.2l3.2,3.2c0.6,0.6,1.5,0.6,2.1,0l1.4-1.4c0.6-0.6,0.6-1.5,0-2.1L12.3,10.7z"/></svg>`;
    const SPARKLE_SVG = `<svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
    const ROSE_SVG = `<svg viewBox="0 0 24 24"><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6S15.31,6,12,6z M12,16c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,16,12,16z"/></svg>`;

    const fake404Screen = document.getElementById('fake-404-screen');
    const fixItBtn = document.getElementById('fix-it-btn');
    const photoUploadScreen = document.getElementById('photo-upload-screen');
    const photoUploadInput = document.getElementById('photo-upload-input');
    const mysteryBoxScreen = document.getElementById('mystery-box-screen');
    const mysteryBox = document.getElementById('mystery-box');
    const keysContainer = document.getElementById('keys-container');
    const skipUploadBtn = document.getElementById('skip-upload-btn');
    const splash = document.getElementById('splash');
    const mainCard = document.getElementById('mainCard');
    const showMainBtn = document.getElementById('show-main-btn');
    const surpriseBtn = document.getElementById('surprise-btn');
    const surpriseMessage = document.getElementById('surprise-message');
    const confettiContainer = document.getElementById('confetti');
    const balloonContainer = document.getElementById('balloon');
    const sparkleContainer = document.getElementById('sparkle-container');
    const pawContainer = document.getElementById('paw-prints-container');
    const loveContainer = document.getElementById('love-container');
    const surpriseSound = document.getElementById('surprise-sound');
    const unlockSound = document.getElementById('unlock-sound');
    const cardTitle = document.querySelector('#mainCard h1');
    const cardParagraph = document.querySelector('#mainCard p');
    const cardImage = document.querySelector('#mainCard img');
    const magicLoveContainer = document.getElementById('magic-love-container');
    const finaleScreen = document.getElementById('finale-screen');
    const finaleIconContainer = document.querySelector('.finale-icon');

    // --- Fungsi Utilitas ---

    /**
     * Jeda eksekusi selama durasi tertentu.
     * @param {number} ms - Waktu jeda dalam milidetik.
     * @returns {Promise<void>}
     */
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // --- Fungsi Utama ---

    /**
     * Memulai permainan mencari kunci.
     */
    function startKeyMysteryGame() {
        const numKeys = 5; // Membuat 5 kunci
        const correctKeyIndex = Math.floor(Math.random() * numKeys);
        keysContainer.innerHTML = ''; // Bersihkan kontainer

        for (let i = 0; i < numKeys; i++) {
            const key = document.createElement('div');
            key.className = 'key';
            key.innerHTML = KEY_SVG;
            key.dataset.index = i;

            key.addEventListener('click', async () => {
                // Nonaktifkan semua tombol setelah satu diklik untuk mencegah klik ganda
                document.querySelectorAll('.key').forEach(k => k.style.pointerEvents = 'none');

                if (parseInt(key.dataset.index) === correctKeyIndex) {
                    // Kunci yang benar
                    unlockSound.play();

                    // Animasi kunci terbang ke lubang kunci
                    const boxRect = mysteryBox.getBoundingClientRect();
                    const keyRect = key.getBoundingClientRect();
                    
                    // Pindahkan kunci ke posisi absolut untuk animasi
                    key.style.position = 'absolute';
                    key.style.top = `${keyRect.top}px`;
                    key.style.left = `${keyRect.left}px`;
                    key.style.transition = 'all 1s ease-in-out';

                    await delay(50); // Tunggu DOM update

                    key.style.top = `${boxRect.top + boxRect.height / 2 - 25}px`;
                    key.style.left = `${boxRect.left + boxRect.width / 2 - 25}px`;
                    key.style.transform = 'scale(0.1)';
                    key.style.opacity = '0';
                    
                    await delay(1000);
                    mysteryBox.classList.add('open');

                    await delay(1500); // Tunggu animasi kotak terbuka selesai
                    // Transisi ke splash screen
                    mysteryBoxScreen.style.opacity = '0';
                    mysteryBoxScreen.addEventListener('transitionend', () => {
                        mysteryBoxScreen.style.display = 'none';
                        splash.style.display = 'flex';
                    }, { once: true });

                } else {
                    // Kunci yang salah
                    key.classList.add('wrong');
                    // Aktifkan kembali tombol lain yang belum salah
                    document.querySelectorAll('.key:not(.wrong)').forEach(k => k.style.pointerEvents = 'all');
                }
            });

            keysContainer.appendChild(key);
        }
    }

    async function createPawAnimation() {
        // Posisi untuk jejak kaki dari kiri dan kanan
        const leftPositions = [
            { top: '70%', left: '10%', transform: 'rotate(-20deg)' },
            { top: '65%', left: '25%', transform: 'rotate(10deg)' },
            { top: '68%', left: '40%', transform: 'rotate(-15deg)' }
        ];
        const rightPositions = [
            { top: '70%', left: '90%', transform: 'rotate(20deg) scaleX(-1)' },
            { top: '65%', left: '75%', transform: 'rotate(-10deg) scaleX(-1)' },
            { top: '68%', left: '60%', transform: 'rotate(15deg) scaleX(-1)' }
        ];

        // Buat 3 pasang jejak kaki (kiri dan kanan)
        for (let i = 0; i < 3; i++) {
            const leftPaw = document.createElement('div');
            leftPaw.className = 'paw-print';
            leftPaw.innerHTML = PAW_SVG;
            Object.assign(leftPaw.style, leftPositions[i]);
            pawContainer.appendChild(leftPaw);

            const rightPaw = document.createElement('div');
            rightPaw.className = 'paw-print';
            rightPaw.innerHTML = PAW_SVG;
            Object.assign(rightPaw.style, rightPositions[i]);
            pawContainer.appendChild(rightPaw);

            // Hapus elemen setelah animasi
            setTimeout(() => {
                leftPaw.remove();
                rightPaw.remove();
            }, 2000);
            
            await delay(350); // Jeda antar pasang jejak kaki
        }

        await delay(1000); // Tunggu sisa animasi selesai
    }

    /**
     * Membuat animasi intro love dan rose berterbangan.
     * @returns {Promise<void>}
     */
    function createRoseAndLoveIntro() {
        return new Promise(resolve => {
            const elementsToCreate = 20; // Jumlah total elemen (10 mawar, 10 hati)
            const container = loveContainer; // Kita bisa pakai container yang sama
            container.innerHTML = ''; // Bersihkan dulu

            for (let i = 0; i < elementsToCreate; i++) {
                const el = document.createElement('div');
                const isLove = i % 2 === 0;
                const animationChoices = [
                    'fly-from-top-left',
                    'fly-from-top-right',
                    'fly-from-bottom-left',
                    'fly-from-bottom-right'
                ];
                const randomAnimation = animationChoices[Math.floor(Math.random() * animationChoices.length)];
                
                el.className = isLove ? 'love-piece' : 'flower-piece';
                el.style.animation = `${randomAnimation} 3s ease-in-out forwards`;
                el.style.animationDelay = `${Math.random() * 2}s`;

                el.innerHTML = isLove ? LOVE_SVG : FLOWER_SVG;
                
                container.appendChild(el);
                setTimeout(() => el.remove(), 4500);
            }

            setTimeout(resolve, 3000); // Selesaikan promise setelah 3 detik
        });
    }

    /**
     * Menampilkan kartu ucapan utama dengan transisi fade.
     */
    async function showMain() {
        showMainBtn.disabled = true; // Nonaktifkan tombol

        await createPawAnimation();
        await createRoseAndLoveIntro();

        splash.style.opacity = '0';
        splash.setAttribute('aria-hidden', 'true');

        splash.addEventListener('transitionend', () => {
            splash.style.display = 'none';
            mainCard.style.display = 'block';
            mainCard.setAttribute('aria-hidden', 'false');
            setTimeout(() => mainCard.classList.add('show'), 20);
        }, { once: true });
    }

    /**
     * Animasi mengetik untuk menampilkan teks karakter per karakter.
     * @param {HTMLElement} element - Elemen HTML untuk menampilkan teks.
     * @param {string} text - Teks yang akan diketik.
     * @returns {Promise<void>}
     */
    function typewriterEffect(element, text) {
        return new Promise(resolve => {
            let i = 0;
            const cursor = '<span class="cursor"></span>';
            element.innerHTML = cursor; // Mulai dengan kursor
            element.style.minHeight = '70px'; // Jaga layout agar tidak berantakan

            function type() {
                if (i < text.length) {
                    // Sisipkan teks sebelum kursor
                    element.innerHTML = text.substring(0, i + 1) + cursor;
                    i++;
                    setTimeout(type, 50); // Kecepatan mengetik (ms)
                } else {
                    // Hapus kursor setelah selesai
                    element.innerHTML = text;
                    resolve(); // Selesaikan promise
                }
            }
            type();
        });
    }

    /**
     * Menampilkan layar penutup "Terima Kasih".
     */
    function showFinale() {
        const animations = [
            'rose-to-center-from-top',
            'rose-to-center-from-bottom',
            'rose-to-center-from-left',
            'rose-to-center-from-right'
        ];

        // Sembunyikan kartu utama
        mainCard.style.opacity = '0';
        mainCard.style.pointerEvents = 'none';

        // Tampilkan layar finale
        finaleScreen.classList.add('visible');

        // Tambahkan ikon hati utama ke kontainer finale
        finaleIconContainer.innerHTML = `<svg class="finale-heart" viewBox="0 0 512 512">${LOVE_SVG}</svg>`;

        // Buat animasi mawar dari 4 sisi
        for (let i = 0; i < 24; i++) {
            setTimeout(() => {
                const rose = document.createElement('div');
                rose.className = 'finale-rose';
                rose.innerHTML = ROSE_SVG;
                // Pilih animasi secara berurutan dari 4 arah
                rose.style.animation = `${animations[i % 4]} 2.5s ease-in forwards`;
                finaleScreen.appendChild(rose);

                setTimeout(() => rose.remove(), 2500);
            }, i * 100); // Jeda antar kemunculan mawar
        }
    }

    /**
     * Membuat animasi hati ajaib yang berputar.
     */
    function createMagicLoveEffect() {
        magicLoveContainer.innerHTML = ''; // Bersihkan dulu

        const love = document.createElement('div');
        love.className = 'magic-love';
        // SVG untuk ikon hati
        love.innerHTML = `<svg viewBox="0 0 512 512">${LOVE_SVG}</svg>`;
        
        magicLoveContainer.appendChild(love);

        // Hapus elemen setelah animasi selesai
        setTimeout(() => love.remove(), 6000);
    }

    /**
     * Menampilkan animasi kejutan (konfeti, balon, bunga).
     */
    async function showSurprise() {
        // Nonaktifkan tombol untuk mencegah klik berulang
        surpriseBtn.disabled = true;
        cardImage.classList.remove('glow'); // Reset glow effect

        const originalText = cardParagraph.textContent;

        // 1. Animasi awal: getar kartu & putar judul
        mainCard.style.animation = 'card-shake 0.5s';
        mainCard.addEventListener('animationend', () => { mainCard.style.animation = ''; }, { once: true });

        cardTitle.style.animation = 'text-spin 1s ease-in-out';
        cardTitle.addEventListener('animationend', () => { cardTitle.style.animation = ''; }, { once: true });

        // 2.5. Jalankan efek hati ajaib BERSAMAAN dengan efek mengetik
        createMagicLoveEffect();

        // 2. Jalankan efek mengetik dan tunggu hingga selesai
        await typewriterEffect(cardParagraph, originalText);

        // 3. Kejutan Utama (setelah teks selesai diketik)
        surpriseSound.currentTime = 0;
        surpriseSound.play();
        surpriseMessage.classList.add('show');
        setTimeout(() => surpriseMessage.classList.remove('show'), 4000);

        // Hapus & buat ulang elemen animasi
        [confettiContainer, balloonContainer, sparkleContainer, loveContainer].forEach(c => c.innerHTML = '');

        createAnimatedElements(confettiContainer, 'confetti-piece', 100, 4000);
        createAnimatedElements(balloonContainer, 'balloon-piece', 12, 5000);
        createAnimatedElements(sparkleContainer, 'sparkle-piece', 30, 2000);
        createAnimatedElements(loveContainer, 'love-piece', 20, 5000);

        // 4. Efek akhir setelah semua animasi dimulai
        await delay(2000); // Delay sebelum glow muncul
        cardImage.classList.add('glow'); // Tambahkan efek glow pada foto

        // 5. Tampilkan layar penutup setelah beberapa saat
        await delay(3000);
        showFinale();
    }

    /**
     * Fungsi generik untuk membuat elemen animasi.
     * @param {HTMLElement} container - Wadah untuk elemen.
     * @param {string} className - Class CSS untuk elemen.
     * @param {number} count - Jumlah elemen yang akan dibuat.
     * @param {number} removalDelay - Waktu (ms) sebelum elemen dihapus.
     */
    function createAnimatedElements(container, className, count, removalDelay) {
        for (let i = 0; i < count; i++) {
            const el = document.createElement('div');
            el.className = className;

            // Atur properti gaya acak
            el.style.left = `${Math.random() * 100}vw`;
            el.style.background = `hsl(${Math.random() * 360}, 90%, 70%)`;
            el.style.animationDelay = `${Math.random() * 1}s`;
            el.style.animationDuration = `${Math.random() * 2 + 3}s`; // Durasi acak

            if (className === 'sparkle-piece') {
                el.style.top = `${10 + Math.random() * 80}vh`;
                el.innerHTML = SPARKLE_SVG;
                el.style.fill = `hsl(${Math.random() * 60 + 200}, 90%, 70%)`; // Warna kebiruan/ungu
                el.style.animationDuration = `${Math.random() * 1 + 0.5}s`; // Durasi lebih cepat
            } else if (className === 'love-piece') {
                el.style.background = 'none'; // Hapus background default
                el.innerHTML = LOVE_SVG; // SVG sudah didefinisikan
            }

            container.appendChild(el);

            // Hapus elemen setelah animasi selesai untuk menjaga performa
            setTimeout(() => el.remove(), removalDelay + (Math.random() * 2000));
        }
    }

    // --- Inisialisasi & Event Listeners ---

    // Tambahkan event listener ke tombol
    showMainBtn.addEventListener('click', showMain);
    surpriseBtn.addEventListener('click', showSurprise);

    fixItBtn.addEventListener('click', () => {
        fake404Screen.style.opacity = '0';
        fake404Screen.addEventListener('transitionend', () => {
            fake404Screen.style.display = 'none';
            // Tampilkan layar unggah foto
            photoUploadScreen.style.display = 'flex';
            setTimeout(() => photoUploadScreen.style.opacity = '1', 20);
        }, { once: true });
    });

    // Fungsi untuk melanjutkan ke splash screen
    function proceedToSplash() {
        photoUploadScreen.style.opacity = '0';
        photoUploadScreen.addEventListener('transitionend', () => {
            photoUploadScreen.style.display = 'none';
            // Tampilkan layar mystery box
            mysteryBoxScreen.style.display = 'flex';
            setTimeout(() => mysteryBoxScreen.style.opacity = '1', 20);
            startKeyMysteryGame();
        }, { once: true });
    }

    // Event listener untuk input file
    photoUploadInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            // Buat URL objek dari file yang dipilih
            const newPhotoURL = URL.createObjectURL(file);
            // Ganti sumber gambar di kartu utama
            cardImage.src = newPhotoURL;
        }
        // Lanjutkan ke splash screen setelah memilih foto (atau tidak)
        proceedToSplash();
    });

    // Event listener untuk tombol lewati
    skipUploadBtn.addEventListener('click', () => {
        proceedToSplash(); // Langsung ke splash screen tanpa mengubah foto
    });

    // --- Service Worker Registration ---
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => console.log('Service Worker registered successfully:', registration))
                .catch(error => console.log('Service Worker registration failed:', error));
        });
    }
});