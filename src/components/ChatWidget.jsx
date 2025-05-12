import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare, Loader } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hello! I'm SoftSell's AI assistant. How can I help you today?", 
      sender: 'bot' 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Sample questions that the chat widget can answer
  const knowledgeBase = {
    'how do i sell my license': 'To sell your license, simply click on the "Sell My License" button at the top of our homepage, fill out the details about your software license, and we\'ll provide a valuation within 24 hours!',
    'what types of licenses do you buy': 'We purchase all major software licenses including Microsoft Office, Adobe Creative Suite, AutoCAD, and many enterprise software licenses. If you\'re unsure, just ask us about your specific license!',
    'how long does payment take': 'Once you accept our offer, payment is typically processed within 2-3 business days directly to your preferred payment method.',
    'is this service secure': 'Absolutely! We use bank-level encryption for all transactions and your personal information is never shared with third parties.',
    'how much can i get for my license': 'The value depends on the software type, version, and remaining subscription time. Upload your license details for a free, no-obligation quote!',
    'do you offer bulk purchasing': 'Yes! For businesses looking to sell multiple licenses, we offer premium rates and dedicated account managers. Contact us for a custom quote.',
    'hello': 'Hello! How can I assist you with software license reselling today?',
    'hi': 'Hi there! How can I help you with your software licenses today?'
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === '') return;

    // Add user message
    const userMessageId = messages.length + 1;
    setMessages(prev => [...prev, { 
      id: userMessageId, 
      text: inputMessage, 
      sender: 'user' 
    }]);
    
    // Clear input and show typing indicator
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      // Look for response in knowledge base (case insensitive)
      const userQuery = inputMessage.toLowerCase().trim();
      let botResponse = null;
      
      // Check for exact matches first
      if (knowledgeBase[userQuery]) {
        botResponse = knowledgeBase[userQuery];
      } else {
        // Check for partial matches
        for (const [key, value] of Object.entries(knowledgeBase)) {
          if (userQuery.includes(key) || key.includes(userQuery)) {
            botResponse = value;
            break;
          }
        }
        
        // Default response if no match found
        if (!botResponse) {
          botResponse = "I don't have specific information about that. Would you like to speak with one of our license specialists? You can also email us at support@softsell.com for personalized assistance.";
        }
      }
      
      // Add bot response
      setMessages(prev => [...prev, { 
        id: userMessageId + 1, 
        text: botResponse, 
        sender: 'bot' 
      }]);
      
      setIsTyping(false);
    }, 1000);
  };

  const suggestedQuestions = [
    "How do I sell my license?",
    "What types of licenses do you buy?",
    "How long does payment take?",
    "How much can I get for my license?"
  ];

  const handleSuggestedQuestion = (question) => {
    // Add user message
    const userMessageId = messages.length + 1;
    setMessages(prev => [...prev, { 
      id: userMessageId, 
      text: question, 
      sender: 'user' 
    }]);
    
    // Show typing indicator
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const lowerQuestion = question.toLowerCase();
      let botResponse = "I don't have specific information about that. Please contact our support team.";
      
      for (const [key, value] of Object.entries(knowledgeBase)) {
        if (lowerQuestion.includes(key) || key.includes(lowerQuestion)) {
          botResponse = value;
          break;
        }
      }
      
      // Add bot response
      setMessages(prev => [...prev, { 
        id: userMessageId + 1, 
        text: botResponse, 
        sender: 'bot' 
      }]);
      
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <button 
        onClick={toggleChat}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200">
          {/* Chat Header */}
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-bold">SoftSell Assistant</h3>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-gray-200"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-96 bg-gray-50">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`mb-3 ${msg.sender === 'bot' ? 'flex justify-start' : 'flex justify-end'}`}
              >
                <div 
                  className={`px-4 py-2 rounded-lg max-w-[80%] ${
                    msg.sender === 'bot' 
                      ? 'bg-gray-200 text-gray-800' 
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-3">
                <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg flex items-center">
                  <Loader size={16} className="animate-spin mr-2" />
                  <span>Typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length <= 2 && (
            <div className="p-3 bg-gray-50 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2">Suggested questions:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="text-xs bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-gray-700 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-gray-200 flex">
            <input
              type="text"
              value={inputMessage}
              onChange={handleInputChange}
              className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
              disabled={isTyping}
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-lg flex items-center justify-center disabled:bg-blue-400"
              disabled={inputMessage.trim() === '' || isTyping}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;