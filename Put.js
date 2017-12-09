import React, { Component } from 'react';
import { StyleSheet, Text, View,Button, TextInput, FlatList } from 'react-native';

export default Put = (props) => {
    return (
        <View>
            {
                props.object.length === 0 ?(
                    <View>
                        <Button
                            onPress={props.fetchMethodGet}
                            title={props.isLoading?'รอแป๊บกำลังโหลด':'ดูข้อมูล'}
                            color="red"
                            accessibilityLabel="Fired XHLttpRequest Method Get"
                            disabled={props.isLoading}
                        />
                    </View>
                ) : (
             <View>
                <View style={{ flexDirection: 'row' ,padding:20}}>
                    <View style={{ flex: 1 }}>
                                   
                    </View>
                    <View style={{ flex: 1}}>
                        <TextInput
                            value='Name'
                        />
                    </View>
                    <View style={{ flex: 1 }}>    
                        <TextInput
                            value='Tel.'
                        />
                    </View>     
                    <View style={{ flex: 1 }}>       
                        <TextInput
                            value='Desc'
                        />
                    </View>    
                </View>
                 <View>
                    <FlatList
                        data={props.object}
                        keyExtractor={({_id})=>_id}
                        renderItem={({ item })=>
                            <List
                                item={item}
                                fetchMethodPut={props.fetchMethodPut}/>
                    }
                    /> 
                </View>
                 </View>
                 
                )
            }
        </View>
    )
}

class List extends Component{
    state={
        name:this.props.item.name,
        tel:this.props.item.tel,
        desc:this.props.item.desc,
    }
    render(){
        return(
            <View style={{ flexDirection: 'row'}}>
                <View style={{ flex: 1}}>
                    <Button
                        onPress={() => this.props.fetchMethodPut(this.props.item._id, this.state.name, this.state.tel, this.state.desc)}
                        title={this.state.isLoading ? 'รอแป๊บกำลังโหลด' : 'แก้ไข'}
                        color="red"
                        accessibilityLabel="Fired XHLttpRequest Method Get"
                        disabled={this.state.isLoading}
                        
                    />
                </View>     
                <View style={{ flex: 1 }}>
                        <TextInput
                            onChangeText={(name)=>this.setState({name})}
                            value={this.state.name}
                        />
                </View>    
                    <View style={{ flex: 1 }}>
                        <TextInput
                            onChangeText={(tel) => this.setState({ tel })}
                            value={this.state.tel}
                        />
                    </View> 
                        <View style={{ flex: 1 }}>
                        <TextInput
                            onChangeText={(desc) => this.setState({ desc })}
                            value={this.state.desc}
                        />
                    </View> 
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleTable:{
       
    }
})