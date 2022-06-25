import styles from './PageSubtitle.module.scss';
import clsx from 'clsx';

const PageSubtitle = props => {
  return (
    <p className={clsx(styles.subtitle, props.addMargin && styles.addMargin)}>{props.children}</p>
  );
}

export default PageSubtitle;