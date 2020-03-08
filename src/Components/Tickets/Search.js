import React, { Component } from "react";
import { connect } from "react-redux";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      tickets: []
    };
  }
  componentWillMount() {
    setTimeout(() => {
      if (this.props.tickets) {
        this.setState({ tickets: this.props.tickets });
      }
    }, 2000);
  }
  handleChange = e => {
    const code = e.target.value;
    let tickets = this.props.tickets,
      ticket = this.props.tickets.filter(tkt => tkt.code.includes(code));
    if (code.length == 0) {
      return this.setState({ tickets, code });
    } else {
      return this.setState({ tickets: ticket, code });
    }
  };
  render() {
    return (
      <div>
        <form style={{ float: "right" }}>
          <input
            typr="text"
            value={this.state.code}
            name="code"
            onChange={this.handleChange}
            placeholder="code .."
          />
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    tickets: state.tickets
  };
};
export default connect(mapStateToProps)(Search);
