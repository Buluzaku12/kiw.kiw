document.getElementById("yesButton").addEventListener("click", function() {
    // Arahkan ke halaman terima kasih
    window.location.href = "thankyou.html";
});

const noButton = document.getElementById("noButton");

// Menambahkan efek ketika cursor mendekat
document.addEventListener("mousemove", function(event) {
    const buttonRect = noButton.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    const distance = Math.sqrt(Math.pow(event.clientX - buttonCenterX, 2) + Math.pow(event.clientY - buttonCenterY, 2));

    // Jika cursor mendekati tombol dalam jarak 100px, pindahkan tombol
    if (distance < 100) {
        moveButton();
    }
});

// Fungsi untuk memindahkan tombol ke posisi acak
function moveButton() {
    const randomX = Math.random() * (window.innerWidth - 100); // Menghasilkan posisi acak dalam batas lebar jendela
    const randomY = Math.random() * (window.innerHeight - 100); // Menghasilkan posisi acak dalam batas tinggi jendela
    noButton.style.position = 'absolute'; // Mengatur posisi tombol menjadi absolute
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}