import { Meta } from "@storybook/react";
import { useContext, useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import { ImagesContext } from '../../context/UploaderContext';
import { ImageObject } from '../../types/UploaderContextTypes';
import styles from "./CardImage.module.css";

const meta: Meta = {
    title: "Components/CardImage",
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Este componente mostra a imagem carregada"
            }
        }
    },
    argTypes: {
        onClick: {
            description: 'Ao clicar no botão localizado no canto superior direito ele remove a imagem, mas por se tratar de uma imagem estática, e não um estado do componente ele não fará a remoção.',
        }
    },
    tags: ["autodocs"],
};


const image: ImageObject = {
    url: "https://images.pexels.com/photos/10917649/pexels-photo-10917649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Imagem de teste",
};

export default meta;

export const Example = () => {
    const [isHovered, setHovered] = useState(false);
    const { removeImage } = useContext(ImagesContext);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div
            className={styles.cardImage}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isHovered && (
                <IoMdCloseCircle
                    size={28}
                    className={styles.closeButton}
                    onClick={() => removeImage && removeImage(0)}
                />
            )}
            <img src={image.url} alt={image.name} className={styles.image} />
        </div>
    );
};