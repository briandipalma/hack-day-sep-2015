import React, {Component} from "react";

import TicketHeader from "../components/TicketHeader-react";
import GetStreamButton from "../components/GetStreamButton-react";
import OneWaySwapTicketSetup from "./OneWaySwapTicketSetup-react";
import TicketBubbleMessage from "../components/TicketBubbleMessage-react";

export default class RequestingOneWaySwapTicket extends Component {
	render() {
		return <div className="OneWaySwapTicket">
			<TicketHeader currencyPair={this.props.currentState.currencyPair} />
			<OneWaySwapTicketSetup currentState={this.props.currentState} />
			<TicketBubbleMessage message={this.props.currentState.message} />
			<button onClick={this.props.cancelStream}>Cancel</button>
		</div>;
	}
}
