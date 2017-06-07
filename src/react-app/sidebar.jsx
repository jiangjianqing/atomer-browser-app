import React from 'react';


class AppContent extends React.Component {
    constructor(props){
        super(props);
        this.changeItem = this.changeItem.bind(this);
    }
    changeItem(e){
        e.preventDefault();
        let itemName = e.currentTarget.dataset["item"];//两者作用相同
        console.log(e.currentTarget.getAttribute("data-item"));

    }

    render() {
        return (
            <div className="col-sm-3 col-md-2 sidebar">
                <ul className="nav nav-sidebar">
                    <li className={this.props.activatedItem === "overview" ? "active" : ""} onClick={this.changeItem} data-item="overview"><a href="#">Overview</a></li>
                    <li className={this.props.activatedItem === "user-manage" ? "active" : ""}  onClick={this.changeItem} data-item="user-manage"><a href="#">UserManage</a></li>
                </ul>
                <ul className="nav nav-sidebar">
                    <li><a href="">Nav item</a></li>

                </ul>

            </div>
        );
    }
}

export default AppContent;