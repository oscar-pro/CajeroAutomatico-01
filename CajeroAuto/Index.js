let ConsultarSaldo = document.getElementById("btn-consultar-saldo");
let RetirarDinero = document.getElementById("btn-retirar-dinero");
let DepositarDinero = document.getElementById("btn-depositar-dinero");
let Salir = document.getElementById("BtnSalir");
// Primero lo facil, creare la funcion para salir de la pagina

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const pagina = window.location.pathname;
const X = document.getElementById('btnBorrar');
const O = document.getElementById('btnSeguir');

/*---------------------------------------------------------------
    pagina principal Cajero Automatico
    ----------------------------------------------------------------*/

if (pagina.includes("CajeroAuto.html")) {

    /*---------------------------------------------------------------     ----------------------------------------------------------------*/
    console.log(`La pagina actual es ${pagina}`);


    /*------------------------------------------------------------------
     Este script es escencial para todos los que tenga boton de salir 
    --------------------------------------------------------------------*/
    Salir.addEventListener('click', () => {
        let confirmar = window.confirm('Seguro Que Deseas Salir?');
        if (confirmar) {
            window.close();
        };
    });

    // Primero va la validación de la cuenta para ingresar el user y despues ir a los enlaces

    ConsultarSaldo.addEventListener('click', () => {
        //Guardamos ruta 
        localStorage.setItem('ruta', '../Validación de cuenta/Enlaces/Saldo.html');
        window.location = "../CajeroAuto/Validación de cuenta/Validacion.html";

        // window.location = "../CajeroAuto/Validación de cuenta/Enlaces/Saldo.html";
    });

    RetirarDinero.addEventListener('click', () => {

        //Guardamos ruta 
        localStorage.setItem('ruta', '../Validación de cuenta/Enlaces/Retiro.html');
        window.location = "../CajeroAuto/Validación de cuenta/Validacion.html";
        // window.location = "../CajeroAuto/Validación de cuenta/Enlaces/Retiro.html";

    });

    DepositarDinero.addEventListener('click', () => {

        //Guardamos ruta 
        localStorage.setItem('ruta', '../Validación de cuenta/Enlaces/Deposito.html');
        window.location = "../CajeroAuto/Validación de cuenta/Validacion.html";
        // window.location = "../CajeroAuto/Validación de cuenta/Enlaces/Deposito.html";
    })

};

/*--------------------------------------------------------
    APARTADO DE ENLACES 
--------------------------------------------------------*/

/*---------------------------------------------------------------
    Pagina de saldo
    ----------------------------------------------------------------*/

if (pagina.includes("Saldo.html")) {

    // capturamos saldo
    let VerSaldo = document.getElementById('Saldo');
    //capturamos cuenta
    let No$Cuenta = document.getElementById('NoCuenta');
    // valor inicial
    VerSaldo.innerHTML = `0.00`;

    // obtenemos usuario
    const usuario = localStorage.getItem('usuario');

    // llamamos función
    VerSaldoANDCuenta(usuario);

    async function VerSaldoANDCuenta(usuario) {

        try {

            const resp = await fetch(
                `http://localhost:3000/saldo?nombre=${usuario}`
            );

            let data = await resp.json();

            console.log(data);

            if (data.ok) {

                // mostramos saldo
                VerSaldo.innerHTML = `${data.data.saldo}`;
                //Mostramos No. Cuenta 
                No$Cuenta.innerHTML = `${data.data.numeroCuenta}`;

            } else {

                alert("No se encontró el usuario");

            }

        } catch (error) {

            console.log("Error:", error);
            alert("Error de conexion con el servidor");

        }

    }
    console.log(`La pagina actual es ${pagina}`);

    Salir.addEventListener('click', () => {
        let confirm = window.confirm('Seguro Que Deseas Salir?');
        if (confirm) {
            window.location = "../../CajeroAuto.html";
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
            window.location = "../../CajeroAuto.html";
        };
    });
}
/*---------------------------------------------------------------
    Pagina De Retiro
    ----------------------------------------------------------------*/
if (pagina.includes("Retiro.html")) {

    console.log(`La pagina actual es ${pagina}`);
    // llamamos usuario de localstorage
    let usuario = localStorage.getItem("usuario")
    // capturamos el valor ingresado por el usuario
    let Valor = document.getElementById('NumeroRetiro');
    /*Guardamos los botones de la funcion en un array para luego utilizarlos */
    let b1 = document.getElementById('btn1');
    let b2 = document.getElementById('btn2');
    let b3 = document.getElementById('btn3');
    let b4 = document.getElementById('btn4');
    let b5 = document.getElementById('btn5');
    let b6 = document.getElementById('btn6');
    let b7 = document.getElementById('btn7');
    let b8 = document.getElementById('btn8');
    let b9 = document.getElementById('btn9');
    let b0 = document.getElementById('btn0');

    let Botones = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b0];

    Botones.forEach(botones => {
        botones.addEventListener('click', () => {
            Valor.value += botones.textContent;
        });

    });

    //eliminamos todo con X 
    X.addEventListener('click', () => {
        let v = document.getElementById('NumeroRetiro');
        v.value = '';
    })

    O.addEventListener('click', () => Retirar(usuario));

    async function Retirar(usuario) {

        try {

            let valor = parseInt(Valor.value);

            const resp = await fetch(
                `http://localhost:3000/retirar?nombre=${usuario}&valor=${valor}`
            );

            let data = await resp.json();

            if (data.ok) {

                alert(`Retiraste ${valor} exitosamente
Saldo disponible: ${data.nuevoSaldo}`);

                Valor.value = '';

            } else {

                alert("Fondos insuficientes o usuario no existe");

            }

        } catch (error) {

            console.log("Error:", error);
            alert("Error de conexion con el servidor");

        }

}

