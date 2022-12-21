export const formatDate = fecha => {
    const newFecha = new Date(fecha?.split("T")[0].split('-'))

    const opciones = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    }

    return newFecha.toLocaleDateString('en-US', opciones)
}