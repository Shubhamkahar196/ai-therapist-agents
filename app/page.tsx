"use client";

import { Ripple } from "@/components/ui/ripple";
import { useEffect, useState } from "react";
import {motion} from 'framer-motion'

export default function Home() {
  const emotions = [
    { value: 0, label: "😔 Down", color: "from-blue-500/50" },
    { value: 25, label: "😊 Content", color: "from-green-500/50" },
    { value: 50, label: "😌 Peaceful", color: "from-purple-500/50" },
    { value: 75, label: "🤗 Happy", color: "from-yellow-500/50" },
    { value: 100, label: "✨ Excited", color: "from-pink-500/50" },
  ];

  const [emotion, setEmotion] = useState(50);
  const [mounted, setMounted] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentEmotion = emotions.find((em) => Math.abs(emotion - em.value));

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* hero section */}
      <section className="relative min-h-[90vh] mt-20 flex flex-col itmes-center justify-center py-12 px-4">
        {/* enhanced background elements */}

        <div className=" absolute inset-0 -z-10 overflow-hidden ">
          <div
            className={`absolute w-[500px] h-[500px] rounded-full blur-3xl top-0 -left-20 transition-all duration-700 ease-in-out
            bg-linear-to-r ${currentEmotion.color} to-transparent opacity-60`}
          >
            <div className=" absolute w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl bottom-0 right-0 animate-pulse delay-700">
             
            </div>
            <div className=" absolute inset-0 bg-background/80 backdrop-blur-3xl"></div>
          </div>

          <Ripple className="opacity-60" />

           <motion.div 
          
           initial={{opacity:0, y:20}}
           animate={{opacity: mounted ? 1:0, y:mounted ? 0 : 20}}
           transition={{delay: 0.3, duration: 0.8}}
           className="relative space-y-8 text-center" 
           />
        
        </div>
      </section>
    </div>
  );
}
