import React from "react";
import styled from "styled-components";
import StyledMessage from "../styleguides/StyledMessage";

const NoContentWrapper = styled.div`
  display: flex;
  border-left: 5px solid ${props => props.theme.disabled};
  min-height: 35px;
  align-items: center;
  margin-left: 10px;
`;

const NoContentText = styled.span`
  margin-left: 10px;
`;

const NoContentFound = ({label}) => {
  return (
    <NoContentWrapper>
      <NoContentText>
        <StyledMessage thin disabled>
            {label || "Nothing to show here.."}
        </StyledMessage>
      </NoContentText>
    </NoContentWrapper>
  );
};

export default NoContentFound;
