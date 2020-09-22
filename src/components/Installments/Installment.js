import React from 'react';
import { formatCurrency } from '../../helpers/formatHelpers';

export default function Installment({ data }) {
    const { id, capital, juros, porcentagem } = data;

    let capitalJurosColor = "green-text darken-4";
    let porcentagemColor = "blue-text darken-4";

    if (juros < 0) {
        capitalJurosColor = "red-text darken-4";
        porcentagemColor = "orange-text darken-4";
    }

    const formatedCapital = formatCurrency(capital);
    const formatedJuros = formatCurrency(juros);

    return (
        <div className="col s6 m3 l2">
            <div style={styles.flexRow}>
                <span style={{ marginRight: '5px', fontWeight: 'bold' }}>{id}</span>
                <div>
                    <div className={capitalJurosColor}>{formatedCapital}</div>
                    <div className={capitalJurosColor}>{formatedJuros}</div>
                    <div className={porcentagemColor}>{porcentagem}%</div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        border: '1px solid lightgray',
        borderRadius: '8px',
        padding: '4px',
        margin: '4px'
    }
}