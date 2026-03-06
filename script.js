// 確保語言設定為中文並永久保存
(function() {
    // 設定語言為繁體中文
    const preferredLanguage = 'zh-TW';

    // 儲存語言偏好設定到 localStorage
    localStorage.setItem('preferredLanguage', preferredLanguage);

    // 確保 HTML 標籤的 lang 屬性設定為繁體中文
    document.documentElement.lang = preferredLanguage;

    // 設定 content-language meta 標籤
    const contentLanguageMeta = document.querySelector('meta[http-equiv="content-language"]');
    if (contentLanguageMeta) {
        contentLanguageMeta.setAttribute('content', preferredLanguage);
    }
})();

// 行動裝置選單切換
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
    function updateMenuState(isOpen) {
        navMenu.classList.toggle('open', isOpen);
        menuToggle.classList.toggle('active', isOpen);
        menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        menuToggle.setAttribute('aria-label', isOpen ? '關閉選單' : '開啟選單');
    }

    menuToggle.addEventListener('click', function() {
        updateMenuState(!navMenu.classList.contains('open'));
    });

    // 點擊選單項目後自動關閉選單
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            updateMenuState(false);
        });
    });
}

// 平滑滾動效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 聯絡表單處理
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // 在實際應用中，這裡會發送資料到後端
        console.log('表單資料:', { name, email, message });

        // 顯示成功訊息
        alert('感謝您的訊息！我們會盡快回覆您。');

        // 清空表單
        contactForm.reset();
    });
}

// 開始探索按鈕
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// 滾動時導航欄效果
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    }

    lastScroll = currentScroll;
});

// 卡片動畫效果
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 為所有卡片添加觀察
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.feature-card, .service-item, .resource-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
