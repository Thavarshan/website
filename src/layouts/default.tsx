import Logo from '@/components/Logo';
import {
    Container,
    Box,
    Stack,
    Link,
    Spacer
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

const Layout = ({ children }: any) => {
    return (
        <>
            <NextSeo
                title='Jerome (Thavarshan) Thayananthajothy'
                description='Jerome Thayananthajothy | Personal Portfolio'
                openGraph={{
                    url: 'https://www.thavarshan.xyz',
                    title: 'Jerome (Thavarshan) Thayananthajothy',
                    description: 'Jerome Thayananthajothy | Personal Portfolio',
                    images: [
                        { url: 'https://www.thavarshan.xyz/images/jerome.jpg' }
                    ],
                    siteName: 'Jerome (Thavarshan) Thayananthajothy',
                }} />

            <Container maxW='container.xl' py={{ base: 6, lg: 24 }}>
                <Stack position={{ base: 'relative', lg: 'fixed' }} w={{ base: 'full', lg: '48' }} align='center'>
                    <Box>
                        <Link href='/'>
                            <Box h={20} w={20} mx='auto'>
                                <Logo className='text-white' />
                            </Box>
                        </Link>
                    </Box>

                    <Spacer />

                    <Stack spacing='4' mt='10' maxW='full' direction={{ base: 'row', lg: 'column' }}>
                        <Link href='/' color='white' fontWeight='medium' rounded='xl' fontSize='sm'>Home</Link>
                        <Link href='/projects' color='white' fontWeight='medium' rounded='xl' fontSize='sm'>Projects</Link>
                        <Link href='https://github.com/Thavarshan' color='white' fontWeight='medium' rounded='xl' fontSize='sm' isExternal>Github</Link>
                        <Link href='https://www.linkedin.com/in/thavarshan/' color='white' fontWeight='medium' rounded='xl' fontSize='sm' isExternal>LinkedIn</Link>
                    </Stack>
                </Stack>

                <Box ml={{ sm: 0, lg: '48' }}>
                    {children}
                </Box>
            </Container>
        </>
    );
};

export default Layout;
