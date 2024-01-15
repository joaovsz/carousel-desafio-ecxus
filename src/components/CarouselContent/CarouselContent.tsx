import { RefObject, useContext, useEffect, useRef } from 'react'
import { IoCaretBack, IoCaretForwardOutline } from 'react-icons/io5'
import { ImagesContext } from '../../context/UploaderContext'
import ButtonAddImage from '../ButtonAddImage/ButtonAddImage'
import CardImage from '../CardImages/CardImage'
import stylesSibble from '../CarouselUploader/CarouselUploader.module.css'
import IsDraggingOverlay from '../isDraggingOverlay/IsDraggingOverlay'
import styles from './CarouselContent.module.css'
const CarouselContent = () => {
    const carousel: RefObject<HTMLDivElement> = useRef(null);
    const { images, isDragging, setErrorComponent, onDragLeave, onDragOver, onDrop } = useContext(ImagesContext)

    useEffect(() => {
        if (carousel.current) {
            carousel.current.scrollTo({
                left: carousel.current.scrollLeft + carousel.current.offsetWidth,
                behavior: 'smooth',
            });
        }
        setErrorComponent && setErrorComponent(false);
    }, [images]);
    function handleLeftClick(e: { preventDefault: () => void; }) {
        e.preventDefault();
        carousel.current!.scrollLeft -= carousel.current!.offsetWidth;
    }
    function handleRightClick(e: { preventDefault: () => void; }) {
        e.preventDefault();
        carousel.current!.scrollLeft += carousel.current!.offsetWidth;
    }

    return (

        <div className={styles.carouselContainer}>
            <IoCaretBack size={65} onClick={(e) => handleLeftClick(e)} />
            < div ref={carousel} onDragLeave={onDragLeave} onDragOver={onDragOver} onDrop={onDrop} className={`${stylesSibble.dragArea} ${isDragging ? stylesSibble.isDragging : ''} ${styles.dragCarousel}`}>
                <div className={styles.carouselContent}>
                    {isDragging && <IsDraggingOverlay inCarousel={true} />}
                    <ButtonAddImage />
                    {images&&images.map((image, index) =>
                        <CardImage image={image} key={index} item={index} />
                    )}
                </div>
            </div>
            <IoCaretForwardOutline size={65} onClick={(e) => handleRightClick(e)} />
        </div>

    )
}

export default CarouselContent