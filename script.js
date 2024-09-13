// Objeto manejador del foro
const Foro = {
    comentarios: [],

    // Método para agregar un nuevo comentario
    agregarComentario: function(nombre, texto) {
        const comentario = {
            usuario: nombre,
            mensaje: texto,
            fecha: new Date().toLocaleString()
        };
        this.comentarios.push(comentario);
        this.mostrarComentarios();
    },

    // Método para mostrar los comentarios
    mostrarComentarios: function() {
        const listaComentarios = document.getElementById('comment-list');
        listaComentarios.innerHTML = '';

        this.comentarios.forEach(comentario => {
            const comentarioDiv = document.createElement('div');
            comentarioDiv.classList.add('comment');

            const nombreUsuario = document.createElement('div');
            nombreUsuario.classList.add('username');
            nombreUsuario.textContent = comentario.usuario;

            const textoComentario = document.createElement('p');
            textoComentario.textContent = comentario.mensaje;

            const fechaComentario = document.createElement('span');
            fechaComentario.classList.add('fecha');
            fechaComentario.textContent = comentario.fecha;

            comentarioDiv.appendChild(nombreUsuario);
            comentarioDiv.appendChild(textoComentario);
            comentarioDiv.appendChild(fechaComentario);

            listaComentarios.appendChild(comentarioDiv);
        });
    }
};

// Evento de envío del formulario
document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const commentText = document.getElementById('commentText').value;

    if (username && commentText) {
        Foro.agregarComentario(username, commentText);
        document.getElementById('username').value = '';
        document.getElementById('commentText').value = '';
    }
});
