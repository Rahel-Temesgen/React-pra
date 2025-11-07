import React, {useState} from 'react'
import './SearchBar.css'

const SearchBar = (props) => {

    const [searchValue, setsearchValue] = useState('');

    const handleChange = (e) => {
        setsearchValue(e.target.value);
    }

    const handleClear = () => {
        setsearchValue("");
    }

    const shouldDisplayBtn = searchValue.length > 0;

    const filterdProduct = props.products.filter(product => {
        return product.includes(searchValue);
    })
    
    return (
        <div className='container'>
            <input className="text-input" type="text" value={searchValue} onChange={handleChange}/> 

            {shouldDisplayBtn && <button className='clear-btn' onClick={handleClear}>Clear</button>}

            <ul>
                {filterdProduct.map(product => {
                    return (
                        <li key={product}>{product}</li>
                    )
                })}
            </ul>
            
        </div>
    )
}

export default SearchBar