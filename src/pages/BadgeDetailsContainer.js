import React from 'react';

import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import BadgeDetails from '../pages/BadgeDetails';

import api from '../api';

class BadgeDetailsContainer extends React.Component{
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
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

    handleOpenModal= (event)=>{
        this.setState({modalIsOpen: true})
    }

    handleCloseModal = (event) =>{
        this.setState({modalIsOpen: false})
    }

    handleDeleteBadge = async (event)=>{
        this.setState({loading: true, error: null})

        try{
            await api.badges.remove(this.props.match.params.badgeId);
            this.setState({loading: false})
            this.props.history.push('/badgesOriginal')//nos redirijimos a la lista de Badges
        }
        catch(error){
            this.setState({loading: false, error: error})
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

        return(
            <BadgeDetails onCloseModal={this.handleCloseModal} onOpenModal={this.handleOpenModal} modalIsOpen={this.state.modalIsOpen} 
                onDeleteBadge={this.handleDeleteBadge} badge={this.state.data}/>
        )
    }
}

export default BadgeDetailsContainer