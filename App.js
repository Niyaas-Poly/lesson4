import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, ToastAndroid, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome6';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        alignItems: 'center',
        marginVertical: 20,
    },
    scrollContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    carContainer: {
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        padding: 10,
        borderRadius: 10,
    },
    submitButton: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'blue',
        borderRadius: 5,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },
});

const Car = ({ icon_name, pictureUri, qns, options, selectedAnswer, setAnswer }) => (
    <View style={styles.carContainer}>
        <Icon name={icon_name} size={24} />
        <Image source={{ uri: pictureUri }} style={styles.image} />
        <Text>{qns}</Text>
        <RNPickerSelect
            onValueChange={(value) => setAnswer(value)}
            items={options.map(option => ({ label: option, value: option }))}
            value={selectedAnswer}
            placeholder={{ label: "Select an answer...", value: null }}
        />
    </View>
);

const App = () => {
    const [answers, setAnswers] = useState({ answer1: "", answer2: "", answer3: "", answer4: "" });

    const correctAnswers = {
        question1: 'Tesla',
        question2: 'Lamborghini',
        question3: 'Ferrari',
        question4: 'Bugatti',
    };

    const handleSubmit = () => {
        let score = 0;
        if (answers.answer1 === correctAnswers.question1) score++;
        if (answers.answer2 === correctAnswers.question2) score++;
        if (answers.answer3 === correctAnswers.question3) score++;
        if (answers.answer4 === correctAnswers.question4) score++;

        ToastAndroid.show(`You have ${score} correct answers!`, ToastAndroid.SHORT);
    };

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.header}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Car Quiz Game</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Car
                    icon_name="car"
                    pictureUri="https://example.com/tesla.jpg" // Replace with a valid Tesla image URL
                    qns="What car model is this?"
                    options={['Tesla', 'Nissan', 'Ford']}
                    selectedAnswer={answers.answer1}
                    setAnswer={(value) => setAnswers({ ...answers, answer1: value })}
                />
                <Car
                    icon_name="car"
                    pictureUri="https://example.com/lamborghini.jpg" // Replace with a valid Lamborghini image URL
                    qns="What car model is this?"
                    options={['Lamborghini', 'Ferrari', 'Porsche']}
                    selectedAnswer={answers.answer2}
                    setAnswer={(value) => setAnswers({ ...answers, answer2: value })}
                />
                <Car
                    icon_name="car"
                    pictureUri="https://example.com/ferrari.jpg" // Replace with a valid Ferrari image URL
                    qns="What car model is this?"
                    options={['Ferrari', 'Aston Martin', 'Maserati']}
                    selectedAnswer={answers.answer3}
                    setAnswer={(value) => setAnswers({ ...answers, answer3: value })}
                />
                <Car
                    icon_name="car"
                    pictureUri="https://example.com/bugatti.jpg" // Replace with a valid Bugatti image URL
                    qns="What car model is this?"
                    options={['Bugatti', 'Koenigsegg', 'Pagani']}
                    selectedAnswer={answers.answer4}
                    setAnswer={(value) => setAnswers({ ...answers, answer4: value })}
                />
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Submit Answers</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default App;
