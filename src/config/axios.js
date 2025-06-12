import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor request untuk menambahkan token autentikasi
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // Penting: Jangan menimpa Content-Type untuk FormData
        if (config.data instanceof FormData) {
            // Axios akan mengatur Content-Type secara otomatis
            delete config.headers['Content-Type'];
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// Interceptor response untuk menangani kesalahan
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Jika token tidak valid atau telah kedaluwarsa
        if (error.response && error.response.status === 401) {
            // Hapus localStorage
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('isLoggedIn');

            // Alihkan ke halaman login jika belum ada di sana
            if (window.location.pathname !== '/login') {
                window.location.href = '/login';
            }
        }

        // Log kesalahan untuk debugging
        if (error.response) {
            console.error('API Error:', error.response.status, error.response.data);
        } else if (error.request) {
            console.error('No response received:', error.request);
        } else {
            console.error('Request error:', error.message);
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;