import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {Fab} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import QRCode from 'qrcode.react';
import styled from 'styled-components';
import './QRApp.css'

const generatePayload = require('promptpay-qr');
const QRWrapper = styled.div`
  margin: auto;
  padding: 10px;
`

const InputWrapper = styled.div`
  margin: auto;
  width: 300px;
  padding: 10px;
`

function QRgen() {
  const [ phoneNumber, setPhoneNumber ] = useState("012-345-6789");
  const [ amount, setAmount ] = useState(1.00);
  const [ qrCode ,setqrCode ] = useState("sample");

  function handlePhoneNumber(e) {
    setPhoneNumber(e.target.value);
  }

  function handleAmount(e) {
    if (e.target.value > 0) {
      setAmount(parseFloat(e.target.value));
    } else setAmount(0);
  }

  function handleQR() {
    setqrCode(generatePayload(phoneNumber, { amount }));
  }

  return (
    <div class="QRApp">
      <Link to="/">
            <Fab style={{marginRight:10}} color="secondary">
                <ArrowBack/> 
            </Fab>            
      </Link>
      <span class="home">Back to Home</span>
      <h1 class="PosmeQR">
            Posme Promptpay generator
      </h1>
        <QRWrapper>
          {/* <div class="qrgened"> */}
            <QRCode value={qrCode} class="qrgened"/>
          {/* </div> */}
        </QRWrapper>
        <InputWrapper>
          <input type="text" value={phoneNumber} onChange={handlePhoneNumber} class="mobile" />
          <input type="text" value={amount} onChange={handleAmount} />
          <button onClick={handleQR} class="genbut">Generate Promptpay QR</button>
        </InputWrapper>
    </div>
  );
}

export default QRgen;
