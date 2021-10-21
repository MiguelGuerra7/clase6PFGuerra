let sueldoBruto = 0;

function calculoSueldo() {
  do {
    let categorias = prompt(
      "Seleccionar una categoria: Analista, Supervisor, Jefe"
    );
    let cantidadHoras = parseInt(
      prompt("Ingrese la cantidad de horas trabajadas: ", 0)
    );

    let valorHora = 0;

    switch (categorias) {
      case "Analista":
        valorHora = 100;
        break;
      case "Supervisor":
        valorHora = 150;
        break;
      case "Jefe":
        valorHora = 200;
        break;
      default:
        alert("El dato ingresado es icorrecto");
        valorHora = 0;
        cantidadHoras = 0;
    }

    sueldoBruto = valorHora * cantidadHoras;
    validar = confirm(
      "Para modificar la categoria presione ACEPTAR, si desea continuar presione CANCELAR"
    );
  } while (validar);
}

function aplicarRetenciones(sueldoBruto) {
  if (sueldoBruto > 0) {
    sueldoBruto = sueldoBruto * 0.83;
    alert("Sueldo NETO a cobrar: $" + sueldoBruto);
  }
  return sueldoBruto;
}

calculoSueldo();
aplicarRetenciones(sueldoBruto);

const listalegajos = [];
let cantidad = 5;

do {
  let entrada = prompt("Por favor ingrese el numero de legajo");
  listalegajos.push("legajo nro: " + entrada);
} while (listalegajos.length != cantidad);

const nuevosLegajos = listalegajos.concat(["6", "7"]);

alert(
  listalegajos.join(
    " " +
      "Sueldo a cobrar: $ " +
      aplicarRetenciones(sueldoBruto) +
      "" +
      "\n" +
      "-" +
      " "
  )
);
