# Plataforma para tomar evaluaciones multiple choice

Impulsado por la necesidad de mi esposa de tomar evaluaciones de manera online por la cuarentena obligatoria del año 2020 causada por la pandemia COVID-19 (Coronavirus).

## Como funciona?

Es un sistema client-side que no requiere la instalacion de ninguna libreria en particular para funcionar. Realizada enteramente con JavaScript de manera rustica y rapida en menos de 8 horas.

## Configuracion de evaluacion

En la carpeta /js podras modificar de manera libre estos archivos:

- configuracion.js

```javascript
  timeInMinutes: 10, // para setear tiempo maximo de resolucion de la evaluacion
  numberOfQuestions: 10, // cuantas preguntas debera contestar el alumno
```

- preguntas.js

```javascript
  {
    id: 1, // identificador de la pregunta
    question: "Dos atomos del mismo elemento deben tener:", // desarrollo de la pregunta
    choices: [ // todas las posibles respuestas
      "Igual numero de electrones",
      "Distinto numero atomico",
      "Igual numero de protones",
      "Igual numero masico"
    ]
  },
```

- textos.js

En la carpeta /corregir/js podras modificar:

- respuestas.js

## Como corrijo?

Si ingresas a https://shuffledex.github.io/fisicoquimica3/corregir podras seleccionar todos los archivos generados por tus alumnos y corregirlos de manera automatica. Podras ver un listado de cada alumno junto a la cantidad de respuestas correctas y en cuales ha fallado.

Para que funcione de manera correcta deberas proporcionar un codigo que sera la llave de desencriptacion para los archivos generados por tus alumnos. Si necesitas una, contactame.

## Disclaimer

Si sos programador, no te asustes, pero este proyecto tiene todos los anti patrones que nunca deberias usar en tu vida profesional (si lees el codigo me vas a entender). Se aceptan pull requests de todo tipo para mejorarlo en aspectos sintacticos, como de arquitectura y funcionalidad, siempre y cuando mantengas la logica del lado del cliente, ya que el sistema esta hospedado de manera gratuita en github (static server).

## License

[MIT](https://choosealicense.com/licenses/mit/)