Salir.addEventListener('click', () => {
    let confirm = window.confirm('Seguro Que Deseas Salir?');
    if (confirm) {
        window.location = "../../CajeroAuto.html";
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
            window.location = "../CajeroAuto.html";
        };
    });


    /* --------------------------------------------
        Pagina de validacion de datos del usuario
    --------------------------------------------- */


    const X = document.getElementById('btnBorrar');
    const O = document.getElementById('btnSeguir');



    let User = document.getElementById('User');


    /* --------------------------------------------
     Funcion para eliminar contenido Con X 
     --------------------------------------------*/
    X.addEventListener('click', () => {
        if (User.value) {
            User.value = '';
        }
    });

    /* Function para validar los datos y enviarlos */
    O.addEventListener('click', () => {

        if (!User.value) {

            alert('⚠ Las casillas no pueden estar vacias');
            return;

        }

        let dataUser = User.value.toUpperCase().trim();

        ValidarUsuario(dataUser);

    });
};

/*-----------------------------------------------------------------
función para la peticion con fetch a json y validar los datos
-----------------------------------------------------------------*/
async function ValidarUsuario(nombre) {

    try {

        const resp = await fetch(
            `http://localhost:3000/loginUsuario?nombre=${nombre}`,
            {
                method: "GET"
            }
        );

        let data = await resp.json();

        console.log(data);

        if (data.ok) {

            console.log("Usuario valido");
            localStorage.setItem("usuario", nombre);
            window.location.href =
                "../Validación de cuenta/PasswordVerifiqued.html";

        } else {

            alert("Usuario no existe");

        }

    } catch (error) {

        console.log("Error:", error);
        alert("Error de conexion con el servidor");

    }

}
/* --------------------------------------------
    pagina para la validation de la contraseña 
--------------------------------------------- */
if (pagina.includes("PasswordVerifiqued.html")) {
    console.log(`La pagina actual es ${pagina}`);
    let password = document.getElementById('Mostrar');

    Salir.addEventListener('click', () => {
        let confirm = window.confirm('Seguro Que Deseas Salir?');
        if (confirm) {
            window.location = "../CajeroAuto.html";
        };
    });

    /* --------------------------------------------
 Funcion para eliminar contenido Con X 
 --------------------------------------------*/
    X.addEventListener('click', () => {
        if (password.value) {
            password.value = '';
        }
    });


    /*Guardamos los botones de la funcion en un array para luego utilizarlos */
    let b1 = document.getElementById('btn1');
    let b2 = document.getElementById('btn2');
    let b3 = document.getElementById('btn3');
    let b4 = document.getElementById('btn4');
    let b5 = document.getElementById('btn5');
    let b6 = document.getElementById('btn6');
    let b7 = document.getElementById('btn7');
    let b8 = document.getElementById('btn8');
    let b9 = document.getElementById('btn9');
    let b0 = document.getElementById('btn0');

    let Botones = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b0];

    /* ahora hacemos una funcion que los valores de los botones me los pase al input */
    Botones.forEach(botones => {

        botones.addEventListener('click', () => {
            // Verificamos si el valor es igual o mayor que 4 
            if (password.value.length === 4) {
                return;
            } else {
                //enviamos para que los datos se coloquen por medio de una function
                ColocarDatos(botones.textContent);
            }

        });

    });
    // funcion para que los datos de los btotones aparezcan dentro del input 

    function ColocarDatos(valor) {
        password.value += valor;
    }

    //ahora le añadimos interactividad al O

    O.addEventListener('click', () => {
        let value = password.value;
        CompararContrasenia(value);
    });

    async function CompararContrasenia(pin) {

        let nombre = localStorage.getItem("usuario");
        try {

            const resp = await fetch(
                `http://localhost:3000/login?nombre=${nombre}&pin=${pin}`
            );

            const data = await resp.json();

            console.log(data);

            if (data.ok) {
                const Ruta = localStorage.getItem("ruta");
                console.log("PIN correcto");
                window.location.href = Ruta;

            } else {

                alert("PIN incorrecto");

            }

        } catch (error) {

            console.log("Error:", error);

        }

    }
};
