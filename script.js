// Arreglo de elementos de la tabla periódica ordenados por periodos y grupos
var elementosTablaPeriodica = [
    // Período 1 H[0,0] He[0,1]
    [
      { simbolo: 'H', nombre: 'Hidrógeno', numeroAtomico: 1, grupo: 1,  },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: 'He', nombre: 'Helio', numeroAtomico: 2, grupo:18}
    ],
    // Período 2 [1,0] [1,1] [1,2]...
    [
      
      { simbolo: 'Li', nombre: 'Litio', numeroAtomico: 3, grupo: 1, metal:1},
      { simbolo: 'Be', nombre: 'Berilio', numeroAtomico: 4, grupo: 2, metal:2 },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' }, 
      { simbolo: 'B', nombre: 'Boro', numeroAtomico: 5, grupo:13, metal: 5 },
      { simbolo: 'C', nombre: 'Carbono', numeroAtomico: 6, grupo:14 },
      { simbolo: 'N', nombre: 'Nitrógeno', numeroAtomico: 7, grupo: 15 },
      { simbolo: 'O', nombre: 'Oxígeno', numeroAtomico: 8, grupo: 16 },
      { simbolo: 'F', nombre: 'Flúor', numeroAtomico: 9, grupo: 17 },
      { simbolo: 'Ne', nombre: 'Neón', numeroAtomico: 10, grupo: 18 }
    ],
    // Período 3 [2,0] [2,1] ...
    [
      { simbolo: 'Na', nombre: 'Sodio', numeroAtomico: 11, grupo: 1,metal:1 },
      { simbolo: 'Mg', nombre: 'Magnesio', numeroAtomico: 12, grupo: 2,metal:2 },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: 'Al', nombre: 'Aluminio', numeroAtomico: 13, grupo:13,metal: 4 },
      { simbolo: 'Si', nombre: 'Silicio', numeroAtomico: 14,grupo:14, metal: 5 },
      { simbolo: 'P', nombre: 'Fósforo', numeroAtomico: 15,grupo:15 },
      { simbolo: 'S', nombre: 'Azufre', numeroAtomico: 16,grupo:16 },
      { simbolo: 'Cl', nombre: 'Cloro', numeroAtomico: 17,grupo:17 },
      { simbolo: 'Ar', nombre: 'Argón', numeroAtomico: 18,grupo:18 }
    ],
    // Período 4
    [
      { simbolo: 'K', nombre: 'Potasio', numeroAtomico: 19, grupo: 1, metal:1 },
      { simbolo: 'Ca', nombre: 'Calcio', numeroAtomico: 20, grupo: 2,metal:2 },
      { simbolo: 'Sc', nombre: 'Escandio', numeroAtomico: 21, grupo: 3, metal: 3 },
      { simbolo: 'Ti', nombre: 'Titanio', numeroAtomico: 22, grupo: 4, metal: 3 },
      { simbolo: 'V', nombre: 'Vanadio', numeroAtomico: 23, grupo: 5,
      metal: 3 },
      { simbolo: 'Cr', nombre: 'Cromo', numeroAtomico: 24, grupo: 6,
      metal: 3 },
      { simbolo: 'Mn', nombre: 'Manganeso', numeroAtomico: 25, grupo: 7, metal: 3 },
      { simbolo: 'Fe', nombre: 'Hierro', numeroAtomico: 26, grupo: 8, metal: 3 },
      { simbolo: 'Co', nombre: 'Cobalto', numeroAtomico: 27, grupo: 9, metal: 3 },
      { simbolo: 'Ni', nombre: 'Níquel', numeroAtomico: 28, grupo: 10, metal: 3 },
      { simbolo: 'Cu', nombre: 'Cobre', numeroAtomico: 29, grupo: 11, metal: 3 },
      { simbolo: 'Zn', nombre: 'Zinc', numeroAtomico: 30, grupo: 12, metal: 3 },
      { simbolo: 'Ga', nombre: 'Galio', numeroAtomico: 31, grupo: 13,metal: 4  },
      { simbolo: 'Ge', nombre: 'Germanio', numeroAtomico: 32, grupo: 14, metal: 5  },
      { simbolo: 'As', nombre: 'Arsénico', numeroAtomico: 33, grupo: 15, metal: 5  },
      { simbolo: 'Se', nombre: 'Selenio', numeroAtomico: 34, grupo: 16 },
      { simbolo: 'Br', nombre: 'Bromo', numeroAtomico: 35, grupo: 17 },
      { simbolo: 'Kr', nombre: 'Kriptón', numeroAtomico: 36, grupo: 18  }
    ],
    // Período 5
    [
      { simbolo: 'Rb', nombre: 'Rubidio', numeroAtomico: 37, grupo: 1, metal:1 },
      { simbolo: 'Sr', nombre: 'Estroncio', numeroAtomico: 38, grupo: 2,metal:2 },
      { simbolo: 'Y', nombre: 'Itrio', numeroAtomico: 39, grupo: 3, metal: 3 },
      { simbolo: 'Zr', nombre: 'Zirconio', numeroAtomico: 40, grupo: 4, metal: 3 },
      { simbolo: 'Nb', nombre: 'Niobio', numeroAtomico: 41, grupo: 5, metal: 3 },
      { simbolo: 'Mo', nombre: 'Molibdeno', numeroAtomico: 42, grupo: 6, metal: 3 },
      { simbolo: 'Tc', nombre: 'Tecnecio', numeroAtomico: 43, grupo: 7, metal: 3 },
      { simbolo: 'Ru', nombre: 'Rutenio', numeroAtomico: 44, grupo: 8, metal: 3 },
      { simbolo: 'Rh', nombre: 'Rodio', numeroAtomico: 45, grupo: 9, metal: 3 },
      { simbolo: 'Pd', nombre: 'Paladio', numeroAtomico: 46, grupo: 10, metal: 3 },
      { simbolo: 'Ag', nombre: 'Plata', numeroAtomico: 47, grupo: 11, metal: 3 },
      { simbolo: 'Cd', nombre: 'Cadmio', numeroAtomico: 48, grupo: 12, metal: 3 },
      { simbolo: 'In', nombre: 'Indio', numeroAtomico: 49, grupo: 13,metal: 4 },
      { simbolo: 'Sn', nombre: 'Estaño', numeroAtomico: 50, grupo: 14,metal: 4 },
      { simbolo: 'Sb', nombre: 'Antimonio', numeroAtomico: 51, grupo: 15, metal: 5 },
      { simbolo: 'Te', nombre: 'Telurio', numeroAtomico: 52, grupo: 16, metal: 5 },
      { simbolo: 'I', nombre: 'Yodo', numeroAtomico: 53, grupo: 17 },
      { simbolo: 'Xe', nombre: 'Xenón', numeroAtomico: 54, grupo: 18 }
    ],
    // Período 6
    [
      { simbolo: 'Cs', nombre: 'Cesio', numeroAtomico: 55, grupo: 1, metal:1 },
      { simbolo: 'Ba', nombre: 'Bario', numeroAtomico: 56, grupo: 2,metal:2 },
      { simbolo: '', nombre: '', numeroAtomico:''},
      { simbolo: 'Hf', nombre: 'Hafnio', numeroAtomico: 72, grupo: 4, metal: 3 },
      { simbolo: 'Ta', nombre: 'Tantalio', numeroAtomico: 73, grupo: 5, metal: 3 },
      { simbolo: 'W', nombre: 'Wolframio', numeroAtomico: 74, grupo: 6, metal: 3 },
      { simbolo: 'Re', nombre: 'Renio', numeroAtomico: 75, grupo: 7, metal: 3 },
      { simbolo: 'Os', nombre: 'Osmio', numeroAtomico: 76, grupo: 8, metal: 3 },
      { simbolo: 'Ir', nombre: 'Iridio', numeroAtomico: 77, grupo: 9, metal: 3 },
      { simbolo: 'Pt', nombre: 'Platino', numeroAtomico: 78, grupo: 10, metal: 3 },
      { simbolo: 'Au', nombre: 'Oro', numeroAtomico: 79, grupo: 11, metal: 3 },
      { simbolo: 'Hg', nombre: 'Mercurio', numeroAtomico: 80, grupo: 12, metal: 3 },
      { simbolo: 'Tl', nombre: 'Talio', numeroAtomico: 81, grupo: 13,metal: 4 },
      { simbolo: 'Pb', nombre: 'Plomo', numeroAtomico: 82, grupo: 14,metal: 4 },
      { simbolo: 'Bi', nombre: 'Bismuto', numeroAtomico: 83, grupo: 15,metal: 4 },
      { simbolo: 'Po', nombre: 'Polonio', numeroAtomico: 84, grupo: 16,metal: 4 },
      { simbolo: 'At', nombre: 'Astato', numeroAtomico: 85, grupo: 17, metal: 5 },
      { simbolo: 'Rn', nombre: 'Radón', numeroAtomico: 86, grupo: 18 }
    ],

    // Período 7
    [
      
      { simbolo: 'Fr', nombre: 'Francio', numeroAtomico: 87, grupo: 1, metal:1 },
      { simbolo: 'Ra', nombre: 'Radio', numeroAtomico: 88, grupo: 2,metal:2 },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: 'Rf', nombre: 'Rutherfordio', numeroAtomico: 104, grupo: 4, metal: 3},
      { simbolo: 'Db', nombre: 'Dubnio', numeroAtomico: 105, grupo: 5, metal: 3 },
      { simbolo: 'Sg', nombre: 'Seaborgio', numeroAtomico: 106, grupo: 6, metal: 3 },
      { simbolo: 'Bh', nombre: 'Bohrio', numeroAtomico: 107, grupo: 7, metal: 3 },
      { simbolo: 'Hs', nombre: 'Hassio', numeroAtomico: 108, grupo: 8, metal: 3 },
      { simbolo: 'Mt', nombre: 'Meitnerio', numeroAtomico: 109, grupo: 9, metal: 3 },
      { simbolo: 'Ds', nombre: 'Darmstadtio', numeroAtomico: 110, grupo: 10, metal: 3 },
      { simbolo: 'Rg', nombre: 'Roentgenio', numeroAtomico: 111, grupo: 11, metal: 3 },
      { simbolo: 'Cn', nombre: 'Copernicio', numeroAtomico: 112, grupo: 12, metal: 3 },
      { simbolo: 'Nh', nombre: 'Nihonio', numeroAtomico: 113, grupo: 13,metal: 4 },
      { simbolo: 'Fl', nombre: 'Flerovio', numeroAtomico: 114, grupo: 14,metal: 4 },
      { simbolo: 'Mc', nombre: 'Moscovio', numeroAtomico: 115, grupo: 15,metal: 4 },
      { simbolo: 'Lv', nombre: 'Livermorio', numeroAtomico: 116, grupo: 16,metal: 4 },
      { simbolo: 'Ts', nombre: 'Teneso', numeroAtomico: 117, grupo: 17 },
      { simbolo: 'Og', nombre: 'Oganessón', numeroAtomico: 118, grupo: 18 }
    ],
    [
      {simbolo: '', nombre: '', numeroAtomico: '' },
    ],
    // Elementos de transición interna 6
    [
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: 'La', nombre: 'Lantano', numeroAtomico: 57, metal: 6 },
      { simbolo: 'Ce', nombre: 'Cerio', numeroAtomico: 58, metal: 6 },
      { simbolo: 'Pr', nombre: 'Praseodimio', numeroAtomico: 59, metal: 6 },
      { simbolo: 'Nd', nombre: 'Neodimio', numeroAtomico: 60, metal: 6 },
      { simbolo: 'Pm', nombre: 'Prometio', numeroAtomico: 61, metal: 6 },
      { simbolo: 'Sm', nombre: 'Samario', numeroAtomico: 62, metal: 6 },
      { simbolo: 'Eu', nombre: 'Europio', numeroAtomico: 63, metal: 6 },
      { simbolo: 'Gd', nombre: 'Gadolinio', numeroAtomico: 64, metal: 6 },
      { simbolo: 'Tb', nombre: 'Terbio', numeroAtomico: 65, metal: 6 },
      { simbolo: 'Dy', nombre: 'Disprosio', numeroAtomico: 66, metal: 6 },
      { simbolo: 'Ho', nombre: 'Holmio', numeroAtomico: 67, metal: 6 },
      { simbolo: 'Er', nombre: 'Erbio', numeroAtomico: 68, metal: 6 },
      { simbolo: 'Tm', nombre: 'Tulio', numeroAtomico: 69, metal: 6 },
      { simbolo: 'Yb', nombre: 'Iterbio', numeroAtomico: 70, metal: 6 },
      { simbolo: 'Lu', nombre: 'Lutecio', numeroAtomico: 71, metal: 6 }
    ],

     // Elementos de transición interna 7
    [
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: '', nombre: '', numeroAtomico: '' },
      { simbolo: 'Ac', nombre: 'Actinio', numeroAtomico: 89, metal:7 },
      { simbolo: 'Th', nombre: 'Torio', numeroAtomico: 90, metal:7 },
      { simbolo: 'Pa', nombre: 'Protactinio', numeroAtomico: 91, metal:7 },
      { simbolo: 'U', nombre: 'Uranio', numeroAtomico: 92, metal:7 },
      { simbolo: 'Np', nombre: 'Neptunio', numeroAtomico: 93, metal:7 },
      { simbolo: 'Pu', nombre: 'Plutonio', numeroAtomico: 94, metal:7 },
      { simbolo: 'Am', nombre: 'Americio', numeroAtomico: 95, metal:7 },
      { simbolo: 'Cm', nombre: 'Curio', numeroAtomico: 96, metal:7 },
      { simbolo: 'Bk', nombre: 'Berkelio', numeroAtomico: 97, metal:7 },
      { simbolo: 'Cf', nombre: 'Californio', numeroAtomico: 98, metal:7 },
      { simbolo: 'Es', nombre: 'Einstenio', numeroAtomico: 99, metal:7 },
      { simbolo: 'Fm', nombre: 'Fermio', numeroAtomico: 100, metal:7 },
      { simbolo: 'Md', nombre: 'Mendelevio', numeroAtomico: 101, metal:7 },
      { simbolo: 'No', nombre: 'Nobelio', numeroAtomico: 102, metal:7 },
      { simbolo: 'Lr', nombre: 'Lawrencio', numeroAtomico: 103, metal:7 }
    ]
  ];

