function validar() {
  let cantidad = document.getElementById('cantidad').value;
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let email = document.getElementById('email').value;

  console.log(nombre);
  if (nombre == '') {
    document.getElementById('alerta-nombre').innerHTML = 'El nombre no puede estar vacío';
  }
  if (apellido == '') {
    document.getElementById('alerta-apellido').innerHTML = 'El apellido no puede estar vacío';
  }
  if (email == '') {
    document.getElementById('alerta-email').innerHTML =
      'El correo electrónico no puede estar vacío';
  }

  if (cantidad < 1) {
    document.getElementById('alerta-cantidad').innerHTML = 'La cantidad debe ser mayor a 0';
    return false;
  }
}

function resultado() {
  limpiar();
  validar();
  calculo();
}

function calculo() {
  let cantidad = document.getElementById('cantidad').value;
  let categoria = document.getElementById('categoria').value;
  let precio;
  switch (categoria) {
    case 'estudiante':
      precio = 200 - (200 * 80) / 100;
      break;
    case 'trainee':
      precio = 200 - (200 * 50) / 100;
      break;
    case 'junior':
      precio = 200 - (200 * 15) / 100;
      break;
    default:
      precio = 0;
  }
  let resultado = precio * cantidad;
  document.getElementById('resultado').innerHTML = resultado;
}

function limpiar() {
  const x = document.getElementsByTagName('input');
  for (let i = 0; i < x.length; i++) {
    let contenido = document.getElementsByTagName('input')[i].value;
    if (contenido == '') {
      document.getElementsByTagName('input')[i].value = '';
    }
  }
  document.getElementById('resultado').innerHTML = 0;
  document.getElementById('alerta-nombre').innerHTML = '';
  document.getElementById('alerta-apellido').innerHTML = '';
  document.getElementById('alerta-email').innerHTML = '';
  document.getElementById('alerta-cantidad').innerHTML = '';
}

function borrar() {
  const x = document.getElementsByTagName('input');
  for (let i = 0; i < x.length; i++) {
    document.getElementsByTagName('input')[i].value="";

  }
  document.getElementById('resultado').innerHTML = 0;
  document.getElementById('alerta-nombre').innerHTML = '';
  document.getElementById('alerta-apellido').innerHTML = '';
  document.getElementById('alerta-email').innerHTML = '';
  document.getElementById('alerta-cantidad').innerHTML = '';
}
