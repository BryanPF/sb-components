/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Este es el mensaje que se va mostrar en el label
     */
    label: string;
    /**
     * Este es el tamaño  del label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Si quiere todo capitalizado
     */
    allCaps?: boolean;
    /**
     * Colores basicos del boton
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color personalizado de la fuente
     */
    fontColor?: string;
    /**
     * Color personalizado de la fuente
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