//ID y color para cada grupo
for (let i = 1; i <= 18; i++) {
  const btnGruposId = `grupo${i}Button`;
  const grupoClassColor = `grupo${i}-color`;
  const btnGrupos = document.getElementById(btnGruposId);
  btnGrupos.addEventListener('click', function() {
    pintarGrupo(i, grupoClassColor);
  });
}

// para los metales id y color
for (let i = 1; i <=7; i++) {
 const btnMetalesId = `metales${i}Button`;
 const metalesClassColor = `grupo${i}-color`;
 const btnMetales = document.getElementById(btnMetalesId);
  btnMetales.addEventListener('click',function(){
    pintarMetales(i,metalesClassColor);
    console.log(`metales${i}Button`);
  });
}
function pintarMetales(metales,claseColor) {
  borrarColor();
  for (let i = 0; i < elementosTablaPeriodica.length; i++) {
    var periodo = elementosTablaPeriodica[i];
    for (let j = 0; j < periodo.length; j++) {
      var elemento = periodo[j];
      if(elemento.metal === metales){
                // Obtener la celda correspondiente al elemento en la tabla periódica
                var celda = document.querySelector(`td[data-nombre="${elemento.nombre}"]`);
                // Agregar una clase CSS para cambiar el color de fondo
                celda.classList.add(claseColor);
      }
    }
  }
}

