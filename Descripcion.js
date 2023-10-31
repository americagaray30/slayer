document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const tecnica = params.get('tecnica');
    console.log('tecnica:', tecnica);

    const informacionPilares = {
        pilares: {
            gif: "img/gi_pilar_no_encontrado.gif"
        },
        pilar1: {
            nombre: "Mitsuri Kanroji",
            descripcion: "Nació con una fuerza por encima del promedio, esto se debía a que tenía una gran densidad muscular, era 8 veces más que los demás. Por esa cualidad, su apetito es grande. Ella solo quería encajar con el estereotipo de su ciudad, pero este lugar era muy crítico para las mujeres.Su familia la trataba como un fenómeno cuando fue rechazada por su prometido a los 16 años, una relación arreglada. Por esa razón, suprimió su deseo de comer hasta que, casi desmayarse, fingía ser una mujer débil y se tiño el cabello de negro.",
            gif: "img/gif_pilar1.gif"
        },
        pilar2: {
            nombre: "Giyu Tomioka",
            descripcion: "Es un joven reservado, pero con un sentimiento de justicia tan fuerte que no tolera a las personas que se sacrifican sin saber sus limitaciones A pesar de su naturaleza fría y estoica, Giyu demuestra la necesidad de proteger aquellos que son cercanos a él. Esto lo demuestra frente a Tanjiro y Nezuko al ofrecer su vida en seppuku, si la chica fuera alguna vez a quebrar su juramento de no comer carne humana.",
            gif: "img/gif_pilar2.gif"
        },
        pilar3: {
            nombre: "Tenge Uzui",
            descripcion: "Tengen es un hombre muy alto y corpulento, de complexión voluminosa y musculosa, con la piel ligeramente bronceada. Su cabello es blanco y de longitud desigual, los mechones más largos alcanzan sus hombros, y está peinado con tres mechones más notables y más cortos que se arquean hacia arriba para caer en forma de flequillo entre los ojos y a ambos lados de la cara.",
            gif: "img/gif_pilar3.gif",
        },
        pilar4: {
            nombre: "Muichiro Tokito",
            descripcion: "Tokito parece que es uno de los pilares más pequeños en cuánto edad y estatura, pues es un niño de 14 años que llega a medir 160cm. Se le considera alguien excéntrico y estoico, pues rara vez mostró emociones, así como siempre mantuvo una disposición distante.Entre algunas de sus habilidades tiene una percepción extrasensorial, pues detecta cosas fuera de un rango normal, además de que cuenta con una inmensa velocidad y reflejos, alta resistencia y gran fuerza.",
            gif: "img/gif_pilar4.gif"
        },
        pilar5: {
            nombre: "Shinobu Kocho",
            descripcion: "Shinobu es una chica pequeñita de baja estatura aparentemente débil y frágil y con el color de piel claro. Tiene el pelo corto de color negro con mechones largos que lleva recogidos con una especie de pinza con forma mariposa. Sus puntas son de color morado y lleva las patillas bastante largas.lleva una espada Nichirin con la guardia en forma de alas de mariposa, y a pesar de la apariencia inofensiva de la espada y a consecuencia de que no tiene fuerza para cortar la cabeza a los demonios, esta espada esta preparada para compensar su fuerza inoculando veneno hecho a partir de flores de glicina lo cual compensa su falta de fuerza física.",
            gif: "img/gif_pilar5.gif"
        },
        pilar6: {
            nombre: "Rengoku Kyojuro",
            descripcion: "Kyojuro tiene un aspecto joven ya que aproximadamente tiene unos 20 años de edad, el tono de su piel es más bien claro, y el color de su cabello es de un amarillo brillante con mechones rojos. Tiene las cejas negras bifurcadas y sus ojos tienen un bonito color dorado.Siempre lleva una espada Nichirin que tiene el Tsuba en forma de llamarada y la hoja de su katana es de color rojo carmesí.",
            gif: "img/gif_pilar6.gif"
        },
        pilar7: {
            nombre: "Sanemi Shinazugawa",
            descripcion: "Sanemi es abrasiva, de sangre caliente, imprudente y obstinada, a menudo impulsiva y rápida para arremeter. A menudo es indiferente hacia los demás y puede enojarse con mucha facilidad. La única persona hacia la que Sanemi mostró reverencia fue Kagaya Ubuyashiki , y solo después de darse cuenta de que el hombre era mucho más de lo que sugería su apariencia exterior. Sanemi también ha mostrado hambre de batalla, deseando poder enfrentarse a demonios de rango superior y proclamando su emoción al luchar contra el rango superior uno, Kokushibo.",
            gif: "img/gif_pilar7.gif"
        },
        pilar8: {
            nombre: "Gyomei Himejima",
            descripcion: "Gyomei Himejima ha sido ciego desde su nacimiento, y antes de ser un Hashira, vivió en un templo criando a nueve niños huérfanos. Después de que un demonio invasor mató a todos menos a uno de los niños, Gyomei golpeó al demonio con sus puños hasta el amanecer. Fue encarcelado falsamente por asesinar a los niños, pero Ubuyashiki lo salvó de la ejecución.En combate, el poder de Gyomei es claro. Incluso sin una espada, pudo controlar a un demonio con solo una fuerza física bruta. Su espada Nichirin es única, ya que es el único Demon Slayer cuya hoja toma la forma de un hacha, y se considera una de las mejores elaboradas de la historia. ",
            gif: "img/gif_pilar8.gif"
        },
        pilar9: {
            nombre: "Obanai Iguro",
            descripcion: "Obanai es un hombre de estatura mediana, piel tono crema, de cabello un poco largo negro y con heterocromia; es decir, tiene los ojos de diferentes colores: el izquierdo es de color turquesa y el derecho es amarillo.Se caracteriza por tener siempre cubiertos sus labios con vendajes, esto para cubrir una herida de su niñez cuando le cortaron la boca desde sus esquinas hasta la altura de sus orejas para asemejarla a una serpiente.",
            gif: "img/gif_pilar9.gif"
        },  
        pilares: {
            nombre: "Kimetsu No Yaiba",
            descripcion: "¿Quienes son los pilares?",
            gif: "img/pilares.gif"
        }          
    };

    const nombrePilar = document.getElementById('nombre');
    const descripcionPilar = document.getElementById('descripcion');
    const gifPilar = document.getElementById('gif');

    if (informacionPilares[tecnica]) {
        const pilar = informacionPilares[tecnica];
        console.log('pilar:', pilar);
        nombrePilar.textContent = pilar.nombre;
        descripcionPilar.textContent = pilar.descripcion;
        gifPilar.src = pilar.gif;
    }
});