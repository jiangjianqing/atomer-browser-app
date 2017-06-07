import React from 'react';
import Sidebar from './sidebar';
import AppMain from './app-main';

class AppContainer extends React.Component {
    constructor(props){
        super(props);

        this.handleComponentChange = this.handleComponentChange.bind(this);

        //Lifting State Up
        this.state = {
            currentComponent : 'overview'
        }
    }

    handleComponentChange(newComponent){
        this.setState({
            currentComponent : newComponent
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Sidebar currentComponent={this.state.currentComponent} onComponentChange={this.handleComponentChange}></Sidebar>
                    <AppMain></AppMain>
                </div>
            </div>
        );
    }
}

export default AppContainer;