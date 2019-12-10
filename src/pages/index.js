import React from "react";
import Head from "next/head";
import Link from "next/link";
import { withTheme } from "emotion-theming";
import {
  Heading,
  Link as ChakraLink,
  Text,
  Icon,
  Stack,
  Flex,
  Button
} from "@chakra-ui/core";

import Hero from "../components/hero";
import Container from "../components/container";
import { DarkModeToggle } from "../components/buttons/dark-mode-toggle";

const Main = props => (
  <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth="48rem"
    mt="-40vh"
    pt="8rem"
    px="1rem"
    {...props}
  />
);

const Footer = props => <Flex as="footer" py="8rem" {...props} />;

const Index = props => {
  return (
    <>
      <Head>
        <title>Transfer Cuan Antar E-Wallet</title>
      </Head>
      <Container>
        <Hero />
        <Main>
          <Heading as="h2" fontFamily="default">
            Halo! perkenalkan kami adalah mahasiswa S1 Universitas Indonesia.
          </Heading>
          <Heading as="h2" fontFamily="default">
            Cuan.in adalah sebuah platform untuk mengirimkan saldo antar e-wallet.
          </Heading>
          <Heading as="h2" fontFamily="default">
            OVO.Gopay.DANA.LinkAja.PayPal.
          </Heading>

          <Text
            as="nav"
            fontSize={["1.875rem", "2.25rem"]}
            fontWeight="bold"
            mt={8}
          >
            <Link href="https://www.ui.ac.id/mahasiswa-ftui-menciptakan-aplikasi-tuker-id-untuk-transfer-antar-e-wallet/">
              <ChakraLink href="/live">
                Tentang Kami <Icon name="link" mx="2px" />
              </ChakraLink>
            </Link>
            {". "}
            <Link href="/donate">
              <ChakraLink href="/donate">
                Support <Icon name="link" mx="2px" />
              </ChakraLink>
            </Link>
          </Text>

          <Text
            as="nav"
            fontSize={["1.875rem", "2.25rem"]}
            fontWeight="bold"
            mt={8}
          >
           
            .
          </Text>
        </Main>

        <DarkModeToggle />
        <Footer>
          <Text>
            &copy; 2019 cuanin.{" "}
            <ChakraLink
              isExternal
              href=""
            >
              Repository <Icon name="external-link" mx="2px" />
            </ChakraLink>
            .
          </Text>
        </Footer>
        <Container
          flexDirection="row"
          position="fixed"
          bottom="0"
          width="100%"
          maxWidth="48rem"
          py={2}
        >
          <Link href="/donate">
            <ChakraLink href="/donate" flexGrow={1} mx={2}>
              <Button width="100%" variant="outline" variantColor="green">
                Support
              </Button>
            </ChakraLink>
          </Link>
          <Link isExternal href="mailto:kevinahmad.f@gmail.com">
            <ChakraLink
              isExternal
              href="mailto:kevinahmad.f@gmail.com"
              flexGrow={3}
              mx={2}
            >
              <Button
                width="100%"
                variant="solid"
                variantColor="green"
                rightIcon="email"
              >
                Send Email
              </Button>
            </ChakraLink>
          </Link>
        </Container>
      </Container>
    </>
  );
};

export default withTheme(Index);
