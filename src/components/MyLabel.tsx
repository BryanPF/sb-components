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
  /**
   * Color personalizado de la fuente
   */
  backgroundColor?: string;
}

export const MyLabel = ( {  
    allCaps = false, 
    color = 'primary', 
    label = 'No Label', 
    size = 'normal',
    fontColor, 
    backgroundColor = 'transparent'
}: MyLabelProps ) => {

  return (
    <span className={`label ${ size } text-${ color }`} style={{ color: fontColor, backgroundColor }}>
      { allCaps ? label.toUpperCase() : label }
    </span>
  )

}


export default MyLabel;