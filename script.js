
let currentCode = '';
let currentScreen = 'main-screen';
let currentMemory = 0;
let typingAnimation = null;
let isTyping = false;

const correctCode = '2906'; // Birthday code

const memories = [
    { title: 'Memory 1', description: 'Beautiful moments captured', photo: 'foto1.jpg' },
    { title: 'Memory 2', description: 'Special times together', photo: 'foto2.jpg' },
    { title: 'Memory 3', description: 'Unforgettable experiences', photo: 'foto3.jpg' },
    { title: 'Memory 4', description: 'Precious memories', photo: 'foto4.jpg' },
    { title: 'Memory 5', description: 'Happy moments', photo: 'foto5.jpg' },
    { title: 'Memory 6', description: 'Sweet memories', photo: 'foto6.jpg' },
    { title: 'Memory 7', description: 'Cherished moments', photo: 'foto7.jpg' },
    { title: 'Memory 8', description: 'Special times', photo: 'foto8.jpg' },
    { title: 'Memory 9', description: 'Beautiful days', photo: 'foto9.jpg' },
    { title: 'Memory 10', description: 'Happy times', photo: 'foto10.jpg' },
    { title: 'Memory 11', description: 'Wonderful moments', photo: 'foto11.jpg' },
    { title: 'Memory 12', description: 'Amazing memories', photo: 'foto12.jpg' },
    { title: 'Memory 13', description: 'Perfect moments', photo: 'foto13.jpg' },
    { title: 'Memory 14', description: 'Great times', photo: 'foto14.jpg' },
    { title: 'Memory 15', description: 'Lovely memories', photo: 'foto15.jpg' },
    { title: 'Memory 16', description: 'Special moments', photo: 'foto16.jpg' },
    { title: 'Memory 17', description: 'Beautiful memories', photo: 'foto17.jpg' },
    { title: 'Memory 18', description: 'Precious times', photo: 'foto18.jpg' }
];

let autoSlideInterval;

const loveLetters = {
    myLove: {
        title: 'Happy Birthday to My Favorite Person 💖',
        content: `
      <h2>Selamat Ulang Tahun, Opie tercinta 🥰</h2>
      <p>Hari ini bukan cuma tentang usia yang bertambah… tapi tentang betapa bersyukurnya aku karena semesta menghadirkan kamu ke dunia ini tepat 20 tahun lalu.</p>
      <p>Opie, tahu nggak? Kamu itu seperti hangatnya matahari pagi setelah malam yang panjang. Selalu punya cara buat bikin dunia ini terasa lebih lembut, lebih manis, dan jauh lebih indah.</p>
      <p>Terima kasih ya, karena kamu tetap jadi kamu: yang lembut, yang kuat, yang ceria, dan yang selalu penuh kasih. Kamu punya cahaya yang nggak bisa dipalsukan. Dan aku jatuh cinta setiap kali cahaya itu muncul, bahkan di hal-hal kecil.</p>
      <p>Aku nggak minta banyak hari ini, cuma satu: semoga setiap harapan kamu terkabul. Semoga kamu selalu merasa cukup, dicintai, dan dipeluk hangat oleh semesta… dan sama aku juga, tentunya. 🫶🏻</p>
      <p>Kamu nggak perlu jadi siapa-siapa. Cukup jadi kamu yang sekarang—karena itu udah lebih dari cukup buat aku. Dan semoga, aku bisa jadi alasan kamu senyum hari ini… dan setiap hari sesudahnya.</p>
      <p style="text-align: right; margin-top: 30px; font-style: italic;">
        Peluk hangat dari seseorang yang nggak pernah berhenti sayang sama kamu,<br>
        <strong>Mr. K ❤️</strong>
      </p>
    `
    },
    foreverLove: {
        title: 'To the One Who Means So Much 🥺💕',
        content: `
          <h2>Selamat Ulang Tahun, Opie Sayang 🎉</h2>
          <p>20 tahun, ya? Waktu cepet banget ya. Rasanya baru kemarin kita ngobrol random, ketawa-tawa hal nggak penting… and now here we are, di hari spesial kamu. Happy birthday, my favorite person ❤️</p>

          <p>Opie, kamu itu sosok yang luar biasa. You're strong, you're kind, and you're one of the warmest souls I've ever met. Cara kamu ngadepin hidup, cara kamu nyemangatin orang lain, itu selalu bikin aku mikir, “wow… I’m lucky to know her.”</p>

          <p>Di usia yang baru ini, aku harap kamu tetap jadi kamu—yang lembut, tulus, dan selalu berusaha meskipun kadang capek. Life won’t always be easy, tapi selama kamu terus jadi versi terbaik dari diri kamu, everything will fall into place eventually.</p>

          <p>Semoga hari ini penuh cinta, tawa, dan momen kecil yang bisa kamu simpan di hati. Semoga kamu selalu merasa cukup, dan nggak lupa kalau kamu layak dapetin semuanya—yang baik, yang indah, yang bikin kamu bahagia.</p>

          <p>And kalau suatu hari nanti kamu ngerasa lelah, inget aja: kamu nggak sendiri. You’ll always have me—cheering for you, praying for you, loving you, quietly but constantly.</p>

          <p style="text-align: right; margin-top: 30px; font-style: italic;">
            Selamat ulang tahun, Opie-ku.<br>
            Peluk paling hangat dari seseorang yang sayang kamu banget,<br>
            <strong>Mr. K 🫶🏻</strong>
          </p>
        `
    }
};

