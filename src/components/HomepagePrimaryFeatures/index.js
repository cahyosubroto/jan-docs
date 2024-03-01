import styles from "../HomepagePrimaryFeatures/styles.module.css";
import clsx from "clsx";

export default function HomepagePrimaryFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className={clsx(styles.cards)}>
                    <div className={clsx(styles.card, styles.cardBluish)}>
                        <div>
                            <p>Installation</p>
                            <h3>Set up Jan with our guide to install across multiple platform.</h3>
                        </div>
                        <div >
                            <a href={"#"}>Get Started</a>
                        </div>
                        <div className={styles.cardImage}>
                            <img alt={"Card Image"} src={"/img/rocket.png"} />
                        </div>
                    </div>
                    <div className={clsx(styles.card, styles.cardPinkish)}>
                        <div>
                            <p>Models</p>
                            <h3>Explore the available pre-configured AI models. </h3>
                        </div>
                        <div >
                            <a href={"#"}>Support</a>
                        </div>
                        <div className={styles.cardImage}>
                            <img alt={"Card Image"} src={"/img/chat.png"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
