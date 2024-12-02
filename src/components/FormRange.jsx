import { useState } from 'react';

const FormRange = ({label, name, size, price}) => {
    const step = 1000;
    const maxPrice = 100000;
    const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);

    return (
        <div className="form-control">
            <label htmlFor={name}  className="label cursor-pinter">
                <span className="label-text capitalize">
                    {label}
                </span>
                <span>${selectedPrice / 100}</span>
            </label>
                <input type="range" name={name} min={0} max={maxPrice} id={name} value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)} step={step} className={`range range-primary ${size}`} />
        </div>
    )
}

export default FormRange