import React, { useState } from 'react';
import { RadioButton, Input, Checkbox, Button } from 'chayns-components/lib';
import '../app.scss';

function Euro() {
    const [oneEuro, setOneEuro] = useState('');
    const [twoEuro, setTwoEuro] = useState('');
    const [fiveEuro, setFiveEuro] = useState('');
    const [tenEuro, setTenEuro] = useState('');
    const [someEuro, setSomeEuro] = useState('');
    const [euro, setEuro] = useState(true);

    function alertUser() {
        if (euro.checked === true) {
            chayns.dialog.alert(`Danke für deine Spende, ${chayns.env.user.firstName}!`);
        } else {
            chayns.dialog.alert(`Bitte gebe eine Spende an, ${chayns.env.user.firstName}!`);
        }
    }

    return (
        <div className="mainBody">
            <div className="radioButtons">
                <RadioButton name={euro} value={oneEuro}>
                    1€
                </RadioButton>
                <RadioButton name={euro} value={twoEuro}>
                    2€
                </RadioButton>
                <RadioButton name={euro} value={fiveEuro}>
                    5€
                </RadioButton>
                <RadioButton name={euro} value={tenEuro}>
                    10€
                </RadioButton>
                <RadioButton name={euro} value={someEuro}>
                    <Input
                        className="input"
                        type="number"
                        id="search"
                        style={{ width: '200px', border: 'none' }}
                        placeholder="Eigener Betrag"
                    />
                </RadioButton>
            </div>
            <div className="anonymButton">
                <div>Anonym spenden</div>
                <Checkbox type="checkbox" toggleButton="true"/>
            </div>
            <div className="donationButton">
                <Button disabled="false" onClick={() => { alertUser(); }}>Spenden</Button>
            </div>
        </div>

    );
}
export default Euro;
