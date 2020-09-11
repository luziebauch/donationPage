import React, { useState } from 'react';
import { RadioButton, Input, Checkbox, Button } from 'chayns-components/lib';
import '../app.scss';

function Euro() {
    const [euro] = useState('euro');
    const [donate, setDonate] = useState(true);
    const [check, setCheck] = useState(false);
    const [ownPrice, setOwnPrice] = useState('');

    function alertUser() {
        chayns.dialog.alert(`Danke für deine Spende, ${chayns.env.user.firstName}!`);
    }
    function disabledButton() {
        setDonate(false);
    }
    function euroSign(event) {
        console.log(event);
        setCheck(true);
        setOwnPrice(`${event.data}€`);
    }

    return (
        <div className="mainBody">
            <div className="radioButtons">
                <RadioButton name={euro} onChange={() => { disabledButton(); }}>
                    1€
                </RadioButton>
                <RadioButton name={euro} onChange={() => { disabledButton(); }}>
                    2€
                </RadioButton>
                <RadioButton name={euro} onChange={() => { disabledButton(); }}>
                    5€
                </RadioButton>
                <RadioButton name={euro} onChange={() => { disabledButton(); }}>
                    10€
                </RadioButton>
                <RadioButton name={euro} checked={check} onChange={() => { disabledButton(); }}>
                    <Input
                        className="input"
                        type="text"
                        style={{ width: '200px', border: 'none' }}
                        placeholder="Eigener Betrag"
                        onChange={() => { euroSign(event); }}
                        value={ownPrice}
                    />
                </RadioButton>
            </div>
            <div className="anonymButton">
                <div>Anonym spenden</div>
                <Checkbox type="checkbox" toggleButton={true}/>
            </div>
            <div className="donationButton">
                <Button disabled={donate} onClick={() => { alertUser(); }}>Spenden</Button>
            </div>
        </div>

    );
}
export default Euro;
