export const createProductFromFirestore = (doc) => {
    const fields = doc.data()

    const productAdapted = {
        id: doc.id,
        idProducto: fields.idProducto, 
        tipo: fields.tipo,
        titulo: fields.titulo,
        desc: fields.desc,
        precio: fields.precio,
        img: fields.img
    }

    return productAdapted
}


