import React, {Component} from "react";

export default class Spinner extends Component {
	render() {
		return <div>{this.props.timeRemaining + "s"}</div>;
	}
}
