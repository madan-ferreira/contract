import { privateIndividual } from "./modules/private.js";
import { legalEntity } from "./modules/legal.js";
import { getInfo /* getGenderFunction */ } from "./modules/get.values.js";
// ########################### Function variables ###################################
var btnPrivate,
     typeContract,
     privateData,
     btnLegal,
     btnPrev,
     newYear,
     newDay,
     newMonth,
     btnGenerate,
     optionBlank,
     optionMale,
     optionFemale,
     selectGender,
     optionStatus,
     optionMarried,
     optionWidow,
     optionDivorced,
     selectSpouse,
     optionSingle,
     optionStable,
     selectPrice,
     optionPriceTwenty,
     optionPriceFive,
     optionPriceTwo,
     optionPrice,
     personalSpouseContainer,
     contractInfoContainer,
     bankDataContainer,
     personalClientContainer,
     companyDataContainer,
     optionComuUni,
     optionStableUni,
     newUnitCity,
     newUnitState;
var legalBtnClick = false;
var privateBtnClick = false;
// ########################### Input variables ######################################
var contractNumber, newAg, newCc, newBank, newFranchisee, newBirth, newRg, newCpf, newEmail, newcity, newStreet, newHouseN, newComplement, newNeighborhood, newCep, newState, newCountry;
var newCnpj, newBusinessName, newbusinessStreet, newbusinessCity, newbusinessNumber, newbusinessNeighborhood, newbusinessCep, newbusinessComplement, newbusinessState;
var newSpouse, newSpouseCpf, newSpouseRg;

