import { Meta } from "@storybook/react";
import { UploaderProvider } from "../../context/UploaderContext";
import CarouselUploader from "./CarouselUploader ";

export default {
    title: "CarouselUploader",
    component: CarouselUploader,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "O componente CarouselUploader permite o envio de imagens existentes no compudaor do usuário, podendo ser enviadas arrastando a imagem para dentro da área de drag, ou incluindo a imagem pelo botão 'Add Image'",
            },
        },
        tags: ["autodocs"],
        argTypes: {
        }
    },
} as Meta;

export const Example = () => (
    <UploaderProvider>
        <CarouselUploader />
    </UploaderProvider>
);