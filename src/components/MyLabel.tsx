import './mylabel.css';


export interface MyLabelProps {
  /**
   * Este es el mensaje que se va mostrar en el label
   */
  label: string;
  /**
   * Este es el tamaño  del label
   */
  size: 'normal'|'h1'|'h2'|'h3';
  /**
   * Si quiere todo capitalizado
   */
  allCaps?: boolean;
  /**
   * Colores basicos del boton
   */
  color?: 'primary'|'secondary'|'tertiary';
  /**
   * Color personalizado de la fuente
   */
  fontColor?: string;
}

export const MyLabel = ( {  
    allCaps = false, 
    color = 'primary', 
    label = 'No Label', 
    size = 'normal',
    fontColor, 
}: MyLabelProps ) => {

  return (
    <span className={`label ${ size } text-${ color }`} style={{ color: fontColor }}>
      { allCaps ? label.toUpperCase() : label }
    </span>
  )

}
