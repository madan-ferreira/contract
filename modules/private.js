import { selectSpouse } from "../gui.js";
import {
     getContractNumber,
     carrier,
     getBirth,
     getState,
     getDay,
     getMonth,
     born,
     getYear,
     businesStatus,
     getFranchisee,
     getRg,
     nationality,
     getCpf,
     getEmail,
     getPrice,
     getCity,
     getStreet,
     getHouseN,
     getComplement,
     getNeighborhood,
     getCep,
     genderStatus,
     registered,
     getAg,
     getCc,
     getBank,
     getSpouse,
     getSpouseCpf,
     getSpouseRg,
     spouseCarrier,
     spouseNation,
     spouseRegistered,
     getUnitCity,
     getUnitState,
     franchiseeFileName,
     businessCityFileName
} from "./get.values.js";
const fontSize = 10;
const lineSpacing = 10;
var clientP, foot;
function privateIndividual() {
     let titleY = 30;
     let startX = 30;
     let startY = titleY + 45;
     var doc = new jsPDF("p", "pt", "a4");
     doc.setFont("times");
     var pageWidth = doc.internal.pageSize.width - 50;
     doc.setFontStyle("bold")
          .setFontSize(12)
          .text(`Contrato de franquia nº ${getContractNumber}`, pageWidth / 2 + 30, titleY, { align: "center" });

     doc.setFontSize(fontSize)
          .setFontStyle("normal")
          .text(`${getUnitCity}/${getUnitState}, Brasil\n${getDay} de ${getMonth} de ${getYear}`, startX, titleY + 15);

     doc.setFontSize(fontSize);

     const endX = pageWidth;

     // ####################################################################### First paragraph  #######################################################################
     let aistPMap = doc.splitTextToSize(
          "         **A Sociedade de Responsabilidade Limitada AIST BRAZIL SOFTWARE LTDA**, pessoa jurídica de direito privado, sociedade limitada, inscrita no CNPJ sob o nº 41.450.114/0001-10, com sede na Rua Pereira Estéfano, 114, Conjunto 1508, bairro Vila da Saúde, e-mail: departamento.legal@taximaxim.com, São Paulo/SP, CEP 04.144-070, neste ato doravante denominado o Franqueador, por um lado, e",
          endX
     );

     var startXCached = startX;
     let boldOpen = false;
     aistPMap.map((text, i) => {
          if (text) {
               const arrayOfNormalAndBoldText = text.split("**");
               const boldStr = "bold";
               const normalOr = "normal";
               arrayOfNormalAndBoldText.map((textItems, j) => {
                    doc.setFontType(boldOpen ? normalOr : boldStr);
                    if (j % 2 === 0) {
                         doc.setFontType(boldOpen ? boldStr : normalOr);
                    }
                    doc.text(textItems, startX, startY);
                    startX = startX + doc.getStringUnitWidth(textItems) * fontSize;
               });
               boldOpen = isBoldOpen(arrayOfNormalAndBoldText.length, boldOpen);
               startX = startXCached;
               startY += lineSpacing;
          }
     });

     // ####################################################################### End first paragraph  #######################################################################

     // #######################################################################  Second paragraph  #######################################################################
     switch (selectSpouse.value) {
          case "1":
               clientP = `         **${getFranchisee}**, ${nationality}, ${businesStatus}, ${registered} no CPF/MF sob o nº ${getCpf}, ${carrier} do RG nº ${getRg}, ${born} em ${getBirth}, com endereço na ${getStreet}, nº ${getHouseN}, ${getNeighborhood}, ${getCity}/${getState}, CEP ${getCep}, E-mail: ${getEmail}, ${genderStatus} sob o regime de comunhão universal de bens com ${getSpouse}, ${spouseNation}, ${spouseCarrier} do RG nº ${getSpouseRg}, ${spouseRegistered} no CPF sob nº ${getSpouseCpf}, doravante denominado Franqueado, por outro lado, conjuntamente denominados "as Partes", assinaram o presente (doravante denominado o presente Contrato ou Contrato) nos seguintes termos:`;
               break;
          case "5":
               clientP = `         **${getFranchisee}**, ${nationality}, ${businesStatus}, ${registered} no CPF/MF sob o nº ${getCpf}, ${carrier} do RG nº ${getRg}, ${born} em ${getBirth}, com endereço na ${getStreet}, nº ${getHouseN}, ${getNeighborhood}, ${getCity}/${getState}, CEP ${getCep}, E-mail: ${getEmail}, ${genderStatus} sob o regime de comunhão universal de bens com ${getSpouse}, ${spouseNation}, ${spouseCarrier} do RG nº ${getSpouseRg}, ${spouseRegistered} no CPF sob nº ${getSpouseCpf}, doravante denominado Franqueado, por outro lado, conjuntamente denominados "as Partes", assinaram o presente (doravante denominado o presente Contrato ou Contrato) nos seguintes termos:`;
               break;
          default:
               clientP = `         **${getFranchisee}** ,  ${nationality}, ${genderStatus}, ${businesStatus}, ${registered} no CPF/MF sob o nº ${getCpf}, ${carrier} do RG nº ${getRg}, ${born} em ${getBirth}, com endereço na ${getStreet}, nº ${getHouseN}, ${getNeighborhood}, ${getCity}/${getState}, CEP ${getCep}, E-mail: ${getEmail}, doravante denominada o Franqueado, por outro lado, conjuntamente denominados "as Partes", assinaram o presente (doravante denominado o presente Contrato ou Contrato) nos seguintes termos:`;
               break;
     }

     const clientPMap = doc.splitTextToSize(clientP, endX);

     startXCached = startX;
     boldOpen = false;
     clientPMap.map((text, i) => {
          if (text) {
               const arrayOfNormalAndBoldText = text.split("**");
               const boldStr = "bold";
               const normalOr = "normal";
               arrayOfNormalAndBoldText.map((textItems, j) => {
                    doc.setFontType(boldOpen ? normalOr : boldStr);
                    if (j % 2 === 0) {
                         doc.setFontType(boldOpen ? boldStr : normalOr);
                    }
                    doc.text(textItems, startX, startY + 10);
                    startX = startX + doc.getStringUnitWidth(textItems) * fontSize;
               });
               boldOpen = isBoldOpen(arrayOfNormalAndBoldText.length, boldOpen);
               startX = startXCached;
               startY += lineSpacing;
          }
     });
     // ####################################################################### End of second paragraph  #######################################################################################################

     let clauseOff = startY + 20;
     // ####################################################################### First clause  #######################################################################################################
     doc.setFontStyle("bold")
          .setFontSize(fontSize)
          .text("1. Objeto e prazo do contrato", pageWidth / 2 + 30, clauseOff, { align: "center" });

     clauseOff = startY + 35;
     doc.setFontStyle("normal").text(
          `1.1. De acordo com os termos e condições deste Contrato, o Franqueador concede ao Franqueado o direito de utilizar a propriedade
intelectual listada no Anexo 1 do Contrato sob uma franquia simples (não exclusiva), na forma estabelecida neste Contrato e em seus
anexos, e o Franqueado se compromete a pagar ao Franqueador uma taxa de franquia na forma, termos e valor estabelecidos neste
Contrato e em seus anexos.\n
1.2. O Contrato é celebrado por um prazo de 3 anos, a data de sua celebração é a data da assinatura do contrato (data do Contrato);
o Contrato será renovado nos mesmos termos e condições para os próximos 3 anos se acordado pelas Partes e no caso da ausência de
infrações por parte do Licenciado. O número de prorrogações do Contrato é ilimitado.`,
          startX,
          clauseOff
     );
     // ####################################################################### End of First clause  #######################################################################################################

     // ####################################################################### Second clause  #######################################################################################################
     clauseOff = clauseOff + 100;
     doc.setFontStyle("bold")
          .setFontSize(fontSize)
          .text("2. Procedimento e prazos de pagamento", pageWidth / 2 + 30, clauseOff, { align: "center" });

     clauseOff = clauseOff + 20;
     doc.setFontStyle("normal").text(
          `2.1 A título de processo de embarque, para conectar ao sistema do Franqueador, o Franqueado realizará o pagamento de uma quantia
não reembolsável de R$ ${getPrice}, no prazo máximo de até 10\ndias após a assinatura do contrato.
2.2 O Franqueado compromete-se a pagar ao Franqueador uma taxa de licença (royalty), de acordo com o Anexo No. 1 do presente
Contrato.
2.3 O pagamento pela prestação de Funcionalidade adicional será acordado pelas Partes no sistema do Franqueador e é refletido no
final do período de relatório nas estatísticas sobre o uso do Banco de dados.
2.4 As Partes aceitam incondicionalmente que as informações para o cálculo da taxa de licença (royalty) sejam os dados estatísticos
sobre o uso do Banco de Dados para o mês do relatório, disponíveis no pacote de software AIST.
2.5. O Franqueador deverá enviar ao Franqueado mensalmente uma folha de cálculo com o valor da taxa de licença (royalty) para o
período correspondente, dentro de 10 (dez) dias corridos a partir do final do período.
2.6 A Ata de cálculo do valor da taxa de licença (royalty) será considerado como aceito e assinado pelo Franqueado sem objeção, se
dentro de 10 (dez) dias corridos a partir da data de envio da ata o Franqueador não tiver recebido nenhumas objeções escritas pelo
Franqueado.
2.7 O período de relatório para os fins deste contrato será um mês civil.
2.8 O Franqueado deverá pagar a taxa de licença (royalty) ao Franqueador dentro de 30 (trinta) dias corridos a partir da data de
assinatura pelas Partes da Ata de cálculo da taxa de licença.
2.9 Alterações ao presente Contrato e/ou aos Anexos, incluindo mudanças (aumento ou diminuição) no valor da remuneração da
licença deverão ser feitas pelo Franqueador, notificando o Franqueado por e-mail, no máximo 15 dias corridos antes da entrada em
vigor das mudanças especificadas. As respectivas alterações entrarão em vigor para as Partes na data em que as Partes assinarem o
respectivo acordo.
2.10 Em caso de desacordo com os termos e condições alterados, o Franqueado deve notificar o Franqueador por escrito, de qualquer
forma que identifique de forma única o Franqueado. Essa notificação deve ser feita de tal forma que seja recebida pelo Franqueador
antes que as mudanças entrem em vigor. Em tal caso, o Contrato de Franquia será considerado terminado no dia seguinte à data de
recebimento de tal notificação pelo Franqueador. Se o Franqueado não cumprir com o procedimento, métodos e prazos de notificação
ao Franqueador estabelecidos nesta cláusula, tal notificação será considerada imprópria, e o Contrato de Franquia deverá ser executado
pelas Partes nos termos corrigidos.
2.11 Qualquer mudança se aplica a todas as pessoas que utilizam o Pacote de Direitos Intelectuais, incluindo as pessoas que começaram
a utilizar o Pacote de Direitos Intelectuais desde sua entrada em vigor nos termos do Contrato.`,
          startX,
          clauseOff
     );
     // ####################################################################### End of second clause  #######################################################################################################

     // ####################################################################### Third clause  #######################################################################################################
     clauseOff = clauseOff + 340;
     doc.setFontStyle("bold")
          .setFontSize(fontSize)
          .text("3. Direitos e obrigações", pageWidth / 2 + 30, clauseOff, { align: "center" });

     clauseOff = clauseOff + 20;
     doc.setFontStyle("normal").text(
          `3.1. O Franqueador tem direito a:
3.1.1. Restringir o direito do Franqueado de usar o Pacote de Direitos Intelectuais caso o Franqueador tenha recebido documentos
indicando o uso ilegal ou indevido das informações contidas no Pacote de Direitos Intelectuais. A restrição do direito do Licenciado
de usar o Pacote de Direitos Intelectuais é removida após o Licenciado eliminar as violações identificadas.
3.1.2. Revogar o direito do Franqueado de utilizar o Pacote de Direitos Intelectuais se o Franqueado não utilizar o direito concedido
(nenhum recurso ativo do Franqueado, incluindo seus funcionários e/ou contrapartes) por 1 (um) mês ou mais, enviando um aviso de
rescisão indicando a data da rescisão. Neste caso, o contrato será rescindido no dia seguinte, a partir da data de tal notificação. O direito
do Franqueado de usar o Pacote de Direitos Intelectuais pode ser restaurado pela decisão do Franqueador (retirada de aviso) após
receber uma carta do Franqueado solicitando a renovação do direito de uso do Franqueado.
3.1.3. Rescindir este Contrato unilateralmente fora dos tribunais, notificando o Franqueado até 30 (trinta) dias corridos antes da data
de rescisão, a menos que as Partes tenham acordado em um prazo diferente ou um prazo mais longo seja especificado na notificação
de rescisão. Este Contrato e contratos adicionais ao mesmo podem prever outros casos de rescisão antecipada unilateral do Contrato;`,
          startX,
          clauseOff
     );

     doc.addPage();
     doc.text(
          `3.1.4. Em qualquer caso, o Franqueador tem o direito de rescindir o Contrato unilateralmente de forma extrajudicial, sem pagamento
de qualquer compensação e sem seguir o procedimento de reclamação, notificando o Franqueado até 7 (sete) dias corridos antes da
data de rescisão, nos casos de
- uma ou mais violações do Contrato pelo Franqueado, incluindo, mas não se limitando a, violação do procedimento e dos prazos de
pagamento da Taxa de Licença e/ou do objetivo do Contrato
- uma ou mais vezes que o Franqueado tenha causado qualquer perda ou dano ao Franqueador;
- uso pelo Franqueado das informações contidas no Pacote de Propriedade Intelectual para fins ilegais;
- O Franqueado exercer qualquer ação em relação à Propriedade Intelectual sem o consentimento do Franqueador ou sem cumprir com
os termos deste Contrato;
- a falha do Franqueado em utilizar as partes constituintes do PDI (Pacote de Direitos Intelectuais) por um período de 2 meses
consecutivos.
3.1.5. O Franqueador tem o direito de acesso remoto ao Pacote de Direitos Intelectuais localizado no servidor do Franqueado.
3.1.6. O Franqueador tem o direito de divulgar os dados e informações de contato do Franqueado em seu website para que os clientes
possam obter as informações necessárias sobre o prestador de serviços.
3.1.8. O Franqueado é totalmente responsável pelo cumprimento da legislação do território no qual lhe foi concedido o direito de
utilizar o pacote de direitos intelectuais, inclusive no campo do transporte de passageiros, publicidade, no campo da coleta,
processamento, armazenamento, transferência e destruição de dados pessoais. Em caso de reclamações contra o Franqueador e/ou suas
contrapartes por autoridades públicas, autoridades locais, terceiros, o Franqueado é obrigado a eliminar as referidas violações por si
mesmo e por seus próprios meios.
3.4. O Franqueado deverá realizar o registro no departamento de trânsito municipal quando exigido de acordo com a lei do município
objeto desse contrato de Franquia. Devendo ainda seguir as normas da lei aplicável.`,
          startX,
          titleY
     );
     // ####################################################################### End of Third clause  #######################################################################################################

     // ####################################################################### Fourth clause  #######################################################################################################
     clauseOff = titleY + 255;
     doc.setFontStyle("bold")
          .setFontSize(fontSize)
          .text("4. Responsabilidade das Partes", pageWidth / 2 + 30, clauseOff, { align: "center" });

     clauseOff = clauseOff + 20;
     doc.setFontStyle("normal").text(
          `4.1. Em caso de não pagamento da taxa de licença até a data de vencimento, o Franqueado deverá pagar ao Franqueador uma penalidade
de 0,1% (um décimo de um por cento) do valor pendente por cada dia de atraso até que a dívida seja paga integralmente.
4.2. O Franqueador não é responsável pelos serviços prestados pelo Franqueado, Subfranqueado e/ou suas outras contrapartes no
território de acordo com o Anexo 1.
Caso o Franqueador e/ou suas contrapartes sejam responsabilizados por quaisquer circunstâncias e garantias pelas quais o Franqueado,
seus Subfranqueados e/ou suas outras contrapartes sejam responsáveis, o Franqueado reembolsará o Franqueador e/ou contrapartes
pelos valores devidos, tais como multas, custas judiciais e outras despesas incorridas em conexão com as circunstâncias descritas neste
parágrafo, no prazo de 3 (três) dias a contar da data de envio pelo Franqueador e/ou sua contraparte do pedido de pagamento de tal
indenização (Art. 927 do Código Civil Brasileiro), sob pena de interposição de ação de regresso.
4.3. No caso de procedimentos judiciais ajuizados em face da Franqueada por terceiros, compromete-se está a imediatamente notificar
tal ajuizamento à Franqueadora. Uma vez notificada, a Franqueadora irá avaliar se a questão judicial pode ou não causar qualquer
prejuízo à Marca, e, entendendo que este é o caso, poderá optar por intervir no processo para assistir a Franqueada, de modo que não
será possível a denunciação à lide.
4.4. No caso de a Franqueadora ser diretamente acionada por terceiros, por ato ou fato da Franqueada, qualquer que seja a origem da
demanda, compromete-se a Franqueada a intervir no feito, uma vez cientificada pela Franqueadora, por qualquer meio, isentando-a de
toda e qualquer responsabilidade com relação a tais fatos e assumindo integralmente o litígio.
4.5. A Franqueada compromete, ainda, a aceitar as orientações da Franqueadora no que diz respeito não à sua defesa ou estratégia
processual (que serão de sua responsabilidade de seu próprio patrono), mas no que diz respeito à preservação da Marca e da imagem
não só da Franqueadora, mas também do sistema de franquia.
4.6. Se, mesmo assim, a Franqueadora for condenada a pagar qualquer quantia a terceiros por ato da Franqueada, compromete-se está
a ressarcir a Franqueadora, integralmente, não só com relação aos valores despendidos, como, ainda, com relação a todas as custas
processuais desembolsadas e honorários advocatícios.`,
          startX,
          clauseOff
     );
     // ####################################################################### End of Fourth clause  #######################################################################################################

     // ####################################################################### Fifith clause  #######################################################################################################
     clauseOff = clauseOff + 260;
     doc.setFontStyle("bold")
          .setFontSize(fontSize)
          .text("5. Resolução de disputas", pageWidth / 2 + 30, clauseOff, { align: "center" });

     clauseOff = clauseOff + 20;
     doc.setFontStyle("normal").text(
          `5.1 As Partes se esforçarão para resolver todas as possíveis disputas e desacordos que possam surgir sob ou em relação ao Contrato
em um procedimento de resolução prejudicial de disputas. A resolução de disputas antes do julgamento é obrigatória.
5.2. De acordo com o artigo 3º da Lei 9.307/1996, este parágrafo do Contrato constitui o Acordo das Partes sobre o compromisso
arbitral.
As Partes pelo presente concordam que o Tribunal de Arbitragem tem jurisdição exclusiva em relação a disputas que surjam entre as
Partes sob este Contrato. As disputas serão realizadas no idioma português e será aplicada a legislação brasileira, julgadas por Três
árbitros na Câmara de Arbitragem Recife/PE, a decisão arbitral será irrecorrível e as partes devem manter sigilo sobre o procedimento
arbitral.`,
          startX,
          clauseOff
     );
     // ####################################################################### End of Fifith clause  #######################################################################################################

     // ####################################################################### Sixth clause  #######################################################################################################
     clauseOff = clauseOff + 95;
     doc.setFontStyle("bold")
          .setFontSize(fontSize)
          .text("6. Condições Especiais", pageWidth / 2 + 30, clauseOff, { align: "center" });

     clauseOff = clauseOff + 20;
     doc.setFontStyle("normal").text(
          `6.1 Este Contrato não implica a transferência para o Franqueado dos direitos exclusivos para os elementos da propriedade intelectual,
sendo assim, a concessão ao Franqueado dos direitos previstos neste Contrato não está sujeita a registro estatal.
6.2 O Franqueado está proibido de divulgar os termos do Contrato, informações, know-how, etc. que se tornaram conhecidos em
conexão com a execução do Contrato sem o consentimento do Franqueador. Em caso de divulgação, o Franqueado deverá pagar ao
Franqueador uma multa de R$ 64.500,00 (sessenta e quatro mil reais e quinhentos reais) por cada caso de divulgação e compensar as
perdas causadas por tal divulgação.
6.3 O Franqueado exerce os direitos e obrigações previstos no Contrato por meio da conta que foi criada em seu nome pelo
Franqueador. O Franqueado cria as contas para os seus funcionários e os usuários por conta própria.
O Franqueado garante a existência de consentimento para o processamento dos dados pessoais dos usuários do serviço, nos termos da
Lei 13.709/2018, garantindo, ainda, seguir a na íntegra a referida lei.`,
          startX,
          clauseOff
     );

     doc.addPage();
     doc.text(
          `6.4 As Partes concordaram que para fins de fluxo de documentos, os endereços de e-mail de cada Parte especificados no Artigo 8 do
Contrato serão os endereços de e-mail oficiais para os quais as Partes poderão enviar documentos relacionados à execução do Contrato
(incluindo, mas não se limitando a, avisos, acordos, atos, relatórios, etc.) na forma de cópias digitalizadas de documentos com carimbos
e assinaturas obrigatórias das Partes (as Partes). Os documentos serão considerados recebidos pela Parte à qual são endereçados no
primeiro dia útil após a data de envio.
6.5 As mesmas regras se aplicam às mensagens e documentos recebidos/enviados através do pacote de software AIST.
6.6 Todos os contratos anteriores celebrados entre as Partes, cujo objeto seja conceder ao Franqueado o direito de usar quaisquer
elementos de propriedade intelectual especificados neste Contrato, deverão tornar-se nulos e sem efeito a partir da data de entrada em
vigor deste Contrato.
6.7. Os termos e condições deste Contrato, bem como dos seus anexos, serão um segredo comercial das Partes e não poderão ser
revelados por nenhuma das Partes sem o consentimento escrito obrigatório da outra Parte.
6.8. As partes estão cientes de que as Informações Legais, estão incluídas no site https://taximaxim.com/ (doravante referido como “O
site do Franqueador”). A tecnologia de gestão, Termos e Definições, Formulários e procedimento para uso do conjunto de direitos
intelectuais são publicados no portal eletrônico https://moodle.taxsee.com, bem como as instruções dos gerentes do Franqueador. Ao
assinar este Contrato, o Franqueado confirma que leu e concorda com o conteúdo dos referidos documentos na íntegra.`,
          startX,
          titleY
     );
     // ####################################################################### End of Sixth clause  #######################################################################################################

     // ####################################################################### Seventh clause  #######################################################################################################
     clauseOff = titleY + 185;
     doc.setFontStyle("bold")
          .setFontSize(fontSize)
          .text("7. Lista de anexos a este contrato", pageWidth / 2 + 30, clauseOff, { align: "center" });

     clauseOff = clauseOff + 20;
     doc.setFontStyle("normal").text(`7.1. Anexo Nº 1 - Pacote de Direitos Intelectuais. Território. Prazo do contrato. Procedimento para o cálculo das taxas de licença.`, startX, clauseOff);
     // ####################################################################### End of Seventh clause  #######################################################################################################

     // ####################################################################### Table  #######################################################################################################
     clauseOff = titleY + 225;
     doc.setFontStyle("bold")
          .setFontSize(fontSize)
          .text("8. Endereço e informações bancárias", pageWidth / 2 + 30, clauseOff, { align: "center" });
     
     clauseOff = clauseOff + 30;
     var head = [["Franqueador", "Franqueado"]];
     var body = [
          [
               "Aist Brazil Software LTDA\nCNPJ 41.450.114/0001-10\nEndereço: Rua Pereira Estéfano, nº 114, Conjunto nº 1508,\nBairro: Vila da Saúde, São Paulo/SP, CEP 04.144-070.\nBanco Itaú (341)\nAgência: 3175\nConta: 99880-0\nE-mail: franchise_maintenance@taximaxim.com",
               `${getFranchisee} ${getRg}\nCPF: ${getCpf}\nEndereço: ${getStreet}, ${getNeighborhood}, N°${getHouseN}\n${getComplement},\n${getCity} – ${getState}, CEP: ${getCep}.\nBanco: ${getBank}\nAgência: ${getAg}\nConta: ${getCc}\nE-mail: ${getEmail}`,
          ],
     ];
     if (selectSpouse.value == "1") {
          foot = [
               [
                    " \n \n________________________________\npp. Felipe Burgel Paladine ",
                    ` \n \n_______________________________\n${getFranchisee} \n MII/SELO\n \n_______________________________\n${getSpouse} \n (anuente)`,
               ],
          ];
     } else if (selectSpouse.value == "5") {
          foot = [
               [
                    " \n \n________________________________\npp. Felipe Burgel Paladine ",
                    ` \n \n_______________________________\n${getFranchisee} \n MII/SELO\n \n_______________________________\n${getSpouse} \n (anuente)`,
               ],
          ];
     } else {
          foot = [[" \n \n________________________________\npp. Felipe Burgel Paladine ", ` \n \n_______________________________\n${getFranchisee} \n MII/SELO`]];
     }
     console.log(doc.getFontList());
     doc.autoTable({
          theme: "plain",
          bodyStyles: { halign: "left", lineWidth: 0.5, lineColor: [0, 0, 0] },
          footStyles: { halign: "center", lineWidth: 0.5, lineColor: [0, 0, 0], fontStyle: "normal" },
          headStyles: {
               lineWidth: 0.5,
               lineColor: [0, 0, 0],
          },
          startY: 260,
          head: head,
          body: body,
          foot: foot,
     });
     // ####################################################################### End table  #######################################################################################################

     // ####################################################################### Attachments  #######################################################################################################
     doc.addPage();
     doc.setFontStyle("normal");
     doc.text(`Anexo No.1`, pageWidth - 10, titleY);

     doc.text(`Contrato de franquia ${getContractNumber} – ${getDay}/${getMonth}/${getYear}`, pageWidth - 140, titleY + 10);
     doc.text(
          `Conjunto de direitos da propriedade intelectual
1. Conforme os termos deste Contrato e seus anexos nas condições de licença simples (não exclusiva), ao
Licenciado é concedido o direito de uso dos seguintes componentes do Conjunto de Direitos da Propriedade
Intelectual:
- Banco de dados - DriverDB
- Software AIST
- TAXSEE Driver para Android
- TAXSEE Driver para iOS
- TAXSEE: Os pedidos de viagens para Android
- TAXSEE: Os pedidos de viagens para iOS
- Maxim: Os pedidos de viagens para Android
- Maxim: Os pedidos de viagens para iOS
- Know-how
- Marca
Território
2. O território no qual é concedido o direito de uso dos componentes do Conjunto de Direitos da Propriedade
Intelectual a que se refere este Contrato é o município de Iguaba Grande, localizado no estado do Rio de
Janeiro.
Procedimento de cálculo
3. O valor da taxa de licença para o direito concedido de utilizar o pacote de direitos intelectuais é determinado
de acordo com as Condições para o cálculo do valor da taxa de licença.
4. Todos os preços são exclusivos do ISS, excluindo o imposto sobre vendas e impostos retidos na fonte, a não
ser que seja indicado o contrário em outras cláusulas do contrato.
Como calcular o valor da taxa de licença
Taxa de licença
Os royalties não serão provisionados até um lucro bruto de R$4.000,00 (quatro mil reais). Após atingir um
lucro bruto de R$4.000,00 (quatro mil reais) até R$6.000,00 (seis mil reais), os royalties serão de 10% do valor
do lucro bruto.
A cada R$800,00 (oitocentos reais) de renda adicional (lucro bruto), deverá ser pago um valor adicional de 2%
(dois por cento) de royalties.
Por fim, fica estabelecido que o valor dos royalties não poderá exceder 30% (trinta por cento) do lucro bruto.
O Franqueado aceita os termos e condições contidos neste anexo.`,
          startX,
          titleY + 30
     );
     if (selectSpouse.value == "1") {
          doc.setFontStyle("bold");
          doc.text(`___________________________________________\n${getFranchisee}\nSELO\n \n ___________________________________________\n${getSpouse}\n(anuente)`, pageWidth / 2 + 30, titleY + 430, {
               align: "center",
          });
     } else if (selectSpouse.value == "5") {
          doc.setFontStyle("bold");
          doc.text(`___________________________________________\n${getFranchisee}\nSELO\n \n ___________________________________________\n${getSpouse}\n(anuente)`, pageWidth / 2 + 30, titleY + 430, {
               align: "center",
          });
     } else {
          doc.setFontStyle("bold");
          doc.text(`___________________________________________\n${getFranchisee}\nSELO`, pageWidth / 2 + 30, titleY + 430, { align: "center" });
     }
     // ####################################################################### End attachments  #######################################################################################################

     doc.save(`${getContractNumber}_${businessCityFileName}_Franchise contract_Aist_${franchiseeFileName}.pdf`);
}

const isBoldOpen = (arrayLength, valueBefore = false) => {
     const isEven = arrayLength % 2 === 0;
     const result = valueBefore !== isEven;

     return result;
};

export { privateIndividual };
