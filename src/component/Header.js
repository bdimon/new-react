import styled from "styled-components";

export default function Header({ name, onClick }) {
  return (
    <HeaderTag>
      <NameTag>{name}</NameTag>
      <LoginButtonTag onClick={onClick}>Вхід</LoginButtonTag>
    </HeaderTag>
  );
}
const NameTag = styled.div`
  /* робимо темний колір фону блока */
  color: #1fff;
`;
const LoginButtonTag = styled.div`
  color: #1fff;
  padding: 8px 32px;
  border: 2px solid #1fff;
  border-radius: 16px;
  cursor: pointer;
`;

const HeaderTag = styled.div`
  /* робимо темний колір фону блока */
  background: #0c0c64;

  /* робимо щоб знизу блок мав закруглення */
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  /* режим верстки flex, робимо текст по центру */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* ставимо колір тексту білим */
  color: #fff;

  /* робимо відступи вертикальні та горизонтальні,
    щоб текст не притискався до країв блоку
   */
  padding: 15px;
`;
