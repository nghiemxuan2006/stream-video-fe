import { type ToastOptions, toast } from "react-toastify"
import apiService from "../interceptors";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export const showNotifications = (type: "warning" | "error" | "success" | "info", message: string = "success") => {

    const config: ToastOptions = {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
    }
    switch (type) {
        case "warning":
            toast.warn(message, config)
            break;
        case "success":
            toast.success(message, config)
            break;
        case "info":
            toast.info(message, config)
            break;
        default:
            toast.error(message, config)
            break;
    }
}

export const sendRequest = async (url: string, method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE', payload: any, thunkApi: any, headers = null) => {
    let config: any = {
        method: method,
        data: payload,
        url: url,
    }

    if (method === 'GET' || method === 'DELETE') {
        config = {
            method: method,
            params: payload,
            url: url
        }
    }
    if (headers) {
        config["headers"] = headers
    }
    try {
        return (await apiService(config)).data
    } catch (e) {
        console.log(e)
        showNotifications('error', "Error")
        return thunkApi.rejectWithValue("Error")
    }
}



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