function pintarGrupo(grupo, claseColor) {
  borrarColor();
  // Recorrer todos los elementos de la tabla periódica
  for (var i = 0; i < elementosTablaPeriodica.length; i++) {
    var periodo = elementosTablaPeriodica[i];
    for (var j = 0; j < periodo.length; j++) {
      var elemento = periodo[j];
      // Verificar si el elemento no está vacío y pertenece al grupo especificado
    
      if (elemento.grupo === grupo) {
        // Obtener la celda correspondiente al elemento en la tabla periódica
        var celda = document.querySelector(`td[data-nombre="${elemento.nombre}"]`);

        // Agregar una clase CSS para cambiar el color de fondo
        celda.classList.add(claseColor);
      
      }
    }
  }
}
function borrarColor() {
  var celdas = document.querySelectorAll("td");
  for (var i = 1; i <= 18; i++) {
    var claseColor = `grupo${i}-color`;
    for (var j = 0; j < celdas.length; j++) {
      var celda = celdas[j];
      celda.classList.remove(claseColor);
    }
  }
}



// let periodo1Button = document.getElementById("periodo1Button");
// let periodo2Button = document.getElementById("periodo2Button");
// let periodo3Button = document.getElementById("periodo3Button");
// let periodo4Button = document.getElementById("periodo4Button");
// let periodo5Button = document.getElementById("periodo5Button");
// let periodo6Button = document.getElementById("periodo6Button");
// let periodo7Button = document.getElementById("periodo7Button");

