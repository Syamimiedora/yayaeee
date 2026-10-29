# Website CV & Portofolio Profesional - Syamimi Edora (Executive Administrator)

Website CV online modern, responsif, dan elegan yang dirancang khusus untuk posisi **Executive Administrator / Executive Assistant**. Dibuat menggunakan HTML5 murni, CSS3 modern (dengan variabel warna & dark mode), serta JavaScript interaktif tanpa dependensi framework berat.

---

## 📁 Struktur Berkas

```text
cv edora/
│
├── index.html       # Halaman utama CV (Profil, Keahlian, Pengalaman, Pendidikan, Kontak)
├── galeri.html      # Halaman baru Galeri Kegiatan (Dokumentasi Foto, Filter & Lightbox)
├── style.css        # Tata letak, tema elegan, dark/light mode, gaya galeri & mode cetak
├── script.js        # Logika interaktif: filter foto, lightbox popup, mode gelap, cetak
└── README.md        # Panduan penggunaan & kustomisasi
```

---

## 🌟 Fitur Utama

1. **Desain Eksklusif Korporat (Executive Aesthetic)**:
   - Kombinasi palet warna *Deep Executive Slate Navy* dan aksen *Champagne Gold*.
   - Tipografi elegan menggunakan Google Fonts (*Playfair Display* & *Plus Jakarta Sans*).
2. **Mode Gelap & Terang (Dark / Light Theme Toggle)**:
   - Tombol ganti tema dengan penyimpanan status otomatis di `localStorage`.
3. **Cetak CV Siap PDF (Print-Ready Resume)**:
   - Tombol **"Cetak CV"** otomatis memicu dialog cetak browser (`window.print()`).
   - Dilengkapi aturan `@media print` khusus yang otomatis menyembunyikan navigasi/tombol dan memformat tata letak menjadi dokumen CV resmi yang rapi untuk disimpan sebagai PDF atau dicetak fisik.
4. **Interaksi Salin Cepat (One-Click Copy)**:
   - Mengklik alamat email atau nomor telepon akan otomatis menyalin ke clipboard dengan notifikasi toast elegan.
5. **Formulir Kontak Terhubung**:
   - Pengunjung dapat mengirim pesan langsung, yang otomatis membuka aplikasi email tujuan (`mailto:`).
6. **Responsif Sepenuhnya**:
   - Tampilan optimal di smartphone, tablet, laptop, hingga monitor resolusi tinggi.

---

## 🚀 Cara Menjalankan Website

1. Buka folder `c:\Users\c\OneDrive\Documents\cv edora`.
2. Klik dua kali pada berkas **`index.html`** untuk langsung membukanya di browser (Chrome, Edge, Firefox, Safari).
3. Anda juga dapat menggunakan ekstensi **Live Server** di VS Code jika ingin melihat perubahan secara langsung saat mengedit kode.

---

## ✏️ Panduan Kustomisasi Data Pribadi

Semua informasi dapat Anda sesuaikan dengan mudah di berkas `index.html`:

### 1. Foto Profil
Foto profil Anda sudah terpasang menggunakan berkas foto di `images/gambar edora.jpeg`:
```html
<img src="images/gambar edora.jpeg" alt="Foto Profil Syamimi Edora" class="profile-avatar-img">
```
Jika ingin menggantinya di masa depan, Anda cukup mengganti berkas di folder `images/` atau mengubah path `src="..."`.

### 2. Mengubah Kontak (Email, No. HP, LinkedIn)
Cari teks `syamimiedora@email.com` dan `+62 812-3456-7890` di `index.html` dan `script.js`, lalu sesuaikan dengan nomor dan alamat email asli Anda.

### 3. Menyesuaikan Pengalaman & Pendidikan
Cari bagian `<section id="pengalaman">` dan `<section id="pendidikan">` untuk menambahkan atau mengubah nama perusahaan, tahun bekerja, dan daftar tanggung jawab kerja sesuai riwayat Anda.

### 4. Menyesuaikan Foto Galeri Kegiatan (`galeri.html`)
Buka berkas `galeri.html`. Setiap kartu foto memiliki format seperti ini:
```html
<div class="gallery-card" data-category="rapat" onclick="openLightbox(0)">
    <div class="gallery-img-wrapper">
        <img src="foto-rapat-anda.jpg" alt="Rapat Direksi" class="gallery-img">
        <span class="gallery-badge">Rapat Direksi</span>
    </div>
    <div class="gallery-info">
        <span class="gallery-date">Bulan Tahun</span>
        <h3 class="gallery-title">Judul Kegiatan Anda</h3>
        <p class="gallery-snippet">Deskripsi ringkas peran Anda dalam kegiatan ini.</p>
    </div>
</div>
```
- Anda cukup mengganti `src="..."` dengan nama berkas foto Anda yang disimpan di dalam folder ini (misal `img/kegiatan-1.jpg`).
- Pilihan kategori filter pada atribut `data-category`:
  - `rapat` (Rapat Direksi & C-Level)
  - `event` (Event & Townhall)
  - `pelatihan` (Pelatihan & Sertifikasi)
  - `operasional` (Operasional & Kunjungan)

---

## 🌐 Cara Publikasi ke Internet (Gratis)

Agar link CV ini bisa dimasukkan ke resume atau profil LinkedIn:

1. **GitHub Pages (Gratis)**:
   - Buat repositori baru di GitHub.
   - Unggah file `index.html`, `style.css`, dan `script.js`.
   - Buka **Settings** > **Pages** > pilih branch `main` > Save. Dalam beberapa menit, website Anda akan aktif di `https://username.github.io/cv-edora`.
2. **Netlify / Vercel (Gratis & Sangat Cepat)**:
   - Cukup seret (drag & drop) folder `cv edora` ke dashboard [Netlify Drop](https://app.netlify.com/drop) untuk langsung online dalam 10 detik!
