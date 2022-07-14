import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ initialValues, onSubmit }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);


    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput 
                style={styles.input}
                autoCorrect={false}
                value={title}
                onChangeText={(newTitle)=>setTitle(newTitle)}
            />

            <Text style={styles.label}>Enter Content:</Text>
            <TextInput 
                style={styles.input}
                autoCorrect={false}
                value={content}
                onChangeText={(newContent)=>setContent(newContent)}
            />

            <Button 
                title='Save Blog Post' 
                onPress={()=> {
                    onSubmit(title, content)
                }}
            />
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: '',
    }
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

export default BlogPostForm;