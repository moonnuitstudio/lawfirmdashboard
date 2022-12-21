export const generateAxiosConfig = token => ({
    headers: {
        "Authorization": `Bearer ${token}`
    }
})