// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function App() {
    const [hero, setHero] = useState('');
    const [villain, setVillain] = useState('');
    const [plot, setPlot] = useState('');
    const [story, setStory] = useState('');
    const [loading, setLoading] = useState(false);

    const generateStory = async () => {
        if (!hero || !villain || !plot) {
            alert('Please enter a hero, a villain, and a plot.');
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
                prompt: `Write a children's fairytale with the hero ${hero}, the villain ${villain}, and the plot ${plot}.`,
                max_tokens: 150,
                n: 1,
                stop: null,
                temperature: 0.7
            }, {
                headers: {
                    'Authorization': `Bearer YOUR_API_KEY_HERE`,
                    'Content-Type': 'application/json'
                }
            });

            const story = response.data.choices[0].text.trim();
            setStory(story);
        } catch (error) {
            console.error('Error generating story:', error);
            alert('Error generating story. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Fairytale Generator</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter the hero"
                    value={hero}
                    onChangeText={setHero}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter the villain"
                    value={villain}
                    onChangeText={setVillain}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter the plot"
                    value={plot}
                    onChangeText={setPlot}
                />
                <TouchableOpacity style={styles.button} onPress={generateStory}>
                    <Text style={styles.buttonText}>Generate Story</Text>
                </TouchableOpacity>
                {loading && <ActivityIndicator size="large" color="#6DA34D" />}
                {story && <View style={styles.storyBox}><Text style={styles.story}>{story}</Text></View>}
            </ScrollView>
        </SafeAreaView>
    );
}

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
        alignItems: 'center',
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