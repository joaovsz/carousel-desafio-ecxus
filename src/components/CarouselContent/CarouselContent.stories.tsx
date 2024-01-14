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
    tags: ["autodocs"],
};

export const Example = () => (
    <UploaderProvider>
        <div className={styles.mainContainer}>
            <CarouselContent />
        </div>
    </UploaderProvider>
);

export default meta;