import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.degreeName}</h4>
                    <p>{this.props.schoolName}</p>
                    <p style={{color:"teal", fontSize:"20px", fontWeight:"bolder"}}>{this.props.specialty}</p>
                </Cell>
            </Grid>
        );
    }
}

export default Education;