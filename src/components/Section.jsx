import React from "react";
import styled from "styled-components";

const Section = ({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Buttons = styled.div``;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinte 1.5s;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url('/images/${props.bgImage}')`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ButtonGroup = styled.div`
  margin-bottom: 30px;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  cursor: pointer;
  color: white;
  display: flex;
  justify-content: center;
  font-size: 12px;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  align-items: center;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;
