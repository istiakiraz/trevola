"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";


type Message = {
  role: string;
  content: string;
};

function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onSend = async () => {
    if (userInput.trim() === "") return;

    setLoading(true);
    setUserInput(" ");
    const newMeg: Message = {
      role: "user",
      content: userInput,
    };

    setMessages((prev: Message[]) => [...prev, newMeg]);

    // send user input to AI model and get response

    const result = await axios.post("/api/aimodel", {
      messages: [...messages, newMeg],
    });

    setMessages((prev: Message[]) => [
      ...prev,
      {
        role: "assistant",
        content: result?.data?.resp,
      },
    ]);

    console.log(result?.data);
    setLoading(false);
  };

  return (
    <div className="h-[80vh]  flex bg-primary/1 p-5 border border-primary/30 shadow rounded-2xl  flex-col ">
      {/* Display Chat Messages */}

      <section 
       onWheel={e => e.stopPropagation()}
        onTouchMove={e => e.stopPropagation()}
      className="flex-1 overflow-y-auto h-full p-4">
        {messages.map((msg: Message, idx) =>
          msg.role === "user" ? (
            <div key={idx} className="flex justify-end mt-2">
              <div className="max-w-lg bg-primary animate- text-white px-4 py-2 rounded-lg ">
                {msg.content}
              </div>
            </div>
          ) : (
            <div key={idx} className="flex justify-start mt-2">
              <div className="max-w-lg bg-gray-200 px-4 py-2 rounded-lg ">
                {  msg.content}
              </div>
            </div>
          )
        )}

        {loading &&  <div  className="flex justify-start mt-2">
              <div className="max-w-lg bg-gray-200 px-4 animate-accordion-down py-2 rounded-lg ">
               <div className="" >Thinking<span className="animate-ping text-2xl" >...</span></div>
              </div>
            </div>}
      </section>

      {/* user input */}

      <section>
        {/* input area */}
        <div className="mt-6 relative   ">
          <textarea
            placeholder="Start typing…"
            className="w-full relative h-32 font-bold rounded-2xl focus:outline-none focus:ring-0 border-gray-300  border  resize-none p-5 "
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          ></textarea>

          <Button
            className="p-1 cursor-pointer absolute right-5 hover:scale-105 duration-300 ease-in-out bottom-5"
            size={"icon"}
            onClick={() => onSend()}
          >
            {" "}
            <Image
              src={"/trevolaWhiteLogo.png"}
              className="w-fit relative z-10 group-hover:-translate-y-20 group-hover:translate-x-20 transition-transform duration-700 ease-in-out"
              width={60}
              height={60}
              alt="logo"
            />{" "}
          </Button>
        </div>
      </section>
    </div>
  );
}

export default ChatBox;
