import React,{useState} from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const Search = () => {
    const [input, setInput] = useState('')
    
    const navigate = useNavigate() //navigate dùng để điều hướng
    const submitHandle = (e)=>{
        e.preventDefault()
        navigate('/searched/'+input)

    }
  return (
    <FormStyle onSubmit={submitHandle}>
        <div>
            <FaSearch/>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        </div>
    </FormStyle>
  )
}
const FormStyle = styled.form`
    /* margin: 0px 20px; */
    div{
        position: relative;
        width: 100%;
    }
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border:none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform:translate(100%,-50%);
        color: white;
    }

`

export default Search