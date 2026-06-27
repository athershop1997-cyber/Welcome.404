let realIP = "51.149.74.70";
let hasAudioStarted = false;

// جلب الـ IP الحقيقي تلقائياً
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => { realIP = data.ip; })
    .catch(() => { realIP = "51.149.74.70"; });

function getOS() {
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf("Windows") !== -1) return "Windows OS";
    if (userAgent.indexOf("Mac") !== -1) return "macOS";
    if (userAgent.indexOf("Linux") !== -1) return "Linux Core";
    if (userAgent.indexOf("Android") !== -1) return "Android System";
    if (userAgent.indexOf("iPhone") !== -1) return "iOS (iPhone)";
    return "Linux Core";
}

// بدء تشغيل الأسطر فور تحميل الصفحة مباشرة
window.addEventListener('DOMContentLoaded', () => {
    const lines = document.querySelectorAll('.console-line');
    const typingSound = document.getElementById('typing-sound');
    let delay = 100;

    // حيلة ذكية لتفعيل الصوت بمجرد أن يلمس الزائر الشاشة أو يحرك الفأرة
    const startAudio = () => {
        if (!hasAudioStarted) {
            hasAudioStarted = true;
            document.getElementById('hack-laugh').play().catch(() => {});
            typingSound.play().catch(() => {});
        }
    };
    window.addEventListener('mousemove', startAudio);
    window.addEventListener('touchstart', startAudio);
    window.addEventListener('click', startAudio);

    lines.forEach((line, index) => {
        setTimeout(() => {
            line.style.display = 'block';
            
            // عند الوصول لآخر سطر يظهر صندوق الـ IP والـ OS الحقيقي
            if (index === lines.length - 1) {
                setTimeout(() => {
                    typingSound.pause(); // إيقاف صوت الكتابة
                    document.getElementById('user-ip').innerText = realIP;
                    document.getElementById('user-os').innerText = getOS();
                    document.getElementById('info-box').style.display = 'block';
                }, 1200);
            }
        }, delay);
        delay += 1400; // فارق الوقت لظهور السطور وجماليتها
    });
});
