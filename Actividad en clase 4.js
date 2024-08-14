//Implementar la función iniciarReloj()
//La función debe mostrar la hora actual usando window.alert()
//La hora debe actualizarse y mostrarse cada minuto.
//Asegúrense de que la primera alerta se muestre inmediatamente al llamar a la función.
//Utilicen window.setTimeout() y window.setInterval() para programar las actualizaciones.

function iniciarReloj() {
    function mostrarHoraActual() {
      const horaActual = new Date().toLocaleTimeString();
      window.alert(`La hora actual es: ${horaActual}`);
    }
    mostrarHoraActual();
    const interval = setInterval(mostrarHoraActual, 60000);
    window.setTimeout(() => {
      clearInterval(interval);
      window.alert("Actualizando...");
    }, 600000);
  }
  iniciarReloj();
  