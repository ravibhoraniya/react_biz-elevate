import React, { Component } from "react";
import { Modal, Button, Row, Col, Tabs, Tab } from "react-bootstrap";
import "./create_modal.scss";

/*
* Import fetch function
*/
import { getList, deleteCampaign, copyCampaign } from '../../../../../actions/list/index';


class RenderModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgArr: null,
            AdPostType: 'create',
            ad_account_id: this.props.AdacountId,
            userId: this.props.userId,
            list: [],
            postMethod: 1,

        };
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

    render() {
        const { show, handleClose } = this.props;
        const { imgArr } = this.state;
        return (
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header className="modal_header">
                    <Col className="col-md-6 title">
                        <h2>Untitled Ad Name |</h2>
                    </Col>
                    <Col className="col-md-6 action_btn">
                        <a href="#" className="btn_trash"> Discard <i class="fa fa-trash" aria-hidden="true"></i> </a>
                        <button className="btn btn-secondary">SAVE DRAFT</button>
                        <button className="btn btn-primary">CREATE AD post</button>
                        <i class="fa fa-times-circle-o" aria-hidden="true" onClick={handleClose}></i>
                    </Col>
                </Modal.Header>
                <Modal.Body>
                    <Row className="modal_body">
                        <div className="tab_bar">
                            <Tabs defaultActiveKey="ad_basics" id="uncontrolled-tab-example">
                                <Tab eventKey="ad_basics" title="Ad Basics">
                                    <div className="tab_form_data">
                                        <h3>Chose your ad post method</h3>
                                        <p>Choose how you'd like to process with ad post</p>
                                        <div className="tab_1_1">
                                            <div className="radio_box" onClick={() => this.setState({ AdPostType: 'create' })}>
                                                <input type="radio" name="post_method" checked={this.state.AdPostType == 'create' ? 'checked' : ''} />
                                                <span>Create Ad Post</span>
                                            </div>
                                            <div className="radio_box" onClick={() => this.setState({ AdPostType: 'exist' })}>
                                                <input type="radio" name="post_method" checked={this.state.AdPostType == 'exist' ? 'checked' : ''} />
                                                <span>Use Existing Post</span>
                                            </div>
                                        </div>
                                        {
                                            this.state.AdPostType == 'create' ?
                                                <Row className="postCreate_row">
                                                    <Col className="col-md-12">
                                                        <h3>Identity</h3>
                                                        <p>Choose how you want your business to be represented in your ad.</p>
                                                    </Col>
                                                    <Row className="bk_gry postCreate_account">
                                                        <Col className="col-md-6">
                                                            <strong>Instagram Account</strong>
                                                            <p>Select an Instagram account to represent your business in your Instagram ad. Instagram ad will use the
                                                            Facebook Page name and profile picture, as well as details like the description and number of followers. To
                                                    manage available Instagram accounts, contact your Business Manager admin.</p>
                                                            <select className="form-control">
                                                                <option>Teacher's Humour</option>
                                                            </select>
                                                        </Col>
                                                        <Col className="col-md-6">
                                                            <strong>Facebook Page</strong>
                                                            <p>Your Facebook Page or Instagram account represents your business in ads. You can also Create a Facebook Page</p>
                                                            <select className="form-control">
                                                                <option>Teacher's Humour</option>
                                                            </select>
                                                        </Col>
                                                    </Row>
                                                    <Col className="col-md-12 mt-4 postCreate_slect_template">
                                                        <h3>Select Ad Template and Format</h3>
                                                        <p>Choose how you'd like to structure your ad.  Learn More</p>
                                                        <Row>
                                                            <Col className="col-md-2">
                                                                <div className="box">
                                                                    <img className="" src="icon/slider.png" />
                                                                    <h5>Carousel</h5>
                                                                    <p>Two or more images or videos</p>
                                                                </div>
                                                            </Col>
                                                            <Col className="col-md-2">
                                                                <div className="box">
                                                                    <img className="" src="icon/video-player.png" />
                                                                    <h5>Single image or video</h5>
                                                                    <p>One image or video, or a slideshow with multiple images</p>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                :
                                                <Row className="postexist_row">
                                                    <Col className="col-md-12">
                                                        <p>Select Ad Post</p>
                                                        <select className="form-control">
                                                            <option>Select ad post or enter post ID</option>
                                                            {
                                                                this.state.list.map(i =>
                                                                    <option value={i.id}>{i.name}</option>
                                                                )
                                                            }
                                                        </select>
                                                    </Col>
                                                </Row>
                                        }
                                    </div>
                                </Tab>
                                <Tab eventKey="Ad_Creative" title="Ad Creative">
                                    <div className="tab2_form_data">
                                        <Row>
                                            <Col className="col-md-8 creative_1">
                                                <Row className="creative_1_title align-center">
                                                    <Col className="col-md-9">
                                                        <h3>Creative Content</h3>
                                                        <p>Choose the media, enter the text and select the destinations for each card in your carousel ad.  Learn More</p>
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <div className="select_box">
                                                            <label>Ad Template</label>
                                                            <select className="form-control">
                                                                <option>Carousel</option>
                                                            </select>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row className="creative_1_form_field mt-3">
                                                    <Col className="col-md-12 d-flex creative_1_ff_1">
                                                        <div>
                                                            <input type="radio" name="postCreative_type" checked />
                                                            <span>Image</span>
                                                        </div>
                                                        <div>
                                                            <input type="radio" name="postCreative_type" />
                                                            <span>Video/Slideshow</span>
                                                        </div>
                                                        <div>
                                                            <input type="file" name="postCreative_type" />
                                                        </div>
                                                    </Col>
                                                    <Col className="col-md-12 mt-4 mb-2">
                                                        <p>For questions and more information, see the <a href="#">Facebook Ad Guidelines.</a></p>
                                                    </Col>
                                                    <Col className="col-md-6 creative_1_ff_2">
                                                        <div className="form-group">
                                                            <label><strong>Headline</strong> (Optional)</label>
                                                            <input type="text" placeholder="Write a short headline" className="form-control" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label><strong>Website URL</strong> (Optional)</label>
                                                            <input type="text" placeholder="http://www.example.com/page" className="form-control" />
                                                        </div>
                                                        <div className="d-flex justify-content-between">
                                                            <a href="">Build a URL Parameter</a>
                                                            <a href="">Select cards from previous ads</a>
                                                        </div>
                                                    </Col>
                                                    <Col className="col-md-6 creative_1_ff_2">
                                                        <div className="form-group">
                                                            <label><strong>Description</strong></label>
                                                            <textarea className="form-control" placeholder="Include additional details"></textarea>
                                                        </div>
                                                    </Col>
                                                    <div className="hr"></div>
                                                    <Col className="col-md-6">
                                                        <div className="form-group check_box">
                                                            <input type="checkbox" />
                                                            <span>Automatically show the best performing cards first.</span>
                                                        </div>
                                                        <div className="form-group check_box">
                                                            <input type="checkbox" />
                                                            <span>Add a map card showing your nearest stores.</span>
                                                        </div>
                                                    </Col>
                                                    <Col className="col-md-6">
                                                        <div className="form-group check_box">
                                                            <input type="checkbox" />
                                                            <span>Add a card at the end with your Page profile picture.</span>
                                                        </div>
                                                    </Col>
                                                    <Col className="col-md-6  mt-2 creative_1_ff_2">
                                                        <div className="form-group">
                                                            <label><strong>Primary Text</strong></label>
                                                            <textarea className="form-control" placeholder="Include additional details"></textarea>
                                                        </div>
                                                    </Col>
                                                    <Col className="col-md-6 mt-2 creative_1_ff_2">
                                                        <div className="form-group">
                                                            <label><strong>See More Display Link</strong> (Optional)</label>
                                                            <input type="text" placeholder="http://www.example.com/page" className="form-control" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label><strong>Call to Action</strong></label>
                                                            <input type="text" placeholder="Learn More" className="form-control" />
                                                        </div>
                                                    </Col>
                                                    <Col className="col-md-12">
                                                        <a href="#">+ Add Another Option</a>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col className="col-md-1" />
                                            <Col className="col-md-3 creative_2">
                                                <h2>Facebook - Mobile News Feed</h2>
                                                <div className="box">
                                                    <img src="https://cdn.zeplin.io/5e0edf9ee677e717f5c66ac7/assets/65F50CBB-D8E2-4F38-9360-931CCAB4F6DC.png" className="img-fluid" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Tab>
                                <Tab eventKey="Ad_Tracking" title="Ad Tracking">
                                    <div className="tab3_form_data">
                                        <Row>
                                            <Col className="col-md-12">
                                                <h2>Conversion Tracking</h2>
                                                <p>Choose the media, enter the text and select the destinations for each card in your carousel ad.  Learn More</p>
                                            </Col>
                                            <Col className="col-md-12">
                                                <div className="check_box">
                                                    <input type="checkbox" />
                                                    <span>Facebook Pixel</span>
                                                </div>
                                                <div className="select_box">
                                                    <label>Digital Uprisers's Pixel</label>
                                                    <select className="form-control">
                                                        <option>ID:385094689074666</option>
                                                    </select>
                                                </div>
                                            </Col>
                                            <div className="hr"></div>
                                            <Col className="col-md-12">
                                                <h2>Post Usage</h2>
                                                <p>How do you want to use this post?</p>
                                            </Col>
                                            <Col className="col-md-12 d-flex align-center">
                                                <div className="radio_box">
                                                    <input type="radio" name="postusage" checked="checked" />
                                                    <span>Only use this post for an Ad.</span>
                                                </div>
                                                <div className="radio_box">
                                                    <input type="radio" name="postusage" />
                                                    <span>Use this post for an Ad. It will also be published to the Page later.</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </Row>
                </Modal.Body>
            </Modal>
        );
    }


    AdPostMethos(typeName) {
        this.setState({
            AdPostType: typeName
        });
    }

    _saveData() {
        if (this.state.AdPostType == '') {

        }
        if (this.state.AdPostType == 'exist') {

        }
    }
}

export default RenderModal;
