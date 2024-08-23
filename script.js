function seleccionar(element) {
    const table = element.closest('table');
    const celdas = table.querySelectorAll('td');

    let visibleCount = 0;

    celdas.forEach(td => {
        const img = td.querySelector('img');
        if (img && !img.classList.contains('apagada')) {
            visibleCount++;
            lastVisibleCell = td;
        }
    });

    const img = element.querySelector('img');
    if (img) {
        if (img.classList.contains('apagada')) {
            img.classList.remove('apagada');
            img.style.opacity = "1";
            element.classList.remove('apagada');
        } else {
            if (visibleCount > 1) {
                img.classList.add('apagada');
                img.style.opacity = "0.25";
                element.classList.add('apagada');
            }
        }
    }

    visibleCount = 0;
    celdas.forEach(td => {
        const img = td.querySelector('img');
        if (img && !img.classList.contains('apagada')) {
            visibleCount++;
        }
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    const fruitImages = [
        'manzana.png',
        'platano.png',
        'pera.png',
        'cereza.png',
        'mango.png',
        'fresa.png',
        'uvas.png',
        'kiwi.png'
    ];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(fruitImages);

    const fruitCells = document.querySelectorAll('[id^="fruits-cell-"]');
    fruitCells.forEach(cell => {
        const images = cell.querySelectorAll('img');
        let index = 0;
        images.forEach(img => {
            img.src = `images/fruits/${fruitImages[index]}`;
            index++;
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const sportImages = [
        'futbol.png',
        'bolos.png',
        'tenis.png',
        'baloncesto.png',
        'beisbol.png',
        'billar.png',
        'voleibol.png',
        'rugby.png'
    ];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(sportImages);

    const sportCells = document.querySelectorAll('[id^="sports-cell-"]');
    sportCells.forEach(cell => {
        const images = cell.querySelectorAll('img');
        let index = 0;
        images.forEach(img => {
            img.src = `images/sports/${sportImages[index]}`;
            index++;
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const colorImages = [
        'marron.png',
        'azul.png',
        'rosa.png',
        'naranja.png',
        'amarillo.png',
        'verde.png',
        'rojo.png',
        'morado.png'
    ];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(colorImages);

    const colorCells = document.querySelectorAll('[id^="colors-cell-"]');
    colorCells.forEach(cell => {
        const images = cell.querySelectorAll('img');
        let index = 0;
        images.forEach(img => {
            img.src = `images/colors/${colorImages[index]}`;
            index++;
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const instrumentImages = [
        'maracas.png',
        'guitarra.png',
        'pandereta.png',
        'xilofono.png',
        'trompeta.png',
        'gaita.png',
        'arpa.png',
        'bongos.png'
    ];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(instrumentImages);

    const instrumentCells = document.querySelectorAll('[id^="instruments-cell-"]');
    instrumentCells.forEach(cell => {
        const images = cell.querySelectorAll('img');
        let index = 0;
        images.forEach(img => {
            img.src = `images/instruments/${instrumentImages[index]}`;
            index++;
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const vehicleImages = [
        'bicicleta.png',
        'submarino.png',
        'barco.png',
        'tren.png',
        'moto.png',
        'patines.png',
        'helicoptero.png',
        'coche.png'
    ];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(vehicleImages);

    const vehicleCells = document.querySelectorAll('[id^="vehicles-cell-"]');
    vehicleCells.forEach(cell => {
        const images = cell.querySelectorAll('img');
        let index = 0;
        images.forEach(img => {
            img.src = `images/vehicles/${vehicleImages[index]}`;
            index++;
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const professionImages = [
        'periodista.png',
        'dentista.png',
        'astronauta.png',
        'taxista.png',
        'electricista.png',
        'terapeuta.png',
        'artista.png',
        'policia.png'
    ];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(professionImages);

    const professionCells = document.querySelectorAll('[id^="professions-cell-"]');
    professionCells.forEach(cell => {
        const images = cell.querySelectorAll('img');
        let index = 0;
        images.forEach(img => {
            img.src = `images/professions/${professionImages[index]}`;
            index++;
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const animalImages = [
        'oveja.png',
        'pato.png',
        'vaca.png',
        'perro.png',
        'burro.png',
        'conejo.png',
        'gato.png',
        'cerdo.png'
    ];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(animalImages);

    const animalCells = document.querySelectorAll('[id^="animals-cell-"]');
    animalCells.forEach(cell => {
        const images = cell.querySelectorAll('img');
        let index = 0;
        images.forEach(img => {
            img.src = `images/animals/${animalImages[index]}`;
            index++;
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const pistas = [
        `<div style="background-color: rgba(255, 182, 193, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-1" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-1"><span id="texto-pista-1" style="font-size: 24px;">La persona que le gusta el color <strong>Amarillo</strong> no es <strong>Taxista</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/colors/amarillo.png" alt="Amarillo" style="margin: 0 10px; width: 80px;"><img src="images/x.png" alt="Imagen X" style="margin: 0 10px; width: 35px;"><img src="images/professions/taxista.png" alt="Taxista" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(255, 182, 193, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-2" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-2"><span id="texto-pista-2" style="font-size: 24px;">La persona que toca la <strong>Pandereta</strong> no tiene un <strong>Cerdo</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/instruments/pandereta.png" alt="Pandereta" style="margin: 0 10px; width: 80px;"><img src="images/x.png" alt="Imagen X" style="margin: 0 10px; width: 35px;"><img src="images/animals/cerdo.png" alt="Cerdo" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(255, 182, 193, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-3" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-3"><span id="texto-pista-3" style="font-size: 24px;">La persona que toca la <strong>Pandereta</strong> no tiene una <strong>Oveja</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/instruments/pandereta.png" alt="Pandereta" style="margin: 0 10px; width: 80px;"><img src="images/x.png" alt="Imagen X" style="margin: 0 10px; width: 35px;"><img src="images/animals/oveja.png" alt="Oveja" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-4" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-4"><span id="texto-pista-4" style="font-size: 24px;">La persona que usa el <strong>Tren</strong> es <strong>Taxista</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/vehicles/tren.png" alt="Tren" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/professions/taxista.png" alt="Taxista" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-5" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-5"><span id="texto-pista-5" style="font-size: 24px;">La persona que usa el <strong>Barco</strong> tiene una <strong>Vaca</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/vehicles/barco.png" alt="Barco" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/animals/vaca.png" alt="Vaca" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-6" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-6"><span id="texto-pista-6" style="font-size: 24px;">La persona que juega al <strong>Tenis</strong> tiene una <strong>Vaca</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/sports/tenis.png" alt="Tenis" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/animals/vaca.png" alt="Vaca" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-7" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-7"><span id="texto-pista-7" style="font-size: 24px;">La persona que toca el <strong>Arpa</strong> es <strong>Artista</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/instruments/arpa.png" alt="Arpa" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/professions/artista.png" alt="Artista" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-8" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-8"><span id="texto-pista-8" style="font-size: 24px;">La persona que se llama <strong>Julio</strong> tiene un <strong>Burro</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/people/julio.png" alt="Julio" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/animals/burro.png" alt="Burro" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-9" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-9"><span id="texto-pista-9" style="font-size: 24px;">La persona que se llama <strong>Jorge</strong> tiene un <strong>Perro</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/people/jorge.png" alt="Jorge" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/animals/perro.png" alt="Perro" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-10" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-10"><span id="texto-pista-10" style="font-size: 24px;">La persona que come <strong>Kiwi</strong> es <strong>Policía</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/fruits/kiwi.png" alt="Kiwi" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/professions/policia.png" alt="Policía" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-11" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-11"><span id="texto-pista-11" style="font-size: 24px;">La persona que usa el <strong>Submarino</strong> tiene un <strong>Pato</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/vehicles/submarino.png" alt="Submarino" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/animals/pato.png" alt="Pato" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-12" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-12"><span id="texto-pista-12" style="font-size: 24px;">La persona que come <strong>Uvas</strong> tiene un <strong>Gato</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/fruits/uvas.png" alt="Uvas" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/animals/gato.png" alt="Gato" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(255, 182, 193, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-13" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-13"><span id="texto-pista-13" style="font-size: 24px;">La persona que le gusta el color <strong>Morado</strong> no tiene un <strong>Perro</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/colors/morado.png" alt="Morado" style="margin: 0 10px; width: 80px;"><img src="images/x.png" alt="Imagen X" style="margin: 0 10px; width: 35px;"><img src="images/animals/perro.png" alt="Perro" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-14" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-14"><span id="texto-pista-14" style="font-size: 24px;">La persona que come <strong>Mango</strong> usa la <strong>Moto</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/fruits/mango.png" alt="Mango" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/vehicles/moto.png" alt="Moto" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-15" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-15"><span id="texto-pista-15" style="font-size: 24px;">La persona que come <strong>Plátano</strong> tiene un <strong>Pato</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/fruits/platano.png" alt="Plátano" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/animals/pato.png" alt="Pato" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-16" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-16"><span id="texto-pista-16" style="font-size: 24px;">La persona que usa el <strong>Helicóptero</strong> tiene un <strong>Gato</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/vehicles/helicoptero.png" alt="Helicóptero" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/animals/gato.png" alt="Gato" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-17" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-17"><span id="texto-pista-17" style="font-size: 24px;">La persona que toca la <strong>Gaita</strong> es <strong>Terapeuta</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/instruments/gaita.png" alt="Gaita" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/professions/terapeuta.png" alt="Terapeuta" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(255, 182, 193, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-18" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-18"><span id="texto-pista-18" style="font-size: 24px;">La persona que juega al <strong>Billar</strong> no tiene un <strong>Pato</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/sports/billar.png" alt="Billar" style="margin: 0 10px; width: 80px;"><img src="images/x.png" alt="Imagen X" style="margin: 0 10px; width: 35px;"><img src="images/animals/pato.png" alt="Pato" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-19" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-19"><span id="texto-pista-19" style="font-size: 24px;">La persona que juega al <strong>Fútbol</strong> es <strong>Periodista</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/sports/futbol.png" alt="Fútbol" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/professions/periodista.png" alt="Periodista" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(255, 182, 193, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-20" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-20"><span id="texto-pista-20" style="font-size: 24px;">La persona que es <strong>Astronauta</strong> no tiene un <strong>Pato</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/professions/astronauta.png" alt="Astronauta" style="margin: 0 10px; width: 80px;"><img src="images/x.png" alt="Imagen X" style="margin: 0 10px; width: 35px;"><img src="images/animals/pato.png" alt="Pato" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-21" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-21"><span id="texto-pista-21" style="font-size: 24px;">La persona que juega al <strong>Beisbol</strong> tiene un <strong>Burro</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/sports/beisbol.png" alt="Beisbol" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/animals/burro.png" alt="Burro" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(255, 182, 193, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-22" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-22"><span id="texto-pista-22" style="font-size: 24px;">La persona que le gusta el color <strong>Morado</strong> no tiene un <strong>Burro</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/colors/morado.png" alt="Morado" style="margin: 0 10px; width: 80px;"><img src="images/x.png" alt="Imagen X" style="margin: 0 10px; width: 35px;"><img src="images/animals/burro.png" alt="Burro" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-23" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-23"><span id="texto-pista-23" style="font-size: 24px;">La persona que le gusta el color <strong>Rosa</strong> tiene una <strong>Vaca</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/colors/rosa.png" alt="Rosa" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/animals/vaca.png" alt="Vaca" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-24" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-24"><span id="texto-pista-24" style="font-size: 24px;">La persona que toca la <strong>Trompeta</strong> tiene un <strong>Burro</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/instruments/trompeta.png" alt="Trompeta" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/animals/burro.png" alt="Burro" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(255, 182, 193, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-25" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-25"><span id="texto-pista-25" style="font-size: 24px;">La persona que le gusta el color <strong>Morado</strong> no tiene una <strong>Oveja</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/colors/morado.png" alt="Morado" style="margin: 0 10px; width: 80px;"><img src="images/x.png" alt="Imagen X" style="margin: 0 10px; width: 35px;"><img src="images/animals/oveja.png" alt="Oveja" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-26" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-26"><span id="texto-pista-26" style="font-size: 24px;">La persona que toca la <strong>Gaita</strong> usa los <strong>Patines</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/instruments/gaita.png" alt="Gaita" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/vehicles/patines.png" alt="Patines" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-27" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-27"><span id="texto-pista-27" style="font-size: 24px;">La persona que juega al <strong>Voleibol</strong> le gusta el color <strong>Rojo</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/sports/voleibol.png" alt="Voleibol" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/colors/rojo.png" alt="Rojo" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-28" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-28"><span id="texto-pista-28" style="font-size: 24px;">La persona que se llama <strong>Vicente</strong> tiene un <strong>Cerdo</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/people/vicente.png" alt="Vicente" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/animals/cerdo.png" alt="Cerdo" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(255, 182, 193, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-29" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-29"><span id="texto-pista-29" style="font-size: 24px;">La persona que le gusta el color <strong>Naranja</strong> no es <strong>Periodista</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/colors/naranja.png" alt="Naranja" style="margin: 0 10px; width: 80px;"><img src="images/x.png" alt="Imagen X" style="margin: 0 10px; width: 35px;"><img src="images/professions/periodista.png" alt="Periodista" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-30" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-30"><span id="texto-pista-30" style="font-size: 24px;">La persona que usa la <strong>Bicicleta</strong> es <strong>Periodista</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/vehicles/bicicleta.png" alt="Bicicleta" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/professions/periodista.png" alt="Periodista" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(255, 182, 193, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-31" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-31"><span id="texto-pista-31" style="font-size: 24px;">La persona que toca el <strong>Xilófono</strong> no usa el <strong>Barco</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/instruments/xilofono.png" alt="Xilófono" style="margin: 0 10px; width: 80px;"><img src="images/x.png" alt="Imagen X" style="margin: 0 10px; width: 35px;"><img src="images/vehicles/barco.png" alt="Barco" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(255, 182, 193, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-32" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-32"><span id="texto-pista-32" style="font-size: 24px;">La persona que es <strong>Taxista</strong> no tiene una <strong>Oveja</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/professions/taxista.png" alt="Taxista" style="margin: 0 10px; width: 80px;"><img src="images/x.png" alt="Imagen X" style="margin: 0 10px; width: 35px;"><img src="images/animals/oveja.png" alt="Oveja" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-33" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-33"><span id="texto-pista-33" style="font-size: 24px;">La persona que toca la <strong>Guitarra</strong> es <strong>Dentista</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/instruments/guitarra.png" alt="Guitarra" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/professions/dentista.png" alt="Dentista" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-34" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-34"><span id="texto-pista-34" style="font-size: 24px;">La persona que le gusta el color <strong>Azul</strong> tiene un <strong>Pato</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/colors/azul.png" alt="Azul" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/animals/pato.png" alt="Pato" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-35" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-35"><span id="texto-pista-35" style="font-size: 24px;">La persona que se llama <strong>Sergio</strong> tiene un <strong>Gato</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/people/sergio.png" alt="Sergio" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/animals/gato.png" alt="Gato" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-36" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-36"><span id="texto-pista-36" style="font-size: 24px;">La persona que le gusta el color <strong>Verde</strong> tiene un <strong>Conejo</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/colors/verde.png" alt="Verde" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/animals/conejo.png" alt="Conejo" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(255, 182, 193, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-37" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-37"><span id="texto-pista-37" style="font-size: 24px;">La persona que come <strong>Pera</strong> no tiene un <strong>Perro</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/fruits/pera.png" alt="Pera" style="margin: 0 10px; width: 80px;"><img src="images/x.png" alt="Imagen X" style="margin: 0 10px; width: 35px;"><img src="images/animals/perro.png" alt="Perro" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(255, 182, 193, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-38" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-38"><span id="texto-pista-38" style="font-size: 24px;">La persona que se llama <strong>Carlos</strong> no tiene un <strong>Pato</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/people/carlos.png" alt="Carlos" style="margin: 0 10px; width: 80px;"><img src="images/x.png" alt="Imagen X" style="margin: 0 10px; width: 35px;"><img src="images/animals/pato.png" alt="Pato" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(255, 182, 193, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-39" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-39"><span id="texto-pista-39" style="font-size: 24px;">La persona que es <strong>Astronauta</strong> no tiene un <strong>Cerdo</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/professions/astronauta.png" alt="Astronauta" style="margin: 0 10px; width: 80px;"><img src="images/x.png" alt="Imagen X" style="margin: 0 10px; width: 35px;"><img src="images/animals/cerdo.png" alt="Cerdo" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-40" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-40"><span id="texto-pista-40" style="font-size: 24px;">La persona que juega al <strong>Rugby</strong> tiene un <strong>Cerdo</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/sports/rugby.png" alt="Rugby" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/animals/cerdo.png" alt="Cerdo" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(255, 182, 193, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-41" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-41"><span id="texto-pista-41" style="font-size: 24px;">La persona que le gusta el color <strong>Amarillo</strong> no es <strong>Periodista</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/colors/amarillo.png" alt="Amarillo" style="margin: 0 10px; width: 80px;"><img src="images/x.png" alt="Imagen X" style="margin: 0 10px; width: 35px;"><img src="images/professions/periodista.png" alt="Periodista" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(255, 182, 193, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-42" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-42"><span id="texto-pista-42" style="font-size: 24px;">La persona que juega al <strong>Tenis</strong> no tiene una <strong>Oveja</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/sports/tenis.png" alt="Tenis" style="margin: 0 10px; width: 80px;"><img src="images/x.png" alt="Imagen X" style="margin: 0 10px; width: 35px;"><img src="images/animals/oveja.png" alt="Oveja" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-43" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-43"><span id="texto-pista-43" style="font-size: 24px;">La persona que come <strong>Manzana</strong> tiene una <strong>Oveja</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/fruits/manzana.png" alt="Manzana" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/animals/oveja.png" alt="Oveja" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-44" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-44"><span id="texto-pista-44" style="font-size: 24px;">La persona que come <strong>Fresa</strong> es <strong>Terapeuta</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/fruits/fresa.png" alt="Fresa" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/professions/terapeuta.png" alt="Terapeuta" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(255, 182, 193, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-45" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-45"><span id="texto-pista-45" style="font-size: 24px;">La persona que toca el <strong>Xilófono</strong> no tiene un <strong>Cerdo</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/instruments/xilofono.png" alt="Xilófono" style="margin: 0 10px; width: 80px;"><img src="images/x.png" alt="Imagen X" style="margin: 0 10px; width: 35px;"><img src="images/animals/cerdo.png" alt="Cerdo" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(255, 182, 193, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-46" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-46"><span id="texto-pista-46" style="font-size: 24px;">La persona que se llama <strong>Desirée</strong> no le gusta el color <strong>Rosa</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/people/desiree.png" alt="Desirée" style="margin: 0 10px; width: 80px;"><img src="images/x.png" alt="Imagen X" style="margin: 0 10px; width: 35px;"><img src="images/colors/rosa.png" alt="Rosa" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-47" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-47"><span id="texto-pista-47" style="font-size: 24px;">La persona que es <strong>Electricista</strong> tiene un <strong>Burro</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/professions/electricista.png" alt="Electricista" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/animals/burro.png" alt="Burro" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-48" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-48"><span id="texto-pista-48" style="font-size: 24px;">La persona que se llama <strong>Pilar</strong> es <strong>Terapeuta</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/people/pilar.png" alt="Pilar" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/professions/terapeuta.png" alt="Terapeuta" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-49" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-49"><span id="texto-pista-49" style="font-size: 24px;">La persona que juega al <strong>Baloncesto</strong> es <strong>Taxista</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/sports/baloncesto.png" alt="Baloncesto" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/professions/taxista.png" alt="Taxista" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(144, 238, 144, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-50" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-50"><span id="texto-pista-50" style="font-size: 24px;">La persona que toca el <strong>Arpa</strong> usa el <strong>Helicóptero</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/instruments/arpa.png" alt="Arpa" style="margin: 0 10px; width: 80px;"><img src="images/+.png" alt="Imagen +" style="margin: 0 10px; width: 35px;"><img src="images/vehicles/helicoptero.png" alt="Helicóptero" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(255, 182, 193, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-51" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-51"><span id="texto-pista-51" style="font-size: 24px;">La persona que toca los <strong>Bongos</strong> no tiene una <strong>Oveja</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/instruments/bongos.png" alt="Bongos" style="margin: 0 10px; width: 80px;"><img src="images/x.png" alt="Imagen X" style="margin: 0 10px; width: 35px;"><img src="images/animals/oveja.png" alt="Oveja" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(255, 182, 193, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-52" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-52"><span id="texto-pista-52" style="font-size: 24px;">La persona que se llama <strong>Carlos</strong> no tiene una <strong>Vaca</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/people/carlos.png" alt="Carlos" style="margin: 0 10px; width: 80px;"><img src="images/x.png" alt="Imagen X" style="margin: 0 10px; width: 35px;"><img src="images/animals/vaca.png" alt="Vaca" style="margin: 0 10px; width: 80px;"></div></div>`,
        `<div style="background-color: rgba(255, 182, 193, 0.5); line-height: 1.2; padding: 10px; display: inline-block; width: 320px; text-align: center;"><div style="margin-bottom: 10px;"><input type="checkbox" id="checkbox-53" class="pista-checkbox" style="transform: scale(1.5);"></div><label for="checkbox-53"><span id="texto-pista-53" style="font-size: 24px;">La persona que juega al <strong>Fútbol</strong> no toca el <strong>Xilófono</strong></span></label><br><div style="background-color: #d0d0d0; border: 4px solid #a0a0a0; border-radius: 20px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-top: 20px;"><img src="images/sports/futbol.png" alt="Fútbol" style="margin: 0 10px; width: 80px;"><img src="images/x.png" alt="Imagen X" style="margin: 0 10px; width: 35px;"><img src="images/instruments/xilofono.png" alt="Xilófono" style="margin: 0 10px; width: 80px;"></div></div>`
    ];

    let pistaActual = 0;
    let checkboxStates = Array(pistas.length).fill(false);

    function actualizarPista() {
        document.getElementById('pista-titulo').textContent = `PISTA ${pistaActual + 1}`;
        document.getElementById('pista-contenido').innerHTML = pistas[pistaActual];

        const checkbox = document.getElementById(`checkbox-${pistaActual + 1}`);
        checkbox.checked = checkboxStates[pistaActual];

        checkbox.addEventListener('change', () => toggleCheckbox(pistaActual + 1));

        if (checkboxStates[pistaActual]) {
            document.getElementById(`texto-pista-${pistaActual + 1}`).style.textDecoration = 'line-through';
            document.getElementById(`texto-pista-${pistaActual + 1}`).style.textDecorationThickness = '5px';
        } else {
            document.getElementById(`texto-pista-${pistaActual + 1}`).style.textDecoration = 'none';
        }
    }

    function toggleCheckbox(index) {
        checkboxStates[index - 1] = !checkboxStates[index - 1];
        const textoPista = document.getElementById(`texto-pista-${index}`);
        if (checkboxStates[index - 1]) {
            textoPista.style.textDecoration = 'line-through';
            textoPista.style.textDecorationThickness = '5px';
        } else {
            textoPista.style.textDecoration = 'none';
        }
    }

    window.cambiarPista = function (direccion) {
        pistaActual = (pistaActual + direccion + pistas.length) % pistas.length;
        actualizarPista();
    };

    actualizarPista();
});

const allCells = document.querySelectorAll('.opciones');
allCells.forEach(cell => {
    cell.style.display = 'block';
});
