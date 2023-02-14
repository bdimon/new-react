import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  /* background: linear-gradient(background-color: #0093E9; */
  background-image: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 22%,
    rgba(0, 212, 255, 1) 100%
  );

  /* робимо фон на всю ширину */
  width: 100%;
`;
