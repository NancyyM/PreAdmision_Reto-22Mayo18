var name = prompt('¡Comencemos por ingresar tu nombre!'); //al principio pide al usuario ingresar su nombre y lo guarda en la variable name
var game = confirm('¿Quieres jugar una trivia?'); //Pide al usuario que si quiere jugar de "aceptar", si no seleccione "cancelar" y guarda su opcion como un booleano para usarlo despues
  if(game === true){ // si la var "game" (booleano) == true(aceptar) continuamos con el juego
    var q1 = prompt('¿30 es mayor a la raiz cuadrara de 600? \n 1 = Si \n 2 = No');  // pregunta 1: la respuesta la guarda en la var q1 para compararla despues en un condicional
      if(q1==1){ //si q1==1 la respuesta es correcta
        alert('¡FELICIDADES, Tu respuesta es correcta!'); //aparece una alerta indicando que la respuesta fue correcta. alert solo da la opcion de aceptar
      } else { //si no
        alert('Respuesta incorrecta :( '); // manda una alerta indicando que la respuesta fue incorrecta
      }
    var q2 = prompt('¿200/4 es igual que 10*5? \n 1 = Si \n 2 = No');
      if(q2==1){
        alert('¡FELICIDADES, Tu respuesta es correcta!');
      } else{
        alert('Respuesta incorrecta :( ');
      }
    var q3 = prompt('100*5 es menor que 20 al cuadrado? \n 1 = Si \n 2 = No');
      if(q3==2){
        alert('¡FELICIDADES, Tu respuesta es correcta!');
      }else{
        alert('Respuesta incorrecta :( ');
      }

      document.write('<section><h4>¡Hola! '+name+', Tus puntajes fueron: </h4> <br/>'); //concateno el nombre del usuario que guarde con la var name, + un texto. <br/> es para salto de linea en html
        if(q1==1){ // si q1 == 1 la respuesta fue correcta
          document.write('<div>Pregunta 1 ---> <p2>Correcta</p2></div><br/>'); //imprimo un mensaje de que la respuesta fue correcta
        } else { //si no (si la respuesta fue distinta de 1)
          document.write('<div>Pregunta 1 ---> <p2>Incorrecta</p2></div> <div class="chica"> Respuesta Correcta = Opcion no. 1</div><br/>'); //imprimo un mensaje de que la respuesta fue incorrecta
        }
        if(q2==1){ //si la pregunta 2 == 1 entra...
          document.write('<div>Pregunta 2 ---> <p2>Correcta</p2></div><br/>'); //... y me imprime en pantalla que la respuesta fue correcta
        } else { //si no (si la respuesta fue diferente de 1) entonces lo interpreta como incorrecta...
          document.write('<div>Pregunta 2 ---> <p2>Incorrecta</p2> </div> <div class="chica">Respuesta Correcta = Opcion no. 1</div><br/>'); //... y me imprime en pantalla que fue incorrecta
        }
        if(q3==2){
          document.write('<div>Pregunta 3 ---> <p2>Correcta</p2></div><br/>');
        } else {
          document.write('<div>Pregunta 3 ---> <p2>Incorrecta</p2> </div><div class="chica">Respuesta Correcta = Opcion no. 2</div><br/></section>');
        }

  } else{ //si no (del primer if) quiere jugar da cancelar (que se interpreta como un booleano false)
alert('¡Vuelve pronto!'); //envia una alerta de adios
  }
