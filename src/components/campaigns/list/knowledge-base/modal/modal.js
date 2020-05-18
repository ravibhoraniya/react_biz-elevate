import React, { Component } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import "./modal.scss";

class RenderModal extends Component {
    constructor(props) {
        super(props);
        this.state = { imgArr: null };
    }

    componentDidMount() {
    }

    render() {
        const { show, handleClose } = this.props;
        const { imgArr } = this.state;
        return (
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header className="modal_header">
                    <Col className="col-md-6 title">
                        <h2>No-code mobile development for Free</h2>
                    </Col>
                    <Col className="col-md-6 action_btn">
                        <i class="fa fa-clone" aria-hidden="true"></i> <a href="#">Duplicate</a>
                        &nbsp;&nbsp;&nbsp;
                        <i class="fa fa-trash-o" aria-hidden="true"></i> <a href="#">Delete</a>
                        <i class="fa fa-times-circle-o" aria-hidden="true" onClick={handleClose}></i>
                    </Col>
                </Modal.Header>
                <Modal.Body>
                    <Row className="modal_body">
                        <Col className="col-md-4 m1">
                            <h2 className="title">
                                <span>Id<strong>15616781981</strong></span>
                                <span>Date<strong>18 March, 2020</strong></span>
                                <span>Privacy<strong>Private</strong></span>
                            </h2>
                            <img src="https://cdn.zeplin.io/5e0edf9ee677e717f5c66ac7/assets/EFD24768-BC05-4A20-9C39-92E6792B5082.png" className="image-fluid" />
                            <img src="https://cdn.zeplin.io/5e0edf9ee677e717f5c66ac7/assets/919A41A6-0A5E-428E-AA60-8FA820AD950D.png" className="image-fluid" />
                        </Col>
                        <Col className="col-md-8 m2">
                            <div className="title">
                                <h3>Posts Reached</h3>
                                <span>
                                    <strong>65</strong> Reactions
                                    <strong>65</strong> Shares
                                    <strong>21,568</strong> Comments
                                </span>
                            </div>
                            <p>Reported Stats may be delayed from what appears on posts.</p>
                            <Row className="fb_count">
                                <Col className="col-md-1 box">
                                    <img src="icon/icon.png" />
                                    <h4>Like <strong>41</strong></h4>
                                </Col>
                                <Col className="col-md-1 box">
                                    <img src="icon/icon-2.png" />
                                    <h4>Love <strong>41</strong></h4>
                                </Col>
                                <Col className="col-md-1 box">
                                    <img src="icon/icon-3.png" />
                                    <h4>Ha Ha Ha <strong>41</strong></h4>
                                </Col>
                                <Col className="col-md-1 box">
                                    <img src="icon/icon-4.png" />
                                    <h4>Wow <strong>41</strong></h4>
                                </Col>
                                <Col className="col-md-1 box">
                                    <img src="icon/icon-5.png" />
                                    <h4>Sad <strong>41</strong></h4>
                                </Col>
                                <Col className="col-md-1 box">
                                    <img src="icon/icon-6.png" />
                                    <h4>Angry <strong>41</strong></h4>
                                </Col>
                            </Row>
                            <Row className="fb_count">
                                <Col className="col-md-1 box">
                                    <i class="fa fa-share" aria-hidden="true"></i>
                                    <h4>Share <strong>41</strong></h4>
                                </Col>
                                <Col className="col-md-1 box">
                                    <i class="fa fa-comment-o" aria-hidden="true"></i>
                                    <h4>Comments <strong>41</strong></h4>
                                </Col>
                            </Row>
                            <div className="title">
                                <h3>Posts Clicks</h3>
                                <span>
                                    <strong>65</strong> Total Clicks
                                </span>
                            </div>
                            <Row className="fb_count fb_text_left">
                                <Col className="col-md-3 box">
                                    <h4>Photo Views <strong>127</strong></h4>
                                </Col>
                                <Col className="col-md-3 box">
                                    <h4>Link Clicks <strong>480</strong></h4>
                                </Col>
                                <Col className="col-md-3 box">
                                    <h4>Other Clicks <strong>320</strong></h4>
                                </Col>
                            </Row>
                            <div className="title">
                                <h3>Negative Feedbacks</h3>
                                <span>
                                    <strong>4</strong> Negative Actions
                                </span>
                            </div>
                            <Row className="fb_count fb_text_left">
                                <Col className="col-md-3 box">
                                    <h4>Hide Posts <strong>3</strong></h4>
                                </Col>
                                <Col className="col-md-3 box">
                                    <h4>Unlike Pages <strong>0</strong></h4>
                                </Col>
                                <Col className="col-md-3 box">
                                    <h4>Report as Spam <strong>1</strong></h4>
                                </Col>
                            </Row>
                            <Row className="fb_count fb_text_left">
                                <Col className="col-md-3 box">
                                    <h4>Hide all Posts <strong>0</strong></h4>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        );
    }
}

export default RenderModal;
