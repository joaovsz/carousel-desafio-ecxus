// CarouselUploader.stories.js

import { ImagesContext, UploaderProvider } from '../../context/UploaderContext';
import CarouselUploader from './CarouselUploader ';

export default {
    title: 'CarouselUploader',
    component: CarouselUploader,
};

export const Default = () => (
    <UploaderProvider value={
        {
            images: [], isDragging: false
        }}>
        <CarouselUploader />
    </UploaderProvider>
);

export const WithImages = () => (
    <ImagesContext.Provider
        value={
            {
                images: [{
                    name: "Teste 1",
                    url: "https://images.pexels.com/photos/10917649/pexels-photo-10917649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                },
                {
                    name: "Teste 2",
                    url: "https://images.pexels.com/photos/10917649/pexels-photo-10917649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }, {
                    name: "Teste 3",
                    url: "https://images.pexels.com/photos/10917649/pexels-photo-10917649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                },
                {
                    url: "https://images.pexels.com/photos/10917649/pexels-photo-10917649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    name: "Imagem de teste"
                }], isDragging: false
            }}
    >
        <CarouselUploader />
    </ImagesContext.Provider>
);

export const IsDragging = () => (
    <ImagesContext.Provider value={{ images: [], isDragging: true }}>
        <CarouselUploader />
    </ImagesContext.Provider>
);

export const WithError = () => (
    <ImagesContext.Provider value={{ images: [], errorComponent: true, isDragging: false }}>
        <CarouselUploader />
    </ImagesContext.Provider>
);
