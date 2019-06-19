import axios, { AxiosResponse } from 'axios';
import store from '../store';

// todo move to configuration
const API_URL = 'http://localhost:8080';

export async function getRequest<T>(url: string): Promise<T> {
  try {
    const result = await axios.get<T>(API_URL + url);

    return result.data;
  } catch (e) {
    store.dispatch('error', { message: e.message });
    throw e;
  }
}

export async function postRequest<T>(url: string, data: any): Promise<T> {
  try {
    const result = await axios.post(API_URL + url, data);
    return result.data;
  } catch (e) {
    store.dispatch('error', { message: e.message });
    throw e;
  }
}

export async function deleteRequest<T>(url: string, data: any): Promise<T> {
  try {
    const result = await axios.delete(API_URL + url, data);
    return result.data;
  } catch (e) {
    store.dispatch('error', { message: e.message });
    throw e;
  }
}
