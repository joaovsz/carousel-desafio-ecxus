import { ImagesContext, UploaderProvider } from '../../context/UploaderContext';
import CarouselUploader from './CarouselUploader ';

export default {
    title: 'CarouselUploader',
    component: CarouselUploader,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        onDrop: {
            description: 'Ao soltar uma imagem ele adiciona a imagem ao final do carousel, e se a soma do tamanho das imagens ultrapassar o limite do carousel, o carousel faz um scroll automático para a direita',
            default: false
        },
        onClick: {
            description: 'Ao clicar no botão de upload ele abre a pasta do computador para inserção de imagens'
        }
    },
    tags: ["autodocs"],
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
        <div >
            <CarouselUploader />
        </div>
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
