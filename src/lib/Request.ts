import axios from 'axios';
import store from '../store';

// todo move to configuration
const API_URL = 'http://localhost:8080';

export async function getRequest(url: string) {
    try {
        const result = await axios.get(API_URL + url);
        return result.data;
    } catch (e) {
        store.dispatch('error', { message: e.message });
        throw e;
    }
}

export async function postRequest(url: string, data: any) {
    try {
        const result = await axios.post(API_URL + url, data);
        return result.data;
    } catch (e) {
        store.dispatch('error', { message: e.message });
        throw e;
    }
}

export async function deleteRequest(url: string, data: any) {
    try {
        const result = await axios.delete(API_URL + url, data);
        return result.data;
    } catch (e) {
        store.dispatch('error', { message: e.message });
        throw e;
    }
}
