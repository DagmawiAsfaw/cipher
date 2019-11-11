import React, {useState} from 'react';
import './encrypt.style.sass'
const aesjs = require('aes-js');

export default function Encrypt() {
    let [key,setKey]=useState([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]);
    let [inputData,setInputData]=useState(' ');
    let [result, setResult] = useState(' ');

let encrypt = (string)=>{
    let textBytes = aesjs.utils.utf8.toBytes(string);

    let aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    let encryptedBytes = aesCtr.encrypt(textBytes);

    let encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    setResult(encryptedHex);
};



let decrypt = (hexstring)=>{
    let encryptedBytes = aesjs.utils.hex.toBytes(hexstring);

    let aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    let decryptedBytes = aesCtr.decrypt(encryptedBytes);

    let decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    setResult(decryptedText);
};

let handleEncrypt= ()=>{
    let textToBeEnc = document.getElementById('input').value.toString();
    encrypt(textToBeEnc)
};

let handleDecrypt= ()=>{
    let textToBeDec =document.getElementById('input').value.toString();
    decrypt(textToBeDec);
}

    return (
        <div className='encrypt section'>
            <div className='userInput section'>
                <div className='item'>
                    <h3>AES encryption</h3><br/>
                    <hr/>
                </div>

                <div className='item'>
                    <span className='userInput__inputLabel'>- Data :    </span>
                    <span className='userInput__input'>
                        <textarea name="to_be_enc"  id='input' cols="60" rows="5"
                                  placeholder='enter string to be encrypted/decrypted'/>
                    </span>
                </div>
                <div className='item item__button'>
                    <button className=' button' onClick={handleEncrypt}>ENCRYPT</button>
                    <button className=' button' onClick={handleDecrypt}>DECRYPT</button>
                </div>
            </div>
            <div className='result section'>
                <div className='item'>
                    <span className='result__data--label'>- Result :</span>
                    <span className='result_data output'>{result}</span>
                </div>
            </div>
        </div>
    )
}