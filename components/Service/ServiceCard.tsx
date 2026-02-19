import styles from "./ServiceCard.module.css";
import { ServiceItem } from "./serviceData";

type Props = ServiceItem;

export default function ServiceCard(props: ServiceItem) {
  return (
    <div className={styles.card}>
      {/* cardひとつひとつの枠 */}
      <img src={props.image} alt={props.title} className={styles.image} />

      <h3 className={styles.title}>{props.title}</h3>

      <p className={styles.text}>{props.description}</p>
    </div>
  );
}
