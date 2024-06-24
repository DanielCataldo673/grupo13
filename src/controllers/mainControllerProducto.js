const { conn } = require('../db/dbconnect');

module.exports = {
    getProducto: async (req, res) => {
        try {
            const [registros] = await conn.query(`SELECT p.*, v.nombre AS nombre_variedad FROM producto p 
                                                    JOIN variedad v ON p.variedad_id = v.id`);

            const [variedades] = await conn.query(`SELECT * FROM variedad`);
            // Aquí cambia `producto` por `productos` para asegurarte de que coincida con el nombre que estás utilizando en la vista
            res.render('producto', { productos: registros, variedades: variedades, tituloDePagina: 'Listado de Productos' });
        } catch (error) {
            throw error;
        } finally {
            conn.releaseConnection();
        }
    },

    crearRegistro: async (req, res) => {
        const sql = `INSERT INTO producto (nombre, caracteristicas, imagen, precio, gramaje, variedad_id) VALUES (?,?,?,?,?,?);`
        const creado = await conn.query(sql, [req.body.nombre, req.body.caracteristicas, req.body.imagen, parseFloat(req.body.precio), req.body.gramaje, req.body.variedad_id]);
        res.redirect('/producto');
    },

    getModificar: async (req, res) => {
        const [modificar] = await conn.query(`SELECT *, imagen FROM producto WHERE id=?`, [req.params.id]);
        
        const [variedades] = await conn.query(`SELECT * FROM variedad`);
        // Ya está definido correctamente en tu código.
        res.render('modificar', {
            tituloDePagina: 'Modificar Items',
            registro: modificar[0],
            variedades: variedades,
            imagen: modificar[0].imagen // Asegúrate de que la imagen esté definida
        });
    },

    actualizar: async (req, res) => {
        const sql = `UPDATE producto SET nombre=?, caracteristicas=?, imagen=?, precio=?, gramaje=?, variedad_id=? WHERE id=?`;
        const { idMod, nombre, caracteristicas, imagen, precio, gramaje, variedad_id, imagenActual } = req.body;
        const img = imagen == "" ? imagenActual : imagen;
        const modificado = await conn.query(sql, [nombre, caracteristicas, img, precio, gramaje, variedad_id, idMod]);
        res.redirect('/producto');
    },

    eliminar: async (req, res) => {
        const eliminado = await conn.query(`DELETE FROM producto WHERE id=?`, req.body.idEliminar);
        res.redirect('/producto');
    },
};