let listaNombreGastos = [];
let listaValorGastos = [];
let listaDescripcionesGastos = [];

function clickBoton (){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let descripcionGasto = document.getElementById("descripcionGasto").value;
    let valorGasto = document.getElementById('valorGasto').value;

    if (Number(valorGasto) > 150) 
        alert('Atención: has ingresado un gasto superior a USD $150');

    listaNombreGastos.push(nombreGasto);
    listaValorGastos.push(valorGasto);
    listaDescripcionesGastos.push(descripcionGasto);

    actualizarListaGastos();
}

function actualizarListaGastos(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaNombreGastos.forEach((elemento,posicion) => {
        const valorGasto = Number(listaValorGastos[posicion]);
        const descripcionGasto = listaDescripcionesGastos[posicion];
        
        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)}
        <button onclick= "eliminarGasto(${posicion});"> Eliminar </button>
        <button onclick="modificarGasto(${posicion});">Modificar Gasto</button>
        </li>`;
        
        // Calculamos el total de gastos
        totalGastos += Number(valorGasto);
    });

    
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById("descripcionGasto").value = "";
    document.getElementById('valorGasto').value = '';
}


function eliminarGasto(posicion){
    listaNombreGastos.splice(posicion,1);
    listaValorGastos.splice(posicion,1);
    actualizarListaGastos();
}


function modificarGasto(posicion) {
        document.getElementById("nombreGasto").value = listaNombresGastos[posicion];
        document.getElementById("descripcionGasto").value =
          listaDescripcionesGastos[posicion];
        document.getElementById("valorGasto").value = listaValoresGastos[posicion];
      
        document.getElementById("botonFormulario").style.display = "none";
        document.getElementById("botonGuardarCambios").style.display = "inline";
        posicionActual = posicion;
      }
function guardarCambios() {
        if (posicionActual !== null) {
          const nuevoNombre = document.getElementById("nombreGasto").value;
          const nuevaDescripcion = document.getElementById("descripcionGasto").value;
          const nuevoValor = Number(document.getElementById("valorGasto").value);
      
          if (!nuevoNombre || !nuevaDescripcion || nuevoValor <= 0) {
            alert("Por favor, completa todos los campos con valores válidos.");
            return;
          }
      
          listaNombresGastos[posicionActual] = nuevoNombre;
          listaDescripcionesGastos[posicionActual] = nuevaDescripcion;
          listaValoresGastos[posicionActual] = nuevoValor;
      
          actualizarListaGastos();
          limpiar();
        }
      }
