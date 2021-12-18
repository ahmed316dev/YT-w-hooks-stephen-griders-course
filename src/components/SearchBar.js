import React, {useState} from 'react'


const SearchBar = ({onFormSubmit, label}) =>{
    const [term, setTerm] = useState('')

    return(
        <div className='search-bar ui segment'>
            <form onSubmit={e=>{e.preventDefault(); onFormSubmit(term)}} className='ui form'>
                <div className='field'>
                    <label>{label}</label>
                    <input 
                    type='text' 
                    value={term}
                    onChange={e=>setTerm(e.target.value)} 
                    />
                </div>
            </form>
        </div>
    )
}


export default SearchBar