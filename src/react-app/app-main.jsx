import React from 'react';
import UserManage from './components/user-manage';
import Overview from './components/overview';

class AppMain extends React.Component {
    render() {
        return (
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <UserManage/>
            </div>
        );
    }
}

export default AppMain;