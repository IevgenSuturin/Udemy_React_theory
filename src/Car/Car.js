import React from 'react'
//Use Redux library in order to provide inline style with pseudo class functionality
//import Radium from 'radium'
import classes from './Car.module.scss'
import withClass from '../hoc/withClass'

class Car extends React.Component{

    render(){
        console.log('Car render');
        console.log(classes.Car.input);


        const inputClasses = [classes.Car.input];
        
        if(this.props.name !== ''){
            inputClasses.push(classes.Car.green);
        } else {
            inputClasses.push(classes.Car.red);
        }
        
        if(this.props.name.length > 4){
            inputClasses.push(classes.bold);
        }
        
        return (
            <React.Fragment>
                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                { this.props.children }
                <input 
                    type='text' 
                    onChange={this.props.onChangeCarName} 
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onChangeTitle}>Change Title</button>
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
        )
    }
}

console.log(classes)
export default withClass(Car, classes.Car)

// FUNCTIONAL COMPONENT APPROACH
// // function Car(){
// //     return(
// //         <h2>This is car component</h2>
// //     )
// // }

// // const car = ()=>{
// //      return (<div>This is a car component</div>)
// // }

// // const car = () => (
// //     <div>
// //         This is a car component
// //         <strong> test</strong>
// //     </div>
// // )

//OBJECT ORIENTED APPROACH
//class Car extends React.Component{

    //COMPONENT LIFE CYCLES
    // UNSAFE_componentWillReceiveProps(nextProps){
    //     console.log('Car UNSAFE_componentWillReceiveProps ', nextProps);
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('Car shouldComponentUpdate ', nextProps, nextState);
    //     return nextProps.name.trim() !== this.props.name.trim();
    // }

    // UNSAFE_componentWillUpdate(nextProps, nextState){
    //     console.log('Car componentWillUpdate ', nextProps, nextState);
    // }

    //Use it to update your local state according to input parameters
    // static getDerivedStateFromProps(nextProps, prevState){
    //     console.log('Car getDerivedStateFromProps ', nextProps, prevState);
    //     return prevState;
    // }

    // componentDidUpdate(){
    //     console.log('Car componentDidUpdate ');
    // }

    // getSnapshotBeforeUpdate(){
    //     console.log('Car getSnapshotBeforeUpdate');
    // }

    // componentWillUnmount(){
    //     console.log('Car componentWillUnMount')
    // }

// render(){
// const Car = props => {
// const inputClasses = ['input'];

// if(props.name !== ''){
//     inputClasses.push('green');
// } else {
//     inputClasses.push('red');
// }

// if(props.name.length > 4){
//     inputClasses.push('bold');
// }

// if(Math.random()>0.7){
//     throw new Error('Car random failed!');
// }

//Use Radium library in order to provide inline style with pseudo class functionality
// const style = {
//     border: '1px solid #ccc',
//     boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
//     ':hover': {
//         border: '1px solid #aaa',
//         boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
//         cursor: 'pointer'
//     }
// }

// return (
//     <div className="Car" style={style}>
//         <h3>Car name: {props.name}</h3>
//         <p>Year: <strong>{props.year}</strong></p>
//         { props.children }
//         <input 
//             type='text' 
//             onChange={props.onChangeCarName} 
//             value={props.name}
//             className={inputClasses.join(' ')}
//         />
//         <button onClick={props.onChangeTitle}>Change Title</button>
//         <button onClick={props.onDelete}>Delete</button>
//     </div>
// )
// }
//Use Redux library in order to provide inline style with pseudo class functionality
// export default Radium(Car)