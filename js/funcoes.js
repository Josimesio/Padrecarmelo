

function CalculaMedia(){
let n1,n2,n3,n4,media;
   n1= txtnota.nota1.value;
   n2= txtnota.nota2.value;
   n3= txtnota.nota3.value;
   n4= txtnota.nota4.value;
   n1= parseFloat(n1);
   n2= parseFloat(n2);
   n3= parseFloat(n3);
   n4= parseFloat(n4);
   media=(n1 + n2 + n3 + n4)/4;
   media = Math.round(media);   
  txtnota.txtMedia.value = media;
   
}


function calcular()

{
let totalvendas,salario, comissao, receber ;
totalvendas = frmComissão.txttotalvendas.value;
salario = frmComissão.txtsalario.value;
totalvendas = parseFloat(totalvendas);
salario = parseFloat(salario);
if(totalvendas < 1000)

{
comissao = (totalvendas * 5)/ 100;

}
else

{
comissao = (totalvendas * 20)/ 100;

}
receber = salario + comissao;
frmComissão.txtreceber.value = receber;
frmComissão.txtcomissao.value = comissao;
}

function calcularQuadrado(){
            let numeros = document.getElementById("txtNumerosQuadrado").value;
            numeros = numeros.split(",");
            for(i=0;i<numeros.length;i++){
                quadrado = parseInt(numeros[i])*parseInt(numeros[i]);
                document.write("O quadrado de "+numeros[i]+ " é "+quadrado+ "<br>");
                alert("O quadrado de "+numeros[i]+ " é "  + quadrado);
            }
    
}


function verificarMaior(){
            numeros=document.getElementById("txtNumerosMaior").value;
            numeros=numeros.split(",");
            let maior = parseInt(numeros[0]);
            for(i=1;i<numeros.length;i++){
                if(parseInt(numeros[i]) > maior){
                    maior = parseInt(numeros[i]);
                }
            }
            alert("O maior número é "+maior);
            
}

function verificarIdades(){
                var idades = document.getElementById("txtIdades").value;
                idades = idades.split(",");
                var maior = 0;
                var menor = 0;
                for(i=0;i<idades.length;i++){
                    if(parseInt(idades[i]) >=18){
                        maior++;
                    }else{
                        menor++;
                    }
                }
                alert("Maiores de Idade: "+maior+" - Menores de Idade: "+menor);
            }

            function verificarDados(){
                var altura = document.getElementById("txtAltura").value;
                var sexo = document.getElementById("txtSexo").value;
                
                altura = altura.split(",");
                sexo = sexo.split(",");
                var masculino = 0;
                var feminino = 0;
                var maiorAltura = parseFloat(altura[0]);
                var sexoMaiorAltura = sexo[0];
                for(i=0;i<sexo.length;i++){
                    if(sexo[i] == "M"){
                        masculino++;
                    }else if(sexo[i] == "F"){
                        feminino++;
                    }
                    
                    if(parseFloat(altura[i]) > maiorAltura){
                        maiorAltura = parseFloat(altura[i]);
                        sexoMaiorAltura = sexo[i];
                    }
                }
                
                alert("Masculino: "+masculino+" - Feminino: "+feminino);
                alert("A maior altura é "+maiorAltura+" e pertence ao sexo "+sexoMaiorAltura);
            }

