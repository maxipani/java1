let monto = parseInt (prompt("Prestamos personales! Ingrese el monto de dinero que necesita"))
let cuotas = parseInt (prompt("Calcularemos su cuota. Desea devolverlo en 3, 6 o 12 Cuotas? Recuerde que tendra un 10% de interes fijo."))

let resultado =((monto * 0.10 ) + monto )/ cuotas

if (isNaN(monto))
{
   alert("ingrese nuevamente Monto")
}
if (isNaN(cuotas))
{
    alert("ingrese nuevamente las Cuotas")
}
if (cuotas == 12 || cuotas == 6 || cuotas == 3)
{
    
    console.log (resultado)
}
else{
    alert("ingrese nuevamente las Cuotas")
}







