import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import {
  Button,
  FormControl,
  FormLabel,
  Box,
  Alert,
  AlertIcon,
  Flex,
  Checkbox,
  Link,
  Image,
  Input,
  useBreakpointValue,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import { FaLock } from 'react-icons/fa';
import  supabase  from '../pages/api/supabaseClient';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Password is too short - should be 8 chars minimum.').required('Required'),
});

const LoginForm = ({ setFormToShow }) => {
  const [error, setError] = useState('');
  const router = useRouter();
  const isDesktop = useBreakpointValue({ base: false, md: true });

  const desktopBox1BorderRadius = isDesktop ? '8px 0 0 8px' : '8px 8px 0 0';
  const desktopBox2BorderRadius = isDesktop ? '0 8px 8px 0' : '0 0 8px 8px';
  const mobileBox1BorderRadius = isDesktop ? '8px 0 0 0' : '8px 8px 0 0';
  const mobileBox2BorderRadius = isDesktop ? '0 8px 0 0' : '0 0 8px 8px';

  const handleLogin = async (values) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) {
        setError(error.message);
      } else {
        router.push('/success');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Flex align="center" justify="center" minHeight="100vh" flexDirection={isDesktop ? 'row' : 'column'}>
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        width={['110%', '400px']} // Responsive width
        height={['250px', '450px']} // Responsive height
        bg="rgba(226, 232, 240, 0.2)" // use RGBA for background color
        borderRadius={isDesktop ? desktopBox1BorderRadius : mobileBox1BorderRadius} // Apply different border radii for desktop and mobile versions of Box 1
        boxShadow="8px 0 12px -4px rgba(0, 0, 0, 0.1), 0 8px 12px -4px rgba(0, 0, 0, 0.1)"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image src="/skew.png" alt="Logo" maxW="50%" maxH="50%" zIndex={1} />
      </MotionBox>
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        width={['110%', '400px']} // Responsive width
        height={['auto', '450px']} // Responsive height
        p={6}
        bg="gray.100"
        rounded="md"
        borderRadius={isDesktop ? desktopBox2BorderRadius : mobileBox2BorderRadius} // Apply different border radii for desktop and mobile versions of Box 2
        boxShadow="8px 0 12px -4px rgba(0, 0, 0, 0.1), 0 8px 12px -4px rgba(0, 0, 0, 0.1)"
        marginLeft={['0', '-1px']} // Responsive margin
      >
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await handleLogin(values);
            setSubmitting(false);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <FormControl id="email" isInvalid={errors.email && touched.email} mb={4}>
                <FormLabel>Email</FormLabel>
                <Field name="email" as={Input} placeholder="Enter your email" />
              </FormControl>
              <FormControl id="password" isInvalid={errors.password && touched.password} mb={4}>
                <FormLabel>Password</FormLabel>
                <Field name="password" type="password" as={Input} placeholder="Enter your password" />
              </FormControl>
              {errors.server && (
                <Alert status="error" mb={4}>
                  <AlertIcon />
                  {errors.server}
                </Alert>
              )}
              {error && (
                <Alert status="error" mb={4}>
                  <AlertIcon />
                  {error}
                </Alert>
              )}
              <Flex justify="space-between" align="center" mb={4}>
                <Checkbox colorScheme="teal" mr={2}>
                  Remember me
                </Checkbox>
                <Link color="teal" href="/forgot-password" ml={2}>
                  Forgot password?
                </Link>
              </Flex>
              <Button colorScheme="teal" type="submit" width="100%" leftIcon={<FaLock />}>
                Login
              </Button>
              <Flex align="center" justify="center" mt={4}>
                <Link color="teal" onClick={() => setFormToShow('register')}>
                  Create an account
                </Link>
              </Flex>
            </Form>
          )}
        </Formik>
      </MotionBox>
    </Flex>
  );
};

export default LoginForm;
