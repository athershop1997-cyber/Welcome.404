let hasStarted = false;

// وظيفة التعرف على نظام التشغيل الحقيقي للمستخدم
function getOS() {
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf("Windows") !== -1) return "Windows OS";
    if (userAgent.indexOf("Mac") !== -1) return "macOS";
    if (userAgent.indexOf("X11") !== -1) return "UNIX OS";
    if (userAgent.indexOf("Linux") !== -1) return "Linux Core";
    if (userAgent.indexOf("Android") !== -1) return "Android System";
    if (userAgent.indexOf("iPhone") !== -1) return "iOS (iPhone)";
    return "Unknown Secure OS";
}

// جلب الـ IP الحقيقي من خدمة عامة مجانية فور تحميل الصفحة
let realIP = "192.168.1.1"; 
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        realIP = data.ip;
    })
    .catch(() => {
        realIP = "51.149.74.70"; // IP افتراضي في حال فشل الاتصال بالخدمة
    });

function startHack() {
    if (hasStarted) return; // منع التكرار إذا ضغط المستخدم مرة أخرى
    hasStarted = true;

    // إخفاء غطاء الشاشة البدائي وإظهار المحتوى
    document.getElementById('click-anywhere').style.display = 'none';
    document.getElementById('main-content').style.display = 'flex';

    // تشغيل الضحكة وصوت الكتابة
    const laugh = document.getElementById('hack-laugh');
    const typingSound = document.getElementById('typing-sound');
    
    laugh.play();
    typingSound.play();

    // إظهار النصوص بشكل تدريجي ومحاكاة الكتابة
    const lines = document.querySelectorAll('.console-line');
    let delay = 600;

    lines.forEach((line, index) => {
        setTimeout(() => {
            line.style.display = 'block';
            if (index === lines.length - 1) {
                // إيقاف صوت الكتابة عند انتهاء السطور وإظهار البيانات الحقيقية
                setTimeout(() => {
                    typingSound.pause();
                    
                    // حقن البيانات الحقيقية في المستند
                    document.getElementById('user-ip').innerText = realIP;
                    document.getElementById('user-os').innerText = getOS();
                    
                    // إظهار مربع المعلومات النهائي
                    document.getElementById('info-box').style.display = 'block';
                }, 1500);
            }
        }, delay);
        delay += 1500; // الفارق الزمني بين كل سطر وسطر
    });
}
