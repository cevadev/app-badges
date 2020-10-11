import React from 'react';
import confLogo from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';

import { Link } from 'react-router-dom';

import './styles/BadgeDetails.css';
class BadgeDetails extends React.Component{
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async()=>{
        this.setState({loading: true, error: null})
        try{
            //le pasamos el badgeId para recuperar el Badge
            const data = await api.badges.read(this.props.match.params.badgeId);
            //actualizamos el estado
            this.setState({loading: false, data: data});
        }catch(error)
        {
            this.setState({loading: false, error: error});
        }
    }

    render(){
        //validaciones
        if(this.state.loading){
            return <PageLoading />
        }

        if(this.state.error){
            return <PageError error={this.state.error}/>
        }

        const BadgeData = this.state.data;

        return(
            <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6"><img src={confLogo} alt="Logo de la conferencia" /></div>
                            <div className="col-6 BadgeDetails__hero--attendant-name">
                                <h1>{BadgeData.firstName} {BadgeData.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName={BadgeData.firstName} lastName={BadgeData.lastName} email={BadgeData.email} twitter={BadgeData.twitter}
                                jobTitle={BadgeData.jobTitle}
                            />
                        </div>
                        <div className="col">
                            <h2>Actions</h2>
                            <div>
                                <div>
                                    <Link className="btn btn-primary mb-4" to={`/badges/${BadgeData.id}/edit`}>Edit</Link>
                                </div>
                                <div>
                                    <button className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeDetails