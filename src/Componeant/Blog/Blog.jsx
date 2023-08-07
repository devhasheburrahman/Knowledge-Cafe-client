import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = ({ handelAddToReadTime, user, handleAddTOBookmark }) => {

    const { name, profile, img, title, time } = user;

    return (

        <div className="blog-container root-blogs ">

            <div >
                <img className='blog-img' src={img} alt="" />

                <div className='hasib'>
                    <div>
                        <div className='name-container'>
                            <img className='user-img' src={profile} alt="" />
                            <div className='name'>
                                <p>{name}</p>
                                <p className='date'>Mar 14 (4 Days ago)</p>

                            </div>
                        </div>
                        <h2>{title}</h2>


                        <button className='raedBtn' onClick={() => handelAddToReadTime(time)}>Mark as read</button>

                    </div>

                    <div className='read'>
                        <p> {time} min read</p>
                        <FontAwesomeIcon onClick={() => handleAddTOBookmark(title)} icon={faBookmark} />

                    </div>
                </div>

            </div>
        </div>

    );
};

export default Blog;