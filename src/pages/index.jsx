import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import PopupBox from '../components/popupBox';
import LoginForm from '../components/loginForm';
import RegisterForm from '../components/registerForm';


const Home = () => {
  const [formToShow, setFormToShow] = useState(null);

  useEffect(() => {
    const style = document.getElementById('server-side-styles');
    if (style) {
      style.parentNode.removeChild(style);
    }
  }, []);

  return (
    <>
      <Global
        styles={css`
        .gradientBackground {
          background: linear-gradient(179deg, #e1986b, #3eb499);
          background-size: 400% 400%;
      
          animation: gradientAnimation 10s ease forwards;
        }
      
        @keyframes gradientAnimation {
          0% {
            background-position: 52% 0%;
          }
          100% {
            background-position: 49% 100%;
          }
        }
      `}
      />
      <Box
        className="gradientBackground"
        width="100vw"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {formToShow === null && <PopupBox setFormToShow={setFormToShow} />}
        {formToShow === 'login' && <LoginForm setFormToShow={setFormToShow} />}
        {formToShow === 'register' && <RegisterForm setFormToShow={setFormToShow} />}
      </Box>
    </>
  );
};

export default Home;
