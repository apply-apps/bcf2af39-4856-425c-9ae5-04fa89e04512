// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View, ScrollView, TouchableOpacity } from 'react-native';

const App = () => {
    const [topic, setTopic] = useState('');
    const [story, setStory] = useState('');

    const generateStory = () => {
        const mockStory = `Once upon a time, in a faraway land, there was a magical kingdom where the topic was ${topic}. The people of this kingdom loved to talk about ${topic} and often embarked on wondrous adventures related to it. One day, a brave hero decided to discover the true essence of ${topic} and went on a journey that would change the kingdom forever.`;
        setStory(mockStory);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Fairytale Generator</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter a topic"
                    value={topic}
                    onChangeText={setTopic}
                />
                <TouchableOpacity style={styles.button} onPress={generateStory}>
                    <Text style={styles.buttonText}>Generate Story</Text>
                </TouchableOpacity>
                {story && <View style={styles.storyBox}><Text style={styles.story}>{story}</Text></View>}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF3E0',
    },
    content: {
        padding: 20,
        marginTop: 40,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        width: '100%',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        backgroundColor: '#FFFFFF',
        marginBottom: 20,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#6DA34D',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    storyBox: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CCC',
    },
    story: {
        fontSize: 16,
        color: '#555',
    },
});

export default App;