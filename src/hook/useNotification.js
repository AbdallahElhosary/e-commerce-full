import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const notify = (text, type) => {
    if(type === "error"){
        toast.error(text)
    } else if(type === "success"){
        toast.success(text)
    }
    else {
        toast.warn(text)
    }
    
};

export default notify