import baseUrl from "../Api/baseURL";
// function to get data 
const useDeleteData = async (url,params) => {
    const res = await baseUrl.delete(url, params);
    return res.data
}

export default useDeleteData;