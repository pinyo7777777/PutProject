import React from 'react';
import Put from './Put'
import { StyleSheet, Text, View } from 'react-native';

export default Content = (props) =>{
    return(
       
           <Put 
            object={props.object}
            fetchMethodGet={props.fetchMethodGet}
            fetchMethodPut={props.fetchMethodPut}
            isLoading={props.isLoading}
            changeLoading={props.changeLoading}
           />
            
      
    )
}


