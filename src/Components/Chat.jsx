import React, { useState } from 'react';
import axios from 'axios';
import './Chat.css'; // Ensure this is correctly linked
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    async function generateans() {
        setAnswer("loading...");
        const response = await axios({
            url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBSx6GvEgb8bBoPTk5FabDZnGhd2c7_LaM",
            method: "post",
            data: { "contents": [{ "parts": [{ "text": question }] }] }
        });

        setAnswer(response.data.candidates[0].content.parts[0].text);
    }

    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4">Smart financial Planning</h1>
                <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="w-full h-32 border border-gray-300 rounded-md p-2 mb-4"
                    placeholder="Enter your question here"
                ></textarea>
                <button
                    onClick={generateans}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Generate Answer
                </button>
                <pre className="mt-4">{answer}</pre>
            </div>
            <Footer/>
        </>
    );
}

export default App;
