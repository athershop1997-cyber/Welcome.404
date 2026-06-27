let hasStarted = false;
let realIP = "51.149.74.70"; 

// جلب الـ IP الحقيقي
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

function startHack() {
    if (hasStarted) return;
    hasStarted = true;

    // إخفاء الشاشة السوداء وإظهار المحتوى فوراً
    document.getElementById('click-anywhere').style.style.display = 'none';
    document.getElementById('main-content').style.display = 'flex';

    const laugh = document.getElementById('hack-laugh');
    const typingSound = document.getElementById('typing-sound');
    
    // تشغيل الأصوات
    laugh.play().catch(e => console.log(e));
    typingSound.play().catch(e => console.log(e));

    const lines = document.querySelectorAll('.console-line');
    let delay = 200;

    lines.forEach((line, index) => {
        setTimeout(() => {
            line.style.display = 'block';
            
            if (index === lines.length - 1) {
                setTimeout(() => {
                    typingSound.pause();
                    document.getElementById('user-ip').innerText = realIP;
                    document.getElementById('user-os').innerText = getOS();
                    document.getElementById('info-box').style.display = 'block';
                }, 1000);
            }
        }, delay);
        delay += 1200; 
    });
}
