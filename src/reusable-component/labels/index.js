import React, { Component } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
class RLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { infoIcon, toolTip, label, styles, error } = this.props;
    return (
      <div className='reusable-label'>
        <span className="label" style={styles}>{label}</span>
        {infoIcon ? (
          <OverlayTrigger
            placement={"right"}
            overlay={<Tooltip id={`tooltip-right`}>{toolTip}</Tooltip>}
          >
            <img
              className="info-icon"
              src="/assets/icons/info/information (1).png"
              alt=""
            />
          </OverlayTrigger>
        ) : null}
        <span className='error'>{error}</span>
        <br />
      </div>
    );
  }
}

export default RLabel;
