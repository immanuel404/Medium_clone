import Header from '../components/Header'
import Banner from '../components/Banner'
import PostCard from '../components/PostCard'
import { useContext } from 'react'
import { MediumContext } from '../context/MediumContext'

const styles = {
  wrapper: 'mx-auto',
  main: 'flex justify-center',
  container: 'max-w-7xl flex-1',
  postList: 'flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 lg:grid-cols-3',
}

export default function Home() {
  const { posts } = useContext(MediumContext)

  return (
    <div className={styles.wrapper}>
      <Header />
      <Banner />

      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.postList}>
            {/* MAP-POST-DATA */}
            {posts.map(function(post){
              return(
              <PostCard post={post} key={post.id} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
