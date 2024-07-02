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
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://acortar.link/f1Wq7l',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2500,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento de lujo',
        src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        descripcion: 'Este elegante apartamento está ubicado en una zona exclusiva de la ciudad.',
        ubicacion: '133 Main Street, Anytown, CA 91234',
        habitaciones: 3,
        baños: 2,
        costo: 2500,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Cabaña en la montaña',
        src: 'https://images.pexels.com/photos/774250/pexels-photo-774250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        descripcion: 'Esta acogedora cabaña se encuentra en un zona para descansar y respirar aire limpio',
        ubicacion: '05 Nevados de algun lugar, RA 777',
        habitaciones: 1,
        baños: 1,
        costo: 1000,
        smoke: true,
        pets: false
    }

]

const propAlquiler = document.querySelector('.row');



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