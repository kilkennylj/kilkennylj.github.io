// Comments require API which githubpages does not support

import React, { useRef, useEffect, useState } from 'react';

import { submitComment } from '../graphcms';

const CommentsForm = ({ slug }) =>
{
    const [error, setError ] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();

    useEffect(() => {
        nameEl.current.value = window.localStorage.getItem('name');
        emailEl.current.value = window.localStorage.getItem('email');
    }, [])

    const handleCommentSubmission = () =>
    {
        setError(false);

        const { value: comment } = commentEl.current;
        const { value: name } = nameEl.current;
        const { value: email } = emailEl.current;
        const { checked: storeData } = storeDataEl.current;

        if(!comment || !name || !email)
        {
            setError(true);
            return;
        }

        const commentObj = { comment, name, email, slug }

        if(storeData)
        {
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('email', email);
        }

        else
        {
            window.localStorage.removeItem('name', name);
            window.localStorage.removeItem('email', email);
        }

        submitComment(commentObj)
            .then((res) => {
                setShowSuccessMessage(true);
                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 3000);
            })
    }

    // These first three classNames suck but I couldn't think of anything else lol.
    return(
        <div className="commentsFormHolder">
            <h3>Post a comment!</h3>
            <div className="commentsFormInfo">
                <input
                    type="text" ref={nameEl}
                    className = "commentsFormName"
                    placeholder="Name"
                    name="name"
                />
                <input 
                    type="email" ref={emailEl}
                    className = "commentsFormEmail"
                    placeholder="Email"
                    name="email"
                />
            </div>
            <div className="commentsFormComment">
                <textarea className="commentsFormMsg"
                    ref={commentEl}
                    placeholder="Comment"
                    name="comment"
                />
            </div>
            <div className="saveContainer">
                <div>
                    <input ref={storeDataEl} type="checkbox" id="storeData" name="storeData" value="true" className="checkbox"/>
                    <label className="saveLabel">Save my info.</label>
                </div>
            </div>
            {error && <p className="errorMsg">All fields are required.</p>}
            <div className="commentButtonContainer">
                <button 
                    type="button" 
                    onClick={handleCommentSubmission}
                    className="commentButton"
                >
                    Post
                </button>
                {showSuccessMessage && <span className="successMsg">Comment submitted for review</span>}
            </div>
        </div>
    )
}

export default CommentsForm;