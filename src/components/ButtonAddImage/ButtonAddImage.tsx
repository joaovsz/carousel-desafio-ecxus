import { useContext } from "react"
import { GoPlus } from "react-icons/go"
import { ImagesContext } from "../../context/UploaderContext"
import stylesUploader from "../CarouselUploader/CarouselUploader.module.css"
import styles from "./ButtonAddImage.module.css"
const ButtonAddImage = () => {

    const { selectImages, fileInputRef, onFileselect } = useContext(ImagesContext)
    return (
        <button className={styles.buttonAddImage} onClick={selectImages}>
            <input ref={fileInputRef} type="file" name="image" className={stylesUploader.imageInput} onChange={onFileselect} />
            <GoPlus size={40} />
            <span>Add new image</span>
        </button>
    )
}

export default ButtonAddImage