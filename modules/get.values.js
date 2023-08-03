import { selectGender, selectPrice, selectSpouse } from "../gui.js";

var getContractNumber,
     getCc,
     getAg,
     getBank,
     born,
     getState,
     getDay,
     getMonth,
     getYear,
     getFranchisee,
     nationality,
     carrier,
     genderStatus,
     businesStatus,
     genderFranchisee,
     registered,
     getRg,
     getCpf,
     getEmail,
     getPrice,
     getCity,
     getStreet,
     getHouseN,
     getComplement,
     getNeighborhood,
     getCep,
     getState,
     getCnpj,
     getBusinessName,
     getBusinessStreet,
     getBusinessCity,
     getBusinessNumber,
     getBusinessNeighborhood,
     getbusinessCep,
     getBusinessComplement,
     getSpouse,
     getSpouseCpf,
     getSpouseRg,
     spouseCarrier,
     spouseNation,
     spouseRegistered,
     getBirth,
     getBusinessState,
     getUnitCity,
     getUnitState,
     franchiseeFileName,
     businessCityFileName;

export function getInfo() {
     getContractNumber = document.getElementById("new-contract-number").value;
     getDay = document.getElementById("new-day").value;
     getMonth = document.getElementById("new-month").value;
     getYear = document.getElementById("new-year").value;
     switch (selectPrice.value) {
          case "1":
               getPrice = "R$ 2.631,58 (dois mil, seiscentos e trinta e um reais e cinquenta e oito centavos)";
               break;
          case "2":
               getPrice = "RS 5.263,16 (cinco mil duzentos e sessenta e três reais e dezesseis centavos)";
               break;
          case "3":
               getPrice = "R$ 20.000,00 (vinte mil reais)";
               break;
     }

     getUnitCity = document.getElementById("new-unit-city").value;
     getUnitState = document.getElementById("new-unit-state").value;
     getBirth = document.getElementById("new-birth").value;
     getFranchisee = document.getElementById("new-franchisee").value;
     getRg = document.getElementById("new-rg").value;
     getCpf = document.getElementById("new-cpf").value;
     getEmail = document.getElementById("new-email").value;
     getCity = document.getElementById("new-city").value;
     getStreet = document.getElementById("new-street").value;
     getHouseN = document.getElementById("new-house-number").value;
     getComplement = document.getElementById("new-complement").value;
     getNeighborhood = document.getElementById("new-neighborhood").value;
     getCep = document.getElementById("new-cep").value;
     getState = document.getElementById("new-state").value;
     getBank = document.getElementById("new-bank").value;
     getCc = document.getElementById("new-current-account").value;
     getAg = document.getElementById("new-agency").value;

     getSpouse = document.getElementById("new-spouse").value;
     getSpouseCpf = document.getElementById("new-spouse-cpf").value;
     getSpouseRg = document.getElementById("new-spouse-rg").value;


     getCnpj = document.getElementById("new-cnpj").value;
     getBusinessName = document.getElementById("new-business-name").value;
     getBusinessStreet = document.getElementById("new-business-street").value;
     getBusinessCity = document.getElementById("new-business-city").value;
     getBusinessNumber = document.getElementById("new-business-number").value;
     getBusinessNeighborhood = document.getElementById("new-business-neighborhood").value;
     getbusinessCep = document.getElementById("new-business-cep").value;
     getBusinessComplement = document.getElementById("new-business-complement").value;
     getBusinessState = document.getElementById("new-business-state").value;

     franchiseeFileName = getFranchisee.replace(/ /g, "_");
     businessCityFileName = getUnitCity.replace(/ /g, "_");

     if (selectGender.value == "1" && selectSpouse.value == "1") {
          genderStatus = "casado";
     } else if (selectGender.value == "1" && selectSpouse.value == "2") {
          genderStatus = "casado";
     } else if (selectGender.value == "1" && selectSpouse.value == "3") {
          genderStatus = "solteiro";
     } else if (selectGender.value == "1" && selectSpouse.value == "4") {
          genderStatus = "divorciado";
     } else if (selectGender.value == "1" && selectSpouse.value == "5") {
          genderStatus = "em união estável";
     } else if (selectGender.value == "1" && selectSpouse.value == "6") {
          genderStatus = "em união estável";
     } else if (selectGender.value == "1" && selectSpouse.value == "7") {
          genderStatus = "viúvo";
     } else if (selectGender.value == "2" && selectSpouse.value == "1") {
          genderStatus = "casada";
     } else if (selectGender.value == "2" && selectSpouse.value == "2") {
          genderStatus = "casada";
     } else if (selectGender.value == "2" && selectSpouse.value == "3") {
          genderStatus = "solteira";
     } else if (selectGender.value == "2" && selectSpouse.value == "4") {
          genderStatus = "divorciada";
     } else if (selectGender.value == "2" && selectSpouse.value == "5") {
          genderStatus = "em união estável";
     } else if (selectGender.value == "2" && selectSpouse.value == "6") {
          genderStatus = "solteiro";
     } else if (selectGender.value == "2" && selectSpouse.value == "7") {
          genderStatus = "viuva";
     };

     switch (selectGender.value) {
          case "1":
               genderFranchisee = "Franqueado";
               nationality = "brasileiro";
               businesStatus = "empresário";
               registered = "inscrito";
               carrier = "portador";
               born = "nascido";

               spouseCarrier = "portadora";
               spouseNation = "brasileira";
               spouseRegistered = "inscrita";
               break;
          case "2":
               genderFranchisee = "Franqueada";
               nationality = "brasileira";
               businesStatus = "empresaria";
               registered = "inscrita";
               carrier = "portadora";
               born = "nascida";

               spouseCarrier = "portador";
               spouseNation = "brasileiro";
               spouseRegistered = "inscrito";
               break;
     }
}

export {
     getContractNumber,
     born,
     getCc,
     getAg,
     getBank,
     getBirth,
     carrier,
     getState,
     getDay,
     getMonth,
     getYear,
     getFranchisee,
     getRg,
     getCpf,
     nationality,
     businesStatus,
     getEmail,
     registered,
     genderFranchisee,
     getPrice,
     getCity,
     getStreet,
     getHouseN,
     getComplement,
     getNeighborhood,
     getCep,
     getCnpj,
     getBusinessName,
     getBusinessStreet,
     getBusinessCity,
     getBusinessNumber,
     getBusinessNeighborhood,
     getbusinessCep,
     getBusinessComplement,
     getBusinessState,
     getSpouse,
     getSpouseCpf,
     getSpouseRg,
     spouseCarrier,
     spouseNation,
     spouseRegistered,
     genderStatus,
     getUnitCity,
     getUnitState,
     franchiseeFileName,
     businessCityFileName
};
