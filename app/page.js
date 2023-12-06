'use client'
import React from 'react';

import Banner from './components/banner';
import Header from './components/header';
import Navbar from './components/navbar';
import Footer from './components/footer';

import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [quote, setQuote] = useState('');

  const generateQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      const newQuote = response.data;
      setQuote(newQuote.content + ' - ' + newQuote.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div>
      <Banner />
      <Header />
      <Navbar />

      
      <main>
        <h2>Do not feel too down, Hope is not all lost. 
          Get motivated to do more
        </h2>
        </main>

      <div className="text-center mt-10">
        <h1 className="text-3xl text-blue-500 mb-6">Quote Generator</h1>

        

        <button
          onClick={generateQuote}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-1 rounded"
        >
          Generate Quote
        </button>

        {quote && (
          <blockquote className="mt-4 text-gray-700 italic">
            {quote}
          </blockquote>
        )}
      </div>
      <br/><br/><br/><br/><br/>
      <Footer />
    </div>
  );
}