function enterDigit(digit) {
    if (currentCode.length < 4) {
        currentCode += digit;
        updateHearts();
    }
}

function clearCode() {
    currentCode = '';
    updateHearts();
}

function updateHearts() {
    const heartBoxes = document.querySelectorAll('.heart-box');
    heartBoxes.forEach((box, index) => {
        if (index < currentCode.length) {
            box.classList.add('filled');
            box.textContent = '❤️';
        } else {
            box.classList.remove('filled');
            box.textContent = '';
        }
    });
}

function unlockGift() {
    if (currentCode === correctCode) {
        showScreen('anniversary-screen');
        // Add celebration effect
        createHearts();
    } else {
        // Wrong code animation
        const container = document.querySelector('#main-screen .container');
        container.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            container.style.animation = '';
        }, 500);
        clearCode();
    }
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    currentScreen = screenId;
}

function showLetter(letterType) {
    const letter = loveLetters[letterType];
    const popup = document.getElementById('letter-popup');
    const content = document.getElementById('letter-content');

    content.innerHTML = letter.content;
    popup.classList.add('show');

    // Start typing animation
    startTypingAnimation();
}

function closeLetter() {
    const popup = document.getElementById('letter-popup');
    popup.classList.remove('show');
    stopTypingAnimation();
}

function startTypingAnimation() {
    const paragraphs = document.querySelectorAll('#letter-content p');
    let currentP = 0;
    isTyping = true;

    // Hide all paragraphs initially
    paragraphs.forEach(p => {
        p.style.opacity = '0';
        p.style.transform = 'translateY(20px)';
    });

    function showNextParagraph() {
        if (currentP < paragraphs.length && isTyping) {
            const p = paragraphs[currentP];
            p.style.transition = 'all 0.6s ease';
            p.style.opacity = '1';
            p.style.transform = 'translateY(0)';

            currentP++;
            typingAnimation = setTimeout(showNextParagraph, 1000);
        }
    }

    showNextParagraph();
}

function stopTypingAnimation() {
    isTyping = false;
    if (typingAnimation) {
        clearTimeout(typingAnimation);
    }
}

function skipTyping() {
    closeLetter();
}

function updateMemoryDisplay() {
    const memory = memories[currentMemory];
    const memoryPhoto = document.querySelector('.memory-photo');

    memoryPhoto.setAttribute('data-title', memory.title);
    memoryPhoto.setAttribute('data-description', memory.description);

    // Update the photo content
    memoryPhoto.innerHTML = '';
    const imgElement = document.createElement('img');
    imgElement.style.cssText = `
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
    `;
    imgElement.src = memory.photo;
    imgElement.alt = memory.title;
    memoryPhoto.appendChild(imgElement);

    // Update dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentMemory);
    });
}

function nextMemory() {
    currentMemory = (currentMemory + 1) % memories.length;
    updateMemoryDisplay();
    // Reset auto-slide timer when manually navigating
    if (autoSlideInterval) {
        stopAutoSlide();
        startAutoSlide();
    }
}

function prevMemory() {
    currentMemory = (currentMemory - 1 + memories.length) % memories.length;
    updateMemoryDisplay();
    // Reset auto-slide timer when manually navigating
    if (autoSlideInterval) {
        stopAutoSlide();
        startAutoSlide();
    }
}

function createHearts() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💖';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '100vh';
            heart.style.fontSize = '30px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1000';
            heart.style.animation = 'float-up 4s ease-out forwards';

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 4000);
        }, i * 80);
    }
}

// Close popup when clicking outside
document.getElementById('letter-popup').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLetter();
    }
});

let isPlaying = false;

function toggleMusic() {
    const audio = document.getElementById('backgroundMusic');
    const playBtn = document.getElementById('playBtn');
    const vinyl = document.getElementById('vinyl');

    if (isPlaying) {
        audio.pause();
        playBtn.textContent = '▶';
        vinyl.classList.remove('playing');
        isPlaying = false;
    } else {
        audio.play().then(() => {
            playBtn.textContent = '⏸';
            vinyl.classList.add('playing');
            isPlaying = true;
        }).catch(e => {
            console.log('Audio play failed:', e);
            // Fallback: still show playing state
            playBtn.textContent = '⏸';
            vinyl.classList.add('playing');
            isPlaying = true;
        });
    }
}

// Auto-slide functionality
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        nextMemory();
    }, 3500); // 2 seconds
}

function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
    }
}

// Auto-play effect when entering anniversary screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    currentScreen = screenId;

    // Auto-start music and photo slideshow when entering anniversary screen
    if (screenId === 'anniversary-screen') {
        setTimeout(() => {
            const vinyl = document.getElementById('vinyl');
            const playBtn = document.getElementById('playBtn');
            const audio = document.getElementById('backgroundMusic');

            // Try to auto-play the audio
            audio.play().then(() => {
                vinyl.classList.add('playing');
                playBtn.textContent = '⏸';
                isPlaying = true;
            }).catch(e => {
                console.log('Auto-play prevented by browser policy');
                // Show play button ready to be clicked
                playBtn.textContent = '▶';
                isPlaying = false;
            });

            // Start auto-slide for photos
            startAutoSlide();
        }, 1000);
    } else {
        stopAutoSlide();
    }
}

// Initialize
updateHearts();
updateMemoryDisplay();
