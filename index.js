const opciones = {
	cursoCodigo: {
		demand: true,
		alias: 'cc'
	},
	interesadoNombre: {
		demand: true,
		alias: 'in'
	},
	interesadoCedula: {
		demand: true,
		alias: 'ic'
	}
};
const express = require('express')
const {obtenerCurso, listarCursos} = require('./datos.js');
const app = express()
var resultado = '';
const argv = require('yargs')
			.command('buscar' , 'Buscar cursos', opciones)
			.command('listar' , 'listar cursos')
			.argv;

if(argv.cc != null &&  argv.in!= null && argv.ic != null){
	resultado = obtenerCurso(argv.cc, argv.in, argv.ic);	
} else {
	resultado = listarCursos();
}

app.get('/', function (req, res) {
    res.send(resultado)
  })
   
app.listen(3000)