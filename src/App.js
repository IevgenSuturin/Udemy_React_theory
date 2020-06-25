import React, { Component } from 'react';
import Car from './Car/Car.js';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from './Counter/Counter'

class App extends Component {

  constructor(props){
    super(props);
    console.log('App constructor');

    this.state = {
      cars: [
        {name: 'Ford', year: 2018},
        {name: 'Audi', year: 2016},
        {name: 'Mazda 1', year: 2010}
      ],
      pageTitle: 'React components',
      showCars: false
    }
  
  }

  // changeTitleHandle(){}
  // changeTitleHandle = function(){}
  // changeTitleHandler = (newTitle)=>{
  //   this.setState({
  //     pageTitle: newTitle
  //   })
  // };

  //When function argument has the same name as field in state object
  //you just need to pass this parameter name to set state function
  changeTitleHandler = pageTitle => {
    console.log(pageTitle)
    this.setState({pageTitle})
  };



  // reflectInputHandler = (event) => {
  //   this.setState({
  //     pageTitle: event.target.value
  //   })
  // }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeCarName = (name, index) => {
    const car = this.state.cars[index];
    car.name = name;
    // const cars = this.state.cars.concat();
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({ cars })
  }

  onDeleteCar(index) {
    const cars = this.state.cars;
    cars.splice(index, 1);
    this.setState({cars})
  }

  UNSAFE_componentWillMount(){
    console.log('App componentWillMount');
  }

  componentDidMount(){
    console.log('App componentDidMount');
  }

  render(){
    console.log('Render');
    const divStyle = {
      textAlign: 'center'
    }

//    const cars = this.state.cars;
    let cars = null;
    if(this.state.showCars){
      cars = this.state.cars.map( (car, index) => {
        return (          
          <ErrorBoundary key = {index}>
            <Car 
              name = {car.name}
              year = {car.year}
              onChangeTitle = { this.changeTitleHandler.bind(this, car.name)}
              onChangeCarName = { event => this.onChangeCarName(event.target.value, index) }
              onDelete = { this.onDeleteCar.bind(this, index) }
            />
          </ErrorBoundary>
        )
      } );
    }

    
    return (
      <div className="App" style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <h1>{this.props.title}</h1>

        <Counter />
        <hr/>
        {/* <input type='text' onChange={this.reflectInputHandler} /> */}

        <button style={{marginTop: '20px'}} onClick={this.changeTitleHandler.bind(this, '(Changed)')}>Change title!</button>
        <button style={{marginTop: '20px'}} onClick={this.toggleCarsHandler}>Toggle cars</button>

        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '20px'
        }}>
        {
        //Second way to implement if logic
        cars
        //First way to implement if logic
          // this.state.showCars 
          // ?   this.state.cars.map( (car, index) => {
          //     return (
          //       <Car 
          //         key = {index}
          //         name = {car.name}
          //         year = {car.year}
          //         onChangeTitle = { this.changeTitleHandler.bind(this, car.name)}
          //       />
          //     )
          //   } )
          // : null 
        }
        </div>
      </div>
    );
    // return React.createElement(
    //   'div', {className: 'App'}, React.createElement('h1', null, 'Hello world!')
    // )
  }
}

export default App;