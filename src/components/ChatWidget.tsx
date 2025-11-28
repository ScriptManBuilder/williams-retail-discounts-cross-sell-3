import React, { useState, useEffect, useRef } from 'react';
import {
  ChatContainer,
  ChatButton,
  ChatWindow,
  ChatHeader,
  ChatTitle,
  ChatSubtitle,
  CloseButton,
  ChatBody,
  ChatForm,
  FormGroup,
  FormInput,
  FormTextarea,
  SubmitButton
} from '../styles/ChatWidget.styles';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  typing?: boolean;
}

const ChatWidget: React.FC = () => {
  // Unique storage key prefix for this site (Retail Discounts)
  const STORAGE_PREFIX = 'retailDiscounts_chatWidget_';
  
  const [isOpen, setIsOpen] = useState(() => {
    const saved = localStorage.getItem(`${STORAGE_PREFIX}isOpen`);
    return saved ? JSON.parse(saved) : false;
  });
  
  const [message, setMessage] = useState('');
  
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem(`${STORAGE_PREFIX}messages`);
    return saved ? JSON.parse(saved) : [];
  });
  
  const [isTyping, setIsTyping] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [hasShownWelcome, setHasShownWelcome] = useState(() => {
    const saved = localStorage.getItem(`${STORAGE_PREFIX}hasShownWelcome`);
    return saved ? JSON.parse(saved) : false;
  });

  const [messageCount, setMessageCount] = useState(() => {
    const saved = localStorage.getItem(`${STORAGE_PREFIX}messageCount`);
    return saved ? JSON.parse(saved) : 0;
  });

  const [lockoutTime, setLockoutTime] = useState<number | null>(() => {
    const saved = localStorage.getItem(`${STORAGE_PREFIX}lockoutTime`);
    return saved ? JSON.parse(saved) : null;
  });

  const [isLocked, setIsLocked] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Clear old chat data from previous sites on mount
  useEffect(() => {
    // Remove old generic keys if they exist
    const oldKeys = ['chatWidget_isOpen', 'chatWidget_messages', 'chatWidget_hasShownWelcome', 
                     'chatWidget_messageCount', 'chatWidget_lockoutTime'];
    oldKeys.forEach(key => {
      if (localStorage.getItem(key)) {
        localStorage.removeItem(key);
      }
    });
  }, []);

  // Welcome messages (random selection)
  const welcomeMessages = [
    "Hello! Thank you for reaching out. Please leave your message below and our support team will get back to you as soon as possible. We typically respond within 24 hours.",
    "Hi there! Welcome to our support chat. Feel free to share your question or concern, and our team will assist you shortly.",
    "Greetings! Thanks for contacting us. Please describe your inquiry and we'll make sure to respond as quickly as possible.",
    "Hello! We're here to help. Share your message with us and our support team will review it and get back to you soon."
  ];

  // Response messages (random selection)
  const responseMessages = [
    "Thank you for your message! Your inquiry has been received and is now being processed. Our support team will review it and respond to you via email shortly.",
    "Got it! We've received your message and our team has been notified. You'll hear back from us via email as soon as possible.",
    "Thanks for reaching out! Your request has been logged and our support specialists will get back to you shortly via email.",
    "Message received! Our team is now reviewing your inquiry and will respond to your email address within 24 hours."
  ];

  // Closing messages (random selection)
  const closingMessages = [
    "This chat will close automatically. If you have more questions, feel free to reach out anytime!",
    "We'll be closing this chat now. Don't hesitate to contact us again if you need further assistance!",
    "Thank you for chatting with us! This window will close shortly. Feel free to return anytime.",
    "Chat ending now. Remember, we're always here to help if you need us again!"
  ];

  // Lockout messages
  const lockoutMessage = "You've reached the maximum number of messages (3) for this session. Please wait 1 hour before sending more messages. Our team will respond to your previous inquiries via email.";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Check if lockout has expired
  useEffect(() => {
    if (lockoutTime) {
      const now = Date.now();
      const timeLeft = lockoutTime - now;
      
      if (timeLeft <= 0) {
        // Lockout expired
        setLockoutTime(null);
        setMessageCount(0);
        setIsLocked(false);
        localStorage.removeItem(`${STORAGE_PREFIX}lockoutTime`);
        localStorage.setItem(`${STORAGE_PREFIX}messageCount`, '0');
      } else {
        // Still locked
        setIsLocked(true);
        // Set timer to unlock
        const timer = setTimeout(() => {
          setLockoutTime(null);
          setMessageCount(0);
          setIsLocked(false);
          localStorage.removeItem(`${STORAGE_PREFIX}lockoutTime`);
          localStorage.setItem(`${STORAGE_PREFIX}messageCount`, '0');
        }, timeLeft);
        
        return () => clearTimeout(timer);
      }
    }
  }, [lockoutTime]);

  // Save to localStorage when state changes
  useEffect(() => {
    localStorage.setItem(`${STORAGE_PREFIX}isOpen`, JSON.stringify(isOpen));
  }, [isOpen]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_PREFIX}messages`, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_PREFIX}hasShownWelcome`, JSON.stringify(hasShownWelcome));
  }, [hasShownWelcome]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_PREFIX}messageCount`, JSON.stringify(messageCount));
  }, [messageCount]);

  useEffect(() => {
    if (lockoutTime) {
      localStorage.setItem(`${STORAGE_PREFIX}lockoutTime`, JSON.stringify(lockoutTime));
    }
  }, [lockoutTime]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && messages.length === 0 && !hasShownWelcome) {
      // Show typing indicator
      setIsTyping(true);
      
      // After 2.5 seconds, show random welcome message
      setTimeout(() => {
        setIsTyping(false);
        const randomWelcome = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
        const welcomeMsg = {
          text: randomWelcome,
          sender: 'bot' as const
        };
        setMessages([welcomeMsg]);
        setHasShownWelcome(true);
      }, 2500);
    }
  }, [isOpen, messages.length, hasShownWelcome]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim() && !isProcessing && !isLocked) {
      // Check if user has reached message limit
      if (messageCount >= 3) {
        // Add lockout message
        setMessages(prev => [...prev, {
          text: lockoutMessage,
          sender: 'bot'
        }]);
        
        // Set lockout for 1 hour (3600000 ms)
        const lockTime = Date.now() + 3600000;
        setLockoutTime(lockTime);
        setIsLocked(true);
        return;
      }

      // Increment message count
      const newCount = messageCount + 1;
      setMessageCount(newCount);

      // Add user message
      setMessages(prev => [...prev, { text: message, sender: 'user' }]);
      
      // Clear input
      setMessage('');
      
      // Set processing state
      setIsProcessing(true);
      
      // Show typing indicator
      setTimeout(() => {
        setIsTyping(true);
      }, 1200);
      
      // Add bot response after typing delay (random response)
      setTimeout(() => {
        setIsTyping(false);
        const randomResponse = responseMessages[Math.floor(Math.random() * responseMessages.length)];
        setMessages(prev => [...prev, {
          text: randomResponse,
          sender: 'bot'
        }]);
      }, 4000);

      // If this was the 3rd message, warn about limit
      if (newCount === 3) {
        setTimeout(() => {
          setIsTyping(true);
        }, 5000);

        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            text: "Note: This is your last message for this session. After this, you'll need to wait 1 hour before sending more messages.",
            sender: 'bot'
          }]);
        }, 7000);

        // Show closing message
        setTimeout(() => {
          setIsTyping(true);
        }, 8000);

        setTimeout(() => {
          setIsTyping(false);
          const randomClosing = closingMessages[Math.floor(Math.random() * closingMessages.length)];
          setMessages(prev => [...prev, {
            text: randomClosing,
            sender: 'bot'
          }]);
        }, 10000);

        // Close chat after 12 seconds
        setTimeout(() => {
          setIsOpen(false);
          setIsProcessing(false);
        }, 12000);
      } else {
        // Normal flow for messages 1 and 2
        // Show closing message
        setTimeout(() => {
          setIsTyping(true);
        }, 5000);

        setTimeout(() => {
          setIsTyping(false);
          const randomClosing = closingMessages[Math.floor(Math.random() * closingMessages.length)];
          setMessages(prev => [...prev, {
            text: randomClosing,
            sender: 'bot'
          }]);
        }, 7000);

        // Close chat after 9 seconds
        setTimeout(() => {
          setIsOpen(false);
          setIsProcessing(false);
        }, 9000);
      }
    }
  };

  return (
    <ChatContainer>
      {!isOpen && (
        <ChatButton onClick={() => setIsOpen(true)}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        </ChatButton>
      )}

      {isOpen && (
        <ChatWindow>
          <ChatHeader>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid rgba(255, 255, 255, 0.3)'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div>
                <ChatTitle>Support Team</ChatTitle>
                <ChatSubtitle>
                  {isTyping ? 'Typing...' : 'We\'re here to help'}
                </ChatSubtitle>
              </div>
            </div>
            <CloseButton onClick={() => setIsOpen(false)}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </CloseButton>
          </ChatHeader>

          <ChatBody>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem',
              marginBottom: '1rem',
              maxHeight: '350px',
              overflowY: 'auto',
              padding: '0.5rem'
            }}>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row'
                  }}
                >
                  {msg.sender === 'bot' && (
                    <div style={{ 
                      width: '32px', 
                      height: '32px', 
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '0.25rem',
                      boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  )}
                  {msg.sender === 'user' && (
                    <div style={{ 
                      width: '32px', 
                      height: '32px', 
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '0.25rem',
                      boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                      </svg>
                    </div>
                  )}
                  <div
                    style={{
                      maxWidth: '75%',
                      padding: '0.75rem 1rem',
                      borderRadius: msg.sender === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                      backgroundColor: msg.sender === 'user' ? '#10B981' : '#f0f2f5',
                      color: msg.sender === 'user' ? '#ffffff' : '#2c3e50',
                      fontSize: '0.9rem',
                      lineHeight: '1.5',
                      wordWrap: 'break-word',
                      boxShadow: msg.sender === 'user' 
                        ? '0 2px 8px rgba(16, 185, 129, 0.2)' 
                        : '0 2px 8px rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem'
                  }}
                >
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '0.25rem',
                    boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '16px 16px 16px 4px',
                      backgroundColor: '#f0f2f5',
                      display: 'flex',
                      gap: '0.4rem',
                      alignItems: 'center'
                    }}
                  >
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#5a6c7d',
                      animation: 'typing 1.4s infinite',
                      animationDelay: '0s'
                    }} />
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#5a6c7d',
                      animation: 'typing 1.4s infinite',
                      animationDelay: '0.2s'
                    }} />
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#5a6c7d',
                      animation: 'typing 1.4s infinite',
                      animationDelay: '0.4s'
                    }} />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {!isProcessing && !isLocked && (
              <ChatForm onSubmit={handleSubmit}>
                <FormGroup style={{ marginBottom: '0' }}>
                  <FormInput
                    as={FormTextarea}
                    value={message}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                    rows={3}
                    style={{ resize: 'none' }}
                    disabled={isProcessing || isLocked}
                  />
                </FormGroup>

                <SubmitButton type="submit" disabled={!message.trim() || isProcessing || isLocked}>
                  Send Message
                </SubmitButton>
              </ChatForm>
            )}
            
            {isProcessing && !isLocked && (
              <div style={{
                padding: '1rem',
                textAlign: 'center',
                color: '#5a6c7d',
                fontSize: '0.9rem',
                fontStyle: 'italic'
              }}>
                Processing your message...
              </div>
            )}

            {isLocked && lockoutTime && (
              <div style={{
                padding: '1rem',
                textAlign: 'center',
                color: '#d32f2f',
                fontSize: '0.9rem',
                fontWeight: 600,
                backgroundColor: '#ffebee',
                borderRadius: '8px',
                margin: '0.5rem'
              }}>
                Message limit reached. Please wait until {new Date(lockoutTime).toLocaleTimeString()} to send more messages.
              </div>
            )}
          </ChatBody>
        </ChatWindow>
      )}
      
      <style>{`
        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.7;
          }
          30% {
            transform: translateY(-10px);
            opacity: 1;
          }
        }
      `}</style>
    </ChatContainer>
  );
};

export default ChatWidget;
