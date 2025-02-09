import Head from 'next/head';

import { Flex } from '@chakra-ui/react';

import { LoginLogout } from '../components/LoginLogout';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Code Station</title>
      </Head>
      <Flex
        w="100%"
        h="100vh"
        flexDir="column"
        p="1rem"
        maxW="80rem"
        marginX="auto"
      >
        <LoginLogout />
      </Flex>
    </>
  );
}
