import React from 'react';
import Content from './Content'
import { StyleSheet, Text, View,StatusBar } from 'react-native';

export default class App extends React.Component {
  state={
    menu : 'PUT',
    object:[],
    isLoading : false,
    resPut:'',
  }
  fetchMethodGet = async () => {
    this.setState({isLoading:true})
    try { 
      let object = await fetch('https://us-central1-testcrud-b0e56.cloudfunctions.net/api/').then(res => res.json())
      this.setState({ object,isLoading: false })
      
    }catch(e){
      alert('มีบ้างอย่างไม่ถูกต้อง')
      this.setState({ isLoading: false })
    }
    
  }
  fetchMethodPut = async(id,name,tel,desc) => {
    let Put = await fetch('https://us-central1-testcrud-b0e56.cloudfunctions.net/api/'+id,{
        method: 'PUT',
        headers: new Headers({
          'Content-Type':'application/json'
        }),
        body: JSON.stringify({
            name:name,
            tel:tel,
            desc: desc
        })
    })
    return Put.respone
  }
  clearObject=()=>{
    this.setState({object:[]})
  }
  selectMenu=()=>{
    this.setState({menu})
  }
  changeLoading=()=>{
    this.setState({isLoading:!this.state.isLoading})
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.size}>ทดสอบ Put Data</Text>
        </View>
        <View style={styles.content}>
        <Content
          object ={this.state.object}
          fetchMethodGet={this.fetchMethodGet}
          fetchMethodPut={this.fetchMethodPut}
          clearObject={this.clearObject}
          isLoading={this.state.isLoading}
          changeLoading={this.changeLoading}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    
   
  },
  title: {
     
    flexDirection: 'column',
    paddingTop:100,
    alignItems: 'center',
  },
  content: {
    flex: 6,
    flexDirection: 'column',
  },
  size:{
    fontSize:20
  },
});
