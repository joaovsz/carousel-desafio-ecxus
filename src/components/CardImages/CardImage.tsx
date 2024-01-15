import { useContext, useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import { ImagesContext } from '../../context/UploaderContext';
import { ImageObject } from '../../types/UploaderContextTypes';
import styles from "./CardImage.module.css";
const CardImage = (props: { image: ImageObject, item: number }) => {
    const [isHovered, setHovered] = useState(false);
    const { removeImage } = useContext(ImagesContext)
    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };
    return (
        <div className={styles.cardImage}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            {isHovered && (
                <IoMdCloseCircle size={28} className={styles.closeButton} onClick={() => removeImage&&removeImage(props.item)} />
            )}
            <img src={props.image.url} alt={props.image.name} className={styles.image} />
        </div>
    )
}

export default CardImage