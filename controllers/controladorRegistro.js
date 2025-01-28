//pasos para dectar eventos con js 
//1Asociar la variable a detectar con HTML
let boton=document.getElementById("boton");
//2. se configura el evento utilizando la funcion addventlistener
boton.addEventListener("click" ,function(evento){
  
    evento.preventDefault()
   
    //rutina parta capturar y validar datos

    //paso1:se crea una variable para cada imput del formulario
let nombre=document.getElementById("nombre").vule;
let descripcion=document.getElementById("descripcion").value;
let precio=document.getElementById("precio").value;
let foto =document.getElementById("foto").value;
let estado=document.getElementById("estado").value;

//paso2: se crea un variable para almacenar los respuesta
let datos ={
    nombre, 
    descripcion,
    precio,
    foto,
    estado
}
//paso3:enlazar el html con los datos
let resultado=document.getElementById("texto")
resultado.textContent=datos

    Swal.fire({
        title: "Producto registrado!",
        text: "hemos registrado tu productocon exicto",
        icon: "success"
      });
});
