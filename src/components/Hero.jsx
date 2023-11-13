import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Hero = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 2,
		},
	};

	return (
		<Box w={'full'} py={10}>
			<Container maxW={'container.lg'}>
				<Flex
					justify={'space-between'}
					align={'center'}
					gap={10}
					mt={'50px'}
					flexDir={{ md: 'row', base: 'column' }}
				>
					<Box>
						<Heading fontSize={'70px'}>Jewellery</Heading>
						<Text py={3}>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Ut amet nostrum quia modi commodi sapiente laborum
							soluta voluptas ratione assumenda, praesentium eius
							tempora aut cum?
						</Text>
						<Button colorScheme='yellow' color={'#fff'}>
							See More
						</Button>
					</Box>
					<Image src='/hero.png' width={{ md: '50%', base: '80%' }} />
				</Flex>
			</Container>
			<Box my={10}>
				<Carousel
					autoPlay={true}
					infinite={true}
					autoPlaySpeed={2000}
					responsive={responsive}
				>
					<Box>
						<Image src='https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-lockring-72346300_1061470_ED_M.jpg?defaultImage=NoImageAvailableInternal&fmt=webp' />
					</Box>
					<Box>
						<Image src='https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-tt1-ring-67795121_1010332_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp' />
					</Box>
					<Box>
						<Image src='https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-co-schlumbergersixteen-stone-ring-11715966_1031820_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp' />
					</Box>
					<Box>
						<Image src='https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-knotring-69346863_1029033_ED.jpg?defaultImage=NoImageAvailableInternal&fmt=webp' />
					</Box>
					<Box>
						<Image src='https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-knotdouble-row-ring-68887976_1029457_ED_M.jpg?defaultImage=NoImageAvailableInternal&fmt=webp' />
					</Box>
				</Carousel>
			</Box>
		</Box>
	);
};

export default Hero;
