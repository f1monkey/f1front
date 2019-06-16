import axios from 'axios';
import store from '../store';

// todo move to configuration
const API_URL = 'http://localhost:8080';

export async function get(url: string) {
    try {
        const result = await axios.get(API_URL + url)
        return result;
    } catch (e) {
        store.dispatch('error', { message: e.message });
        throw e;
    }
}

export async function post(url: string, data: any) {
    try {
        const result = await axios.post(API_URL + url, data);
        return result;
    } catch (e) {
        store.dispatch('error', { message: e.message });
        throw e;
    }
}