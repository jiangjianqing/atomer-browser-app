import React from 'react';
import AppNav from './app-nav';
import AppContainer from './app-container';

class Hello extends React.Component {
    render() {
        return (
            <div className="app-container">
                <AppNav></AppNav>
                <AppContainer></AppContainer>
            </div>
        );
    }
}

module.exports = Hello;