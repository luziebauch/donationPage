import React from 'react';
import '../app.scss';
import { Accordion, List, ListItem } from 'chayns-components/lib';

const Footer = () => (
    <div className="footer">
        <div className="donors">
            <Accordion head="Alle Spender">
                <div className="accordion__content">
                    <List>
                        <ListItem
                            title="Luzie Bauch"
                            subtitle="20€"
                            image="https://chayns.tobit.com/storage/60038-22141/Images/icon-72.png"
                        />
                    </List>
                </div>
            </Accordion>
        </div>
        <div className="myDonations">
            <Accordion head="Meine Spenden">
                <div className="accordion__content">
                    <List>
                        <ListItem
                            title="20€ für Hans Franz"
                            image="https://chayns.tobit.com/storage/60038-22141/Images/icon-72.png"
                        />
                    </List>
                </div>
            </Accordion>
        </div>
    </div>
);
export default Footer;
