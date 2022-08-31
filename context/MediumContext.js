import { createContext, useEffect, useState } from "react";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db, auth, provider } from '../firebase'
import { signInWithPopup } from "firebase/auth"
// CREATE CONTEXT
const MediumContext = createContext()


const MediumProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [currentUser, setCurrentUser] = useState([])

    // GET USERS
    useEffect(() => {
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'users'))
    
            setUsers(querySnapshot.docs.map(doc =>{
                return {
                    id: doc.id,
                    data: {
                        ...doc.data()
                    }
                }
            }))
        }
        getUsers()
    }, [])

    // GET ARTICLES
    useEffect(() => {
        const getPosts = async () => {
            const querySnapshot = await getDocs(collection(db, 'articles'))
    
            setPosts(querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: {
                        body: doc.data().body,
                        brief: doc.data().brief,
                        category: doc.data().category,
                        postLength: doc.data().postLength,
                        bannerImage: doc.data().bannerImage,
                        title: doc.data().title,
                        postedOn: doc.data().postedOn,
                        author: doc.data().author,
                    }
                }
            }))
        }
        getPosts()
    }, [])

    
    // ADD AUTH-USER TO FIRESTORE_if-new
    const addUserToFirebase = async user => {
        await setDoc(doc(db, 'users', user.email),{
            email: user.email,
            name: user.displayName,
            imageurl: user.photoURL,
            followerCount: 0
        })
    }
    // AUTHENTICATION
    const handleUserAuth = async () => {
        const userData = await signInWithPopup(auth, provider)
        const user = userData.user
        //console.log(userData, user)
        setCurrentUser(user)
        addUserToFirebase(user)
    }


    return (
        <MediumContext.Provider value={{ users, posts, currentUser, handleUserAuth }}
        >{children}</MediumContext.Provider>
    )
}

export { MediumContext, MediumProvider }