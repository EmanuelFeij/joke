import React from "react";
import {FlatList, StyleSheet, View}  from "react-native";
import Joke from './Joke';


const JokeList = ({jokes}) => {
    const renderItem = ({item}) =>{
        <Joke joke={item.joke} />
    }
    return (
    <View style={styles.container}>
      <FlatList
        data={jokes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '80%',
        backgroundColor: 'blue'
    }
})

export default JokeList;