for (let i = 1; i <= 7; i++) {
  const btnPeriodoId = `periodo${i}Button`;
  const periodoClassColor = `grupo${i}-color`;
  const btnPeriodo = document.getElementById(btnPeriodoId);

  btnPeriodo.addEventListener('click', function() {
    pintarPeriodo(i, periodoClassColor);
  });
}


function pintarPeriodo(periodo, claseColor) {
  borrarColor();
  // Obtener la fila específica según el índice proporcionado
  var fila = document.querySelectorAll("tr")[periodo-1];
  var celdas = fila.querySelectorAll("td");

  for (var i = 0; i < celdas.length; i++) {
    var celda = celdas[i];
    if (celda.getAttribute("data-nombre") !== "") {
      celda.classList.add(claseColor);
    }
  }
}
// periodo1Button.addEventListener('click', function() {
//   pintarPeriodo(0, "grupo1-color");
// });

// periodo2Button.addEventListener('click', function() {
//   pintarPeriodo(1, "grupo2-color");
// });
// periodo3Button.addEventListener('click', function() {
//   pintarPeriodo(2, "grupo3-color");
// });
// periodo4Button.addEventListener('click', function() {
//   pintarPeriodo(3, "grupo4-color");
// });
// periodo5Button.addEventListener('click', function() {
//   pintarPeriodo(4, "grupo5-color");
// });
// periodo6Button.addEventListener('click', function() {
//   pintarPeriodo(5, "grupo6-color");
// });
// periodo7Button.addEventListener('click', function() {
//   pintarPeriodo(6, "grupo7-color");
// });
  


