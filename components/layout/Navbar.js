import styles from '../../styles/Custom.module.css'
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <div className={styles.navigation_full_width}>
            <div className={styles.navigation_bar}>
                <div className={styles.logo}>
                    <img src="/logo.svg" alt="notifacation icon in the side bar" width={154} height={70}>

                    </img>
                </div>
                <div className={styles.nav_menu}>
                    <a className={styles.icons} href="">Home</a>
                    <a className={styles.icons} href="">Blog</a>
                    <a className={styles.icons} href="">About</a>
                    <a className={styles.icons} href="">Contact</a>
                </div>
                <div className={styles.side_menu}>
                    <div className="notification">
                        <a href="/"><Image src="/notification.svg" alt="notifacation icon in the side bar" width={22} height={45}></Image></a>
                    </div>
                    <div className="profile">
                        <a href="/"><Image src="/profile-icon.svg" alt="profile icon in the side bar" width={45} height={45}></Image></a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;
