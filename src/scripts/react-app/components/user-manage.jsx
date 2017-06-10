import React from 'react';

class UserManage extends React.Component {
    componentDidMount() {
        console.log("user-manage mounted!");
    }

    componentWillUnmount() {
        console.log("user-manage unmounted!");
    }

    //If you need to update state in response to a prop change, use componentWillReceiveProps() instead.


//shouldComponentUpdate() // deprecated!!
    //Note that in the future React may treat shouldComponentUpdate() as a hint rather than a strict directive,
    // and returning false may still result in a re-rendering of the component.


    render() {
        return (
            <div>
                <h2>用户管理</h2>
                <input type="text"/>
            </div>


        );
    }
}

export default UserManage;