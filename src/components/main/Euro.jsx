import React from 'react';
import { RadioButton, Input } from 'chayns-components/lib';
import '../app.scss';

const Euro = () => (
    <div className="radioButtons">
        <RadioButton name="euro">
            1€
        </RadioButton>
        <RadioButton name="euro">
            2€
        </RadioButton>
        <RadioButton name="euro">
            5€
        </RadioButton>
        <RadioButton name="euro">
            10€
        </RadioButton>
        <RadioButton name="euro">
            <Input
                className="input"
                type="number"
                id="search"
                style={{ width: '200px', border: 'none' }}
                placeholder="Eigener Betrag"
            />
        </RadioButton>
    </div>
);
export default Euro;
