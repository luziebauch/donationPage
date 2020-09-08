import React from 'react';
import '../app.scss';
import { Checkbox } from 'chayns-components/lib';

const AnonymButton = () => (
    <div className="anonymButton">
        <div>Anonym spenden</div>
        <Checkbox type="checkbox" toggleButton="true"/>
    </div>
);
export default AnonymButton;
