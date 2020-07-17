import React, { Component } from "react";

import { Header, BorderLine}  from '../stylesheet/stylesheet';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>Today's Tech News</Header>
        <BorderLine />
      </React.Fragment>
    );
  }
}