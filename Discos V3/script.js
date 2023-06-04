const findAlbumIndex = (arrayDiscos, element, type) => {
	return arrayDiscos.findIndex(function(item, index) {
		if (type === "autor") {
			if (item.autor.toUpperCase() === element) 
			return true;
		} else {
			if (item.disco.toUpperCase() === element) 
			return true;
		}
	});
}

const handleModal = (elementSelector, modalSelector, type) => {
	const element = document.getElementById(elementSelector).value.toUpperCase();	
	const encontrado = findAlbumIndex(arrayDiscos, element, type);
	
	if (encontrado >= 0) {
		datosModal(encontrado);
		$(modalSelector).modal('show');
	} else {
		document.getElementById("Resultador").innerHTML = "El disco que buscaste no ha sido encontrado"
	}
}

function buscarAutor() {
	handleModal("txtNombreAutor", "#modalDisco", "autor");
}

function buscarDiscos() {
	handleModal("txtNombreDiscos", "#modalDisco", "disco");
}

function crearObjDisco(nombreautor, nombredisco, portada, procedencia, aniolanzamiento, descrip, puntos, audiomp3) {
	const objDisco = {
		autor: nombreautor,
		disco: nombredisco,
		imagen: portada,
        procedencia_artista: procedencia,
        lanzamiento: aniolanzamiento,
        descripcion: descrip,
		puntutacion: puntos,
		audio: audiomp3,	
	}

	return objDisco
}

function ordenandoAutor(a, b) {
	if ( a.autor < b.autor ){
	  return -1;
	}
	if ( a.autor > b.autor ){
	  return 1;
	}
	return 0;
}
  
let arrayDiscos = []
arrayDiscos.push(crearObjDisco("Metallica", "Master of Puppets", "img/masterofpuppets.jpg","USA", 1986, "Es el tercer álbum de estudio de la banda de thrash metal estadounidense Metallica", 4, "mp3/metallica.mp3"));
arrayDiscos.push(crearObjDisco("Mana", "Cuando los angeles lloran", "img/caundolosangeleslloran.jpg","Mexico", 1995, "Se presentó al público simultáneamente en 21 países. Las ventas hicieron ganar al grupo discos de oro y platino en varios países, vendiendo alrededor de 4 millones de copias", 5, "mp3/mana.mp3"));
arrayDiscos.push(crearObjDisco("Bruno Mars", "24K Magic", "img/24kmagic.jpg","USA", 2016, "En la 60° Entrega de los Grammy, realizada en 2018, el álbum fue galardonado como 'Mejor Álbum del Año'", 4, "mp3/brunomars.mp3"));
arrayDiscos.push(crearObjDisco("The Beatles", "Abbey Road", "img/abbeyroad.jpg","Inglaterra", 1969, "se caracterizó por la presencia de un medley en el lado B, una larga pieza de 16 minutos, que constaba de ocho canciones enlazadas una tras otra sucesivamente.", 4, "mp3/thebeatles.mp3"));
arrayDiscos.push(crearObjDisco("AC/DC", "Back in Black", "img/BackinBlack.jpg","Australia", 1980, "lanzado en 1980. Fue grabado en Bahamas y, por segunda vez, producido por Robert Mutt Lange, siendo Highway to Hell la primera ocasión.", 5, "mp3/acdc.mp3"));
arrayDiscos.push(crearObjDisco("Eminem", "The Marshall Mathers LP 2", "img/TheMarshallMathersLP2.jpg", "USA", 2013, "El álbum cuenta con las apariciones especiales de Skylar Grey, Rihanna, Sia y el integrante de Fun, Nate Ruess, y el único rapero del álbum, Kendrick Lamar.", 4, "mp3/eminem.mp3"));
arrayDiscos.push(crearObjDisco("Post Malone", "Beerbongs & bentleys Explicit", "img/Beerbongs&bentleysExplicit.jpg", "USA", 2018, "El álbum presenta apariciones especiales de Swae Lee , 21 Savage , Ty Dolla Sign , Nicki Minaj , G-Eazy y YG", 4, "mp3/postmalone.mp3"));

let arrayOrdenadosAutor = arrayDiscos.sort(ordenandoAutor);

let listaTablaAutor = "<tr class='text-light bg-info'><th>Portada</th><th>Autor</th><th>Disco</th><th>Año</th><th>Audio</th><th></th></tr>";
for (let i= 0; i < arrayOrdenadosAutor.length; i++) {	
	listaTablaAutor += "<tr><td><img src=" + arrayOrdenadosAutor[i].imagen + " width='150' height='150'></td><td>" + arrayOrdenadosAutor[i].autor + "</td><td>" + arrayOrdenadosAutor[i].disco + "</td><td>" + arrayOrdenadosAutor[i].lanzamiento + "</td><td><audio controls><source src="+ arrayOrdenadosAutor[i].audio +" type='audio/mpeg'>Audio no soportado</audio></td><td><button type='button' class='btn btn-primary' data-toggle='modal' data-target='#modalDisco' onClick='datosModal(" + i + ")'>Ver</button></td></tr>"
}

function datosModal(indiceArray) {	
	document.getElementById("modaldata").innerHTML = 
	`<p><b>${arrayOrdenadosAutor[indiceArray].autor}</b></p>
	<img src="${arrayOrdenadosAutor[indiceArray].imagen}" width='150' height='150'>
	<p><br><b>${arrayOrdenadosAutor[indiceArray].disco}</b></p>
	<p>${arrayOrdenadosAutor[indiceArray].descripcion}</p>
	<p>${arrayOrdenadosAutor[indiceArray].lanzamiento}</p>`

}

function rateStars(rate) {
	htmlRate = "";

	for (let i= 0; i < rate; i++) {	
		htmlRate = htmlRate + "<span style='color:orange; font-size: 150%'><b>★</b></span>";
	}

	return htmlRate;
}

document.getElementById("tablaautor").innerHTML = listaTablaAutor;
