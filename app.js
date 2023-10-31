if ('serviceWorker' in navigator)
    navigator.serviceWorker.register('/sw.js');

    document.getElementById("perfil").addEventListener("click", function () {
        redirigirAPantalla();
    });
    
    document.getElementById("nombre").addEventListener("click", function () {
        redirigirAPantalla();
    });
    
    document.getElementById("nombre1").addEventListener("click", function () {
        redirigirAPantalla();
    });
    
    function redirigirAPantalla() {
        window.location.href = "personajes.html"; 
    }

const db = new PouchDB('mi_base_de_datos'); //creamos una nueva instancia de la BD local

const miDocumento = { //define el doc perzonalizado 
    _id: 'pilar_amor', 
    title: 'Pilar de Amor',
    description: 'Técnica del pilar de amor',
  };
  //insertamos nuestro doc en la BD
  db.put(miDocumento)
  .then(response => {
    console.log('Documento insertado con éxito:', response);
  })
  .catch(error => {
    console.error('Error al insertar el documento:', error);
  });
  //actualizamos el doc
  db.get('pilar_amor') // Cambia el ID para reflejar el documento que deseas actualizar
  .then(doc => {
    doc.description = 'Nueva técnica para el pilar de amor'; // Actualiza la descripción según tus necesidades
    return db.put(doc);
  })
  .then(response => {
    console.log('Documento actualizado con éxito:', response);
  })
  .catch(error => {
    console.error('Error al actualizar el documento:', error);
  });
  //recuperar el doc
  db.get('pilar_amor') // Cambia el ID para reflejar el documento que deseas recuperar
  .then(doc => {
    console.log('Documento recuperado:', doc);
  })
  .catch(error => {
    console.error('Error al recuperar el documento:', error);
  });

function showTodos(change) {
    
    console.log('Documento cambiado:', change.doc);
  
  db.changes({ since: info.update_seq, onChange: showTodos, continuous: true });


    
     