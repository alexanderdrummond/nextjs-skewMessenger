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
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import supabase from '../pages/api/supabaseClient';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);


const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Password is too short - should be 8 chars minimum.').required('Required'),
});

const RegisterForm = ({ setFormToShow }) => {
  const [error, setError] = useState('');
  const router = useRouter();
  const isDesktop = useBreakpointValue({ base: false, md: true });

  const desktopBox1BorderRadius = isDesktop ? '8px 0 0 8px' : '8px 8px 0 0';
  const desktopBox2BorderRadius = isDesktop ? '0 8px 8px 0' : '0 0 8px 8px';
  const mobileBox1BorderRadius = isDesktop ? '8px 0 0 0' : '8px 8px 0 0';
  const mobileBox2BorderRadius = isDesktop ? '0 8px 0 0' : '0 0 8px 8px';

  const handleRegistration = async (values) => {
    try {
      const { error } = await supabase.auth.signUp(values);
      if (error) {
        setError(error.message);
      } else {
        router.push('/success'); // Redirect to success.jsx page
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
        width={['128%', '400px']} // Responsive width
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
        width={['128%', '400px']} // Responsive width
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
            await handleRegistration(values);
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
              <Button colorScheme="teal" type="submit" width="100%">
                Register
              </Button>
              <Flex align="center" justify="center" mt={4}>
                <Link color="teal" onClick={() => setFormToShow('login')}>
                  Already have an account? Login
                </Link>
              </Flex>
            </Form>
          )}
        </Formik>
      </MotionBox>
    </Flex>
  );
};

export default RegisterForm;
