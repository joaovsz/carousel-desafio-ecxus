import { Meta } from "@storybook/react";
import { UploaderProvider } from "../../context/UploaderContext";
import styles from "../CarouselUploader/CarouselUploader.module.css";
import CarouselContent from "./CarouselContent";
const meta: Meta = {
    title: "Components/CarouselContent",
    component: CarouselContent,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        onClickLeftButton: {
            description: 'Ao clicar no botão localizado na esquerda ele move o carousel para a esquerda',
        },
        onClickRightButton: {
            description: 'Ao clicar no botão localizado na direita ele move o carousel para a direita',
        },
        isDragging: {
            description: "Caso o usuario esteja arrastando uma imagem para o carousel, este estado fica como verdadeiro, mostrando outro componente sobrebondo o carousel",
        },
    },
    tags: ["autodocs"],
};

export const Example = () => (
    <UploaderProvider>
        <div className={styles.mainContainer} style={{ height: "20rem" }}>
            <CarouselContent />
        </div>
    </UploaderProvider>
);

export default meta;