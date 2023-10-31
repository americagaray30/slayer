let selectTecnicas; // Declarar la variable selectTecnicas

document.addEventListener('DOMContentLoaded', function() {
    selectTecnicas = document.getElementById('tecnicasPilares');
    const fotoPilar = document.getElementById('fotoPilar');

    selectTecnicas.addEventListener('change', function() {
        const tecnicaSeleccionada = selectTecnicas.value;
        if (tecnicaSeleccionada === "") {
            fotoPilar.style.display = "none"; 
        } else {
            fotoPilar.style.display = "block"; 
            fotoPilar.src = `img/${tecnicaSeleccionada}.jpg`;
        }
    });

    fotoPilar.addEventListener('click', function() {
        const tecnicaSeleccionada = selectTecnicas.value;
        if (tecnicaSeleccionada) {
            window.location.href = `Descripcion.html?tecnica=${tecnicaSeleccionada}`;
        }
    });
});
