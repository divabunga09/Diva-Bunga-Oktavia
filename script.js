/* Tombol untuk mengubah teks profil */
const tombolTeks = document.querySelector("#ubahTeks");
const deskripsi = document.querySelector("#deskripsi");

tombolTeks.addEventListener("click", function() {
    deskripsi.textContent =
        "Saya ingin terus belajar teknologi, meningkatkan kemampuan coding, dan membuat website yang bermanfaat.";
});

/* Tombol untuk mengganti tema */
const tombolTema = document.querySelector("#gantiTema");

tombolTema.addEventListener("click", function() {
    document.body.classList.toggle("gelap");
});