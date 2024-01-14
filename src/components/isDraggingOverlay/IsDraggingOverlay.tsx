import { useContext } from 'react'
import { MdOutlineFileUpload } from 'react-icons/md'
import { ImagesContext } from '../../context/UploaderContext'
import styles from "./IsDraggingOverlay.module.css"
const IsDraggingOverlay = (props: { inCarousel?: boolean }) => {
  const { isDragging } = useContext(ImagesContext)
  return (
    <div className={`${styles.isDragging} ${isDragging ? styles.active : ''}`}>
      <MdOutlineFileUpload color={props.inCarousel ? '#fff' : "#000"} size={50} />
      <span>Drag here to upload</span>
      <span>Supported formats: JPG, JPEG, GIF - 1024x1024</span>
    </div>
  )
}

export default IsDraggingOverlay