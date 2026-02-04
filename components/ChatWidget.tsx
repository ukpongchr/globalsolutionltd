import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2, Minimize2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { createChatSession, sendMessageStream } from '../services/geminiService';
import { Chat, GenerateContentResponse } from '@google/genai';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hello! I'm Engineer AI. How can I assist you with your power generation or machinery maintenance queries today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Chat Session
  useEffect(() => {
    if (isOpen && !chatSession) {
      const session = createChatSession();
      if (session) {
        setChatSession(session);
      } else {
        // Fallback if no API key
        setMessages(prev => [...prev, {
            id: 'error-init',
            role: 'model',
            text: "System Notice: AI services are currently offline (API Key missing). Please contact administration."
        }]);
      }
    }
  }, [isOpen, chatSession]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !chatSession || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const modelMsgId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, {
      id: modelMsgId,
      role: 'model',
      text: '',
      isStreaming: true
    }]);

    try {
      const result = await sendMessageStream(chatSession, userMsg.text);
      
      let fullText = '';
      
      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        const text = c.text || '';
        fullText += text;
        
        setMessages(prev => prev.map(msg => 
          msg.id === modelMsgId 
            ? { ...msg, text: fullText }
            : msg
        ));
      }
      
      setMessages(prev => prev.map(msg => 
        msg.id === modelMsgId 
          ? { ...msg, isStreaming: false }
          : msg
      ));

    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => prev.map(msg => 
        msg.id === modelMsgId 
          ? { ...msg, text: "I encountered a technical error processing your request. Please try again.", isStreaming: false }
          : msg
      ));
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-[380px] sm:w-[380px] h-[500px] flex flex-col border border-gray-200 mb-4 animate-fade-in-up overflow-hidden">
          {/* Header */}
          <div className="bg-industrial-900 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-primary-500 p-1.5 rounded-full">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-sm">Expert Engineer AI</h3>
                <span className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Minimize2 size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex mb-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary-600 text-white rounded-br-none' 
                    : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                }`}>
                  {msg.role === 'model' && (
                    <div className="flex items-center gap-2 mb-1 border-b border-gray-100 pb-1">
                      <Bot size={12} className="text-primary-600" />
                      <span className="text-[10px] font-bold text-gray-400 uppercase">Global Solutions AI</span>
                    </div>
                  )}
                  <div className="whitespace-pre-wrap leading-relaxed">{msg.text}</div>
                  {msg.isStreaming && (
                     <span className="inline-block w-1.5 h-3 ml-1 bg-primary-500 animate-pulse align-middle"></span>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about turbines, maintenance, or specs..."
                className="w-full pr-10 pl-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm resize-none h-[50px] overflow-hidden"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className={`absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-colors ${
                  input.trim() && !isLoading 
                    ? 'bg-primary-600 text-white hover:bg-primary-700' 
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              </button>
            </div>
            <div className="text-center mt-2">
              <span className="text-[10px] text-gray-400">AI can make mistakes. Verify critical engineering data.</span>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 bg-primary-600 text-white pl-4 pr-2 py-2 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 hover:pr-4"
        >
          <span className="font-medium text-sm">Need an Expert?</span>
          <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
            <MessageCircle size={24} />
          </div>
        </button>
      )}
    </div>
  );
};