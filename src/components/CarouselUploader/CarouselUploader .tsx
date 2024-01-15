/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import { GrUploadOption } from "react-icons/gr";
import { ImagesContext } from "../../context/UploaderContext";
import CarouselContent from "../CarouselContent/CarouselContent";
import IsDraggingOverlay from "../isDraggingOverlay/IsDraggingOverlay";
import styles from "./CarouselUploader.module.css";
const CarouselUploader = () => {
  const { images, errorComponent, isDragging, selectImages, fileInputRef, onDragLeave, onDragOver, onDrop, onFileselect } = useContext(ImagesContext);

  const renderErrorComponent = () => {
    if (errorComponent) {
      return (
        <span className={styles.errorComponent}>
          Please select only images with size less than 1 MB or JPG, JPEG, GIF
        </span>
      );
    }
    return null;
  };

  const renderDragArea = () => {
    if (isDragging) {
      return <IsDraggingOverlay />;
    }
    return (
      <>
        <input
          ref={fileInputRef}
          type="file"
          name="image"
          multiple
          className={styles.imageInput}
          onChange={onFileselect}
        />
        <button className={styles.uploadButton} onClick={selectImages}>
          <GrUploadOption size={20} />
          <span>Click to upload</span>
        </button>
        <div className={styles.helpText}>
          <span>or</span>
          <span>Drag and drop a file here</span>
        </div>
      </>
    );
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <span className={styles.uploaderTitle}>Carousel Uploader</span>
        {renderErrorComponent()}
      </div>
      {images.length > 0 ? (
        <CarouselContent />
      ) : (
        <div
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          className={styles.dragArea}
        >
          {renderDragArea()}
        </div>
      )}
    </main>
  );
}

export default CarouselUploader 