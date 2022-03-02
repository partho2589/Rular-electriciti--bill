function rularElectricityBillPaper (unit){
    if (typeof unit != 'number'){
        return ( 'Sorry sir, Your input is incorrect.')
    }
    if (unit <=50){
        let enarges = unit * 3.83;
        let enarge = Math.ceil(enarges);
        let dimandChage = 30;
        let nedBill = enarge + dimandChage
        let govVats = (5/100) * nedBill;
        let govVat = Math.ceil(govVats);
        let mitarVara = 10;
        let TotalBill = nedBill + govVat + mitarVara;
         bill = TotalBill;
    }
    else if ( unit <=100 ){
        let first50Enarges = 50*3.83;
        let secoundEnarges = (unit- 50) *5;
        let totalEnarges = first50Enarges + secoundEnarges;
        let totalEnarge = Math.ceil(totalEnarges);
        let dimandChage = 30;
        let nedBill = totalEnarge + dimandChage
        let govVats = (5/100) * nedBill;
        let govVat = Math.ceil(govVats);
        let mitarVara = 10;
        let TotalBill = nedBill + govVat + mitarVara;
         bill = TotalBill
    }
    else if ( unit >100 ){
        let first50Enarges = 50*3.83;
        let secound50Enarges = (100- 50) *5;
        let lastEnarges = (unit - 100) * 7
        let totalEnarge = first50Enarges + secound50Enarges + lastEnarges;
        let totalEnarges = Math.ceil( totalEnarge);
        let dimandChage = 30;
        let nedBill = totalEnarges + dimandChage
        let govVats = (5/100) * nedBill;
        let govVat = Math.ceil(govVats);
        let mitarVara = 10;
        let TotalBill = nedBill + govVat + mitarVara;
         bill = TotalBill
    }
    return bill
}
console.log( rularElectricityBillPaper(120))