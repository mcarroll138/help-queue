import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

function TicketList(props){
  return (
    <React.Fragment>
        <hr/>
        {props.ticketList.map((ticket, index) =>
        <Ticket names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            key={index}/>
        )}
    </React.Fragment>
      );
    }

    TicketList.propTypes = {
        ticketList: PropTypes.array
    };
    
    export default TicketList;
    // <React.Fragment>
    //   <Ticket
    //     location="3A"
    //     names="Thato and Haley"
    //     issue="Firebase will not save record!"/>
    //   <Ticket
    //     location="4B"
    //     names="Sleater and Kinney"
    //     issue="Prop types are throwing an error."/>
    // </React.Fragment>