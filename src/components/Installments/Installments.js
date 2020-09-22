import React from 'react';
import Installment from './Installment';

export default function Installments({ parts }) {
    return (
        <div className="row">
            {parts.map(item => {
                return <Installment key={item.id} data={item}/>
            })}
        </div>
    )
}
