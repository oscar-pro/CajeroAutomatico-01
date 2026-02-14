
let ConsultarSaldo = document.getElementById("btn-consultar-saldo");
let RetirarDinero = document.getElementById("btn-retirar-dinero");
let DepositarDinero = document.getElementById("btn-depositar-dinero");
let Salir = document.getElementById("BtnSalir");
// Primero lo facil, creare la funcion para salir de la pagina

/*---------------------------------------------------------------------------------------------------------
Capturamos la ruta en PAGINA para saber en cual pagina estamos actualmente y poder ejecutar el script 
----------------------------------------------------------------------------------------------------------*/
const pagina = window.location.pathname;

/*---------------------------------------------------------------
    pagina principal Cajero Automatico
    ----------------------------------------------------------------*/

if (pagina.includes("CajeroAuto.html")) {

    /*---------------------------------------------------------------
     Mostrar en consola la ruta en la pagina actual
     ----------------------------------------------------------------*/
    console.log(`La pagina actual es ${pagina}`);

    /*------------------------------------------------------------------
     Este script es escencial para todos los que tenga boton de salir 
    --------------------------------------------------------------------*/
    Salir.addEventListener('click', () => {
        let confirm = window.confirm('Seguro Que Deseas Salir?');
        if (confirm) {
            window.close();
        };
    });

    // Primero va la validación de la cuenta para ingresar el user y despues ir a los enlaces

    ConsultarSaldo.addEventListener('click', () => {


        window.location = "../CajeroAuto/Validación de cuenta/Validacion.html";

        // window.location = "../CajeroAuto/Validación de cuenta/Enlaces/Saldo.html";
    });

    RetirarDinero.addEventListener('click', () => {
        window.location = "../CajeroAuto/Validación de cuenta/Validacion.html";
        // window.location = "../CajeroAuto/Validación de cuenta/Enlaces/Retiro.html";

    });

    DepositarDinero.addEventListener('click', () => {
        window.location = "../CajeroAuto/Validación de cuenta/Validacion.html";
        // window.location = "../CajeroAuto/Validación de cuenta/Enlaces/Deposito.html";
    })

};

/*---------------------------------------------------------------
    Pagina de saldo
    ----------------------------------------------------------------*/

if (pagina.includes("Saldo.html")) {

    /*---------------------------------------------------------------
     Mostrar en consola la ruta en la pagina actual
     ----------------------------------------------------------------*/
    console.log(`La pagina actual es ${pagina}`);

    Salir.addEventListener('click', () => {
        let confirm = window.confirm('Seguro Que Deseas Salir?');
        if (confirm) {
            window.close();
        };
    });
}


/*---------------------------------------------------------------
    Pagina de validación
    ----------------------------------------------------------------*/

if (pagina.includes("Validacion.html")) {
    console.log(`La pagina actual es ${pagina}`);

    Salir.addEventListener('click', () => {
        let confirm = window.confirm('Seguro Que Deseas Salir?');
        if (confirm) {
            window.close();
        };
    });
}

/*---------------------------------------------------------------
    Pagina de Deposito
----------------------------------------------------------------*/
if (pagina.includes("Deposito.html")) {
    console.log(`La pagina actual es ${pagina}`);

    Salir.addEventListener('click', () => {
        let confirm = window.confirm('Seguro Que Deseas Salir?');
        if (confirm) {
            window.close();
        };
    });
}
/*---------------------------------------------------------------
    Pagina De Retiro
    ----------------------------------------------------------------*/
if (pagina.includes("Retiroh.html")) {
    console.log(`La pagina actual es ${pagina}`);

    Salir.addEventListener('click', () => {
        let confirm = window.confirm('Seguro Que Deseas Salir?');
        if (confirm) {
            window.close();
        };
    });
}

/* --------------------------------------------
    Pagina de validacion de datos 
--------------------------------------------- */

// capturamos botones O y O 

const X = document.getElementById('btnBorrar');
const O = document.getElementById('btnSeguir');



let User = document.getElementById('User');
let PassWord = document.getElementById('Mostrar');




/* --------------------------------------------
 Funcion para eliminar contenido Con X 
 --------------------------------------------*/

X.addEventListener('click', () => {
    if (User.value.length > 0 && PassWord.value.length > 0) {
        User.value = '';
        PassWord.value = '';
        PassWord.disabled = true;
        User.disabled = false;
    } else {
        if (User.value.length > 0) {
            User.value = '';
            PassWord.disabled = true;
            O.disabled = false;

        } else {
            if (PassWord.value.length > 0) {
                PassWord.value = '';
                PassWord.disabled = true;

            }
        }
    }
});

/*-----------------------------------------------------------
 ahora colocamos el valor del boton clickeado en el input
-----------------------------------------------------------*/

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');
let btn0 = document.getElementById('btn0');

/*-----------------------------------------------------------
 guardamos todos los botones en un array  
 -----------------------------------------------------------*/
let botones = [
    btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9,
];

//deshabilitamos los botones hasta que pasemos a la siguiente casilla 
botones.forEach(boton => {
    boton.disabled = true;
});


//hacemos una funcion para cada elemento(boton) del array 

botones.forEach(boton => {
    boton.addEventListener('click', (e) => {
        if (PassWord.value.length === 4) {
            return;
        } else {
            PassWord.value += e.target.textContent;
        }
    });
});


//Primero deshabilitamos un input, debe completarse el user primero
PassWord.disabled = true;
PassWord.style.BackgroundColor = '#ccc';


/*---------------------------------------------------------------------------
    despues de comprobar que las casillas no estén vacias seguimos al pasword
---------------------------------------------------------------------------*/

/* ------------------------------------------------------------------------
    v = 0 , v = 1 User pased, v = 2 para validar password, codigo aún no está listo.
-------------------------------------------------------------------------- */

let VCount = 0

O.addEventListener('click', () => {
    // verificamos si las casillas son diferentes a casillas vacias, seguimos
    if (User.value != '') {
        PassWord.disabled = false;
        User.disabled = true;
        VCount++;
        //imprimimos por consola para comprobar que el valor cambie
        console.log(VCount);
        if(VCount == 1){
            O.disabled = true;
            if(PassWord.length == 3){
                O.disabled = false;
                O.addEventListener('click',()=>{
                    VCount++;
                });
            }
        }else{
            
        }
        botones.forEach(boton => {
            boton.disabled = false;
        });
    } else {
        alert('No se permiten casillas vacias');
        return;
    };
});

