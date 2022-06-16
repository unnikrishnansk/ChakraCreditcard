import React from 'react'

const Form = () => {
  return (
    <div>
        <div className='paymentheading'><h4>Payment details</h4></div>

        <div className='maindiv'>
            <div className='headingdiv'>
                <p>CARDHOLDER NAME</p>
            </div>
            <div className='inputsegment'>
            <div className='imagediv'>
                <img className='icon' src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png" alt="icon" />
            </div>
            <div className='namediv'>
                <input className='input' type="text" placeholder='Enter cardholder name' />
            </div>
            </div>
        </div>

        <div className='maindiv'>
            <div className='headingdiv'>
                <p>CARD NUMBER</p>
            </div>
            <div className='inputsegment'>
            <div className='imagediv'>
                <img className='icon' src="https://cdn-icons-png.flaticon.com/128/633/633611.png" alt="icon" />
            </div>
            <div className='namediv'>
                <input className='input' type="text" placeholder='Enter card number' />
            </div>
            </div>
        </div>
        
        <div className='expiry'>
        <div className='expirydiv'>
            <div className='expirymonthdiv'>
                <p>EXPIRY MONTH</p>
            </div>
            <div className='inputsegment'>
            <div className='expiryimagediv'>
                <img className='expiryicon' src="https://cdn-icons.flaticon.com/png/128/2278/premium/2278049.png?token=exp=1655390687~hmac=f262eb68bce4239e14c735f701f729c2" alt="icon" />
            </div>
            <div className='expirynamediv'>
                <input className='expiryinput' type="text" placeholder='' />
            </div>
            </div>
        </div>

        <div className='expirydiv'>
            <div className='expirymonthdiv'>
                <p>EXPIRY YEAR</p>
            </div>
            <div className='inputsegment'>
            <div className='expiryimagediv'>
                <img className='expiryicon' src="https://cdn-icons.flaticon.com/png/128/2278/premium/2278049.png?token=exp=1655390687~hmac=f262eb68bce4239e14c735f701f729c2" alt="icon" />
            </div>
            <div className='expirynamediv'>
                <input className='expiryinput' type="text" placeholder='' />
            </div>
            </div>
        </div>

        <div className='expirydiv'>
            <div className='expirymonthdiv'>
                <p>CVV</p>
            </div>
            <div className='inputsegment'>
            <div className='expiryimagediv'>
                <img className='expiryicon' src="https://cdn-icons-png.flaticon.com/128/3064/3064155.png" alt="icon" />
            </div>
            <div className='expirynamediv'>
                <input className='expiryinput' type="text" placeholder='' />
            </div>
            </div>
        </div>
        </div>

        <div className='paymentheading'><h4>Payment amount : </h4></div>

    </div>
  )
}

export default Form;