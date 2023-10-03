import baseUrl from "../Api/baseURL";

// function to insert data if it has image
export const useInsertDataImage = async (url, params) => {
    const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
    }
    const res = await baseUrl.post(url, params, config);
    return res;
}

// function to insert data if it hasn't image
export const useInsertData = async (url, params) => {
    const res = await baseUrl.post(url, params);
    return res;
}
