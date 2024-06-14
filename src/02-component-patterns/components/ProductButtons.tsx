import { useCallback, useContext, useState } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

interface Props {
  className?: string;
  style?: React.CSSProperties;

}

export const ProductButtons = ({ className, style }: Props) => {

  //TOD: maxcount
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(
    //pregunto ya que maxCount puede ser undefined
    () => !!maxCount && counter === maxCount 
    , [counter, maxCount])

  return (

    <div
      className={`${styles.buttonsContainer} ${className}`}
      style={style}>
      <button
        className={styles.buttonMinus}
        onClick={() => increaseBy(-1)}
      >-</button>

      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
        disabled={isMaxReached()}
        onClick={() => increaseBy(1)}
      > + </button>
    </div>
  );
};