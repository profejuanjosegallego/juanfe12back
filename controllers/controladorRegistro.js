//pasos para dectar eventos con js 
//1Asociar la variable a detectar con HTML
let boton=document.getElementById("boton");
//2. se configura el evento utilizando la funcion addventlistener
boton.addEventListener("click" ,function(evento){
    evento.preventDefault()
    //rutina parta capturar y validar datos
    //paso1:se crea una variable para cada imput del formulario
let nombre=document.getElementById("nombre").value;
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
resultado.textContent=JSON.stringify(datos)


if(nombre.length>0 && descripcion.length>0 && precio.length>0 && foto.length>0 && estado.length>0 ){
    Swal.fire({
        title: "Producto registrado!",
        text: "hemos registrado tu productocon exicto",
        icon: "success"
    });
}else{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });

}

    
});
