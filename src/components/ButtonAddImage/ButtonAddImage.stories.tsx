import { Meta } from "@storybook/react";
import { UploaderProvider } from "../../context/UploaderContext";
import ButtonAddImage from "./ButtonAddImage";

export default {
    title: 'Components/ButtonAddImage',
    component: ButtonAddImage,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Este componente tem como funcionalidade adicionar uma nova imagem ao carousel"
            },
        },
    },
} as Meta;

export const Default = () => (
    <UploaderProvider>
        <ButtonAddImage />
    </UploaderProvider>
);