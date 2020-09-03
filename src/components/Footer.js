import React from 'react';
import { FooterStyle }  from '../styles/style';

export const Footer = (props) => {

  return (
    <FooterStyle role="contentinfo">
      <p>designed and built by</p>
      <p className="name">YUKO SHIOZAKI</p>
      <p className="copyright">&#169; copyright 2020.</p>
      <p>all rights reserved.</p>
    </FooterStyle>
  );
}