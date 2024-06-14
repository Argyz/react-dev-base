import { createContext } from 'react'
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { InitialValue, Product, ProductCardHandlers, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface Props {
  product: Product;
  //children?: React.ReactElement | React.ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValue
}


export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProduct({ onChange, product, value, initialValues });

  return (
    <>
      <Provider value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}>
        <div
          className={`${styles.productCard} ${className}`}
          style={style}
        >
          {children({
            count: counter,
            isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product,
            increaseBy,
            reset,
          })}
        </div>
      </Provider>

    </>
  )
}

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
