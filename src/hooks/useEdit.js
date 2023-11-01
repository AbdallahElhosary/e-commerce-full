import baseUrl from "../Api/baseURL";
// function to get data 
const useEdittDataImage = async (url, params) => {
    const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
    }
    const res = await baseUrl.put(url, params, config);
    return res;
}

const useEditData = async (url,params) => {
    const res = await baseUrl.put(url, params);
    return res.data
}
export { useEdittDataImage, useEditData };