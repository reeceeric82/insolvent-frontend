import { useState, useEffect } from "react";
import { IconButton } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

const BackToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleButtonClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <IconButton
            aria-label="Back to top"
            icon={<ArrowUpIcon />}
            onClick={handleButtonClick}
            position="fixed"
            bottom="60px"
            right="30px"
            bg="gray.700"
            color="white"
            _hover={{ bg: "gray.500" }}
            _active={{ bg: "gray.600" }}
            opacity={showButton ? 1 : 0}
            pointerEvents={showButton ? "auto" : "none"}
            transition="opacity 0.3s"
        />
    );
};

export default BackToTopButton;
