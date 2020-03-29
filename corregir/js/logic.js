(function() {
  function handleFileSelect(evt) {
    var files = evt.target.files;

    var fingers = [];
    var sameFingers = [];

    for (var i = 0, f; (f = files[i]); i++) {
      if (!f.type.match("text/plain")) {
        continue;
      }

      var reader = new FileReader();

      reader.onload = (function(theFile) {
        return function(e) {
          var div = document.createElement("div");
          div.setAttribute("class", "alumno");
          var decrypted = CryptoJS.AES.decrypt(e.target.result, "tdqrqmf2Et");
          var data = decrypted.toString(CryptoJS.enc.Utf8).split("||");
          if (data.length !== 6) {
            div.innerHTML = [
              "<p>El archivo <b>",
              theFile.name,
              "</b> es erroneo y no se puede leer.</p>"
            ].join("");
          } else {
            var nombreApellido = data[0];
            var curso = data[1];
            var colegio = data[2];
            var fingerprint = data[3];
            var fechaFin = data[4];
            var respuestas = data[5];

            var alumnoAux = fingers.find(f => f.finger === fingerprint);
            if (alumnoAux) {
              sameFingers.push({
                alumno1: alumnoAux.alumno,
                alumno2: nombreApellido
              });
            } else {
              fingers.push({
                alumno: nombreApellido,
                finger: fingerprint
              });
            }

            var correctas = 0;
            var incorrectas = "";
            var alumnoRespuestas = JSON.parse(respuestas);
            for (var i = 0; i < alumnoRespuestas.length; i++) {
              var respuesta = alumnoRespuestas[i].a;
              var a = answers.find(a => a.id === alumnoRespuestas[i].id);
              var correcta = a.ans;
              if (respuesta === correcta) {
                correctas = correctas + 1;
              } else {
                incorrectas = incorrectas + alumnoRespuestas[i].q + "<br>";
              }
            }

            div.innerHTML = [
              "<p>",
              "<h4>" + nombreApellido + "</h4>",
              "<h5>Curso: " + curso + ", " + colegio + "</h5>",
              "</p>",
              "<b>CORRECTAS: ",
              correctas,
              "</b>",
              "<p>INCORRECTAS</p>",
              incorrectas
            ].join("");
          }

          document.getElementById("list").insertBefore(div, null);

          if (sameFingers.length > 0) {
            var div2 = document.createElement("div");
            div2.setAttribute("class", "copiones");
            div2.innerHTML = [
              "<h4>Posibles copiones (evaluacion resuelta desde la misma computadora)</h4>",
              JSON.stringify(sameFingers)
            ].join("");
            document.getElementById("copiones").insertBefore(div2, null);
          }
        };
      })(f);

      reader.readAsText(f);
    }
  }

  document
    .getElementById("files")
    .addEventListener("change", handleFileSelect, false);
})();
