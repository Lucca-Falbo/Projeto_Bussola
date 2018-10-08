import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from "./Home";
import Inkonik from "./Inkonik";
import Pieta from "./Pieta";
import Tatuadores from "./Tatuadores"
import './index.css';


class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <Router>
            	<div>
                <Navbar color="indigo" dark expand="md" scrolling>
                    <NavbarBrand>
                        <NavLink exact to="/"><strong>Estudios BH</strong></NavLink>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem>
                              <NavLink to="/Inkonik">Inkonik</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/Pieta">Pieta</NavLink>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
                <main style={{marginTop: '4rem'}}>
                	<Route exact path="/" component={Home}/>
                	<Route path="/Inkonik" component={Inkonik}/>
                	<Route path="/Pieta" component={Pieta}/>
                	<Tatuadores />
          		</main>
          		</div>
            </Router>
        );
    }
}

export default App;
