import baseUrl from "../Api/baseURL";


export const useInsertDataImage = async (url, params) => {
    const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
    }
    const res = await baseUrl.post(url, params, config);
    return res.data;
}


export const useInsertData = async (url, params) => {
    const res = await baseUrl.post(url, params);
    return res.data;
}
