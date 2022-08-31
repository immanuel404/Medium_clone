import Link from 'next/link'
import Image from 'next/image'
import Logo from '../static/logo.png'
import {FiBookmark} from 'react-icons/fi'

const styles = {
    wrapper: 'flex max-w-[46rem] h-[13rem] items-center gap-[2rem] cursor-pointer',
    authorContainer: 'flex gap-[.4rem]',
    authorImageContainer: 'grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]',
    authorImage: 'object-cover',
    authorName: 'font-semibold',
    title: 'font-bold text-2xl',
    briefing: 'text-[#787878]',
    detailsContainer: 'flex items-center justify-between text-[#787878]',
    articleDetails: 'my-2 text-[.8rem]',
    category: 'bg-[#F2F3F2] p-1 rounded-full',
    bookmarkContainer: 'cursor-pointer',
    postDetails: 'flex-[2.5] flex flex-col',
    thumbnailContainer: 'flex-1',
}

const PostCard = ({ post }) => {
    return (
        <Link href={`/post/${post.id}`}>
        <div className={styles.wrapper}>
            <div className={styles.postDetails}>
                
                {/* POST-DETAILS */}
                <div className={styles.authorContainer}> 
                    <div className={styles.authorImageContainer}>
                        <Image src={Logo.src} className={styles.authorImage} width={40} height={40}/>
                    </div>
                    <div className={styles.authorName}>{post.data.author}</div>
                </div>

                {/* POST-DETAILS */}
                <h1 className={styles.title}>{post.data.title}</h1>
                <div className={styles.briefing}>{post.data.brief}</div>
                <div className={styles.detailsContainer}>
                    <span className={styles.articleDetails}>{new Date(post.data.postedOn).toLocaleString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        })} - {post.data.postLength} - <span className={styles.category}>{post.data.category}</span></span>
                    <span className={styles.bookmarkContainer}>
                        <FiBookmark className='h-5 w-5' />
                    </span>
                </div>
            </div>

            {/* UNUSED-THUMBNAIL */}
            <div className={styles.thumbnailContainer}>
                {/* <Image
                 src={Logo.src}        
                 height={100}
                 width={100}
                /> */}
            </div>
        </div>
        </Link>
    )
}

export default PostCard