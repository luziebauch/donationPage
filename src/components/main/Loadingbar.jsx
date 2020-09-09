import React from 'react';
import '../app.scss';
import { ProgressBar } from 'chayns-components/lib';

const Loadingbar = () => (
    <div className="loading">
        <div className="loadingbar">
            <ProgressBar value={75}>
                100€
            </ProgressBar>
        </div>
        <div className="barText">
            Schon
            <strong> 75€ </strong>
            wurden gespendet!
        </div>
    </div>
);
export default Loadingbar;
