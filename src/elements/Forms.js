import styled from 'styled-components';

const colors = {
  border: '#0075FF',
  error: '#bb2929',
  success: '#1ed12d',
};

const FormContainer = styled.div`
  border: 1px solid black;
  margin: 2rem;
  border-radius: 5px;
  padding: 2rem;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
  padding: 10px;
  margin-top: 1rem;
  min-height: 40px;
  cursor: pointer;
`;

const InputGroup = styled.div`
  position: relative;
  z-index: 90;
`;
const Input = styled.input`
  width: 100%;
  background: #fff;
  border-radius: 5px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: 0.3s ease all;
  border: 1px solid black;
  margin-right: 30px

  &:focus {
    border: 3px solid ${colors.border};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
`;

const ErrorMessage = styled.p`
  font-size: 18px;
  margin-bottom: 0;
  color: ${colors.error};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Button = styled.button`
  height: 45px;
  line-height: 45px;
  width: 20%;
  margin: 1rem;
  background: #000:
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: .1s ease all;

  &:hover {
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 1)
  }
`;

const SuccessMessageSent = styled.p`
  font-size: 14px;
  color: ${colors.success};
`;

const Container = styled.div`
  margin-top: 4rem;
  padding: 0.5rem;
`;

const Logo = styled.img`
  width: 40%;
  border-radius: 8px;
  border: double;
  border-color: #4790fc;
`;

const CounterButton = styled.button`
  .btn {
    background: #3498db;
    background-image: linear-gradient(to bottom, #3498db, #2980b9);
    border-radius: 5px;
    font-family: Arial;
    color: #ffffff;
    font-size: 20px;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
  }

  .btn:hover {
    background: #3cb0fd;
    background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
    text-decoration: none;
  }
`;

const ItemDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 1rem;
`;

export {
  FormContainer,
  Form,
  Label,
  InputGroup,
  Input,
  ErrorMessage,
  ButtonContainer,
  Button,
  SuccessMessageSent,
  Container,
  Logo,
  CounterButton,
  ItemDetailContainer,
};
