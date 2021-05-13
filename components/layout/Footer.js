import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Footer = () => {
    return ( 
        <div className="content">

        <footer className={styles.footer}>
            <a
            href="https://adazolhub.online"
            target="_blank"
            rel="noopener noreferrer"
            >
            All Rights Reserved | © 2021 Adazolhub  {' '}
            <span className={styles.logo}>
                <Image src="/adazolhub-logo.png" alt="Adazolhub Logo" width={36} height={34} />
            </span>
            </a>
        </footer>
        </div>
     );
}
 
export default Footer;