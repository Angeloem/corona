import React, {Component} from 'react';
import './styles/menu.scss';

export class Menu extends Component {
    render() {
        return (
            <nav className={`nav`}>
                <div className={`dashboard-heading`}>
                    <h4>Corona Dashboard</h4>
                    <div>Statistics</div>
                </div>
                <div className={`time-span`}>
                    This Week
                </div>
            </nav>
        );
    }
}