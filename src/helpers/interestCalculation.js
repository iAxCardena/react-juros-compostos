export default function interestCalculation(capital, taxa, tempo) {
    let parcelas = [];
    let periodo = 0;

    for(let i = 1; i<=tempo; i++){
        periodo = Math.pow((1+(taxa/100)), i);
        periodo = +periodo;

        let montante = capital*periodo;

        let juros = montante - capital;

        let porcentagem = (juros*100)/capital;

        montante = +montante;
        porcentagem = +porcentagem;
        juros = +juros;
        
        
        parcelas.push({
            id: i,
            capital: +(capital+juros).toFixed(2),
            porcentagem: +porcentagem.toFixed(2),
            juros: +juros.toFixed(2)
        });
    }
    
    // console.log(parcelas);

    return parcelas;
}

// interestCalculation(5090, 0.8, 12);
export {interestCalculation};