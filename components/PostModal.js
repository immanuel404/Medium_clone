import {useContext, useState } from 'react'
import { db } from '../firebase'
import { MediumContext } from '../context/MediumContext'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const styles = {
    wrapper: 'w-[50rem] h-[40rem] flex flex-col justify-start items-center gap-[1rem] p-[1rem] font-mediumSerif overflow-scroll',
    title: 'my-[1rem] font-bold text-3xl',
    smallField: 'w-full flex justify-between gap-[1rem]',
    fieldTitle: 'flex-1 text-end',
    inputContainer: 'flex-[5] h-min border-2 border-[#787878]',
    inputField: 'w-full border-0 outline-none bg-transparent',
    accentedButton: 'bg-black text-white py-1 px-4 rounded-full',
}

const PostModal = () => {
    const { currentUser } = useContext(MediumContext)
    // FIELDS
    const [title, setTitle] = useState('')
    const [brief, setBrief] = useState('')
    const [category, setCategory] = useState('')
    const [postLength, setPostLength] = useState('')
    const [bannerImage, setBannerImage] = useState('')
    const [body, setBody] = useState('')


    // SUBMIT-POST
    const addPostToFirebase = async event => {
        event.preventDefault()
        console.log(currentUser)

        await addDoc(collection(db, 'articles'),{
            bannerImage: bannerImage,
            body, body,
            category: category,
            brief: brief,
            postedOn: serverTimestamp(),
            postLength: Number(postLength),
            title: title,
            author: currentUser.email
        })
        document.getElementById('formMessage').innerHTML = "Successful"
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Create a New Post</div>
            
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Title</span>
                <span className={styles.inputContainer}>
                    <input
                    className={styles.inputField}
                    type='text'
                    onChange={event=>setTitle(event.target.value)}
                    />
                </span>
            </div>

            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Brief</span>
                <span className={styles.inputContainer}>
                    <input
                    className={styles.inputField}
                    type='text'
                    onChange={event=>setBrief(event.target.value)}
                    />
                </span>
            </div>

            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Image URL</span>
                <span className={styles.inputContainer}>
                    <input
                    className={styles.inputField}
                    type='text'
                    onChange={event=>setBannerImage(event.target.value)}
                    />
                </span>
            </div>
            
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Category</span>
                <span className={styles.inputContainer}>
                    <input
                    className={styles.inputField}
                    type='text'
                    onChange={event=>setCategory(event.target.value)}
                    />
                </span>
            </div>

            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Read Length (in minutes)</span>
                <span className={styles.inputContainer}>
                    <input
                    className={styles.inputField}
                    type='text'
                    onChange={event=>setPostLength(event.target.value)}
                    />
                </span>
            </div>

            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Article Text</span>
                <span className={styles.inputContainer}>
                    <textarea
                    className={styles.inputField}
                    type='text'
                    rows={8}
                    onChange={event=>setBody(event.target.value)}
                    />
                </span>
            </div>

            {/* FORM-SUBMIT-BUTTON */}
            <button className={styles.accentedButton} onClick={addPostToFirebase}>Submit</button>
            <p id="formMessage"></p>
        </div>
    )
}

export default PostModal