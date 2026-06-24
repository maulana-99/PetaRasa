Tentu, berikut adalah isi file Markdown (`.md`) yang disusun secara komprehensif dan mendetail berdasarkan seluruh isi dokumen spesifikasi tugas besar. Anda dapat menyalin teks di bawah ini untuk digunakan oleh asisten AI Anda.

***

# Dokumentasi Proyek: Menu Planner (Web Client Development)

## 1. Ikhtisar Proyek
*   **Tema:** Website Perencana Menu Makan (Menu Planner).
*   **Tujuan:** Membangun aplikasi web interaktif yang memungkinkan pengguna memilih menu makanan dan melihat hasilnya (kalori, harga, kategori gizi) secara *real-time*.
*   **Target:** Kelompok berisi 3 orang dengan estimasi waktu pengerjaan 900 menit.

## 2. Struktur Website (Minimal 2 Halaman)
### A. Landing Page (Halaman Utama)
*   **Konsep:** Bergaya marketing/promosi produk nyata (bukan sekadar daftar teks).
*   **Elemen Wajib:** 
    *   Hero/Banner utama.
    *   Penjelasan konsep Menu Planner.
    *   Highlight menu favorit.
    *   Tombol Call-to-Action (CTA) ke halaman Planner.
*   **Elemen Opsional:** Testimoni, statistik pengguna, atau elemen marketing relevan lainnya.
*   **Responsivitas:** Wajib rapi saat layar di-*resize*.

### B. Halaman Planner (Inti Aplikasi)
Berisi dua komponen utama yang saling berinteraksi:
1.  **Tabel Menu:**
    *   Kolom: Gambar, Nama Menu, Kategori, Kalori, Harga, dan Pilih (Checkbox).
    *   Menampilkan seluruh **26 item menu** yang diwajibkan.
    *   Gambar harus dicari sendiri dengan rasio yang konsisten.
2.  **Panel Hasil (Update Real-time via JavaScript):**
    *   **Image Stack:** Menampilkan tumpukan visual/grid gambar dari menu yang dicentang.
    *   **Kalkulasi:** Total Kalori (sum) dan Total Harga (sum) dari menu terpilih.
    *   **Checklist 5 Kategori:** Status terpenuhi untuk kategori Pokok, Lauk-Pauk, Sayur, Buah, dan Minuman (minimal 1 item per kategori).
    *   **Dynamic Badge:** Menampilkan badge **"Menu Seimbang!"** jika dan hanya jika ke-5 kategori terpenuhi (wajib melalui logika JS, bukan *hardcode*).
    *   **Empty State:** Pesan "Belum ada menu dipilih" jika tidak ada checkbox yang aktif.

## 3. Persyaratan Teknis & Logika
*   **HTML:** Menggunakan elemen `<table>` atau `<div>` yang disusun menyerupai tabel.
*   **CSS:** Harus menggunakan CSS eksternal, palet warna yang konsisten, dan desain responsif.
*   **JavaScript (DOM Manipulation):**
    *   `addEventListener` pada setiap checkbox.
    *   Looping data (array of objects) untuk generate baris tabel secara dinamis (`createElement` atau `innerHTML`).
    *   Kalkulasi *real-time* tanpa perlu reload halaman.
    *   Manipulasi `classList` atau `.style` untuk manajemen tampilan badge dan status kategori.

## 4. Daftar Data Menu Wajib (26 Item)
*Data kalori dan harga berikut bersifat tetap (fixed) dan tidak boleh diubah:*

| Nama Menu | Kategori | Kalori (kkal) | Harga (Rp) |
| :--- | :--- | :--- | :--- |
| Nasi Putih | Makanan Pokok | 180 | 5.000 |
| Nasi Goreng Spesial | Makanan Pokok | 450 | 18.000 |
| Mie Goreng Jawa | Makanan Pokok | 380 | 16.000 |
| Spaghetti Aglio Olio | Makanan Pokok | 420 | 28.000 |
| Kentang Panggang | Makanan Pokok | 220 | 15.000 |
| Roti Gandum (2 lembar) | Makanan Pokok | 160 | 8.000 |
| Ayam Goreng Tepung | Lauk-Pauk | 300 | 17.000 |
| Ayam Bakar Madu | Lauk-Pauk | 280 | 20.000 |
| Rendang Daging Sapi | Lauk-Pauk | 380 | 32.000 |
| Tempe Orek | Lauk-Pauk | 150 | 8.000 |
| Tahu Goreng | Lauk-Pauk | 120 | 6.000 |
| Ikan Nila Bakar | Lauk-Pauk | 250 | 22.000 |
| Telur Dadar | Lauk-Pauk | 190 | 7.000 |
| Beef Steak Sirloin | Lauk-Pauk | 420 | 45.000 |
| Tumis Kangkung | Sayur | 90 | 9.000 |
| Sayur Asem | Sayur | 70 | 8.000 |
| Capcay Kuah | Sayur | 110 | 13.000 |
| Salad Sayur Segar | Sayur | 80 | 14.000 |
| Gado-Gado | Sayur | 280 | 16.000 |
| Pisang (1 buah) | Buah | 105 | 5.000 |
| Apel Fuji (1 buah) | Buah | 95 | 7.000 |
| Semangka (1 potong) | Buah | 60 | 6.000 |
| Fruit Salad Cup | Buah | 140 | 17.000 |
| Es Teh Manis | Minuman | 90 | 5.000 |
| Air Mineral 600ml | Minuman | 0 | 4.000 |
| Jus Alpukat | Minuman | 230 | 18.000 |

*Catatan: Kategori "Minuman" dihitung sebagai kategori ke-5 untuk membentuk "Menu Seimbang".*

## 5. Aturan Pengumpulan & Penilaian
*   **Platform:** Repositori GitHub (Cantumkan Nama & NIM anggota di README).
*   **Akses:** Public atau Private (Invite `drestanto` sebagai collaborator jika private).
*   **Deadline:** **Sabtu, 4 Juli 2026, pukul 23.59.59 WIB**.
*   **Aspek Penilaian Utama:**
    1. Kualitas desain dan responsivitas Landing Page.
    2. Kelengkapan dan kerapian Tabel Menu (26 item).
    3. Akurasi logika JavaScript (Kalkulasi, Checklist kategori, dan Badge).
    4. Kreativitas dan orisinalitas karya.

***
