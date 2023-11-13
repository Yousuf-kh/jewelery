import {
	Box,
	Container,
	Flex,
	Heading,
	Link,
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Button,
	Text,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();

	return (
		<Box w={'full'} h={'10vh'} bg={'yellow.500'} color={'#fff'}>
			<Container maxW={'container.lg'}>
				<Flex align={'center'} justify={'space-between'} h={'10vh'}>
					<Heading>Al-Is</Heading>

					<Flex
						display={{ md: 'flex', base: 'none' }}
						align={'center'}
						gap={6}
						h={'10vh'}
					>
						<Link>Home</Link>
						<Link>About</Link>
						<Link>Services</Link>
						<Link>Contacts</Link>
					</Flex>

					<Button
						ref={btnRef}
						colorScheme='yellow'
						color={'#fff'}
						onClick={onOpen}
						display={{ md: 'none', base: 'block' }}
					>
						<GiHamburgerMenu />
					</Button>
				</Flex>
			</Container>
			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerBody>
						<Box mt={'60px'} textAlign={'center'}>
							<Text p={8} my={2} bg={'#ccc'}>
								<Link>Home</Link>
							</Text>
							<Text p={8} my={2} bg={'#ccc'}>
								<Link>About</Link>
							</Text>
							<Text p={8} my={2} bg={'#ccc'}>
								<Link>Services</Link>
							</Text>
							<Text p={8} my={2} bg={'#ccc'}>
								<Link>Contacts</Link>
							</Text>
						</Box>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	);
};

export default Header;
