import React, { useEffect, useState } from 'react';
import './Main.css'
import Blog from '../Blog/Blog';
import { toast } from 'react-toastify';


const Main = () => {
    const [users, setUser] = useState([0]);

    const [readTime, setReadTime] = useState(0);

    const [blogs, setBlogs] = useState([]);

    const handelAddToReadTime = (time) => {
        // console.log(time)

        const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
        // console.log(previousReadTime)
        if (previousReadTime) {
            const sum = previousReadTime + time;
            localStorage.setItem("readTime", sum)
            setReadTime(sum);
            toast.success("Added this time")
        }
        else {
            localStorage.setItem("readTime", time)
            setReadTime(time)
        }

    }

    useEffect(() => {
        const getTime = localStorage.getItem("readTime");
        // console.log(getTime)
        setReadTime(getTime)
    }, [readTime]);

    // book mark btn 

    const handleAddTOBookmark = (title) => {
        // console.log(title)
        const savedBlogs = JSON.parse(localStorage.getItem("savedBlogs"))
        if (savedBlogs) {
            const currentBlogs = [...savedBlogs, title]
            localStorage.setItem("savedBlogs", JSON.stringify(currentBlogs))
            setBlogs(currentBlogs);
            // console.log(currentBlogs)
            toast.success("Successfully bookmarked!")
        }
        else {
            localStorage.setItem("savedBlogs", JSON.stringify([title]))
            setBlogs([title])

        }
    }
    useEffect(() => {
        const savedBlogs = JSON.parse(localStorage.getItem("savedBlogs"))
        // console.log(savedBlogs)
        setBlogs(savedBlogs)
    }, [])

    useEffect(() => {

    }, [blogs])

    useEffect(() => {
        fetch("user.json")
            .then(res => res.json())
            .then(data => setUser(data))

    }, [])
    return (
        <div className='container'>
            <div className="user-container">
                {
                    users?.map(user =>
                        <Blog key={user.id}
                            user={user}
                            handelAddToReadTime={handelAddToReadTime}
                            handleAddTOBookmark={handleAddTOBookmark}
                        ></Blog>


                    )
                }

            </div>
            <div className="blog-container">
                <div className='spant'>
                    Spent time on read : {readTime}  min

                </div>
                <div className='bookmar-blog'>
                    Bookmarked Blogs :
                    {blogs?.map((blog, index) => (
                        <div key={index}>{index + 1} {blog}</div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Main;