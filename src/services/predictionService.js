import axiosInstance from '@/config/axios';

export const submitPrediction = async (formData) => {
    try {
        // Membuat FormData untuk mengirim data
        const predictionData = new FormData();

        // Data pasien
        predictionData.append('nama', formData.nama);
        predictionData.append('tempat_lahir', formData.tempat_lahir);
        predictionData.append('tanggal_lahir', formData.tanggal_lahir);
        predictionData.append('no_hp', formData.no_hp);

        // Data pemeriksaan
        predictionData.append('jenis_kelamin', formData.jenis_kelamin);
        predictionData.append('berat_badan', formData.berat_badan);
        predictionData.append('tinggi_badan', formData.tinggi_badan);
        predictionData.append('umur', formData.umur);

        // Ubah bolean ke dalam string
        predictionData.append('hipertensi', formData.hipertensi.toString());
        predictionData.append('penyakit_jantung', formData.penyakit_jantung.toString());
        predictionData.append('stroke', formData.stroke.toString());

        predictionData.append('status_nikah', formData.status_nikah);
        predictionData.append('pekerjaan', formData.pekerjaan);
        predictionData.append('tempat_tinggal', formData.tempat_tinggal);
        predictionData.append('glukosa', formData.glukosa);
        predictionData.append('merokok', formData.merokok);

        // Tambahkan gambar MRI jika ada
        if (formData.gambar_MRI) {
            predictionData.append('gambar_MRI', formData.gambar_MRI);
        }

        console.log("Sending prediction data with fields:");
        for (let [key, value] of predictionData.entries()) {
            console.log(`${key}: ${key === 'gambar_MRI' ? 'File data' : value}`);
        }

        const response = await axiosInstance.post('/predictions/predict', predictionData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error submitting prediction:', error);

        if (error.response) {
            console.error('Error response:', error.response.data);
            console.error('Status:', error.response.status);
        }

        throw error.response?.data || {
            success: false,
            message: 'Failed to submit prediction. Please try again.'
        };
    }
};

export const getPredictionHistory = async () => {
    try {
        const response = await axiosInstance.get('/predictions/history');
        return response.data;
    } catch (error) {
        console.error('Error fetching prediction history:', error);
        throw error.response?.data || {
            success: false,
            message: 'Failed to fetch prediction history.'
        };
    }
};

export const getPredictionById = async (id) => {
    try {
        const response = await axiosInstance.get(`/predictions/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching prediction with ID ${id}:`, error);
        throw error.response?.data || {
            success: false,
            message: 'Failed to fetch prediction details.'
        };
    }
};
