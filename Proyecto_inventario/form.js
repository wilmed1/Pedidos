
document.querySelector("#submit").addEventListener("click", function(){

    let fecha = document.querySelector("#fecha").value;
    let cantidad = document.querySelector("#cantidad").value;
    let productos = document.querySelector("#productos").value;
    let precio = document.querySelector("#precio").value;
    let pago = document.querySelector("#pago").value;
    let observacion = document.querySelector("#observacion");
    
    let url = `https://api.whatsapp.com/send?phone=573008263922&text=
          DistribucionesWM %0A
          Pedido/orden...%0A%0A
          Fecha: %0A
          ${fecha}%0A
          Cantidad: %0A
          ${cantidad}%0A
          Producto: %0A
          ${productos}%0A
          Valor total: %0A
          ${precio}%0A
          Pago: %0A
          ${pago}%0A
          Observaciones: %0A
          ${observacion}`;
  
    window.open(url);
 
  });
