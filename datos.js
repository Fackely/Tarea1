const fs = require('fs'); //FileSystem

const cursos = [
	{
		codigo: 1,
		nombre : 'Matematicas',
		duracion : 6,
		valor : 150000
	},
	{
		codigo: 2,
		nombre : 'Ingles',
		duracion : 5,
		valor : 35000
	},
	{
		codigo: 3,
		nombre : 'Programacion',
		duracion : 10,
		valor : 865000
	}
];

const argv = require('yargs')
			.command('Cursos' , 'Listar los cursos ofertados')
            .argv;

let retornarCurso = (curso) =>{
	return 'El curso ' + curso['codigo'] + ' - ' + curso['nombre'] + ' con duración de ' + curso['duracion'] + ' semanas ' + 
  				'tiene un valor de ' + curso['valor'] + ' pesos colombianos.';
};

let crearArchivo = (cursoSel, interesadoNombre, interesadoCedula) => {
	texto = 'Para el interesado ' + interesadoNombre + ' con cedula ' + interesadoCedula + '\n' + retornarCurso(cursoSel);
	console.log(texto);
	/*fs.writeFile('matriculaCurso.txt', texto, (err) => {
		if(err) throw (err);
		console.log('Se ha creado el archivo');
    })*/
    return texto;
};

let obtenerCurso = (cursoCodigo, interesadoNombre, interesadoCedula) => {
	let cursoSel = cursos.find( curso => curso.codigo == cursoCodigo);
	if(cursoSel != null){
		return crearArchivo(cursoSel, interesadoNombre, interesadoCedula);
	} else {
		return 'El curso de codigo ' + cursoCodigo + ' no existe';
	}
};

let listarCursos = () =>{
	let lstcursos = 'Los cursos ofertados son: ';
    cursos.forEach(value => {
        lstcursos = lstcursos + '<br>' + retornarCurso(value);			
    });
    return lstcursos;
};

module.exports = {
	obtenerCurso,
	listarCursos
}