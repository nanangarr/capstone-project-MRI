import axiosInstance from '@/config/axios';

export const AllUsers = async () => {
    try {
        const response = await axiosInstance.get('/admin/users');
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'An error occurred while fetching users' };
    }
};

export const PendingUsers = async () => {
    try {
        const response = await axiosInstance.get('/admin/users/pending');
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'An error occurred while fetching pending users' };
    }
};

export const removeUser = async (nip) => {
    try {
        const response = await axiosInstance.delete(`/admin/users/${nip}`);
        return response.data;
    } catch (error) {
        console.error("Error removing user:", error);
        if (error.response) {
            console.error("Response status:", error.response.status);
            console.error("Response data:", error.response.data);
        }
        throw error.response?.data || { message: 'An error occurred while removing user' };
    }
};

export const getUserByNIP = async (nip) => {
    try {
        const response = await axiosInstance.get(`/admin/users/${nip}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'An error occurred while approving user' };
    }
};

export const updateUserByNIP = async (nip, userData) => {
    try {
        const response = await axiosInstance.put(`/admin/users/${nip}`, userData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'An error occurred while updating user' };
    }
}