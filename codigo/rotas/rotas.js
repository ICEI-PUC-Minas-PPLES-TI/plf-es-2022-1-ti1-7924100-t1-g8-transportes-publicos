var dados = [
  {
      "tipo": "Onibus",
      "linhas": [
          {"linha": 50, "chegada": "Estação Pampulha", "Destino": "Avenida Paraná"},
          {"linha": 51, "chegada": "Estação Pampulha", "Destino": "Hospitais/Centro"},
          {"linha": 52, "chegada": "Estação Pampulha", "Destino": "Avenida Antônio Carlos"},
          {"linha": 61, "chegada": "Estação Venda Nova", "Destino": "Centro"},
          {"linha": 62, "chegada": "Savassi ", "Destino": "Estação Venda Nova"},
          {"linha": 63, "chegada": "Estação Venda Nova", "Destino": "Centro Via Estação Vilarinho"},
          {"linha": 64, "chegada": "Estação Venda Nova", "Destino": "Santo Agostinho Via Estação Vilarinho"},
          {"linha": 65, "chegada": "Estação Vilarinho", "Destino": "Centro Direta"},
          {"linha": 66, "chegada": "Estação Vilarinho", "Destino": " Centro/Hospitais Paradora"},
      ]
  },
  {
      "tipo": "Metro",
      "linhas": [
          { "chegada": "Estação Waldomiro Lobo", "Destino": "Todas as estações"},
          { "chegada": "Estação Central", "Destino": "Todas as estaçôes"},
          { "chegada": "Estação Vilarinho", "Destino": "Todas as estaçôes"},
          { "chegada": "Estação Minas shopping", "Destino": "Todas as estaçôes"},
          { "chegada": "Estação Horto", "Destino": "Todas as estações"},
          { "chegada": "Estação Gameleira", "Destino": "Todas as estaçôes"},
          { "chegada": "Estação Eldorado", "Destino": "Todas as estaçôes"},
          { "chegada": "Estação Santa inês", "Destino": "Todas as estaçôes"},
      ]
  },
  {
      "tipo": "Taxi",
      "linhas": [
          
          
      ]
  }
]

function tiposDeTransportes(value) {
  switch (value) {
      case "Ônibus":
          let indexO = 0
          let tabelaO = document.getElementById("linhasMostrar")

          tabelaO.innerHTML = ""

          let linhasO = dados[indexO].linhas
          for (let i = 0; i < linhasO.length; i++) {
              tabelaO.innerHTML += `
              <p>
                  Linha: ${linhasO[i].linha}
                  Chegada:  ${linhasO[i].chegada}
                  Destino: ${linhasO[i].Destino}
              </p>
              `
          }
          break
      case "Metrô":
          let indexM = 1
          let tabelaM = document.getElementById("linhasMostrar")

          tabelaM.innerHTML = ""

          let linhasM = dados[indexM].linhas
          for (let i = 0; i < linhasM.length; i++) {
              tabelaM.innerHTML += `
              <p>
                  Chegada:  ${linhasM[i].chegada}
                  Destino: ${linhasM[i].Destino}
              </p>
              `
          }
          break
      case "Táxi":
          let indexT = 2
          let tabelaT = document.getElementById("linhasMostrar")

          tabelaT.innerHTML = "<a style='color:white;' href='https://www.uber.com/'>Solicitar uber:</a>"

          break
  }
}

function endereço() {
  var cep = document.getElementById("cep");
  var url = "http://viacep.com.br/ws/" + cep.value + "/json/";

  var logradouro = document.getElementById("logradouro");
  var bairro = document.getElementById("bairro");
  var localidade = document.getElementById("localidade");
  var uf = document.getElementById("uf");




  fetch(url, { method: 'GET' })
      .then(Response => {
          Response.json()
              .then(data => {
                  logradouro.value = data.logradouro;
                  bairro.value = data.bairro;
                  localidade.value = data.localidade;
                  uf.value = data.uf;
              })
      })

}