import styled from '@emotion/styled';
export const BtnWrap = styled.div`
display: flex;
justify-content: space-around;
gap: 20px;
`;

export const BtnFeedback = styled.button`
display: flex;
flex-direction: row;
border: none;
justify-content: center;
cursor: pointer;
width: 60px;

&:hover {
scale: 1.1;
background-color: #2174fa;
}
`;