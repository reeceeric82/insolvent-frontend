import { useState, useEffect } from 'react';
import { Text } from '@chakra-ui/react';

const LoadingAnimation = () => {
    const [loadingText, setLoadingText] = useState('Fetching Data.');

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingText(prevText => {
                switch (prevText) {
                    case 'Fetching Data':
                        return 'Fetching Data.';
                    case 'Fetching Data.':
                        return 'Fetching Data..';
                    case 'Fetching Data..':
                        return 'Fetching Data...';
                    case 'Fetching Data...':
                        return 'Fetching Data.';
                    default:
                        return 'Fetching Data';
                }
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return <Text pt='4rem' fontWeight='bold' fontSize='2xl'>{loadingText}</Text>;
};

export default LoadingAnimation;