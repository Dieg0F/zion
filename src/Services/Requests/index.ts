import axios, { AxiosRequestConfig } from 'axios';

/**
 * Axios configuration.
 */
export const apiConfig: AxiosRequestConfig = {
    baseURL: '',
    responseType: 'json',
    headers: { accept: 'application/json', 'content-type': 'application/json' },
    timeout: 40000,
    withCredentials: true,
    maxRedirects: 5,
    validateStatus: (status: number) => status >= 200 && status < 300,
    transformResponse: (response) => {
        if (response.error) {
            console.log(response.error);
        }
        return response;
    },
};

