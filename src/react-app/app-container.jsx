import React from 'react';
import Sidebar from './sidebar';
import AppMain from './app-main';

class AppContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activatedItem : 'overview'
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Sidebar activatedItem={this.state.activatedItem}></Sidebar>
                    <AppMain></AppMain>
                </div>
            </div>
        );
    }
}

export default AppContainer;