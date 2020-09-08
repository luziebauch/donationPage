import React from 'react';
import { RadioButton, Input } from 'chayns-components/lib';
import '../app.scss';

const Euro = () => (
    <div className="radioButtons">
        <RadioButton>
            1€
        </RadioButton>
        <RadioButton>
            2€
        </RadioButton>
        <RadioButton>
            5€
        </RadioButton>
        <RadioButton>
            10€
        </RadioButton>
        <RadioButton>
            <Input
                className="input"
                type="text"
                id="search"
                style={{ width: '200px', border: 'none' }}
                placeholder="Eigener Betrag"
            />
        </RadioButton>
    </div>
);
export default Euro;
