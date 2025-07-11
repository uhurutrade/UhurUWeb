'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, X, Send, Bot, User, Loader } from 'lucide-react';
import { chat, ChatInput, ChatOutput } from '@/ai/flows/chat-flow';
import { AnimatePresence, motion } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatInterface = React.memo(({ toggleOpen }: { toggleOpen: () => void }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ role: 'assistant', content: "Hello! I'm UhurU's assistant. How can I help you with our services today?" }]);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '' || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chat(input as ChatInput);
      const assistantMessage: Message = { role: 'assistant', content: response as ChatOutput };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error getting response from AI:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: "Sorry, I'm having trouble connecting. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('div:first-child');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed bottom-24 right-6 z-50"
    >
      <Card className="w-[350px] h-[500px] flex flex-col shadow-2xl rounded-2xl bg-card">
        <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
          <CardTitle className="text-lg font-headline flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            <span>UhurU Assistant</span>
          </CardTitle>
          <Button variant="ghost" size="icon" onClick={toggleOpen}>
            <X className="h-5 w-5" />
          </Button>
        </CardHeader>
        <CardContent className="flex-1 p-0">
          <ScrollArea className="h-full" ref={scrollAreaRef}>
            <div className="p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
                  {message.role === 'assistant' && <Bot className="h-6 w-6 text-primary flex-shrink-0" />}
                  <div className={`rounded-2xl px-4 py-2 max-w-[80%] text-sm ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {message.content}
                  </div>
                  {message.role === 'user' && <User className="h-6 w-6 flex-shrink-0" />}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-3">
                  <Bot className="h-6 w-6 text-primary flex-shrink-0" />
                  <div className="rounded-2xl px-4 py-2 max-w-[80%] bg-muted text-muted-foreground flex items-center">
                    <Loader className="h-5 w-5 animate-spin" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter className="p-4 border-t">
          <form onSubmit={handleSendMessage} className="flex w-full items-center gap-2">
            <Input
              placeholder="Ask about our services..."
              value={input}
              onChange={handleInputChange}
              disabled={isLoading}
              className="flex-1"
            />
            <Button type="submit" size="icon" disabled={isLoading}>
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </motion.div>
  );
});
ChatInterface.displayName = 'ChatInterface';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && <ChatInterface toggleOpen={toggleOpen} />}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          size="icon"
          className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 shadow-lg"
          onClick={toggleOpen}
        >
          {isOpen ? <X className="h-7 w-7" /> : <MessageSquare className="h-7 w-7" />}
        </Button>
      </motion.div>
    </>
  );
}
