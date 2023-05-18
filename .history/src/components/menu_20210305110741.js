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
                    <div>
                        <li><a href="#">Home</a></li>
                    </div>
                    <div>
                        <li><a href="#">Order List</a></li>
                    </div>
                    <div>
                        <li><a href="#">Contact Us</a></li>
                    </div>
                </ul>
                <ul className="setting-drop">
                    <div>
                        <li><a href="#">Profile</a></li>
                    </div>
                    <div>
                        <li><a href="#">Home</a></li>
                    </div>
                    <div>
                        <li><a href="#">Order List</a></li>
                    </div>
                    <div>
                        <li><a href="#">Contact Us</a></li>
                    </div>
                </ul>

                <ul className="help=drop">
                    <div>
                        <li><a href="#">Profile</a></li>
                    </div>
                    <div>
                        <li><a href="#">Home</a></li>
                    </div>
                    <div>
                        <li><a href="#">Order List</a></li>
                    </div>
                    <div>
                        <li><a href="#">Contact Us</a></li>
                    </div>
                </ul>

            </div>
            </div>

        )
    }
}
<script>
    const drop_btn = document.querySelector(".drop_btn");
    const menu_bar = document.querySelector(".wrapper")'
    '
</script>
export default Menu
