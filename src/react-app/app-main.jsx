import React from 'react';
import UserManage from './components/user-manage';
import Overview from './components/overview';

let components = {
    'overview' : <Overview/>,
    'user-manage' : <UserManage/>
};

class AppMain extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                {components[this.props.currentComponent]}
            </div>
        );
    }
}

export default AppMain;