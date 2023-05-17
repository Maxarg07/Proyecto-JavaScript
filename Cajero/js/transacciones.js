//funcion de depositar
function depositar(){
    if(localStorage.getItem('saldoDeposito')!=null){

    }else{
        localStorage.setItem("saldoDeposito",0)
    }

    let deposito = parseInt(document.getElementById('deposito').value);
    let depositados = parseInt(localStorage.getItem('saldoDeposito'))+deposito;
    localStorage.setItem("saldoDeposito",depositados);

    if(depositados > 50000){
        alert("No se puede depositar mas de $50,000")
    }else{
        let saldo = localStorage.getItem("saldo");
        let saldoDeposito = parseInt(saldo) + deposito;
        localStorage.setItem("saldo",saldoDeposito)
        document.getElementById('saldo').innerHTML = localStorage.getItem("saldo");

        alert("Deposito Realizado con exito.")
    }
}


//funcion de retirar
function retirar(){
    if(localStorage.getItem('saldoRetirado')!=null){

    }else{
        localStorage.setItem("saldoRetirado",0)
    }
    let saldo = localStorage.getItem("saldo");
    let retirado = parseInt(document.getElementById('retiro').value);

    if(retirado > saldo){
        alert("El saldo es insuficiente.")
    }else{
        let retirados = parseInt(localStorage.getItem('saldoRetirado'))+retirado;
        localStorage.setItem("saldoRetirado",retirados);

        if(retirados > 30000){
            alert("No se puede retirar mas de $30,000")
        }else{
            let saldoRetirado = parseInt(saldo)-retirado;
            localStorage.setItem("saldo",saldoRetirado)

            document.getElementById('saldo').innerHTML = localStorage.getItem("saldo");
            alert("Retiro realizado con exito.")
        }
    }

}


document.addEventListener("DOMContentLoaded",function(event){
    if(localStorage.getItem('saldo')!=null){
        document.getElementById("saldo").innerHTML = localStorage.getItem("saldo");
    }else{
        localStorage.setItem("saldo",0)
    }
});