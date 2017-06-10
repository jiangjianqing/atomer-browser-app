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
        this.counter = 0;
        console.log("lifecycle范例基本都写在 user-manage 中，请查阅。");
    }

    render() {
        console.log("app-main测试状态保持(keep-alive) : " + this.counter++);
        return (
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                {components[this.props.currentComponent]}
            </div>
        );
    }
}

export default AppMain;