import { Box, Flex, Image, Input, IconButton, VStack, Text } from "@chakra-ui/react";
import { FaSearch, FaMicrophone, FaVideo, FaTh, FaBell, FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Flex as="header" align="center" justify="space-between" p={4} boxShadow="md">
        <Flex align="center">
          <Image src="/images/youtube-logo.svg" alt="YouTube Logo" boxSize="40px" />
          <Text fontSize="2xl" fontWeight="bold" ml={2}>YouTube</Text>
        </Flex>
        <Flex align="center" flex="1" maxW="600px" mx={4}>
          <Input placeholder="Search" />
          <IconButton aria-label="Search" icon={<FaSearch />} ml={2} />
          <IconButton aria-label="Voice Search" icon={<FaMicrophone />} ml={2} />
        </Flex>
        <Flex align="center">
          <IconButton aria-label="Create" icon={<FaVideo />} mx={2} />
          <IconButton aria-label="Apps" icon={<FaTh />} mx={2} />
          <IconButton aria-label="Notifications" icon={<FaBell />} mx={2} />
          <IconButton aria-label="User" icon={<FaUserCircle />} mx={2} />
        </Flex>
      </Flex>

      {/* Main Content */}
      <Box as="main" p={4}>
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to YouTube</Text>
          <Text>Explore videos, channels, and more.</Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Index;