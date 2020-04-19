import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { _ } from "underscore";

import SideBarComponent from "../navigation/side-nav";
import NavBarComponent from "../navigation/nav-bar";
import { Row, Col, Button, Tab, Tabs } from "react-bootstrap";
import { Table } from 'react-bootstrap';

// import RButton from "../../../../reusable-component/button";
// import { TABLE } from "../../../../lib/constant";
import "./style.scss";

class BreakdownChartComponent extends Component {

    render() {
        return (
            <div className="breakdown-chart">
                <SideBarComponent />
                <div id="right-panel" className="right-panel">
                    <NavBarComponent auth={true} />
                    <div className="container row" >
<div className = 'breakdownChartTable'>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Table heading</th>
                                    <th>Table heading</th>
                                    <th>Table heading</th>
                                    <th>Table heading</th>
                                    <th>Table heading</th>
                                    <th>Table heading</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                            </tbody>
                        </Table>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

const mapStateToProps = state => {
    console.log(state);
    let data = { signIn: state.signIn };
    return data;
};
const mapDispatchToProps = dispatch => {
    const actions = {};
    return bindActionCreators(actions, dispatch);
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(BreakdownChartComponent));
