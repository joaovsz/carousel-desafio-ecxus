import { ChangeEvent, createContext, useRef, useState } from "react";
import { AppContextType, ImageObject, initialValues } from "../types/UploaderContextTypes";

export const ImagesContext = createContext<AppContextType>(initialValues);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function UploaderProvider(props: any) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [images, setImages] = useState<ImageObject[]>([]);
  const [errorComponent, setErrorComponent] = useState(false);
  function onFileselect(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (!files || files.length === 0) {
      return;
    }
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const maxSize = 1024 * 1024;
    const filteredFiles = Array.from(files).filter((file) => {
      const fileType = file.type;
      const fileSize = file.size;
      return allowedTypes.includes(fileType) && fileSize <= maxSize;
    });
    if (filteredFiles.length !== files.length) {
      setErrorComponent(true);
    }
    setFunctionUtil(filteredFiles);

  }
  function selectImages() {
    fileInputRef && fileInputRef.current?.click();
  }
  function removeImage(index: number) {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  }
  function onDragOver(event: { preventDefault: () => void; dataTransfer: { dropEffect: string; }; }) {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy"

  }
  function onDragLeave(event: { preventDefault: () => void; }) {
    event.preventDefault()
    setIsDragging(false);

  }
  function setFunctionUtil(files: FileList | File[]) {
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }
  function onDrop(event: { preventDefault: () => void; dataTransfer: { files: FileList; }; }) {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const maxSize = 1024 * 1024;
    const filteredFiles = Array.from(files).filter((file) => {
      const fileType = file.type;
      const fileSize = file.size;
      return allowedTypes.includes(fileType) && fileSize <= maxSize;
    });
    if (filteredFiles.length !== files.length) {
      setErrorComponent(true);
    }
    setFunctionUtil(filteredFiles)

  }

  return (
  <ImagesContext.Provider value={{ images, setErrorComponent,errorComponent, fileInputRef, isDragging, setImages, onFileselect, selectImages, removeImage, onDragOver, onDragLeave, onDrop }}>
    {props.children}
  </ImagesContext.Provider>)
}