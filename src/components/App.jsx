import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';

// Components
import Headline from './header/Headline';
import Euro from './main/Euro';
import Loadingbar from './main/Loadingbar';
import AnonymButton from './main/AnonymButton';
import DonationButton from './main/DonationButton';
import Footer from './footer/Footer';

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class App extends PureComponent {
    render() {
        return (
            <>
                <Headline headline="Spendenaktion"/>
                <Loadingbar/>
                <Euro/>
                <AnonymButton/>
                <DonationButton/>
                <Footer/>
            </>
        );
    }
}

export default App;
export const HotApp = hot(App);
