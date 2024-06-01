import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "A modern smartphone with all the latest features.",
    price: "$699",
    image: "/images/sample-product-1.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    description: "A high-end laptop for all your computing needs.",
    price: "$1299",
    image: "/images/sample-product-2.jpg",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "A sleek smartwatch to keep you connected on the go.",
    price: "$199",
    image: "/images/sample-product-3.jpg",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          <Link as={RouterLink} to="/">
            Electronics Store
          </Link>
        </Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/products">Products</Link>
          <Link as={RouterLink} to="/about">About</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </HStack>
      </Flex>

      <Box as="section" mt={8}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {products.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
                <Text mb={4}>{product.description}</Text>
                <Text fontWeight="bold">{product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;