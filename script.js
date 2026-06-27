function startHack() {
    // إخفاء شاشة البدء
    document.getElementById('overlay').style.display = 'none';
    
    // إظهار المحتوى الرئيسي
    document.getElementById('main-content').style.display = 'flex';
    
    // تشغيل صوت الضحكة
    const audio = document.getElementById('hack-laugh');
    audio.play().catch(e => console.log("Audio play prevented:", e));
    
    // توليد رقم IP عشوائي لإكمال المظهر الواقعي للمقلب
    const randomIP = `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 100)}.${Math.floor(Math.random() * 254)}`;
    document.getElementById('user-ip').innerText = randomIP;
}