window.onload = function gui() {
     // Selection of contract type
     typeContract = document.createElement("div");
     typeContract.id = "selection-container";
     typeContract.classList.add("main-container");
     document.body.appendChild(typeContract);

     selectSpouse = document.createElement("select");
     selectSpouse.id = "select-spouse";
     document.querySelector("#selection-container").appendChild(selectSpouse);

     optionStatus = document.createElement("option");
     optionStatus.id = "option-status";
     optionStatus.value = "0";
     document.getElementById("select-spouse").appendChild(optionStatus);
     document.getElementById("option-status").innerHTML = "Estado Civil:";

     optionComuUni = document.createElement("option");
     optionComuUni.id = "option-universal-communion";
     optionComuUni.value = "1";
     document.getElementById("select-spouse").appendChild(optionComuUni);
     document.getElementById("option-universal-communion").innerHTML = "Casado(a) em regime de comunhão univesal de bens";

     optionMarried = document.createElement("option");
     optionMarried.id = "option-married";
     optionMarried.value = "2";
     document.getElementById("select-spouse").appendChild(optionMarried);
     document.getElementById("option-married").innerHTML = "Casado(a)";

     optionSingle = document.createElement("option");
     optionSingle.id = "option-single";
     optionSingle.value = "3";
     document.getElementById("select-spouse").appendChild(optionSingle);
     document.getElementById("option-single").innerHTML = "Solteiro(a)";

     optionDivorced = document.createElement("option");
     optionDivorced.id = "option-divorced";
     optionDivorced.value = "4";
     document.getElementById("select-spouse").appendChild(optionDivorced);
     document.getElementById("option-divorced").innerHTML = "Divorciado(a)";

     optionStableUni = document.createElement("option");
     optionStableUni.id = "option-stable-uni";
     optionStableUni.value = "5";
     document.getElementById("select-spouse").appendChild(optionStableUni);
     document.getElementById("option-stable-uni").innerHTML = "União estável comunhão universal";

     optionStable = document.createElement("option");
     optionStable.id = "option-stable";
     optionStable.value = "6";
     document.getElementById("select-spouse").appendChild(optionStable);
     document.getElementById("option-stable").innerHTML = "União estável";

     optionWidow = document.createElement("option");
     optionWidow.id = "option-widow";
     optionWidow.value = "7";
     document.getElementById("select-spouse").appendChild(optionWidow);
     document.getElementById("option-widow").innerHTML = "Viúvo(a)";
     // ###################################### Private individual div #############################################
     var privateLegalContainerBtn = document.createElement("div");
     privateLegalContainerBtn.id = "private-legal-container-btn";
     document.getElementById("selection-container").appendChild(privateLegalContainerBtn);

     btnPrivate = document.createElement("button");
     btnPrivate.id = "btn-private";
     btnPrivate.classList.add("btn");
     document.getElementById("private-legal-container-btn").appendChild(btnPrivate);
     document.getElementById("btn-private").innerHTML = "Pessoa Física";
     btnPrivate.onclick = function () {
          legalBtnClick = false;
          privateBtnClick = true;
          checkMaritStatusPrivate();
     };

     btnLegal = document.createElement("button");
     btnLegal.id = "btn-legal";
     btnLegal.classList.add("btn");
     document.getElementById("private-legal-container-btn").appendChild(btnLegal);
     document.getElementById("btn-legal").innerHTML = "Pessoa Jurídica";
     btnLegal.onclick = function () {
          legalBtnClick = true;
          privateBtnClick = false;
          checkMaritStatusLegal();
     };

     privateData = document.createElement("div");
     privateData.id = "private-data";
     privateData.classList.add("input-container");
     document.body.appendChild(privateData);
     privateData.style.display = "none";

     contractInfoContainer = document.createElement("div");
     contractInfoContainer.id = "contract-info-container";
     document.querySelector(".input-container").appendChild(contractInfoContainer);
     contractInfoContainer.style.gridArea = "contract";

     var contractTitle = document.createElement("h3");
     contractTitle.id = "contract-title";
     document.querySelector("#contract-info-container").appendChild(contractTitle);
     document.getElementById("contract-title").innerHTML = "Dados do contrato";

     contractNumber = document.createElement("input");
     contractNumber.id = "new-contract-number";
     contractNumber.placeholder = "Nº do contrato";
     contractNumber.type = "input";
     document.querySelector("#contract-info-container").appendChild(contractNumber);

     selectPrice = document.createElement("select");
     selectPrice.id = "select-price";
     document.querySelector("#contract-info-container").appendChild(selectPrice);

     optionPrice = document.createElement("option");
     optionPrice.id = "option-price";
     optionPrice.value = "0";
     document.getElementById("select-price").appendChild(optionPrice);
     document.getElementById("option-price").innerHTML = "Preço:";

     optionPriceTwo = document.createElement("option");
     optionPriceTwo.id = "option-2500";
     optionPriceTwo.value = "1";
     document.getElementById("select-price").appendChild(optionPriceTwo);
     document.getElementById("option-2500").innerHTML = "R$ 2.631,58";

     optionPriceFive = document.createElement("option");
     optionPriceFive.id = "option-five";
     optionPriceFive.value = "2";
     document.getElementById("select-price").appendChild(optionPriceFive);
     document.getElementById("option-five").innerHTML = "R$ 5.263,16";

     optionPriceTwenty = document.createElement("option");
     optionPriceTwenty.id = "option-20";
     optionPriceTwenty.value = "3";
     document.getElementById("select-price").appendChild(optionPriceTwenty);
     document.getElementById("option-20").innerHTML = "R$ 20.000,00";

     newDay = document.createElement("input");
     newDay.id = "new-day";
     newDay.placeholder = "Dia";
     newDay.type = "input";
     document.querySelector("#contract-info-container").appendChild(newDay);

     newMonth = document.createElement("input");
     newMonth.id = "new-month";
     newMonth.placeholder = "Mes";
     newMonth.type = "input";
     document.querySelector("#contract-info-container").appendChild(newMonth);

     newYear = document.createElement("input");
     newYear.id = "new-year";
     newYear.placeholder = "Ano";
     newYear.type = "input";
     document.querySelector("#contract-info-container").appendChild(newYear);

     newUnitCity = document.createElement("input");
     newUnitCity.id = "new-unit-city";
     newUnitCity.placeholder = "Cidade onde vai operar a franquia";
     newUnitCity.type = "input";
     document.querySelector("#contract-info-container").appendChild(newUnitCity);

     newUnitState = document.createElement("input");
     newUnitState.id = "new-unit-state";
     newUnitState.placeholder = "Estado onde vai operar a franquia";
     newUnitState.type = "input";
     document.querySelector("#contract-info-container").appendChild(newUnitState);

     personalClientContainer = document.createElement("div");
     personalClientContainer.id = "personal-client-container";
     document.querySelector(".input-container").appendChild(personalClientContainer);
     personalClientContainer.style.gridArea = "client";

     var clientTitle = document.createElement("h3");
     clientTitle.id = "client-title";
     document.querySelector("#personal-client-container").appendChild(clientTitle);
     document.getElementById("client-title").innerHTML = "Dados do cliente";

     newBirth = document.createElement("input");
     newBirth.id = "new-birth";
     newBirth.placeholder = "Data de nascimento";
     newBirth.type = "input";
     document.querySelector("#personal-client-container").appendChild(newBirth);

     selectGender = document.createElement("select");
     selectGender.id = "select-gender";
     document.querySelector("#personal-client-container").appendChild(selectGender);

     optionBlank = document.createElement("option");
     optionBlank.id = "option-blank";
     optionBlank.value = "0";
     document.getElementById("select-gender").appendChild(optionBlank);
     document.getElementById("option-blank").innerHTML = "Sexo:";

     optionMale = document.createElement("option");
     optionMale.id = "option-male";
     optionMale.value = "1";
     document.getElementById("select-gender").appendChild(optionMale);
     document.getElementById("option-male").innerHTML = "Masculino";

     optionFemale = document.createElement("option");
     optionFemale.id = "option-female";
     optionFemale.value = "2";
     document.getElementById("select-gender").appendChild(optionFemale);
     document.getElementById("option-female").innerHTML = "Feminino";

     newFranchisee = document.createElement("input");
     newFranchisee.id = "new-franchisee";
     newFranchisee.placeholder = "Nome do franqueado";
     newFranchisee.type = "input";
     document.querySelector("#personal-client-container").appendChild(newFranchisee);

     newRg = document.createElement("input");
     newRg.id = "new-rg";
     newRg.placeholder = "RG";
     newRg.type = "input";
     document.querySelector("#personal-client-container").appendChild(newRg);

     newCpf = document.createElement("input");
     newCpf.id = "new-cpf";
     newCpf.placeholder = "CPF";
     newCpf.type = "input";
     document.querySelector("#personal-client-container").appendChild(newCpf);
     newCpf.maxLength = "11";
     let cpfMask = document.querySelector("#new-cpf");
     cpfMask.addEventListener("blur", function () {
          if (cpfMask.value)
               cpfMask.value = cpfMask.value
                    .match(/.{1,3}/g)
                    .join(".")
                    .replace(/\.(?=[^.]*$)/, "-");
     });

     newcity = document.createElement("input");
     newcity.id = "new-city";
     newcity.placeholder = "Cidade";
     newcity.type = "input";
     document.querySelector("#personal-client-container").appendChild(newcity);

     newState = document.createElement("input");
     newState.id = "new-state";
     newState.placeholder = "Estado";
     newState.type = "input";
     document.querySelector("#personal-client-container").appendChild(newState);

     newStreet = document.createElement("input");
     newStreet.id = "new-street";
     newStreet.placeholder = "Rua";
     newStreet.type = "input";
     document.querySelector("#personal-client-container").appendChild(newStreet);

     newHouseN = document.createElement("input");
     newHouseN.id = "new-house-number";
     newHouseN.placeholder = "Nº";
     newHouseN.type = "input";
     document.querySelector("#personal-client-container").appendChild(newHouseN);

     newComplement = document.createElement("input");
     newComplement.id = "new-complement";
     newComplement.placeholder = "Complemento";
     newComplement.type = "input";
     document.querySelector("#personal-client-container").appendChild(newComplement);

     newNeighborhood = document.createElement("input");
     newNeighborhood.id = "new-neighborhood";
     newNeighborhood.placeholder = "Bairro";
     newNeighborhood.type = "input";
     document.querySelector("#personal-client-container").appendChild(newNeighborhood);

     newCep = document.createElement("input");
     newCep.id = "new-cep";
     newCep.placeholder = "CEP";
     newCep.type = "input";
     document.querySelector("#personal-client-container").appendChild(newCep);

     newEmail = document.createElement("input");
     newEmail.id = "new-email";
     newEmail.placeholder = "Email";
     newEmail.type = "input";
     document.querySelector("#personal-client-container").appendChild(newEmail);

     personalSpouseContainer = document.createElement("div");
     personalSpouseContainer.id = "personal-spouse-container";
     document.querySelector(".input-container").appendChild(personalSpouseContainer);
     personalSpouseContainer.style.gridArea = "spouse";

     var spouseTitle = document.createElement("h3");
     spouseTitle.id = "spouse-title";
     document.querySelector("#personal-spouse-container").appendChild(spouseTitle);
     document.getElementById("spouse-title").innerHTML = "Dados do parceiro";

     newSpouse = document.createElement("input");
     newSpouse.id = "new-spouse";
     newSpouse.placeholder = "Nome do cônjuge";
     newSpouse.type = "input";
     document.querySelector("#personal-spouse-container").appendChild(newSpouse);

     newSpouseCpf = document.createElement("input");
     newSpouseCpf.id = "new-spouse-cpf";
     newSpouseCpf.placeholder = "CPF do cônjuge";
     newSpouseCpf.type = "input";
     document.querySelector("#personal-spouse-container").appendChild(newSpouseCpf);
     newSpouseCpf.maxLength = "11";
     let spouseCpfMask = document.querySelector("#new-spouse-cpf");
     spouseCpfMask.addEventListener("blur", function () {
          if (spouseCpfMask.value)
               spouseCpfMask.value = spouseCpfMask.value
                    .match(/.{1,3}/g)
                    .join(".")
                    .replace(/\.(?=[^.]*$)/, "-");
     });

     newSpouseRg = document.createElement("input");
     newSpouseRg.id = "new-spouse-rg";
     newSpouseRg.placeholder = "RG do cônjuge";
     newSpouseRg.type = "input";
     document.querySelector("#personal-spouse-container").appendChild(newSpouseRg);

     bankDataContainer = document.createElement("div");
     bankDataContainer.id = "bank-data-container";
     document.querySelector(".input-container").appendChild(bankDataContainer);
     bankDataContainer.style.gridArea = "bank";

     var bankTitle = document.createElement("h3");
     bankTitle.id = "bank-title";
     document.querySelector("#bank-data-container").appendChild(bankTitle);
     document.getElementById("bank-title").innerHTML = "Dados bancários";

     newBank = document.createElement("input");
     newBank.id = "new-bank";
     newBank.placeholder = "Banco";
     newBank.type = "input";
     document.querySelector("#bank-data-container").appendChild(newBank);

     newCc = document.createElement("input");
     newCc.id = "new-current-account";
     newCc.placeholder = "Conta corrente";
     newCc.type = "input";
     document.querySelector("#bank-data-container").appendChild(newCc);

     newAg = document.createElement("input");
     newAg.id = "new-agency";
     newAg.placeholder = "Agência";
     newAg.type = "input";
     document.querySelector("#bank-data-container").appendChild(newAg);

     companyDataContainer = document.createElement("div");
     companyDataContainer.id = "company-data-container";
     document.querySelector(".input-container").appendChild(companyDataContainer);
     companyDataContainer.style.gridArea = "comp";

     var companyTitle = document.createElement("h3");
     companyTitle.id = "company-title";
     document.querySelector("#company-data-container").appendChild(companyTitle);
     document.getElementById("company-title").innerHTML = "Dados da empresa";

     newCnpj = document.createElement("input");
     newCnpj.id = "new-cnpj";
     newCnpj.placeholder = "CNPJ";
     newCnpj.type = "input";
     document.querySelector("#company-data-container").appendChild(newCnpj);

     newBusinessName = document.createElement("input");
     newBusinessName.id = "new-business-name";
     newBusinessName.placeholder = "Razão social";
     newBusinessName.type = "input";
     document.querySelector("#company-data-container").appendChild(newBusinessName);

     newbusinessStreet = document.createElement("input");
     newbusinessStreet.id = "new-business-street";
     newbusinessStreet.placeholder = "Rua da empresa";
     newbusinessStreet.type = "input";
     document.querySelector("#company-data-container").appendChild(newbusinessStreet);

     newbusinessCity = document.createElement("input");
     newbusinessCity.id = "new-business-city";
     newbusinessCity.placeholder = "Cidade da empresa";
     newbusinessCity.type = "input";
     document.querySelector("#company-data-container").appendChild(newbusinessCity);

     newbusinessNumber = document.createElement("input");
     newbusinessNumber.id = "new-business-number";
     newbusinessNumber.placeholder = "Nº";
     newbusinessNumber.type = "input";
     document.querySelector("#company-data-container").appendChild(newbusinessNumber);

     newbusinessNeighborhood = document.createElement("input");
     newbusinessNeighborhood.id = "new-business-neighborhood";
     newbusinessNeighborhood.placeholder = "Bairro da empresa";
     newbusinessNeighborhood.type = "input";
     document.querySelector("#company-data-container").appendChild(newbusinessNeighborhood);

     newbusinessCep = document.createElement("input");
     newbusinessCep.id = "new-business-cep";
     newbusinessCep.placeholder = "CEP da empresa";
     newbusinessCep.type = "input";
     document.querySelector("#company-data-container").appendChild(newbusinessCep);

     newbusinessComplement = document.createElement("input");
     newbusinessComplement.id = "new-business-complement";
     newbusinessComplement.placeholder = "Complemento da empresa";
     newbusinessComplement.type = "input";
     document.querySelector("#company-data-container").appendChild(newbusinessComplement);

     newbusinessState = document.createElement("input");
     newbusinessState.id = "new-business-state";
     newbusinessState.placeholder = "Estado da empresa";
     newbusinessState.type = "input";
     document.querySelector("#company-data-container").appendChild(newbusinessState);

     var divBtn = document.createElement("div");
     divBtn.id = "div-btn";
     document.querySelector(".input-container").appendChild(divBtn);

     btnPrev = document.createElement("button");
     btnPrev.id = "btn-prev";
     btnPrev.classList.add("btn");
     document.querySelector("#div-btn").appendChild(btnPrev);
     document.getElementById("btn-prev").innerHTML = "Voltar";
     btnPrev.onclick = function () {
          nextInputs();
     };

     btnGenerate = document.createElement("button");
     btnGenerate.id = "btn-generate";
     btnGenerate.classList.add("btn");
     document.querySelector("#div-btn").appendChild(btnGenerate);
     document.getElementById("btn-generate").innerHTML = "Gerar";
     btnGenerate.onclick = function () {
          getInfo();
          if (selectGender.value != "0" && selectPrice != "0" && privateBtnClick == true) {
               privateIndividual();
          } else if (selectGender.value != "0" && selectPrice != "0" && legalBtnClick == true) {
               legalEntity();
          } else {
               alert("Selecione preço ou gênero");
          }
     };
};
function checkMaritStatusPrivate() {
     switch (selectSpouse.value) {
          case "0":
               alert("Selecione o estado civil");
               break;
          case "1":
               // casado em regime de união universal de bens
               nextInputs();
               personalClientContainer.style.display = "flex";

               personalSpouseContainer.style.display = "flex";

               companyDataContainer.style.display = "none";

               bankDataContainer.style.display = "flex";

               newSpouse.placeholder = "Nome do cônjuge";
               newSpouseCpf.placeholder = "CPF do cônjuge";
               newSpouseRg.placeholder = "RG do cônjuge";

               privateData.style.gridTemplateColumns = "25% 25% 25% 25%";
               privateData.style.gridTemplateAreas =
                    '"contract client bank spouse" "contract client bank spouse" "contract client bank spouse" "contract client bank spouse" "contract client bank spouse" "contract client bank spouse" ". foot foot . "';
               break;
          case "2":
               // casado
               nextInputs();
               personalSpouseContainer.style.display = "none";

               companyDataContainer.style.display = "none";

               bankDataContainer.style.display = "flex";

               privateData.style.gridTemplateColumns = "33% 33% 33% 33% 33%";
               privateData.style.gridTemplateAreas =
                    '"contract client bank" "contract client bank" "contract client bank" "contract client bank" "contract client bank" "contract client bank" ". foot ."';
               break;
          case "3":
               // solteiro
               nextInputs();
               personalSpouseContainer.style.display = "none";

               companyDataContainer.style.display = "none";

               bankDataContainer.style.display = "flex";

               privateData.style.gridTemplateColumns = "33% 33% 33% 33% 33%";
               privateData.style.gridTemplateAreas =
                    '"contract client bank" "contract client bank" "contract client bank" "contract client bank" "contract client bank" "contract client bank" ". foot ."';
               break;
          case "4":
               // Divorciado
               nextInputs();
               personalSpouseContainer.style.display = "none";

               companyDataContainer.style.display = "none";

               bankDataContainer.style.display = "flex";

               privateData.style.gridTemplateColumns = "33% 33% 33% 33% 33%";
               privateData.style.gridTemplateAreas =
                    '"contract client bank" "contract client bank" "contract client bank" "contract client bank" "contract client bank" "contract client bank" ". foot ."';
               break;
          case "5":
               // União estável com comunhão universal de bens
               nextInputs();
               personalClientContainer.style.display = "flex";

               personalSpouseContainer.style.display = "flex";

               companyDataContainer.style.display = "none";

               bankDataContainer.style.display = "flex";

               newSpouse.placeholder = "Nome do parceiro";
               newSpouseCpf.placeholder = "CPF do parceiro";
               newSpouseRg.placeholder = "RG do parceiro";

               privateData.style.gridTemplateColumns = "25% 25% 25% 25%";
               privateData.style.gridTemplateAreas =
                    '"contract client bank spouse" "contract client bank spouse" "contract client bank spouse" "contract client bank spouse" "contract client bank spouse" "contract client bank spouse" ". foot foot . "';
               break;
          case "6":
               // União estável
               nextInputs();
               personalSpouseContainer.style.display = "none";

               companyDataContainer.style.display = "none";

               bankDataContainer.style.display = "flex";

               privateData.style.gridTemplateColumns = "33% 33% 33% 33% 33%";
               privateData.style.gridTemplateAreas =
                    '"contract client bank" "contract client bank" "contract client bank" "contract client bank" "contract client bank" "contract client bank" ". foot ."';
               break;

          case "7":
               // Viuvo(a)
               nextInputs();
               personalSpouseContainer.style.display = "none";

               companyDataContainer.style.display = "none";

               bankDataContainer.style.display = "flex";

               privateData.style.gridTemplateColumns = "33% 33% 33% 33% 33%";
               privateData.style.gridTemplateAreas =
                    '"contract client bank" "contract client bank" "contract client bank" "contract client bank" "contract client bank" "contract client bank" ". foot ."';
               break;
     }
}

