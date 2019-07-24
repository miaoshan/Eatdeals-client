import React, { Component } from 'react';


class PostDetails extends Component {

    render() {
        return (

            <div key={this.props.index}>
                <div className="card">
                    <div className="card-body">

                        <p className="card-text">
                            Restaurant: {this.props.post.restaurant.name}
                        </p><br />

                        <p className="card-text">
                            Deal: {this.props.post.description}
                        </p>

                        <p className="card-text">
                            Image:
                        </p>
                        <img className="restaurant-img" src={this.props.post.restaurant.image} />


                    </div>
                </div>


            </div>
        )
    };
}

export default PostDetails;
