# 🧠 MedBrain - Deteksi dan Klasifikasi Stroke Berbasis AI dari Citra MRI

<img src="./public/images/Logo_1.png" alt="MedBrain Logo" width="200" />

**MedBrain** adalah platform berbasis kecerdasan buatan (AI) yang dirancang untuk membantu dokter dan institusi kesehatan dalam menganalisis citra MRI otak serta memprediksi jenis stroke secara otomatis menggunakan teknologi *Convolutional Neural Network* (CNN).

---

## 🧾 Ringkasan

MedBrain meningkatkan efisiensi diagnosis dengan mengurangi waktu yang dibutuhkan untuk mendeteksi stroke melalui analisis otomatis. Sistem ini membantu mendeteksi kasus stroke dengan akurasi tinggi, terutama di daerah yang kekurangan tenaga spesialis, serta memberikan akses ke teknologi analisis citra berbasis machine learning untuk klinik dan rumah sakit yang belum memiliki sistem canggih.

---

## ✨ Fitur Utama

- 🔐 **Autentikasi Pengguna**: Sistem login aman dengan kontrol akses berbasis peran (admin & tenaga kesehatan)
- 👤 **Manajemen Pasien**: Tambah dan kelola data pasien dengan mudah
- 🧠 **Analisis Citra MRI**: Unggah hasil MRI dan dapatkan prediksi stroke berbasis AI
- 📄 **Laporan Detail**: Terima laporan komprehensif dengan skor kepercayaan dan rekomendasi
- 🕓 **Riwayat Pemeriksaan**: Lacak riwayat pemeriksaan dan hasil pasien
- 📊 **Dashboard Admin**: Kelola pengguna dan data sistem secara efisien

---

## 🖼️ Tangkapan Layar

**1. Halaman Beranda**

---

## 🚀 Akses Demo

🔗 **Live Demo**: [https://medbrain.vercel.app](https://medbrain.vercel.app)

**Akun Demo:**

- Username: `user1`
- Password: `12345678`

---

## 🛠️ Teknologi yang Digunakan

### 🔧 Frontend

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Flowbite React](https://flowbite-react.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Axios](https://axios-http.com/)
- [React Hot Toast](https://react-hot-toast.com/)

### 🖥️ Backend

- [Node.js](https://nodejs.org/) + Express.js
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/) untuk autentikasi
- Model CNN (Python) untuk klasifikasi stroke dari MRI

### 🚢 Deployment

- Frontend: [Vercel](https://vercel.com/)
- Backend: [Railway](https://railway.app/)

---

## 🔌 API Endpoint Utama

### 🔐 Autentikasi

- `POST /auth/login` – Login pengguna
- `POST /auth/register` – Registrasi pengguna

### 🧠 Prediksi

- `POST /predictions/predict` – Kirim data MRI untuk mendapatkan prediksi stroke

### 👤 Manajemen Pengguna (Admin)

- `GET /admin/users` – Ambil semua pengguna
- `GET /admin/users/:nip` – Ambil data pengguna berdasarkan NIP
- `PUT /admin/users/:nip` – Perbarui data pengguna
- `DELETE /admin/users/:nip` – Hapus pengguna

### 🩺 Manajemen Pasien

- `GET /pasien` – Ambil semua data pasien
- `POST /pasien` – Tambah data pasien

---

## 💻 Panduan Instalasi

### 📋 Prasyarat

- Node.js v14 atau lebih baru
- npm atau yarn
- Git

### 📦 Langkah Instalasi

1. **Clone repository**
   ```bash
   git clone https://github.com/namapengguna/medbrain.git
   cd medbrain
2. **Instal Depedensi**
   ```bash
   npm install
3. **Konfigurasi API**
   Pastikan file config/config.js atau sejenisnya berisi konfigurasi berikut:
   ```bash
   export const baseURL = "https://your-backend-api-url.com";
4. **Jalankan server lokal**
   ```bash
   npm run dev

### 🏗️ Build untuk Produksi
```bash
npm run build
npm start

### 🏗️ Build untuk Produksi
medbrain/
├── components/         # Komponen UI reusable
├── pages/              # Halaman Next.js
├── public/             # Aset publik (logo, gambar, dll.)
├── styles/             # Berkas CSS & Tailwind
├── utils/              # Fungsi utilitas
├── config/             # Konfigurasi aplikasi
└── ...

---

© 2025 MedBrain — Diagnosa Stroke Lebih Cepat dan Akurat dengan Kecerdasan Buatan
