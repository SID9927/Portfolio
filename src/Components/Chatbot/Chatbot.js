/**
 * The Chatbot component is a React component that provides a chatbot interface for users to interact with and get information about Siddharth.
 *
 * The component manages the state of the chatbot, including the messages, input, and various UI states. It also handles user interactions, such as sending messages, clicking on options, and toggling the chatbot open/closed.
 *
 * The component uses the `localStorage` API to persist the chat messages and the open/closed state of the chatbot across page refreshes.
 *
 * The `generateResponse` function is responsible for generating appropriate responses based on the user's input. It handles various types of user queries, such as greetings, skills, projects, contact information, education, and experience.
 *
 * The component also includes functionality to automatically open the chatbot and display an initial greeting message if the chatbot is closed and the user has not interacted with it before.
 */
import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [input, setInput] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [isOpen, setIsOpen] = useState(() => {
    return localStorage.getItem("chatbotOpen") === "true";
  });
  const [isIcon, setIsIcon] = useState(() => {
    return localStorage.getItem("chatbotOpen") !== "true";
  });
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] = useState({});
  const messagesEndRef = useRef(null);
  const [hasThankYou, setHasThankYou] = useState(false);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem("chatbotOpen", isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("chatMessages");
      localStorage.removeItem("chatbotOpen");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".chatbot-container")) {
        setIsOpen(false);
        setIsIcon(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    setTimeout(() => {
      setIsIcon(false);
      setIsOpen(true);
      if (messages.length === 0) {
        const initialGreetings = [
          "Hello! How can I assist you today?",
          "Welcome! What would you like to know about Siddharth?",
          "Hi there! I'm here to help. What information are you looking for?",
          "Greetings! How may I be of service to you?",
        ];
        const greeting =
          initialGreetings[Math.floor(Math.random() * initialGreetings.length)];
        setMessages([{ text: greeting, user: false }]);
        setShowOptions(true);
      }
      scrollToBottom();
    }, 2000);
  }, [messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      const userMessage = { text: input, user: true };
      setMessages([...messages, userMessage]);
      setInput("");
      setIsTyping(true);
      setShowOptions(false);

      const thinkingTime = Math.min(1000 + input.length * 50, 3000);

      setTimeout(() => {
        const response = generateResponse(input, context);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: response, user: false },
        ]);
        setIsTyping(false);
        updateContext(userMessage, response);
        askForMoreQuestions();
      }, thinkingTime);
    }
  };

  const updateContext = (userMessage, botResponse) => {
    setContext((prevContext) => ({
      ...prevContext,
      lastUserMessage: userMessage.text,
      lastBotResponse: botResponse,
    }));
  };

  const generateResponse = (userInput) => {
    const lowercaseInput = userInput.toLowerCase();
    let response = "";

    if (
      lowercaseInput.match(
        /^(hi|hello|hey|greetings|good morning|good afternoon|good evening)/
      )
    ) {
      const greetings = [
        "Hello there! It's great to meet you. What would you like to know about Siddharth?",
        "Hi! How can I assist you with information about Siddharth?",
        "Hey! What aspect of Siddharth's profile are you interested in?",
        "Greetings! What would you like to learn about Siddharth?",
      ];
      response = greetings[Math.floor(Math.random() * greetings.length)];
    } else if (lowercaseInput.includes("skills")) {
      response =
        "Siddharth's skill set includes Java, C#, React, JavaScript, Spring Boot, and ASP.NET Core, among others. For more details, check the Skills section of his portfolio.";
    } else if (lowercaseInput.includes("projects")) {
      response =
        "He has worked on notable projects like the Farmer Market-Place, an e-commerce platform connecting farmers and customers, and a responsive News Website. For more details, visit the Projects section of his portfolio.";
    } else if (lowercaseInput.includes("contact")) {
      response =
        "You can reach out to him via email at 5065sid@gmail.com or connect with him on LinkedIn: linkedin.com/in/siddharth-in. For more contact options, visit the Contact section of his portfolio.";
    } else if (lowercaseInput.includes("education")) {
      response =
        "He has completed his PG-DAC from C-DAC, Mumbai, and holds an M.Sc in Computer Science from DAV College, Muzaffarnagar. For more information, visit the Education section of his portfolio.";
    } else if (lowercaseInput.includes("experience")) {
      response =
        "He is a Fresher, but he has developed multiple projects during his academic journey, including the Farmer Market-Place platform and a News Website. He has strong experience with technologies such as Spring Boot, ASP.NET Core, React, and MySQL. For more details, check the Projects section of his portfolio.";
    } else {
      const apologies = [
        "I apologize for any inconvenience. ",
        "I'm sorry I couldn't understand that clearly. ",
        "My apologies if I misunderstood your question. ",
      ];
      const genericResponses = [
        "He has a wide range of skills and experience. Could you specify what you'd like to know more about?",
        "I'd be happy to assist you with details on his projects, skills, education, or experience. What area are you interested in?",
        "He has a lot to offer. Please let me know if you'd like information about his technical skills, project portfolio, or educational background.",
      ];
      response =
        apologies[Math.floor(Math.random() * apologies.length)] +
        genericResponses[Math.floor(Math.random() * genericResponses.length)]
    }

    return response;
  };

  const handleOptionClick = (option) => {
    setMessages([...messages, { text: option, user: true }]);
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(option);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response, user: false },
      ]);
      setIsTyping(false);
      askForMoreQuestions();
    }, 2000); // Adjust this delay as needed
  };

  const askForMoreQuestions = () => {
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Is there anything else you'd like to know about him?",
          user: false,
        },
      ]);
      setIsTyping(false);
      setShowOptions(true);
    }, 1000);
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    setIsIcon(!isIcon);
    if (!isOpen && messages.length === 0) {
      setTimeout(() => {
        let greeting;
        if (hasThankYou) {
          const enthusiasticGreetings = [
            "Welcome back! It's great to see you again. How can I assist you today?",
            "Hello there! I'm excited to chat with you again. What would you like to know about him?",
            "Hey, welcome back! I'm thrilled to help you once more. What can I do for you?",
            "It's wonderful to see you again! I'm here to answer any questions you might have about him.",
          ];
          greeting =
            enthusiasticGreetings[
              Math.floor(Math.random() * enthusiasticGreetings.length)
            ];
        } else {
          const initialGreetings = [
            "Hello! How can I assist you today?",
            "Welcome! What would you like to know about him?",
            "Hi there! I'm here to help. What information are you looking for?",
            "Greetings! How may I be of service to you?",
          ];
          greeting =
            initialGreetings[
              Math.floor(Math.random() * initialGreetings.length)
            ];
        }
        setMessages([{ text: greeting, user: false }]);
        setShowOptions(true);
        scrollToBottom();
      }, 500);
    } else {
      setTimeout(scrollToBottom, 100);
    }
  };

  const handleThankYou = () => {
    setShowOptions(false);
    setIsTyping(true);

    setTimeout(() => {
      const thankYouResponses = [
        "You're welcome! It was a pleasure chatting with you. Take care!",
        "I'm glad I could help! Have a great day!",
        "It was my pleasure assisting you. Wishing you all the best!",
        "Thank you for your time! Feel free to chat again if you need anything else.",
      ];
      const response =
        thankYouResponses[Math.floor(Math.random() * thankYouResponses.length)];
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response, user: false },
      ]);
      setIsTyping(false);

      setTimeout(() => {
        setIsOpen(false);
        setIsIcon(true);
        setMessages([]);
        localStorage.removeItem("chatMessages");
        setHasThankYou(true);
      }, 2000);
    }, 1000);
  };

  return (
    <div
      className={`chatbot-container ${isOpen ? "open" : ""} ${
        isIcon ? "icon" : ""
      }`}
    >
      {isIcon ? (
        <div className="chatbot-icon" onClick={toggleChatbot}>
          💬
        </div>
      ) : (
        <>
          <div className="chat-header">
            InfoBuddy
            <button className="close-button" onClick={toggleChatbot}>
              ×
            </button>
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.user ? "user" : "InfoBuddy"}`}
              >
                {message.user ? "You: " : "InfoBuddy: "}
                {message.text}
              </div>
            ))}
            {isTyping && (
              <div className="message InfoBuddy typing">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            )}
            {showOptions && !isTyping && (
              <div>
                <button
                  className="option-button"
                  onClick={() =>
                    handleOptionClick("Tell me about his skills")
                  }
                >
                  Skills
                </button>
                <button
                  className="option-button"
                  onClick={() =>
                    handleOptionClick("What projects has Siddharth worked on?")
                  }
                >
                  Projects
                </button>
                <button
                  className="option-button"
                  onClick={() =>
                    handleOptionClick("How can I contact Siddharth?")
                  }
                >
                  Contact
                </button>
                <button
                  className="option-button"
                  onClick={() =>
                    handleOptionClick("What is Siddharth's education?")
                  }
                >
                  Education
                </button>
                <button
                  className="option-button"
                  onClick={() =>
                    handleOptionClick(
                      "What work experience does Siddharth have?"
                    )
                  }
                >
                  Experience
                </button>
                <button className="option-button" onClick={handleThankYou}>
                  Thank you
                </button>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-input-container">
            <input
              className="chat-input"
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyPress={handleSendMessage}
              placeholder="Type your message..."
            />
            <button
              className="send-button"
              onClick={() => handleSendMessage({ key: "Enter" })}
            >
              ➤
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Chatbot;
