import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Requests } from '../components/Requests';

const Container = styled.div`
  background-color: #ffeaf4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Comic Sans MS', 'Cursive', sans-serif;
  padding:  2.5rem;
   border-radius: 24px;
`;

const Box = styled.div`
  background-color: #fff0f7;
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0px 10px 20px rgba(255, 182, 193, 0.4);
  text-align: center;
`;

const Title = styled.h1`
  color: #d06fa8;
  margin-bottom: 20px;
  font-size: 24px;
`;

const Input = styled.input`
  padding: 10px 15px;
  border: 2px solid #f7c6d9;
  border-radius: 12px;
  outline: none;
  font-size: 16px;
  margin-bottom: 10px;
  width: 80%;
  background-color: #fff;
  color: #d06fa8;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #f9a8c4;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f77da4;
  }
`;

export function Styled() {
  const [username, setUsername] = useState('');
  const [submittedUsername, setSubmittedUsername] = useState('');
  const handleSubmit = () => {
    setSubmittedUsername(username);
  }
    const navigate = useNavigate();
    const goToMain = () => {
      navigate('/');
    };

    return (
      <>
        <Container>
          <Box>
            <Title>Procure uma conta no github!</Title>
            <Input type="text" placeholder="Digite o nome de usuário..." onChange={(e) => setUsername(e.target.value)} />
            <br />
            <Button className="ml-2 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500" onClick={handleSubmit} > Enviar</Button>
          </Box>
        </Container>
        {submittedUsername && <Requests username={submittedUsername} />}
        <br />
        <Button onClick={goToMain}>Voltar</Button>


      </>

    )
  }
