import Image from 'next/image'
import Qazi from '../static/qazi.jpg'
import Banner from '../static/banner.png'
import { AiFillPlayCircle } from 'react-icons/ai'
import  { IoLogoTwitter } from 'react-icons/io'
import  { FaFacebook } from 'react-icons/fa'
import  { GrLinkedin } from 'react-icons/gr'
import  { HiOutlineLink } from 'react-icons/hi'
import  { BiBookmarks } from 'react-icons/bi'
import  { FiMoreHorizontal } from 'react-icons/fi'

const styles = {
    wrapper: 'flex items-center justify-center flex-[3] border-l border-r',
    content: 'h-screen w-full p-[2rem]',
    postHeaderContainer: 'flex justify-between items-center mt-[2.2rem] mb-[1.2rem]',
    authorcontainer: 'flex gap-[1rem]',
    authorProfileImageContainer: 'h-[3rem] w-[3rem] grid center rounded-full overflow-hidden',
    column: 'flex-1 flex flex-col justify-center',
    postDetails: 'flex gap-[.2rem] text-[#787878]',
    listenButton: 'flex items-center gap-[.2rem] text-[#1A8917]',
    socials: 'flex gap-[1rem] text-[#787878] cursor-pointer',
    space: 'w-[.5rem]',
    bannerContainer: 'h-[18rem] w-full grid center overflow-hidden mb-[2rem]',
    articleMainContainer: 'flex flex-col gap-[2rem]',
    image: 'object-cover',
    title: 'font-bold text-4xl',
    subtitle: 'font-mediumSerifItalic text-[1.4rem] text-[#292929]',
    articleText: 'font-mediumSerifItalic text-[1.4rem] text-[#292929]',
}

const ArticleMain = ({ post, author }) => {
    console.log(post, author)
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.postHeaderContainer}>
                    <div className={styles.authorcontainer}>
                        
                        {/* PROFILE */}
                        <div className={styles.authorProfileImageContainer}>
                        <Image className={'object-over'} src={Qazi} width={100} height={100} />
                        </div>

                        <div className={styles.column}>
                            <div>{author?.data?.name}</div>
                            <div className={styles.postDetails}>
                                <span>June 15 - {post?.data?.postLength} min read</span>
                                <span className={styles.listenButton}>
                                    <AiFillPlayCircle />Listen
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* SOCIAL MEDIA */}
                <div className={styles.socials}>
                    <IoLogoTwitter />
                    <FaFacebook />
                    <GrLinkedin />
                    <HiOutlineLink />
                    <div className={styles.space}>
                        <BiBookmarks />
                        <FiMoreHorizontal />
                    </div>
                </div>

                {/* ARTICLE */}
                <div className={styles.articleMainContainer}>
                    <div className={styles.bannerContainer}>
                        <Image className={styles.image} src={Banner.src} width={100} height={1000} />
                    </div>
                    <h1 className={styles.title}>{post?.data?.title}</h1>
                    <h4 className={styles.subtitle}>
                        <div>{post?.data?.author}, June 15, 2022</div>
                        <div>Brief: {post?.data?.brief}</div>
                    </h4>
                    <div className={styles.articleText}>{post?.data?.body}</div>
                </div>

            </div>
        </div>
    )
}

export default ArticleMain