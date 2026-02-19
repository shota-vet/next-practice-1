import styles from "./Service.module.css";
import ServiceCard from "./ServiceCard";
import { services } from "./serviceData";

export default function Service() {
  return (
    <section className={styles.service}>
      <div className={styles.serviceInner}>
        <div className={styles.serviceHeading}>
          <h2 className={styles.serviceTitle}>Service</h2>
          <p className={styles.serviceSub}>事業内容</p>
        </div>
        <div className={styles.serviceList}>
          {services.map((item) => (
            <ServiceCard
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <button className={styles.button}></button>
      </div>
    </section>
  );
}
