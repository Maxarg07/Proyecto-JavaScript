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

        alert("Deposito Realizado con exito")
    }
}


//funcion de retirar
function retirar(){

}


document.addEventListener("DOMContentLoaded",function(event){
    if(localStorage.getItem('saldo')!=null){
        document.getElementById("saldo").innerHTML = localStorage.getItem("saldo");
    }else{
        localStorage.setItem("saldo",0)
    }
});