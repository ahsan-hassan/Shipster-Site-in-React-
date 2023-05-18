import React, { Component } from 'react'

export class Menu extends Component {
    
    render() {
        const drop_btn = document.querySelector(".drop_btn");
        const menu_wrapper = document.querySelector(".wrapper");
        const setting_drop = document.querySelector(".setting_drop");
        const help_drop = document.querySelector(".help_drop");
        drop_btn.onclick=(()=>{
            menu_wrapper.classList.toggle("show");
        });
        return (

            <Nav>
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
            </Nav>

        )
    }
}
<script>

</script>
export default Menu
