$(document).ready(function () {
  $("#calcular").click(function () {
    var nome = $("#nome").val().trim();
    var idade = parseFloat($("#idade").val());
    var salarioBruto = parseFloat($("#salarioBruto").val());
    var dependentes = parseInt($("#dependentes").val());

    if (nome === "") {
      alert("Digite seu nome");
      return;
    }
    if (isNaN(idade) || idade < 0) {
      alert(" Idade inválida");
      return;
    }
    if (isNaN(salarioBruto) || salarioBruto < 0) {
      alert(" Salário bruto inválido");
      return;
    }
    if (isNaN(dependentes) || dependentes < 0) {
      alert("Número inválido de dependentes.");
      return;
    }

    var bonus = idade > 50 ? 300 : 200;
    var inss = salarioBruto * 0.08;
    var valeTransporte = salarioBruto * 0.05;
    var valorDependentes = dependentes * 50;
    var salarioLiquido = salarioBruto - inss - valeTransporte + bonus + valorDependentes;

    function formatarEmReais(valor) {
      return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
      });
    }

    alert(
      "Nome: " + nome + "\n" +
      "Número de Dependentes: " + dependentes + "\n" +
      "Salário Bruto: " + formatarEmReais(salarioBruto) + "\n" +
      "INSS (8%): " + formatarEmReais(inss) + "\n" +
      "Vale Transporte (5%): " + formatarEmReais(valeTransporte) + "\n" +
      "Bônus por idade: " + formatarEmReais(bonus) + "\n" +
      "Valor adicional por dependentes: " + formatarEmReais(valorDependentes) + "\n" +
      "Salário Líquido: " + formatarEmReais(salarioLiquido)
    );

    $("#resultadoNome").text(nome);
    $("#resultadoDependentes").text(dependentes);
    $("#resultadoSalarioBruto").text(formatarEmReais(salarioBruto));
    $("#resultadoINSS").text(formatarEmReais(inss));
    $("#resultadoValeTransporte").text(formatarEmReais(valeTransporte));
    $("#resultadoBonus").text(formatarEmReais(bonus));
    $("#resultadoValorDependentes").text(formatarEmReais(valorDependentes));
    $("#resultadoLiquido").text(formatarEmReais(salarioLiquido));
    $("#resultTable").show();
  });
});