import React, { Component } from 'react'

export class Menu extends Component {
    render() {
        return (

            <div>
            <div className="drop-btn">
                Drop Down <span className="fas fa-caret-down"></span>
            </div>
            <div className="wrapper">
                <ul className="menu-bar">
                    <div>
                        <li><a href="#">Profile</a></li>
                    </div>
                </ul>
            </div>
            </div>
        )
    }
}

export default Menu
