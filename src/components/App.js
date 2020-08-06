import React,{useState , Component} from 'react';
import { Input, Button, Form, Header, Grid, GridColumn ,Segment} from 'semantic-ui-react';
import './App.css'
import {base} from '../base'
class App extends Component {
    state={
       num:{},
       name:"",
       number:""
    };
    componentWillMount(){
      this.numRef= base.syncState('Number',{
          context:this,
          state:'num'
      });
  }
  componentWillUnmount(){
      base.removeBinding(this.numRef);
  }
    handleChange=event =>{
        this.setState({ [event.target.name]: [event.target.value]})
    }
handleSubmit= event =>{
event.preventDefault();
const id=Date.now();
const num={...this.state.num};

num[id]={
  id:id,
  name:this.state.name,
  number:this.state.number
};
this.setState({num});
this.setState({number:''});
this.setState({name:''});
}
   render(){
    const {name,number } = this.state;

    return(
    <div>
        <Grid textAlign="center" verticalAlign="middle" className="app" > 
        <GridColumn style={{ maxWidth: 450 }}>
            <Header color="black">
                
      </Header>
 
<Segment>            <Form onSubmit={this.handleSubmit} >
                <Form.Input name="name"  onChange={this.handleChange} placeholder="Name" value={name} />
                    <Form.Input name="number"  onChange={this.handleChange} placeholder="Number" value={number} />
                    <Button  color="blue">Submit</Button>
                </Form>
             </Segment>   
                      </GridColumn>
        </Grid>
     </div>
    );
   }


}
export default App;