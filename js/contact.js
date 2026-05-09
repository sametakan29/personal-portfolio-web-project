// Vanilla JS - Form validasyon ve submit
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = this;
    const formData = new FormData(form);
    const data = {};
    const error = document.getElementById("error");

    // Kontrol
    const requiredFields = ["name", "surname", "email", "phone", "subject", "message"];
    let hasError = false;

    for (let field of requiredFields) {
        if (!formData.get(field)?.trim()) {
            hasError = true;
        }
    }

    if (!formData.get("gender")) hasError = true;
    if (!formData.getAll("interests").length) hasError = true;

    const email = formData.get("email");
    const phone = formData.get("phone");

    if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
        error.innerText = "Geçerli bir e-posta giriniz.";
        return;
    }

    if (!/^[0-9]+$/.test(phone)) {
        error.innerText = "Telefon numarası sadece rakam içermelidir.";
        return;
    }

    if (hasError) {
        error.innerText = "Lütfen tüm alanları doldurun.";
        return;
    }

    // Hata yoksa verileri kaydet
    formData.forEach((value, key) => {
        // Birden fazla interest varsa dizi yap
        if (data[key]) {
            if (Array.isArray(data[key])) {
                data[key].push(value);
            } else {
                data[key] = [data[key], value];
            }
        } else {
            data[key] = value;
        }
    });

    localStorage.setItem("formData", JSON.stringify(data));
    window.location.href = "sonuc.html";
});

// Vue.js - Form validasyon
const { createApp } = Vue;

createApp({
    methods: {
        validateForm() {
            const name = document.querySelector('input[name="name"]').value.trim();
            const surname = document.querySelector('input[name="surname"]').value.trim();
            const email = document.querySelector('input[name="email"]').value.trim();
            const phone = document.querySelector('input[name="phone"]').value.trim();
            const subject = document.querySelector('select[name="subject"]').value;
            const gender = document.querySelector('input[name="gender"]:checked');
            const message = document.querySelector('textarea[name="message"]').value.trim();
            const interests = document.querySelectorAll('input[name="interests"]:checked');

            let errorMsg = "";

            if (!name || !surname || !email || !phone || !subject || !gender || !message || interests.length === 0) {
                errorMsg = "Lütfen tüm alanları doldurun.";
            } else if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
                errorMsg = "Geçerli bir e-posta giriniz.";
            } else if (!/^[0-9]+$/.test(phone)) {
                errorMsg = "Telefon numarası sadece rakam içermelidir.";
            }

            document.getElementById("error").innerText = errorMsg || "Form başarıyla kontrol edildi (Vue.js).";
        }
    }
}).mount("#contactForm");
