//En este arreglo de objetos decidi agregar todas las propiedades
//agregando una caracteristica adicional para diferenciarlas si
//si la propiedad estaba en venta o en alquiler
propiedades = [
  {
    titulo: "Apartamento de lujo en zona exclusiva",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    direccion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    imagen:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    alquiler_venta: "venta",
    habitaciones: 4,
    baños: 4,
    precio: 5000,
    smoke: false,
    mascotas: false,
  },
  {
    titulo: "Apartamento acogedor en la montaña",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    direccion: "789 Mountain Road, Summit Peaks, CA 23456",
    imagen:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    alquiler_venta: "venta",
    habitaciones: 2,
    baños: 1,
    precio: 1200,
    smoke: true,
    mascotas: true,
  },
  {
    titulo: "Penthouse de lujo con terraza panorámica",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    direccion: "567 Skyline Avenue, Skyview City, CA 56789",
    imagen:
      "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    alquiler_venta: "venta",
    habitaciones: 3,
    baños: 3,
    precio: 4500,
    smoke: false,
    mascotas: true,
  },
  {
    titulo: "Apartamento en el centro de la ciudad",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    direccion: "123 Main Street, Anytown, CA 91234",
    imagen:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    alquiler_venta: "alquiler",
    habitaciones: 2,
    baños: 2,
    precio: 2000,
    smoke: false,
    mascotas: true,
  },
  {
    titulo: "Apartamento luminoso con vista al mar",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar.",
    direccion: "456 Ocean Drive, Beachside, CA 78901",
    imagen:
      "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alquiler_venta: "alquiler",
    habitaciones: 3,
    baños: 3,
    precio: 2500,
    smoke: true,
    mascotas: true,
  },
  {
    titulo: "Apartamento moderno frente al mar",
    descripcion:
      "Hermoso apartamento ofrece una vista unica al mar mediterráneo.",
    direccion: "456 Ocean Drive, Beachside, CA 78901",
    imagen:
      "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alquiler_venta: "alquiler",
    habitaciones: 3,
    baños: 3,
    precio: 2800,
    smoke: true,
    mascotas: true,
  },
  {
    titulo: "Condominio moderno en el centro de la ciudad",
    descripcion:
      "Este condominio moderno está ubicado en el corazón de la ciudad, cerca de todas las comodidades.",
    direccion: "789 City Center Blvd, Metropolis, CA 34567",
    imagen:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    alquiler_venta: "venta",
    habitaciones: 2,
    baños: 2,
    precio: 2200,
    smoke: false,
    mascotas: true,
  },
  {
    titulo: "Condominio moderno en zona residencial",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial.",
    direccion: "123 Main Street, Anytown, CA 91234",
    imagen:
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    alquiler_venta: "alquiler",
    habitaciones: 2,
    baños: 2,
    precio: 2200,
    smoke: false,
    mascotas: false,
  },
];

function cargar_propiedades(alquiler_venta, principal, section_name) {
  let contador = 0
    for (let propiedad of propiedades) {
        if (principal && contador === 3 ) return
        console.log(propiedad)
    if (propiedad.alquiler_venta === alquiler_venta) {
      //console.log(propiedad.titulo);
      const propiedadesSection = document.querySelector(section_name);
      const html_smoke = document.createElement("p");

      if (propiedad.smoke) {
        html_smoke.className += "text-success";
        html_smoke.innerHTML +=
          '<i class="fas fa-smoking"></i> Permitido fumar';
      } else {
        html_smoke.innerHTML +=
          '<i class="fas fa-smoking-ban"></i> No se permite fumar';
        html_smoke.className += "text-danger";
      }

      const html_mascotas = document.createElement("p");
      if (propiedad.mascotas) {
        html_mascotas.className += "text-success";
        html_mascotas.innerHTML +=
          '<i class="fas fa-paw"></i> Mascotas permitidas';
      } else {
        html_mascotas.className += "text-danger";
        html_mascotas.innerHTML +=
          '<i class="fa-solid fa-ban"></i> No se permiten mascotas';
      }

      propiedadesSection.innerHTML += `
          
            <div class="col-md-4 mb-4">
            <div class="card">
            <img
            src="${propiedad.imagen}"
            class="card-img-top"
            alt="Imagen del departamento"
            />
            <div class="card-body">
            <h5 class="card-title">
            ${propiedad.titulo}
            </h5>
            <p class="card-text">
            ${propiedad.descripcion}  
            </p>
            <p>
            <i class="fas fa-map-marker-alt"></i> 123 Luxury Lane,
            Prestige Suburb, CA 45678
            </p>
            <p>
            <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${propiedad.baños} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.precio}</p>
            ${html_smoke.outerHTML}
            ${html_mascotas.outerHTML}
            </div>
            </div>
            </div>
            `;
            contador += 1
        }
    }
}

//cargar_propiedades("alquiler", true, "#prop_alquiler") 

// if (document.querySelector("#orlando")) {
//     cargar_propiedades("venta", true, "#prop_ventas")
//     cargar_propiedades("alquiler", true, "#prop_alquiler")
// }
// else {
//     if (document.querySelector("#ventas")) {
//     cargar_propiedades("venta", false, "#prop_ventas")   
//     }
//     else {
//     cargar_propiedades("alquiler", false, "#prop_alquiler")
//     }
// }

let mainS = false
if (document.querySelector("#p_principal")) mainS = true
if( document.querySelector("#prop_ventas")) cargar_propiedades("venta", mainS, "#prop_ventas")
if (document.querySelector("#prop_alquiler")) cargar_propiedades("alquiler", mainS, "#prop_alquiler")  