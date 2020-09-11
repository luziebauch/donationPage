import React from 'react';
import '../app.scss';
import { Button } from 'chayns-components/lib';

function DonationButton() {
    function alertUser() {
        chayns.dialog.alert(`Danke für deine Spende, ${chayns.env.user.firstName}!`);
    }

    return (
        <div className="donationButton">
            <Button onClick={() => { alertUser(); }}>Spenden</Button>
        </div>
    );
}
export default DonationButton;
