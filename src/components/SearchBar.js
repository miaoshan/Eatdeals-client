import React, { Component } from 'react';
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment
} from 'semantic-ui-react';
import { Dropdown } from 'semantic-ui-react';

const dropDownOptions = [
    { key: 'Alphabetically', value: 'Alphabetically', text: 'Alphabetically' },
    { key: 'Price', value: 'Price', text: 'Average cost per person High-Low' },
    { key: 'Review', value: 'Review', text: 'Review High-Low' },
]

const SearchBar = (props) => {

    return (
        <div>
            <Grid centered columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h2" textAlign="center"></Header>
                        <Segment>
                            <Form size="large">
                                <Form.Input
                                    onSubmit={props.selectRestaurant} className="searchBar"
                                    className="searchBox"
                                    onChange={props.updateSearchTerm}
                                    type="text"
                                    placeholder="Search" />
                            </Form>
                        </Segment>

                        {/* 
                    <div>
                        <p className="orangeFont">Sort By:</p>
                        <select onChange={props.setSortBy} className="searchButton">
                            <option value="Alphabetically">Alphabetically</option>
                            <option value="Price">Average cost per person High-Low</option>
                            <option value="Review">Review High-Low</option>
                        </select>
                    </div> */}

                        <Dropdown
                            placeholder='Sort By'
                            fluid

                            selection onChange={props.setSortBy} className="searchButton"
                            options={dropDownOptions}

                        />

                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div >
    )


}





export default SearchBar;







