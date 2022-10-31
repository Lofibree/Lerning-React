import React from 'react';
import s from './Post.module.css';
import { AiOutlineEdit, AiOutlineCheck, AiOutlineDelete } from 'react-icons/ai';
import {AiOutlineLeft, AiOutlineRight, AiOutlineArrowLeft} from 'react-icons/ai' 
 

class Post extends React.Component {


    state = {
        styleItem: s.item,
        styleText: s.postText
    }

    changeFontStyle() {

        this.setState({
            styleItem: s.item + ' ' + s.active,
            styleText: s.postText + ' ' + s.active,
        })
    }

    // deletePost() {
    //     debugger;
    //     this.props.deletePost(this.props.id)
    // }

    render() {
        return (
            <div className={this.state.styleItem} onClick={this.changeFontStyle.bind(this)} >
                <div className={s.container}>
                    <h3 className={s.postId}>Post's id: {this.props.id}</h3>
                    <div><img src={`https://picsum.photos/seed/${this.props.id}/526/300`} /></div>
                    <header className={s.headerPost}>
                        <div className={s.postAuthor}>{this.props.title}</div>
                    </header>
                    <main className={s.mainPost}>
                        <h6 className={this.state.styleText}>{this.props.body}</h6>
                        <div className={s.iconBox}>
                        </div>
                    </main>
                    <footer className={s.footer}>
                        <AiOutlineArrowLeft onClick={this.props.goBack} className={s.arrowBtn} />
                        {/* <AiOutlineDelete onClick={this.deletePost.bind(this)}/> */}
                    </footer>
                </div>
            </div>
        );
    }
};

export default Post;