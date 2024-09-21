import styled from "styled-components/native";

export const Background = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 20px; /* Ajusta o padding para controlar o espaço */
`;

export const AreaInput = styled.View`
    flex-direction: column;
    width: 80%;
    gap: 5px;
`;

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: -150px;
`;

export const Titulo = styled.Text`
  font-family: 'Robot';
  font-size: 24px;
  font-weight: normal;
  color: #333;
  text-align: center;
  margin-top: 20px;
`;

export const RecuperarSenha = styled.Text`
  font-size: 13px;
  font-weight: normal;
  color: #333;
  text-align: right;
  margin-top: 5px;
`;