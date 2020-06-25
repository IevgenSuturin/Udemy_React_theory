import React from 'react'

export default class ErrorBoundary extends React.Component{
    
    state = {
        hasError: false,
        error: {message: '', stack: ''},
        info: {componentStack: ''}
    }

    static getDerivedStateFromError = error =>{
        return {hasError: true};
    }

    //This method will be invoked when some derived class realized the error occur
    componentDidCatch(error, info){
        this.setState({error, info});
    }

    render(){
        if(this.state.hasError){
            return (
                <div>
                    <h1 style={{color: 'red'}}>Something went wrong</h1>
                    <p>{this.state.error.message}</p>
                </div>
            );
        }

        return this.props.children;
    }
}