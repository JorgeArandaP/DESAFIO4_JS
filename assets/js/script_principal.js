const propiedades_venta = [
    {
        nombre: 'Casa en Bentley',
        src: 'https://acortar.link/FiTno3',
        descripcion: 'Casa en moderno y seguro condominio residencial',
        ubicacion: '122a Scarborough, Perth, 6019 WA',
        habitaciones: 4,
        baños: 2,
        costo: 1000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: 1200,
        smoke: true,
        pets: false
    },

]

const propiedades_alquiler = [
    {
        nombre: 'Casa en barrio Sudafrica',
        src: 'https://acortar.link/6wuAFH',
        descripcion: 'Esta casa está ubicado en una exclusiva zona residencial en Sudafrica',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 4,
        baños: 2,
        costo: 1000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://acortar.link/xdC9n0',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://acortar.link/CAG8yx',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 2500,
        smoke: true,
        pets: true
    }
]

const propVenta = document.querySelector('#prop-ventas');
const propAlquiler = document.querySelector('#prop-alquiler');

for (let prop of propiedades_venta) {

    let icono_pet;
    let frase_smoke;
    let icono_smoke;
    let frase_pet;
    let texto_pet;
    let texto_smoke; 

    if (prop.smoke == false) {
        icono_smoke = 'fas fa-smoking-ban';
        frase_smoke = 'No se permite fumar'
        texto_smoke = 'text-danger'
    }

    else if (prop.smoke == true) {
        icono_smoke =  'fas fa-smoking';
        frase_smoke = 'Permitido fumar'
        texto_smoke = 'text-success'
    }

    if (prop.pets == false) {
        icono_pet = 'fas fa-ban';
        frase_pet = 'No se permiten mascotas'
        texto_pet = 'text-danger'
    }

    else if (prop.pets == true) {
        icono_pet = 'fas fa-paw';
        frase_pet = 'Mascotas permitidas'
        texto_pet = 'text-success'
    }

    

    const template = `
    
    <div class="col-md-4 mb-4">
        <div class="card">
            <img
                src="${prop.src}"
                class="card-img-top"
                alt="Imagen del departamento"
            />
            <div class="card-body">
                <h5 class="card-title">
                ${prop.nombre}
                </h5>
                <p class="card-text">
                ${prop.descripcion}
                </p>
                <p>
                <i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}
                </p>
                <p>
                <i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${prop.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>
                
                <p class="${texto_smoke}">
                <i class="${icono_smoke}"></i> ${frase_smoke}
                </p>
                <p class="${texto_pet}">
                <i class="${icono_pet}"></i> ${frase_pet}
                </p>
            </div>
        </div>
    </div>
    
    
    `;

    propVenta.innerHTML += template;
}

for (let prop of propiedades_alquiler) {

    let icono_pet;
    let frase_smoke;
    let icono_smoke;
    let frase_pet;
    let texto_pet;
    let texto_smoke; 

    if (prop.smoke == false) {
        icono_smoke = 'fas fa-smoking-ban';
        frase_smoke = 'No se permite fumar'
        texto_smoke = 'text-danger'
    }

    else if (prop.smoke == true) {
        icono_smoke =  'fas fa-smoking';
        frase_smoke = 'Permitido fumar'
        texto_smoke = 'text-success'
    }

    if (prop.pets == false) {
        icono_pet = 'fas fa-ban';
        frase_pet = 'No se permiten mascotas'
        texto_pet = 'text-danger'
    }

    else if (prop.pets == true) {
        icono_pet = 'fas fa-paw';
        frase_pet = 'Mascotas permitidas'
        texto_pet = 'text-success'
    }

    

    const template = `
    
    <div class="col-md-4 mb-4">
        <div class="card">
            <img
                src="${prop.src}"
                class="card-img-top"
                alt="Imagen del departamento"
            />
            <div class="card-body">
                <h5 class="card-title">
                ${prop.nombre}
                </h5>
                <p class="card-text">
                ${prop.descripcion}
                </p>
                <p>
                <i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}
                </p>
                <p>
                <i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${prop.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>
                
                <p class="${texto_smoke}">
                <i class="${icono_smoke}"></i> ${frase_smoke}
                </p>
                <p class="${texto_pet}">
                <i class="${icono_pet}"></i> ${frase_pet}
                </p>
            </div>
        </div>
    </div>
    
    `;

    propAlquiler.innerHTML += template;
}

