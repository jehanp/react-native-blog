import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const {addBlogPost} = useContext(Context);

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput 
                style={styles.input}
                autoCorrect={false}
                value={title}
                onChangeText={(newValue)=>setTitle(newValue)}
            />

            <Text style={styles.label}>Enter Content:</Text>
            <TextInput 
                style={styles.input}
                autoCorrect={false}
                value={content}
                onChangeText={(newValue)=>setContent(newValue)}
            />

            <Button 
                title='Add Blog Post' 
                onPress={()=>addBlogPost(title, content, ()=> {
                    navigation.navigate('Index');
                })}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom:15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default CreateScreen;