import styled from "styled-components";

export const Container = styled.div`
width: 900px;
max-width: 100%;
padding: 0 10px;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(3, 1fr);

@media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);  }

@media (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);  }
`