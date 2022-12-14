import Link from 'next/link'
import Image from 'next/image'
import Qazi from '../static/qazi.jpg'
import SmallLogo from '../static/smallLogo.png'
import { HiOutlineHome } from 'react-icons/hi'
import { FiBell } from 'react-icons/fi'
import { BiBookmarks } from 'react-icons/bi'
import { RiArticleLine } from 'react-icons/ri'
import { BsPencilSquare } from 'react-icons/bs'

const styles = {
    wrapper: 'w-[5rem] h-screen flex flex-col justify-between items-center',
    logoContainer: 'cursor-pointer p-[1rem]',
    iconsContainer: 'flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-[#787878]',
    divider: 'border-b',
    profileImage: 'object-cover',
    profileImageContainer: 'w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center',
}

const ReadersNav = () => {
    return (
        <div className={styles.wrapper}>

            {/* HOME-NAV */}
            <Link href='/'>
                <div className={styles.logoContainer}>
                    <Image src={SmallLogo} />
                </div>
            </Link>

            <div className={styles.iconsContainer}>
                {/* ICONS */}
                <HiOutlineHome />
                <FiBell />
                <BiBookmarks />
                <RiArticleLine />
                <div className={styles.divider} />
                <BsPencilSquare />
                {/* PROFILE-IMG */}
                <div className={styles.divider} />
                <div className={styles.profileImageContainer}>
                    <Image className={styles.profileImage} src={Qazi} />
                </div>
            </div>
        </div>
    )
}

export default ReadersNav