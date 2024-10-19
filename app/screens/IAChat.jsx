import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
import axios from 'axios';
import colors from '../config/colors';

//components
import TopBar from '../layout/TopBar';

const IAChat = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleSend = async () => {
    if (userMessage.trim() === '') return;

    // Add user message to chat history
    const newChatHistory = [...chatHistory, { type: 'user', text: userMessage }];
    setChatHistory(newChatHistory);
    setUserMessage('');

    try {
        // Send message to the AI API
        const response = await axios.post(`${process.env.AI_URL}/get`, {
            msg: userMessage,
        });

        // Log the entire response to understand its structure

        // Access the response message
        const aiMessage = response.data.response || 'No response from AI'; // Correctly access the response property

        // Log the AI response to the console
        console.log('AI Response:', aiMessage);

        // Add AI response to chat history
        setChatHistory([...newChatHistory, { type: 'ai', text: aiMessage }]);
        setErrorMessage(''); // Clear error message if successful
    } catch (error) {
        console.error('Error communicating with the AI:', error);
        setErrorMessage('Failed to communicate with the AI. Please try again.'); // Set error message
        setChatHistory([...newChatHistory, { type: 'error', text: 'Failed to communicate with the AI. Please try again.' }]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopBar title="AI Chat" />
      <ScrollView contentContainerStyle={styles.chatContainer}>
        {chatHistory.map((item, index) => (
          <View key={index} style={item.type === 'user' ? styles.userMessage : item.type === 'ai' ? styles.aiMessage : styles.errorMessage}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={userMessage}
          onChangeText={setUserMessage}
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10,
    width:"90%"
    
  },
  chatContainer: {
    flexGrow: 1, // Allow ScrollView to expand
    marginBottom: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  aiMessage: {
    alignSelf: 'flex-start',
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  errorMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'red', 
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  messageText: {
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row', // Layout input and button in a row
    alignItems: 'center',
  },
  input: {
    flex: 1, // Allow the input to take the remaining space
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginRight: 10, // Space between input and button
  },
});

export default IAChat;
