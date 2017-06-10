import React from 'react';


class AppContent extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        e.preventDefault();
        let itemName = e.currentTarget.dataset["item"];//上下两句作用相同
        console.log(e.currentTarget.getAttribute("data-item"));

        this.props.onComponentChange(itemName);

    }

    render() {
        return (
            <div className="col-sm-3 col-md-2 sidebar">
                <ul className="nav nav-sidebar">
                    <li className={this.props.currentComponent === "overview" ? "active" : ""} onClick={this.handleChange} data-item="overview"><a href="">Overview</a></li>
                    <li className={this.props.currentComponent === "user-manage" ? "active" : ""}  onClick={this.handleChange} data-item="user-manage"><a href="">UserManage</a></li>
                </ul>
                <ul className="nav nav-sidebar">
                    <li><a href="">Nav item</a></li>

                </ul>

            </div>
        );
    }
}

export default AppContent;