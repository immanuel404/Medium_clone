import ReadersNav from '../../components/ReadersNav'
import Recommendations from '../../components/Recommendations'
import ArticleMain from '../../components/ArticleMain'
import { MediumContext } from '../../context/MediumContext'
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const styles = {
    content: 'flex',
}

const Post = () => {
    const router = useRouter()
    const { posts, users } = useContext(MediumContext)
    const [post, setPost] = useState([])
    const [author, setAuthor] = useState([])


    useEffect(() => {
        if(posts.length === 0) {
            return
        }
        // RETURN POST THAT MATCHES URL-ID
        setPost(posts.find(post => post.id === router.query.slug))     
        // RETURN USER/WRITER OF POST
        setAuthor(users.find(user => user.data.name == post?.data?.author))
        //console.log(post, author)
    }, [post])

    
    return (
        <div className={styles.content}>
            <ReadersNav />
            <ArticleMain post={post} author={author} />
            <Recommendations />
        </div>
    )
}

export default Post