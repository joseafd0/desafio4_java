// IMPORTACIONES

import { propiedades_venta } from './data_venta.js';

// ELEMENTOS

const propiedadesVenta = document.querySelector("#propiedadesVenta");

// FUNCIONES

const dataEnCards = () => {
  propiedades_venta.forEach((propiedades) => {
    //Se crea la card
    const card = document.createElement("div");
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
    <div class="card">
    <img
      src=${propiedades.src}
      class="card-img-top"
      alt="Imagen del departamento"
    />
    <div class="card-body">
      <h5 class="card-title">
      ${propiedades.nombre}
      </h5>
      <p class="card-text">
      ${propiedades.descripcion}
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${propiedades.ubicacion}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${propiedades.habitaciones} Habitaciones |
        <i class="fas fa-bath"></i> ${propiedades.baños} Baño
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${propiedades.costo}</p>
      <p class="${(propiedades.smoke)? 'text-success' : 'text-danger'}">
        <i class="${(propiedades.smoke)? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i> ${(propiedades.smoke)? 'Permitido fumar' : 'No se permite fumar'}
      </p>
      <p class="${(propiedades.pets)? 'text-success' : 'text-danger'}">
        <i class="${(propiedades.pets)? 'fas fa-paw' : 'fas fa-ban'}"></i> ${(propiedades.pets)? 'Mascotas permitidas' : 'No se permiten mascotas'}
      </p>
    </div>
  </div>
    `;

    //Se inserta la card en el contenedor
    propiedadesVenta.appendChild(card);
  });
};

// RENDER

dataEnCards();
