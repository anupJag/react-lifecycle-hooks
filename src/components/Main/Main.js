import React from 'react';


class Main extends React.Component {

    constructor(props) {
        super(props);

        console.log("Called From Constructor");

        this.state = {
            toggle : false
        }

        //Only Instantiate -- state, any functions
        //No Ajax Calls
        //No setstate
    }

    //Mounting
    componentWillMount() {
        console.log("Called from Component Will Mount");
        //Assign Variables
        //Validate
        //No Ajax Calls
        //No setstate
    }


    componentDidMount() {
        console.log("Called from Component Did Mount");
        //Assign Variables
        //Validate
        //Ajax Calls
        //setState
    }

    buttonClickHandler = () => {
        console.log("Button Clicked");
        this.setState(prevState => {
            return{
                toggle : !prevState.toggle  
            }
        });
    }

    componentWillUpdate(){
        console.log("Called from Component Will Update");
        //Assign Variables
        //Validate
        //No Ajax Calls
        //No setState
    }

    shouldComponentUpdate(){
        console.log("Called from Should Component Update");
        if(this.state.toggle){
            return false;
        }

        return true;
        //Only For Validation
    }

    componentDidUpdate(){
        console.log("Called from Component Did Update");
        //Ajax Calls
        
    }


    render() {

        console.log("Called from Render");
        //No Ajax Calls
        //No setstate
        //Assign Variables
        //Validate

        const component = this.state.toggle ? <h2>I was invoked !</h2> : null;


        return (
            <div>
                Hi Learning LifeCycle Hooks

                <div>
                    {component}
                    <button onClick={this.buttonClickHandler.bind(this)}>Click Here</button>
                </div>
            </div>
        );
    }
};

export default Main;