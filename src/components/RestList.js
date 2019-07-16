import React, { Component } from "react";


class RestList extends Component {
    constructor() {
        super();
        this.state = {
            restList: []
        }
    }

    componentDidMount() {
        fetch(url)
            .then(resp => resp.json())
            .then(data => this.setState({ restList: data }))
    }



}

export default RestList;