function checkMaritStatusLegal() {
     switch (selectSpouse.value) {
          case "0":
               alert("Selecione o estado civil");
               break;
          case "1":
               // casado em regime de comunha universal de bens
               nextInputs();
               personalClientContainer.style.display = "flex";

               personalSpouseContainer.style.display = "flex";

               companyDataContainer.style.display = "flex";

               bankDataContainer.style.display = "flex";

               newHouseN.style.display = "none";
               newComplement.style.display = "none";
               newStreet.style.display = "none";
               newNeighborhood.style.display = "none";
               newCep.style.display = "none";
               newcity.style.display = "none";
               newState.style.display = "none";

               privateData.style.gridTemplateColumns = "20% 20% 20% 20% 20%";

               privateData.style.gridTemplateColumns = "20% 20% 20% 20% 20%";
               privateData.style.gridTemplateAreas =
                    '"contract client bank spouse comp" "contract client bank spouse comp" "contract client bank spouse comp" "contract client bank spouse comp" "contract client bank spouse comp" "contract client bank spouse comp" ". . foot . ."';

               newSpouse.placeholder = "Nome do cônjuge";
               newSpouseCpf.placeholder = "CPF do cônjuge";
               newSpouseEmail.placeholder = "Email do cônjuge";
               newSpouseRg.placeholder = "RG do cônjuge";
               break;

          case "2":
               // casado
               nextInputs();
               personalSpouseContainer.style.display = "none";

               companyDataContainer.style.display = "flex";

               bankDataContainer.style.display = "flex";

               privateData.style.gridTemplateColumns = "25% 25% 25% 25%";
               privateData.style.gridTemplateAreas =
                    '"contract client bank comp" "contract client bank comp" "contract client bank comp" "contract client bank comp" "contract client bank comp" "contract client bank comp" ". foot foot . "';

               newHouseN.style.display = "none";
               newComplement.style.display = "none";
               newStreet.style.display = "none";
               newNeighborhood.style.display = "none";
               newCep.style.display = "none";
               newcity.style.display = "none";
               newState.style.display = "none";
               break;
          case "3":
               // solteiro
               nextInputs();
               personalSpouseContainer.style.display = "none";

               companyDataContainer.style.display = "flex";

               bankDataContainer.style.display = "flex";

               privateData.style.gridTemplateColumns = "25% 25% 25% 25%";
               privateData.style.gridTemplateAreas =
                    '"contract client bank comp" "contract client bank comp" "contract client bank comp" "contract client bank comp" "contract client bank comp" "contract client bank comp" ". foot foot . "';

               newHouseN.style.display = "none";
               newComplement.style.display = "none";
               newStreet.style.display = "none";
               newNeighborhood.style.display = "none";
               newCep.style.display = "none";
               newcity.style.display = "none";
               newState.style.display = "none";
               break;
          case "4":
               // divorciado
               nextInputs();
               personalSpouseContainer.style.display = "none";

               companyDataContainer.style.display = "flex";

               bankDataContainer.style.display = "flex";

               privateData.style.gridTemplateColumns = "25% 25% 25% 25%";
               privateData.style.gridTemplateAreas =
                    '"contract client bank comp" "contract client bank comp" "contract client bank comp" "contract client bank comp" "contract client bank comp" "contract client bank comp" ". foot foot . "';

               newHouseN.style.display = "none";
               newComplement.style.display = "none";
               newStreet.style.display = "none";
               newNeighborhood.style.display = "none";
               newCep.style.display = "none";
               newcity.style.display = "none";
               newState.style.display = "none";
               break;
          case "5":
               // União estável com comunhão universal de bens
               nextInputs();
               personalClientContainer.style.display = "flex";

               personalSpouseContainer.style.display = "flex";

               companyDataContainer.style.display = "flex";

               bankDataContainer.style.display = "flex";

               privateData.style.gridTemplateColumns = "20% 20% 20% 20% 20%";

               privateData.style.gridTemplateColumns = "20% 20% 20% 20% 20%";
               privateData.style.gridTemplateAreas =
                    '"contract client bank spouse comp" "contract client bank spouse comp" "contract client bank spouse comp" "contract client bank spouse comp" "contract client bank spouse comp" "contract client bank spouse comp" ". . foot . ."';

               newHouseN.style.display = "none";
               newComplement.style.display = "none";
               newStreet.style.display = "none";
               newNeighborhood.style.display = "none";
               newCep.style.display = "none";
               newcity.style.display = "none";
               newState.style.display = "none";

               newSpouse.placeholder = "Nome do parceiro";
               newSpouseCpf.placeholder = "CPF do parceiro";
               newSpouseEmail.placeholder = "Email do parceiro";
               newSpouseRg.placeholder = "RG do parceiro";
               break;
          case "6":
               // união estável
               nextInputs();
               personalSpouseContainer.style.display = "none";

               companyDataContainer.style.display = "flex";

               bankDataContainer.style.display = "flex";

               privateData.style.gridTemplateColumns = "25% 25% 25% 25%";
               privateData.style.gridTemplateAreas =
                    '"contract client bank comp" "contract client bank comp" "contract client bank comp" "contract client bank comp" "contract client bank comp" "contract client bank comp" ". foot foot . "';

               newHouseN.style.display = "none";
               newComplement.style.display = "none";
               newStreet.style.display = "none";
               newNeighborhood.style.display = "none";
               newCep.style.display = "none";
               newcity.style.display = "none";
               newState.style.display = "none";
               break;
          case "7":
               // viuvo(a)
               nextInputs();
               personalSpouseContainer.style.display = "none";

               companyDataContainer.style.display = "flex";

               bankDataContainer.style.display = "flex";

               privateData.style.gridTemplateColumns = "25% 25% 25% 25%";
               privateData.style.gridTemplateAreas =
                    '"contract client bank comp" "contract client bank comp" "contract client bank comp" "contract client bank comp" "contract client bank comp" "contract client bank comp" ". foot foot . "';

               newHouseN.style.display = "none";
               newComplement.style.display = "none";
               newStreet.style.display = "none";
               newNeighborhood.style.display = "none";
               newCep.style.display = "none";
               newcity.style.display = "none";
               newState.style.display = "none";
               break;
     }
}

function nextInputs() {
     if (typeContract.style.display === "none") {
          privateData.style.display = "none";
          typeContract.style.display = "flex";
     } else {
          typeContract.style.display = "none";
          privateData.style.display = "grid";
     }
}

export { selectGender, optionBlank, optionFemale, optionMale, selectPrice, selectSpouse };
