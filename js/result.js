// Form sonuçlarını localStorage'dan al ve göster
const data = JSON.parse(localStorage.getItem("formData"));

const output = document.getElementById("output");

if (data) {
    for (let key in data) {
        const p = document.createElement("p");
        p.textContent = `${key.toUpperCase()}: ${data[key]}`;
        output.appendChild(p);
    }
} else {
    output.textContent = "Gösterilecek veri yok.";
}
