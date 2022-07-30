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
        let response = await axios.get(url, data)
        console.log('response--->', response)
        return response.data
    } catch (error) {
        console.log('error--->', error)
    }
}
export const PUT = async (url = '', data = {}) => {
    try {
        let response = await axios.put(url, data)
        console.log('response--->', response)
        return response.data
    } catch (error) {
        console.log('error--->', error)
    }
}
export const DELETE = async (url = '', data = {}) => {
    try {
        let response = await axios.delete(url, { headers: { 'Content-Type': 'application/json; charset=utf-8' } }, { data: data })
        console.log('response--->', response)
        return response.data
    } catch (error) {
        console.log('error--->', error)
    }
}