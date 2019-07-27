import React from 'react';


class EditMyDeal extends React.Component {

    state = {
        image: "",
        description: ""

    }


    handleChange = e => {
        this.setState({

            [e.target.name]: e.target.value

        });
        console.log("p")
    };

    editMyDealOnServer(id) {
        const options = {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                deal: {
                    image: this.state.image,
                    description: this.state.description
                }
            })
        };
        return fetch(`http://localhost:3000/deals/${id}`, options)
            .then(resp => resp.json())
            .then((json) => {

                this.props.history.push(`/deals/${id}`)
            })
    }



    handleSubmit = e => {
        e.preventDefault()
        this.editMyDealOnServer(this.props.match.params.id)
    }



    render() {
        const { restaurant } = this.state;
        return (
            <>
                <div className="editMyDealForm">

                    < form onSubmit={this.handleSubmit} className="searchBar" >

                        <input
                            name="image" onChange={this.handleChange}
                            className="inputBox"
                            onChange={this.handleChange}
                            type="text"
                            placeholder="image"
                            label='image' />

                        <input
                            name="description"
                            className="inputBox"
                            onChange={this.handleChange}
                            type="text"
                            placeholder="description"
                            label='description' />
                        <input className="submitButton" type="submit" />

                    </form >

                </div >
            </ >

        );
    }
}








export default EditMyDeal;
