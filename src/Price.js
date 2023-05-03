import React from "react";

class Price extends React.Component {
render() {
const { price } = this.props;
return <p>Price: {price}</p>;
}
}

export default Price;