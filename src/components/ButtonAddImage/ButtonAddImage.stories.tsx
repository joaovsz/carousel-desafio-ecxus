import { Meta } from "@storybook/react";
import { UploaderProvider } from "../../context/UploaderContext";
import ButtonAddImage from "./ButtonAddImage";

const meta: Meta = {
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

    argTypes: {
        onClick: {
            description: 'Ao clicar no botão ele abre a pasta do computador para inserção de imagens',
        }
    },
    tags: ["autodocs"],
};
export default meta;

export const Default = () => (
    <UploaderProvider>
        <ButtonAddImage />
    </UploaderProvider>
);