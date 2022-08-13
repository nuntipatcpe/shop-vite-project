import React from 'react'

const useCalulatePice=(data) =>{
    let allPice = data.reduce((sum,currentValue)=>sum+(currentValue.pice*currentValue.quality),0);
    let tax = ((7/100)*allPice);
    let sum = allPice-tax;
    return {allPice,tax,sum};

}

export default useCalulatePice