// Función para crear la tabla periódica
function crearTablaPeriodica() {
  var contenedorTabla = document.getElementById('contenedor-tabla');
  var tabla = document.createElement('table');
  tabla.className = 'tabla-periodica';

  for (var i = 0; i < elementosTablaPeriodica.length; i++) {
    var fila = document.createElement('tr');
    for (var j = 0; j < elementosTablaPeriodica[i].length; j++) {
      var elemento = elementosTablaPeriodica[i][j];
      var celda = document.createElement('td');
      celda.dataset.nombre = elemento.nombre;
    

      if (Object.keys(elemento).length === 0) {
        console.log("está vacío");
        celda.innerHTML = "";
        
      } else {
        celda.innerHTML = `
          <strong>${elemento.simbolo || ""}</strong><br>
          <small>${elemento.numeroAtomico || ""}</small>
        `;
      }
    fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }
  contenedorTabla.appendChild(tabla);
}

// Llamar a la función para crear la tabla periódica
crearTablaPeriodica();

//MODAL----------------------------------------------------------

// Obtener el modal y el elemento de cierre
var modal = document.getElementById('modal');
var botonCerrar = document.getElementsByClassName('cerrar')[0];

// Evento de clic fuera del modal
// Función para mostrar el modal
// function mostrarModal() {
//   modal.style.display = 'block';
// }


// Función para ocultar el modal
function ocultarModal() {
modal.style.display = 'none';
}



function mostrarModal(elemento) {
  var modal = document.getElementById('modal');
  var contenidoModal = modal.getElementsByClassName('modal-content')[0];
  contenidoModal.innerHTML = ''; // Limpiar el contenido actual
  // Crear la tabla del elemento
  
  var tablaElemento = document.createElement('table');
  tablaElemento.classList.add('tabla-elemento');
  // Agregar filas y celdas con los datos del elemento
  // Aquí deberás personalizarlo según la estructura de tu tabla de elementos
  // Por ejemplo, puedes tener filas para el nombre, símbolo, número atómico, etc.
  tablaElemento.innerHTML = `
  <tr>
  <td><strong>Elemento</strong></td>
  <td><strong>Valor</strong></td>
  </tr>
  <tr>
    <td>Nombre: </td>
    <td>${elemento.nombre}</td>
  </tr>
  <tr>
    <td>Símbolo: </td>
    <td>${elemento.simbolo}</td>
  </tr>
  <tr>
    <td>Número atómico: </td>
    <td>${elemento.numeroAtomico}</td>
  </tr>
  `;
  // Agregar la tabla al contenido del modal
  contenidoModal.appendChild(tablaElemento);
  modal.style.display = 'block';
  
}


// Agregar evento al hacer clic en una celda de la tabla
var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
  celdas[i].addEventListener('click', function() {
    var f = this.parentNode.rowIndex; // Obtener el índice de la fila de la celda clicada
    var c = this.cellIndex; // Obtener el índice de la columna de la celda clicada
    var elemento = elementosTablaPeriodica[f][c];

    if (elemento.simbolo === "" && elemento.nombre === "" && elemento.numeroAtomico === "") {
      // El elemento está vacío, no mostrar el modal
      ocultarModal();
    } else {
      // El elemento no está vacío, mostrar el modal
      mostrarModal(elemento); 
    }
  });
}

