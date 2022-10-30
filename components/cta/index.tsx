import Link from "next/link";

import styles from "./cta.module.scss";
import { RiChatPollFill } from "react-icons/ri";

function CtaSection() {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>What are you working on?</h2>

            <p className={styles.subheading}>
                Let&apos;s have a conversation! I would love to hear about what
                you&apos;re working on and find a way to work together.
            </p>

            {/* TODO: Add a "contact" page & link to it. */}
            <Link href="/about" passHref>
                <a className={styles.contactBtn}>
                    <RiChatPollFill title="chat button" size={22} />
                    Chat
                </a>
            </Link>
        </div>
    );
}

export default CtaSection;
