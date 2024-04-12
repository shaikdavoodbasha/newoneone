import React, { useState } from 'react'
import "./Topic.css"
import { LC, NC, SC, UC } from './PassChar'

function Randompassowrd() {
    let [uppercase, setuppercase] = useState(false)
    let [lowercase, setlowercase] = useState(false)
    let [number, setnumber] = useState(false)
    let [symbol, setsymbol] = useState(false)
    let [passlength, setpasslength] = useState(10)
    let [fpass, setfpass] = useState('')
    let createPassword = () => {
        let finalpassword = ""
        let charset = ''
        if (uppercase || lowercase || number || symbol) {
            if (uppercase) charset += UC
            if (lowercase) charset += LC
            if (number) charset += NC
            if (symbol) charset += SC
            console.log(charset);
            for (let i = 0; i < passlength; i++) {
                finalpassword += charset.charAt(Math.floor(Math.random() * charset.length))
            }
            setfpass(finalpassword)
        }
        else {
            alert("please click on atleast one check box")

        }
    }
    let copyPass=()=>{
        navigator.clipboard.writeText(fpass)
    }
    return (
        <div className='bodydiv'>
            <div className='passwordbox'>
                <h2>Password Generator</h2>
                <div className='passwordBoxin'>
                    <input type='text' readOnly value={fpass} /><button onClick={copyPass}>copy</button>
                </div>
                <div className='passLength'>
                    <label>Password length</label>
                    <input type='number' max={20} min={10} value={passlength} onChange={(event) => setpasslength(event.target.value)} />

                </div>
                <div className='passLength'>
                    <label>Including uppercase letters</label>
                    <input type='checkbox' checked={uppercase} onChange={() => setuppercase(!uppercase)} />

                </div>
                <div className='passLength'>
                    <label>Including lowercase letters</label>
                    <input type='checkbox' checked={lowercase} onChange={() => setlowercase(!lowercase)} />

                </div>
                <div className='passLength'>
                    <label>Including numbers</label>
                    <input type='checkbox' checked={number} onChange={() => setnumber(!number)} />
                </div>
                <div className='passLength'>
                    <label>Including symboxs</label>
                    <input type='checkbox' checked={symbol} onChange={() => setsymbol(!symbol)} />
                </div>
                <button className='botn' onClick={createPassword}>Generator password</button>

            </div>

        </div>
    )
}

export default Randompassowrd