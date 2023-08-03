function getFranchiseFee(franchiseFee){
    franchiseFee = document.getElementById('franchiseFee');  
    return parseFloat(franchiseFee.value)
}
export {getFranchiseFee as getF};