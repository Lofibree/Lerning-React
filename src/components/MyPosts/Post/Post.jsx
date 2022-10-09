import React, { useState } from 'react';
import s from './Post.module.css';

const Post = (props) => {

    const [styleItem, setStyleItem] = useState(s.item);
    const [styleText, setStyleText] = useState(s.postText);

    return (
        <div className={styleItem}
            onClick={() => {
                setStyleItem(styleItem + ' ' + s.active);
                setStyleText(styleText + ' ' + s.active)
            }
            }
        >
            <div className={s.container}>
                <header className={s.headerPost}>
                    <img src='https://sun9-67.userapi.com/impg/ZpEY_6ZWK2cvJcy22GfXNBcEzhz2XKxkPY6aTg/k2LsIPcvlFE.jpg?size=1280x720&quality=96&sign=0cfb8c7c9659dddfbe3549f3dbaf8f29&type=album' />
                    <div className={s.postAuthor}>First public</div>
                </header>
                <main className={s.mainPost}>
                    <h6 className={styleText}>{props.message}</h6>
                </main>
                <footer className={s.footer}>
                    <div className={s.likes}>
                        Likes: {props.likeCount}
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Post;