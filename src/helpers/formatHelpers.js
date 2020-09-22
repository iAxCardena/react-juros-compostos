const formatter = Intl.NumberFormat('pt-BR');
const currencyFormatter = Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});

function formatNumber(value) {
    return formatter.format(value);
}

function formatCurrency(value) {
    return currencyFormatter.format(value);
}

export {formatNumber, formatCurrency};