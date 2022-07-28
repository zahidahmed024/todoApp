import axios from "axios"

export const POST = async (url = '', data = {}) => {
    try {
        let response = await axios.post(url, data)
        console.log('response--->', response)
        return response.data
    } catch (error) {
        console.log('error--->', error)
    }
}
export const GET = async (url = '', data = {}) => {
    try {
        let response = await axios.post(url, data)
        console.log('response--->', response)
        return response.data
    } catch (error) {
        console.log('error--->', error)
    }
}
export const UPDATE = async (url = '', data = {}) => {
    try {
        let response = await axios.post(url, data)
        console.log('response--->', response)
        return response.data
    } catch (error) {
        console.log('error--->', error)
    }
}
export const DELETE = async (url = '', data = {}) => {
    try {
        let response = await axios.post(url, data)
        console.log('response--->', response)
        return response.data
    } catch (error) {
        console.log('error--->', error)
    }
}