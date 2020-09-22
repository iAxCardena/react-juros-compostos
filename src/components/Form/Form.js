import React from 'react';
import css from './form.module.css';

export default function Form({description, value, min, max, step, onValueChange}) {
    const handleChange = (event) => {
        // console.log(event.target.value);
        onValueChange(+event.target.value);
    }

    return (
        <div>
            <form>
                <div className={css.flexRow}>
                    <label>{description}: </label>
                    <input type="number" value={value} min={min} max={max} step={step} onChange={handleChange} />
                </div>
            </form>
        </div>
    )
}
