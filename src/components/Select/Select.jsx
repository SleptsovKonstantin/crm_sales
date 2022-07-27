import React, { Component } from "react";
import "./Select.css";

class Select extends Component {
  render() {
    console.log(this.props);
    const { record } = this.props;
    return (
      <div className=''>
        {record.map}

      </div>
    );
  }
}

export default Select;
// onClick={() => setActive(!active)}
