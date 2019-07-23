import React, { Component } from "react";
import PostDetails from "../components/PostDetails";

class PostContainer extends Component {

    render() {
        return (

            <div>
                {
                    this.props.posts

                        .map((post, index) => <PostDetails key={index} post={post} />)
                }
            </div>
        );
    }

}

export default PostContainer;
