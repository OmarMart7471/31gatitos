let gatitos = [];
let gatito = [];

(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  function validarFormulario() {
    let nombreG = document.querySelector('#nombreG').value;
    let sexoG = document.querySelector('#sexoG').value;
    let edadG = document.querySelector('#edadG').value;
    let imgG = document.querySelector('#imgG').files[0];

    let nombreP = document.querySelector('#nombreP').value;
    let telefonoP = document.querySelector('#telefonoP').value;
    let emailP = document.querySelector('#emailP').value;
    let generoP = document.querySelector('#generoP').value;
    let edadP = document.querySelector('#edadP').value;
    if (nombreG === '' || sexoG === '' || edadG === '' || nombreP === '' || telefonoP === ''
    || emailP === '' || generoP === '' || edadP === '') {
      alert('Por favor completa todos los campos.');
      return false; 
    }
    return true;
  }

function enviarD(){
    let nombreG = document.querySelector('#nombreG').value;
    let sexoG = document.querySelector('#sexoG').value;
    let edadG = document.querySelector('#edadG').value;
    let imgG = document.querySelector('#imgG').files[0];

    let nombreP = document.querySelector('#nombreP').value;
    let telefonoP = document.querySelector('#telefonoP').value;
    let emailP = document.querySelector('#emailP').value;
    let generoP = document.querySelector('#generoP').value;
    let edadP = document.querySelector('#edadP').value;

    let reader = new FileReader();
    reader.onload = function(event) {
        let imagenBase64 = event.target.result;
        gatito = {
            "persona":nombreP,
            "telefono":telefonoP,
            "gmail":emailP,
            "genero":generoP,
            "años":edadP,
            "nombre":nombreG,
            "sexo":sexoG,
            "edad":edadG,
            "imagen" : imagenBase64 
        }
        gatitos.push(gatito);
        console.log(gatitos);
        document.querySelector('#nombreG').value = '';
        document.querySelector('#sexoG').value = '';
        document.querySelector('#edadG').value = '';
        document.querySelector('#imgG').value = '';

        document.querySelector('#nombreP').value = '';
        document.querySelector('#emailP').value = '';
        document.querySelector('#generoP').value = '';
        document.querySelector('#edadP').value = '';
        document.querySelector('#telefonoP').value = '';

        document.querySelector('#tabla').innerHTML =' ';
       
    };
    if (!imgG || !imgG.type.match('image.*')) {
        alert('Selecciona una imagen válida');
        return;
    }
    reader.readAsDataURL(imgG);
    mostrarD();
}

function mostrarD(){
    table.style.visibility = 'visible';
    let bus = document.querySelector('#busqueda');
    bus.style.visibility = 'visible';
    let tit = document.querySelector('#title');
    tit.style.visibility = 'visible';

    let tabla = document.querySelector('#tabla');
    document.querySelector('#tabla').innerHTML =' ';
    gatitos.forEach(
        function (elemen, main,array){
            tabla.innerHTML += '<tr style="background-color: #e9edc9;"><td >' + main + '</td><td>' 
            + elemen.nombre + '</td>'+'<td>'+elemen.sexo+'</td>' +
            '<td>'+elemen.edad+' meses </td>' +
            '<td><img src="'+elemen.imagen+'" width="300" heigth="300"></td>' +
             '<td><center><button class="btn btn-sm" value="Borrar" onclick="eliminar('+main+')"><img src="img/trash.png" width="30px"></button><br><br>'+
           ' <input type="button" class="btn btn-outline-success btn-sm" value="Ver Mis Datos" onclick="verMisDatos('+main+')"><br><br>'
           +'<button type="button" class="btn btn-outline-success btn-sm" onclick="editar('+main+')">Editar</button></center></td></tr>';
        } )
}

function eliminar(main){
    gatitos.splice(main,1);
    document.querySelector('#tabla').innerHTML =' ';
    mostrarD();
    console.log(gatitos);
}

function eliminarPr(){
    gatitos.shift();
    document.querySelector('#tabla').innerHTML =' ';
    mostrarD();
}

function eliminarUl(){
    gatitos.pop();
    document.querySelector('#tabla').innerHTML =' ';
    mostrarD();
}

function busqueda(){
    let busqueda = document.querySelector('#textBus').value;
    let resultado = gatitos.find (resultado => resultado.nombre === busqueda);
    console.log (resultado);
    let resul = gatitos.filter (resul => resul.nombre === busqueda);
    console.log (resul);
    document.querySelector('#textBus').innerHTML ='';

    document.querySelector('#tabla').innerHTML =' ';
    let tabla = document.querySelector('#tabla');
    resul.forEach(
        function (elemen, main,array){
            tabla.innerHTML += '<tr style="background-color: #e9edc9;"><td >' + main + '</td><td>' 
            + elemen.nombre + '</td>'+'<td>'+elemen.sexo+'</td>' +
            '<td>'+elemen.edad+' meses </td>' +
            '<td><img src="'+elemen.imagen+'" width="300" heigth="300"></td>' +
             '<td><center><button class="btn btn-sm" value="Borrar" onclick="eliminar('+main+')"><img src="img/trash.png" width="30px"></button><br><br>'+
           ' <input type="button" class="btn btn-outline-success btn-sm" value="Ver Mis Datos" onclick="verMisDatos('+main+')"><br><br>'
           +'<button type="button" class="btn btn-outline-success btn-sm" onclick="editar('+main+')">Editar</button></center></td></tr>';
        } )
}

function verMisDatos(main){
    let datos = gatitos[main];
    const nom = ('Nombre: ' + datos.persona + '\n');
    const tel = ('Número telefónico: ' + datos.telefono + '\n');
    const edad = ('Edad: ' + datos.años + '\n');
    const gen = ('Género: ' + datos.genero + '\n');
    const email = ('Gmail: ' + datos.gmail + '@gmail.com\n');
    alert('Datos Personales: \n' + nom  + tel + edad + gen 
    + email);
}

function borrarT(){
    document.querySelector('#nombreG').value = '';
        document.querySelector('#sexoG').value = '';
        document.querySelector('#edadG').value = '';
        document.querySelector('#imgG').value = '';

        document.querySelector('#nombreP').value = '';
        document.querySelector('#emailP').value = '';
        document.querySelector('#generoP').value = '';
        document.querySelector('#edadP').value = '';
        document.querySelector('#telefonoP').value = '';
        
}

function editar(main){
    let datos = gatitos[main];
    document.querySelector('#nombreP').value = datos.persona;
    document.querySelector('#telefonoP').value = datos.telefono;
    document.querySelector('#edadP').value = datos.años;
    document.querySelector('#emailP').value = datos.gmail;
    document.querySelector('#generoP').value = datos.genero;
    document.querySelector('#nombreG').value = datos.nombre;
    document.querySelector('#edadG').value = datos.edad;
    document.querySelector('#sexoG').value = datos.sexo;
    document.querySelector('#imgG').files[0] = datos.imagen;
    
    let botonActualizar = document.querySelector('#botonActualizar');
    botonActualizar.innerHTML = '<input onclick="confirmarActualizar('+main+')" class="btn btn-outline-success" value="Actualizar">';
    botonActualizar.style.visibility = 'visible';
}

function actualizarDatos(main){
    let nombreG = document.querySelector('#nombreG').value;
    let sexoG = document.querySelector('#sexoG').value;
    let edadG = document.querySelector('#edadG').value;
    let imgG = document.querySelector('#imgG').files[0];

    let nombreP = document.querySelector('#nombreP').value;
    let telefonoP = document.querySelector('#telefonoP').value;
    let emailP = document.querySelector('#emailP').value;
    let generoP = document.querySelector('#generoP').value;
    let edadP = document.querySelector('#edadP').value;

    let reader = new FileReader();
    reader.onload = function(event) {
        let imagenBase64 = event.target.result;
        gatito = {
            "persona":nombreP,
            "telefono":telefonoP,
            "gmail":emailP,
            "genero":generoP,
            "años":edadP,
            "nombre":nombreG,
            "sexo":sexoG,
            "edad":edadG,
            "imagen" : imagenBase64 
        }
        document.querySelector('#nombreG').value = '';
        document.querySelector('#sexoG').value = '';
        document.querySelector('#edadG').value = '';
        document.querySelector('#imgG').value = '';

        document.querySelector('#nombreP').value = '';
        document.querySelector('#emailP').value = '';
        document.querySelector('#generoP').value = '';
        document.querySelector('#edadP').value = '';
        document.querySelector('#telefonoP').value = '';

        document.querySelector('#tabla').innerHTML =' ';
        //mostrarD();
        gatitos.splice(main,1,gatito);
        mostrarD();
    }
    if (!imgG || !imgG.type.match('image.*')) {
        alert('Selecciona una imagen válida');
        return;
    }
    reader.readAsDataURL(imgG);
    let botonActualizar = document.querySelector('#botonActualizar');

    botonActualizar.style.visibility = 'hidden';
}

function confirmarActualizar(main) {
    if (confirm('¿Estás seguro de que quieres actualizar los datos?')) {
      actualizarDatos(main);
    }
  }