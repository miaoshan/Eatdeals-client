import React from 'react';
import DealSpecCard from './DealSpecCard'

class DealSpec extends React.Component {

    state = {
        deal: {}
    }

    getSingleDeal = (id) => {
        // debugger
        fetch(`http://localhost:3000/deals/${id}`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({ deal: data })
            })
    }

    componentDidMount() {
        this.getSingleDeal(this.props.match.params.id)
    }

    render() {
        const { deal } = this.state;
        return (
            <div>
                <div className="" >
                    <DealSpecCard deal={deal} />
                </div>
            </div >

        );
    }
}

export default DealSpec;

