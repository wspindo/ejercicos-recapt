const canciones = [
    { nombre: "Bohemian Rhapsody", artista: "Queen" },
    { nombre: "Imagine", artista: "John Lennon" },
    { nombre: "Hotel California", artista: "Eagles" },
    { nombre: "Shape of You", artista: "Ed Sheeran" },
    { nombre: "Smells Like Teen Spirit", artista: "Nirvana" }
];

let mensaje = "Canciones favoritas:\n";
canciones.forEach(cancion => {
    mensaje += `${cancion.nombre} - ${cancion.artista}\n`;
});
alert(mensaje);
