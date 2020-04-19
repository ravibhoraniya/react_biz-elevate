import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { _ } from "underscore";

import SideBarComponent from "../../../navigation/side-nav";
import NavBarComponent from "../../../navigation/nav-bar";
import RTable from "../../../../reusable-component/table";
import { Row, Col, Button, Tab, Tabs } from "react-bootstrap";
import RButton from "../../../../reusable-component/button";
import { TABLE } from "../../../../lib/constant";

import "./style.scss";

class CampaignsListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campaignList: [],
            adsetList: [],
            adsList: [],
            campaignSwitchesStates: {},
            adsetSwitchesStates: {},
            adsSwitchesStates: {},
            checked: false,
            modal: false,
            selectedTab: "campaigns",
            checkboxState: false,
            selectedListId: null
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="campaigns-list">
                <SideBarComponent />
                <div id="right-panel" className="right-panel">
                    <NavBarComponent auth={true} />
                    <div className="container-fluid">
                        <Row className="mb-4">
                            <Col className="col-md-12">
                                <h2 className="page_title">Ad Library</h2>
                            </Col>
                        </Row>
                        <div className="box-table">
                            <div className="box-table-header">
                                <Row className="">
                                    <Col className="col-md-6 ev-header-left ev-inline-form">
                                        <div className="ev-inline-form-input">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                            <input type="text" className="form-control" placeholder="Search keyword" />
                                        </div>
                                        <select className="form-control">
                                            <option>Filter By</option>
                                        </select>
                                    </Col>
                                    <Col className="col-md-6 ev-header-right">
                                        <select className="form-control">
                                            <option>This Month: Mar 1,2020 - Mar31, 2020</option>
                                        </select>
                                    </Col>
                                </Row>
                            </div>
                            <div className="box-table-body">
                                <Row className="btn-row">
                                    <Col className="col-md-12">
                                        <button className="btn ev-primary">Create Ad POST</button>
                                        <button className="btn ev-secondary"><i class="fa fa-clone" aria-hidden="true"></i> Duplicate</button>
                                        <button className="btn ev-secondary"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
                                    </Col>
                                </Row>
                                <Row className="table-data">
                                    <Col className="col-md-12">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <input type="checkbox" id="checkbox-all" />
                                                        <label className="ev-check-box" for="checkbox-all"></label>
                                                    </th>
                                                    <th>Post name</th>
                                                    <th>post id</th>
                                                    <th>privacy</th>
                                                    <th>date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox" id="checkbox-1" />
                                                        <label className="ev-check-box" for="checkbox-1"></label>
                                                    </td>
                                                    <td>
                                                        We are Logistics and Lords of Thrones
                                                        <p className="action">
                                                            <i class="fa fa-clone" aria-hidden="true"></i> <a href="#">Duplicate</a>
                                                            &nbsp;&nbsp;&nbsp;
                                                            <i class="fa fa-trash-o" aria-hidden="true"></i> <a href="#">Duplicate</a>
                                                        </p>
                                                    </td>
                                                    <td>15616781981 <a href=""><i class="fa fa-clone" aria-hidden="true"></i></a></td>
                                                    <td>Private</td>
                                                    <td>18 March, 2020</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox" id="checkbox-1" />
                                                        <label className="ev-check-box" for="checkbox-1"></label>
                                                    </td>
                                                    <td>
                                                        We are Logistics and Lords of Thrones
                                                        <p className="action">
                                                            <i class="fa fa-clone" aria-hidden="true"></i> <a href="#">Duplicate</a>
                                                            &nbsp;&nbsp;&nbsp;
                                                            <i class="fa fa-trash-o" aria-hidden="true"></i> <a href="#">Duplicate</a>
                                                        </p>
                                                    </td>
                                                    <td>15616781981 <a href=""><i class="fa fa-clone" aria-hidden="true"></i></a></td>
                                                    <td>Private</td>
                                                    <td>18 March, 2020</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="checkbox" id="checkbox-1" />
                                                        <label className="ev-check-box" for="checkbox-1"></label>
                                                    </td>
                                                    <td>
                                                        We are Logistics and Lords of Thrones
                                                        <p className="action">
                                                            <i class="fa fa-clone" aria-hidden="true"></i> <a href="#">Duplicate</a>
                                                            &nbsp;&nbsp;&nbsp;
                                                            <i class="fa fa-trash-o" aria-hidden="true"></i> <a href="#">Duplicate</a>
                                                        </p>
                                                    </td>
                                                    <td>15616781981 <a href=""><i class="fa fa-clone" aria-hidden="true"></i></a></td>
                                                    <td>Private</td>
                                                    <td>18 March, 2020</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CampaignsListComponent;
