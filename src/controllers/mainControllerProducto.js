const { conn } = require('../db/dbconnect');

module.exports = {


	getProducto: async (req, res) => {
		try {
			const [ registros ] = await conn.query(`SELECT * FROM producto`);
			res.render('producto.ejs', { producto: registros });
		} catch (error) {
			throw error;
		} finally {
			conn.releaseConnection();
		}
	},

	crearRegistro: async (req, res)=>{
		const sql = `INSERT INTO producto (nombre, caracteristicas, imagen, precio, gramaje, variedad_id) VALUES (?,?,?,?,?,?);`
		const creado = await conn.query(sql, [req.body.nombre, req.body.descripcion, req.body.imagen, parseFloat(req.body.precio), req.body.gramaje, req.body.variedad_id]);
		res.redirect('/producto.ejs')
		},

	getModificar: async (req, res) =>{
		const [modificar] = await conn.query(`SELECT * FROM producto WHERE id=?`, req.params.id)// se pone entre [] se llama desconstruccion de datos
		console.log(modificar)
		res.render('modificar', {
			tituloDePagina: 'Página para Modificar Items de la tabla Producto',
			registro: modificar[0]
			})// render se utiliza en aplicaciones web para renderizar una página web o un archivo HTML utilizando un motor de plantillas. 
	},

	actualizar: async (req, res)=>{
		const sql = `UPDATE producto SET nombre=?, caracteristicas=?, imagen=?, precio=?, gramaje=?, variedad_id=? WHERE id=?`
		const {idMod, nombre, caracteristicas, imagen, precio, gramaje, variedad_id} = req.body
		const modificado = await conn.query(sql, [nombre, caracteristicas, imagen, precio, gramaje, variedad_id, idMod])
		console.log(modificado)
		res.redirect('/producto.ejs')
	},

	eliminar: async (req, res)=>{
		const eliminado = await conn.query(`DELETE FROM producto WHERE id=?`, req.body.idEliminar)
		res.redirect('/producto.ejs')
	},

}