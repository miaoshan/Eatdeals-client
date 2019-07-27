import React from 'react';
import DealSpecCard from './DealSpecCard'

class DealSpec extends React.Component {

    state = {
        deal: {
            restaurant: {}
        },
    }

    getSingleDeal = (id) => {
        // debugger
        fetch(`http://localhost:3000/deals/${id}`)
            .then(resp => resp.json())
            .then(json => {
                console.log('in then', json)
                return json
            })
            .then(data => {
                this.setState({ deal: data })
            })
    }

    componentDidMount() {
        console.log('didMount runs')
        console.log(this.props)
        this.getSingleDeal(this.props.match.params.id)
    }

    render() {
        const { deal } = this.state;
        console.log('state:', this.state)
        console.log('deal', deal)
        return (
            <div>
                <div className="" >
                    {<DealSpecCard deal={deal} />}
                </div>
            </div >

        );
    }
}

export default DealSpec;

