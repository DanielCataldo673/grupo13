const { conn } = require('../db/dbconnect');

module.exports = {
    getProducto: async (req, res) => {
        try {
            const [registros] = await conn.query(`SELECT p.*, v.nombre AS nombre_variedad FROM producto p 
                                                    JOIN variedad v ON p.variedad_id = v.id`);

            const [variedades] = await conn.query(`SELECT * FROM variedad`);
            res.render('producto', { productos: registros, variedades: variedades, tituloDePagina: 'Listado de Productos' });
        } catch (error) {
            throw error;
        } finally {
            conn.releaseConnection();
        }
    },

    crearRegistro: async (req, res) => {
        try {
            const sql = `INSERT INTO producto (nombre, caracteristicas, imagen, precio, gramaje, variedad_id) VALUES (?,?,?,?,?,?);`;
            const creado = await conn.query(sql, [req.body.nombre, req.body.caracteristicas, req.body.imagen, parseFloat(req.body.precio), req.body.gramaje, req.body.variedad_id]);
            console.log('Producto creado exitosamente');
            res.redirect('/producto');
        } catch (error) {
            console.error('Error al crear el producto:', error);
            res.send('Error al crear el producto. Por favor, inténtalo de nuevo.');
        }
    },

    getModificar: async (req, res) => {
        const [modificar] = await conn.query(`SELECT *, imagen FROM producto WHERE id=?`, [req.params.id]);
        
        const [variedades] = await conn.query(`SELECT * FROM variedad`);
        res.render('modificar', {
            tituloDePagina: 'Modificar Items',
            registro: modificar[0],
            variedades: variedades,
            imagen: modificar[0].imagen
        });
    },

    actualizar: async (req, res) => {
        try {
            const sql = `UPDATE producto SET nombre=?, caracteristicas=?, imagen=?, precio=?, gramaje=?, variedad_id=? WHERE id=?`;
            const { idMod, nombre, caracteristicas, imagen, precio, gramaje, variedad_id, imagenActual } = req.body;
            const img = imagen == "" ? imagenActual : imagen;
            const modificado = await conn.query(sql, [nombre, caracteristicas, img, precio, gramaje, variedad_id, idMod]);
            console.log('Producto actualizado exitosamente');
            res.redirect('/producto');
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
            res.send('Error al actualizar el producto. Por favor, inténtalo de nuevo.');
        }
    },

    eliminar: async (req, res) => {
        try {
            const eliminado = await conn.query(`DELETE FROM producto WHERE id=?`, req.body.idEliminar);
            console.log('Producto eliminado exitosamente');
            res.redirect('/producto');
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
            res.send('Error al eliminar el producto. Por favor, inténtalo de nuevo.');
        }
    },

    suscribir: async (req, res) => {
        const { firstname, lastname, birthDate, street, city, zipcode, color, email, spice1, spice2, spice3 } = req.body;

        try {
            const sql = `INSERT INTO newsletter (nombre, apellido, fecha_nacimiento, direccion, ciudad, codigo_postal, color, email, especia1, especia2, especia3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            const suscripcion = await conn.query(sql, [firstname, lastname, birthDate, street, city, zipcode, color, email, spice1, spice2, spice3]);
            
            console.log('Datos registrados con éxito');
            res.send('Datos registrados con éxito');
        } catch (error) {
            console.error('Error al insertar datos en la base de datos:', error);
            res.send('Error al insertar datos en la base de datos. Por favor, inténtalo de nuevo.');
        }
    }
}