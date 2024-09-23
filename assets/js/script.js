let listaNombreGastos = [];
let listaValorGastos = [];

function clickBoton (){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    console.log(nombreGasto);
    console.log(valorGasto);

    console.log(listaNombreGastos);

    listaNombreGastos.push(nombreGasto);
    listaValorGastos.push(valorGasto);

    console.log(listaNombreGastos);
    console.log(listaValorGastos);
    //alert('Click de usuario');
    actualizarListaGastos();
}

function actualizarListaGastos(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaNombreGastos.forEach((elemento,posicion) => {
        const valorGasto = Number(listaValorGastos[posicion]);
        
        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)}
        <button onclick= "eliminarGasto(${posicion});"> Eliminar </button>
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
    document.getElementById('valorGasto').value = '';
}

function eliminarGasto(posicion){
    listaNombreGastos.splice(posicion,1);
    listaValorGastos.splice(posicion,1);
    actualizarListaGastos();
}