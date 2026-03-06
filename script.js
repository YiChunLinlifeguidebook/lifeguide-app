// 多語言翻譯資料
const translations = {
    'zh-TW': {
        'logo': '生命指南',
        'nav.home': '首頁',
        'nav.about': '關於我們',
        'nav.services': '服務項目',
        'nav.resources': '資源',
        'nav.contact': '聯絡我們',
        'hero.title': '歡迎來到生命指南',
        'hero.subtitle': '為您的人生旅程提供全方位的指導與支持',
        'hero.cta': '開始探索',
        'about.title': '關於我們',
        'about.desc': '生命指南致力於幫助每個人找到生命的意義和方向。我們提供專業的諮詢服務、豐富的學習資源，以及支持性的社群環境。',
        'about.feature1.title': '專業諮詢',
        'about.feature1.desc': '經驗豐富的專業團隊為您提供一對一的人生規劃諮詢',
        'about.feature2.title': '豐富資源',
        'about.feature2.desc': '提供各種學習資料、工具和實用指南',
        'about.feature3.title': '社群支持',
        'about.feature3.desc': '加入我們的社群，與志同道合的夥伴一起成長',
        'services.title': '服務項目',
        'services.item1.title': '個人發展計劃',
        'services.item1.desc': '量身定制的個人成長路線圖，幫助您實現人生目標',
        'services.item2.title': '職涯規劃',
        'services.item2.desc': '專業的職業生涯諮詢，協助您找到理想的職業道路',
        'services.item3.title': '生活平衡指導',
        'services.item3.desc': '學習如何在工作、家庭和個人興趣之間取得平衡',
        'services.item4.title': '心靈成長課程',
        'services.item4.desc': '提供各種線上和線下課程，促進心靈成長',
        'resources.title': '資源中心',
        'resources.card1.title': '文章與部落格',
        'resources.card1.desc': '閱讀最新的見解和實用建議',
        'resources.card2.title': '影音課程',
        'resources.card2.desc': '觀看專家分享的教學影片',
        'resources.card3.title': '下載資源',
        'resources.card3.desc': '取得免費的工作表和指南',
        'resources.card4.title': '常見問題',
        'resources.card4.desc': '找到您問題的答案',
        'contact.title': '聯絡我們',
        'contact.name': '姓名',
        'contact.namePlaceholder': '請輸入您的姓名',
        'contact.email': '電子郵件',
        'contact.emailPlaceholder': '請輸入您的電子郵件',
        'contact.message': '訊息',
        'contact.messagePlaceholder': '請輸入您的訊息',
        'contact.submit': '送出訊息',
        'footer.copy': '© 2026 生命指南 Life Guide. 版權所有。',
        'footer.privacy': '隱私政策',
        'footer.terms': '使用條款',
        'footer.sitemap': '網站地圖',
        'alert.success': '感謝您的訊息！我們會盡快回覆您。'
    },
    'en': {
        'logo': 'Life Guide',
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.services': 'Services',
        'nav.resources': 'Resources',
        'nav.contact': 'Contact Us',
        'hero.title': 'Welcome to Life Guide',
        'hero.subtitle': 'Comprehensive guidance and support for your life journey',
        'hero.cta': 'Start Exploring',
        'about.title': 'About Us',
        'about.desc': 'Life Guide is dedicated to helping everyone find meaning and direction in life. We offer professional consulting services, rich learning resources, and a supportive community.',
        'about.feature1.title': 'Professional Consulting',
        'about.feature1.desc': 'Our experienced team provides one-on-one life planning consultations',
        'about.feature2.title': 'Rich Resources',
        'about.feature2.desc': 'Access a wide range of learning materials, tools, and practical guides',
        'about.feature3.title': 'Community Support',
        'about.feature3.desc': 'Join our community and grow alongside like-minded peers',
        'services.title': 'Our Services',
        'services.item1.title': 'Personal Development Plan',
        'services.item1.desc': 'Tailored personal growth roadmaps to help you achieve your life goals',
        'services.item2.title': 'Career Planning',
        'services.item2.desc': 'Professional career consulting to help you find your ideal career path',
        'services.item3.title': 'Life Balance Coaching',
        'services.item3.desc': 'Learn how to achieve balance between work, family, and personal interests',
        'services.item4.title': 'Spiritual Growth Courses',
        'services.item4.desc': 'Online and offline courses to foster spiritual and personal growth',
        'resources.title': 'Resource Center',
        'resources.card1.title': 'Articles & Blog',
        'resources.card1.desc': 'Read the latest insights and practical advice',
        'resources.card2.title': 'Video Courses',
        'resources.card2.desc': 'Watch expert-led instructional videos',
        'resources.card3.title': 'Downloads',
        'resources.card3.desc': 'Access free worksheets and guides',
        'resources.card4.title': 'FAQ',
        'resources.card4.desc': 'Find answers to your questions',
        'contact.title': 'Contact Us',
        'contact.name': 'Name',
        'contact.namePlaceholder': 'Enter your name',
        'contact.email': 'Email',
        'contact.emailPlaceholder': 'Enter your email address',
        'contact.message': 'Message',
        'contact.messagePlaceholder': 'Enter your message',
        'contact.submit': 'Send Message',
        'footer.copy': '© 2026 Life Guide 生命指南. All rights reserved.',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Use',
        'footer.sitemap': 'Sitemap',
        'alert.success': 'Thank you for your message! We will get back to you soon.'
    }
};

// 套用語言到頁面
function applyLanguage(lang) {
    const t = translations[lang] || translations['zh-TW'];

    // 更新文字內容
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.textContent = t[key];
        }
    });

    // 更新 placeholder 屬性
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) {
            el.setAttribute('placeholder', t[key]);
        }
    });

    // 更新 HTML lang 屬性與 meta 標籤
    document.documentElement.lang = lang;
    const contentLanguageMeta = document.querySelector('meta[http-equiv="content-language"]');
    if (contentLanguageMeta) {
        contentLanguageMeta.setAttribute('content', lang);
    }

    // 更新語言切換按鈕標籤
    const btn = document.getElementById('langToggle');
    if (btn) {
        btn.textContent = lang === 'zh-TW' ? 'English' : '中文';
    }

    // 儲存偏好設定
    localStorage.setItem('preferredLanguage', lang);
}

// 切換語言
function toggleLanguage() {
    const current = localStorage.getItem('preferredLanguage') || 'zh-TW';
    const next = current === 'zh-TW' ? 'en' : 'zh-TW';
    applyLanguage(next);
}

// 初始化語言（從 localStorage 讀取，預設繁體中文）
(function() {
    const saved = localStorage.getItem('preferredLanguage') || 'zh-TW';
    applyLanguage(saved);
})();

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

        // 顯示成功訊息（依目前語言）
        const lang = localStorage.getItem('preferredLanguage') || 'zh-TW';
        const t = translations[lang] || translations['zh-TW'];
        alert(t['alert.success']);

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
