import MobileMenu from "../MobileMenu/MobileMenu";
import React, {useState} from "react";

export default function Header(){

    const[menuActive, setMenuActive] = useState(false);

    return(
        <section className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="menu">
                            <a href="#demos">Demos</a>
                            <a href="#features">Features</a>
                            <a href="#highlights">Highlights</a>
                            <a href="#">Documentation</a>
                        </div>
                        <div className="mobile-menu" onClick={() => 
                          setMenuActive(!menuActive)
                            

                            }>
                            <i class="fas fa-bars"></i>
                        </div>
                    </div>
                   <div className="col-6 button-section">
                    <div >
                            <a className="button" href="#">get theme</a>
                        </div>
                   </div>
                    
                </div>
           
            </div>


            <section className={menuActive ? "mobile-menu-column menu-active":"mobile-menu-column menu-inactive"} >
                <a href="#" className="item">
                    <div className="item-content">
                        Demos
                    </div>
                </a>
                <a href="#" className="item" >
                    <div className="item-content">
                        Features
                    </div>
                </a>
                <a href="#" className="item">
                    <div className="item-content">
                        Documentation
                    </div>
                </a>
                <a href="#" className="item">
                    <div className="item-content">
                        Support
                    </div>
                </a>
            </section>

           
           
            
        </section>
    )
}