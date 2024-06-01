import { Box, Container, VStack, Text, Heading, Image, SimpleGrid, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaPhone, FaBoxOpen } from "react-icons/fa";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with all the new features.",
    price: "$699",
    image: "/images/smartphone.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for all your needs.",
    price: "$999",
    image: "/images/laptop.jpg",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Keep track of your health and notifications.",
    price: "$199",
    image: "/images/smartwatch.jpg",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          Welcome to Electronics Store
        </Heading>
        <Box as="nav" w="100%" p={4} bg="gray.100" borderRadius="md">
          <SimpleGrid columns={[2, null, 4]} spacing={4} textAlign="center">
            <Link as={RouterLink} to="/" display="flex" flexDirection="column" alignItems="center">
              <FaHome size="24px" />
              <Text>Home</Text>
            </Link>
            <Link as={RouterLink} to="/products" display="flex" flexDirection="column" alignItems="center">
              <FaBoxOpen size="24px" />
              <Text>Products</Text>
            </Link>
            <Link as={RouterLink} to="/about" display="flex" flexDirection="column" alignItems="center">
              <FaInfoCircle size="24px" />
              <Text>About</Text>
            </Link>
            <Link as={RouterLink} to="/contact" display="flex" flexDirection="column" alignItems="center">
              <FaPhone size="24px" />
              <Text>Contact</Text>
            </Link>
          </SimpleGrid>
        </Box>
        <Heading as="h2" size="xl" textAlign="center">
          Featured Products
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {sampleProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src={product.image} alt={product.name} />
              <VStack spacing={4} mt={4}>
                <Heading as="h3" size="md">
                  {product.name}
                </Heading>
                <Text>{product.description}</Text>
                <Text fontWeight="bold">{product.price}</Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;