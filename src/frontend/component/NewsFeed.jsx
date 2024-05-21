/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import img from '../../assets/person_icon.png';
import img2 from '../../assets/options.png';
import UV from '../../assets/upvote_icon.png';
import DV from '../../assets/devote_icon.png';
import share from '../../assets/share_icon.png';

export function PostCall() {
    const [PostData, setPostData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/collablearn/user/getPosts')
            .then(response => response.json())
            .then(data => {
                setPostData(data.posts.map(post => ({
                    UserImg: post.userId.profilePicture ? `http://localhost:3001/${post.userId.profilePicture}` : img,
                    name: post.userId.username,
                    time: new Date(post.createdAt).toLocaleString(),
                    text: post.content,
                    img: post.image ? `http://localhost:3001/${post.image}` : '',
                    document: post.document ? `http://localhost:3001/${post.document}` : '',
                    video: post.video ? `http://localhost:3001/${post.video}` : '',
                    upvote: post.upvotes.length,
                    devote: post.devotes.length,
                    share: post.shares.length,
                    comment: post.comments.length,
                })));
            })
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div className="flex flex-col items-center w-full">
            {PostData.map((postdetail, index) => (
                <Post key={index} postdetail={postdetail} />
            ))}
        </div>
    );
}

export function Post(props) {
    const postdetail = props.postdetail;
    const [upvote, setupvote] = useState(postdetail.upvote);
    const [checked, setChecked] = useState(false);
    const [Devote, setDevote] = useState(postdetail.devote);
    const [Checkeddevote, setCheckeddevote] = useState(false);

    const vote = () => {
        if (checked) {
            setChecked(false);
            setupvote(upvote - 1);
        } else {
            setChecked(true);
            setupvote(upvote + 1); 
        }
    };

    const fordevote = () => {
        if (Checkeddevote) {
            setCheckeddevote(false);
            setDevote(Devote - 1);
        } else {
            setCheckeddevote(true);
            setDevote(Devote + 1); 
        }
    };

    return (
        <div className="flex flex-col w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 bg-white shadow-lg rounded-lg p-4 my-4">
            <div className="flex items-center border-b border-gray-300 pb-2 mb-4">
                <img src={postdetail.UserImg} className="w-12 h-12 rounded-full border border-indigo-500" />
                <div className="ml-4">
                    <div className="font-bold text-lg">{postdetail.name}</div>
                    <div className="text-gray-500 text-sm">{postdetail.time}</div>
                </div>
                <img src={img2} className="ml-auto w-6 h-6" />
            </div>
            <div className="mb-4">
                <div className="text-lg">{postdetail.text}</div>
                {postdetail.img && (
                    <div className="mt-4 flex justify-center">
                        <img src={postdetail.img} alt="" className="w-full max-w-lg h-auto rounded-lg" />
                    </div>
                )}
                {postdetail.video && (
                    <div className="mt-4 flex justify-center">
                        <video controls src={postdetail.video} className="w-full max-w-lg h-auto rounded-lg" />
                    </div>
                )}
                {postdetail.document && (
                    <div className="mt-4 flex justify-center">
                        {/* <embed src={postdetail.document} className="w-full max-w-lg h-auto rounded-lg" /> */}
                        {/* <embed src={postdetail.document + "#toolbar=0"} className="w-full max-w-lg h-auto rounded-lg" /> */}

                        <a href= {postdetail.document}>Your File</a>

                    </div>
                )}
            </div>
            <div className="flex items-center justify-around border-t border-gray-300 pt-2">
                <div className="flex items-center space-x-2">
                    <img src={UV} className="w-6 h-6 cursor-pointer" onClick={vote} />
                    <span>{upvote}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <img src={DV} className="w-6 h-6 cursor-pointer" onClick={fordevote} />
                    <span>{Devote}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span>{postdetail.comment}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <img src={share} className="w-6 h-6" />
                    <span>{postdetail.share}</span>
                </div>
            </div>
        </div>
    );
}