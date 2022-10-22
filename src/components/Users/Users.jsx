import React from 'react';
import s from './Users.module.css';
import axios from 'axios';


class Users extends React.Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                // debugger;

                this.props.setUsersCont(response.data.items);
                this.props.setTotalUsersCountCont(response.data.totalCount);
            })

        axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${this.props.pageSize}&_page=${this.props.currentPage}`)
            .then(response => {
                // debugger;

                this.props.setUsersImgCont(response.data)
            })
        // debugger;
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPageCont(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
        .then(response => {
            // debugger;

            this.props.setUsersCont(response.data.items);
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pagesArr = [];
        for (let i = 1; i <= pagesCount; i++) {
            pagesArr.push(i);
        }


        return (
            <div className={s.users}>
                <div>
                    {pagesArr.map(
                        (p) => {
                            if (p <= 10) {
                                return (
                                    <span
                                        className={this.props.currentPage === p && s.selectedPage}
                                        onClick={() => {
                                            // debugger;
                                            this.onPageChanged(p)
                                        }}
                                    >
                                        {p}
                                    </span>
                                )
                            }  
                        }
                    )}
                    {/* <span className={s.selectedPage}>1</span>/ */}
                </div>
                {this.props.usersItemsEl}
            </div>
        );
    }
}



export default Users;