import React, { ChangeEvent } from "react";

export const initialValues = {
  images: [] as ImageObject[],
  isDragging: false,
  errorComponent: false,
  fileInputRef: null,
  setImages: () => {},
  onFileselect: () => {},
  selectImages: () => {},
  removeImage: () => {},
  setErrorComponent: () => {},
  onDragOver: () => {},
  onDragLeave: () => {},
  onDrop: () => {},
};
export interface AppContextType {
  images?: ImageObject[];
  errorComponent?: boolean;
  fileInputRef?: React.RefObject<HTMLInputElement> | null;
  isDragging: boolean;
  setImages: React.Dispatch<React.SetStateAction<ImageObject[]>>;
  onFileselect: (event: ChangeEvent<HTMLInputElement>) => void;
  selectImages: () => void;
  setErrorComponent: React.Dispatch<React.SetStateAction<boolean>>;
  removeImage: (index: number) => void;
  onDragOver: (event: {
    preventDefault: () => void;
    dataTransfer: { dropEffect: string };
  }) => void;
  onDragLeave: (event: { preventDefault: () => void }) => void;
  onDrop: (event: {
    preventDefault: () => void;
    dataTransfer: { files: FileList };
  }) => void;
}

export type ImageObject = {
  name: string;
  url: string;
};
