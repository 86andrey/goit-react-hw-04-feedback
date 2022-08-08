import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = ({ title, children }) => (
    <SectionStyle>
        <h2>{title}</h2>
        {children}
    </SectionStyle>);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

const SectionStyle = styled.section`
font-size: 16px;
    font-weight: 500;
    line-height: 27px;
    `;

export default Section;