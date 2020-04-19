import React, { Component } from 'react';
import {Dropdown, Button, ButtonGroup, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { _ } from 'underscore';
import './style.scss';

class RDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentItem: 'Select from the menu'
         }
    }

    select(data) {
      this.setState({
        currentItem: data.name || data
      })
      this.props.action(data);
    }
    render() { 
        const {dataArr, label, infoIcon, styles, arr, error, toolTip} = this.props;
        let arrData = dataArr || arr;
        return ( 
          <>
            {label ? <span>{label}</span> : null}
            {infoIcon ? <OverlayTrigger
                  placement={"right"}
                  overlay={
                    <Tooltip id={`tooltip-right`}>
                      {toolTip}
                    </Tooltip>
                  }
                >
                  <img
                    className="info-icon"
                    src="/assets/icons/info/information (1).png"
                    alt=""
                  />
                </OverlayTrigger>: null}
                {error ? <span className='error'>{error}</span> : null}
            {label || infoIcon ? <br/> : null}
            <Dropdown as={ButtonGroup} className={styles}>
            <Button variant="success" className="btn-1">
              {this.state.currentItem}
            </Button>
            <Dropdown.Toggle
              split
              variant="success"
              id="dropdown-basic"
              className="btn-toggle-1"
            />
            <Dropdown.Menu >
              {_.map(arrData, (data, idx) => (
                <Dropdown.Item
                  key={idx}
                  href="#/action-1"
                  onClick={ () => this.select(data) }
                >
                  {data.name || data}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          </>
         );
    }
}
 
export default RDropdown;
