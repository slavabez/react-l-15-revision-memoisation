import React from "react";
import styled from "styled-components";
import styles from "./CssDemo.module.css";

const StyledDiv = styled.div`
  color: blue;
`;

const CssDemo = () => {
  return (
    <div>
      <div style={{ color: "red" }}>Inline Styled Component</div>
      <div className={styles.moduleCss}>CSS Module Styled Component</div>
      <StyledDiv>Styled Component</StyledDiv>
    </div>
  );
};

export default CssDemo;
