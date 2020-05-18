import React, { Component, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { _ } from "underscore";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays, isThisSecond, isExists } from 'date-fns';


import SideBarComponent from "../../../navigation/side-nav";
import NavBarComponent from "../../../navigation/nav-bar";
import RTable from "../../../../reusable-component/table";
import { Row, Col, Button, Tab, Tabs } from "react-bootstrap";
import RButton from "../../../../reusable-component/button";
import { TABLE } from "../../../../lib/constant";
import ViewModal from './modal/modal';
import CreateModal from './modal/create_modal';
import moment from "moment";

import "./style.scss";

/*
* Import fetch function
*/
import { getList, deleteCampaign, copyCampaign } from '../../../../actions/list/index';


class CampaignsListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            modalView: false,
            modalCreateView: false,
            dateRange: [
                {
                    startDate: new Date(),
                    endDate: addDays(new Date(), 7),
                    key: 'selection'
                }
            ],
            datePicker: false,
            ad_account_id: "act_189522688767499",
            userId: this.props.signIn.data.userId
        };
        this.OpenViewModal = this.OpenViewModal.bind(this);
    }

    componentDidMount() {
        this._getListALl();
    }

    _getListALl() {
        let userData = {
            userId: this.state.userId,
            ad_account_id: this.state.ad_account_id
        };
        getList(userData).then(res => {
            if (res.data) {
                this.setState({
                    list: res.data,
                });
            }
        });
    }

    _deleteCampaign(Campid) {
        let userData = {
            userId: this.state.userId,
            campaignId: Campid
        };
        deleteCampaign(userData).then(res => {
            if (res.data.success) {
                alert('Delete Campaign');
                this._getListALl();
            }
        });
    }

    _copyCampaign(Campid) {
        let userData = {
            userId: this.state.userId,
            campaignId: Campid,
            numberOfCopies: 1,
        };
        copyCampaign(userData).then(res => {
            if (res.success) {
                alert('Duplicate Campaign');
                this._getListALl();
            }
        });
    }

    OpenViewModal(Listid) {
        this.setState({
            modalView: true
        });
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
                                        <div className="form-control" onClick={() => { this.setState({ datePicker: !this.state.datePicker }); }}>
                                            <span>Date Filter: {moment(this.state.dateRange[0].startDate).format('DD MMM YYYY')} - {moment(this.state.dateRange[0].endDate).format('DD MMM YYYY')}</span>
                                        </div>
                                        <DateRangePicker
                                            onChange={item => {
                                                this.setState({
                                                    dateRange: [item.selection]
                                                });
                                                console.log(this.state.dateRange);
                                            }}
                                            showSelectionPreview={true}
                                            moveRangeOnFirstSelection={false}
                                            months={2}
                                            ranges={this.state.dateRange}
                                            direction="horizontal"
                                            disabled={true}
                                            className={this.state.datePicker ? 'date_show' : 'date_hide'}
                                        />
                                    </Col>
                                </Row>
                            </div>
                            <div className="box-table-body">
                                <Row className="btn-row">
                                    <Col className="col-md-12">
                                        <button className="btn ev-primary" onClick={() => this.setState({ modalCreateView: true })}>Create Ad POST</button>
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
                                                {
                                                    this.state.list.map(i =>
                                                        <tr>
                                                            <td>
                                                                <input type="checkbox" id="checkbox-1" />
                                                                <label className="ev-check-box" for="checkbox-1"></label>
                                                            </td>
                                                            <td >
                                                                <span onClick={() => this.OpenViewModal(this, i.id)}>
                                                                    {i.name}
                                                                </span>
                                                                <p className="action">
                                                                    <i class="fa fa-clone" aria-hidden="true"></i>
                                                                    <a href="javascript:void()" onClick={() => this._copyCampaign(i.id)}>
                                                                        Duplicate
                                                                    </a>
                                                                    &nbsp;&nbsp;&nbsp;
                                                                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                                                                    <a href="javascript:void()" onClick={() => this._deleteCampaign(i.id)}>
                                                                        Delete
                                                                    </a>
                                                                </p>
                                                            </td>
                                                            <td>{i.id} <a href=""><i class="fa fa-clone" aria-hidden="true"></i></a></td>
                                                            <td>{i.effective_status}</td>
                                                            <td>{moment(i.created_time).format('DD MMM YYYY')}</td>
                                                        </tr>
                                                    )
                                                }

                                            </tbody>
                                        </table>
                                    </Col>
                                </Row>
                                <ViewModal show={this.state.modalView} handleClose={() => this.setState({
                                    modalView: false
                                })} />
                                <CreateModal
                                    userId={this.state.userId}
                                    AdacountId={this.state.ad_account_id}
                                    show={this.state.modalCreateView}
                                    handleClose={() => this.setState({
                                        modalCreateView: false
                                    })}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    let data = { signIn: state.signIn };
    return data;
};

export default connect(
    mapStateToProps,
)(withRouter(CampaignsListComponent));