// Agregar evento al hacer clic en el botón de cierre del modal
botonCerrar.addEventListener('click', ocultarModal);
// Evento de clic en el botón de cierre
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    ocultarModal();
  }
});

// var grupoDeBotones =document.getElementById("grupoDeBotones");
//grupos
grupos.addEventListener('click',function(){
  grupoDeBotones.style.visibility = 'visible';
});
grupos.addEventListener('dblclick',function(){
  grupoDeBotones.style.visibility = 'hidden';
});
//periodos
periodos.addEventListener('click',function(){
  periodoDeBotones.style.visibility = 'visible';
});
periodos.addEventListener('dblclick',function(){
  periodoDeBotones.style.visibility = 'hidden';
});
//metales
metales.addEventListener('click',function(){
  metalesDeBotones.style.visibility = 'visible';
});
metales.addEventListener('dblclick',function(){
  metalesDeBotones.style.visibility = 'hidden';
});



// // Eventos de colores a los grupos
// grupo1Button.addEventListener('click', function() {
//   pintarGrupo(1, 'grupo1-color');
// });

// grupo2Button.addEventListener('click', function() {
//   pintarGrupo(2, 'grupo2-color');
// });

// grupo3Button.addEventListener('click', function() {
//   pintarGrupo(3, 'grupo3-color');
// });




