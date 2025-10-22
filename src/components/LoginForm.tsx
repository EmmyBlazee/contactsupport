'use client';

import React, { useState, FormEvent, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from 'next/link';

import { Mail, Lock, Eye, EyeOff } from "lucide-react";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);
  const [displayText, setDisplayText] = useState<string>('');
  const fullText = "Africa's Foremost\n4IR\nCurriculum";

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsButtonEnabled(newEmail.trim().length > 0 && password.trim().length > 0);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsButtonEnabled(email.trim().length > 0 && newPassword.trim().length > 0);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust speed here (100ms per character)

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-[40%] flex flex-col justify-center items-center bg-white p-10 md:p-8 min-h-screen md:min-h-auto">
        <div className="max-w-sm mx-auto w-full">
          <div className="flex items-center mb-10">
            <div className="w-16 h-16 rounded-lg bg-primary mr-4" />
            <div className="flex flex-col">
              <h6 className="text-gray-900 font-extrabold text-xl sm:text-2xl whitespace-nowrap">TECHXAGON ACADEMY</h6>
              <hr className="w-full my-2 border-gray-900" />
              <p className="text-gray-600 italic text-lg">Readying the Future</p>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Log in to your account</h2>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-1">
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email Address*"
                  className="pl-12 pr-4 border border-gray-300 placeholder:text-gray-400 rounded-lg h-14 text-gray-900 text-lg focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  autoComplete="off"
                  required
                />
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>

            <div className="space-y-1">
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Password*"
                  className="pl-12 pr-12 border border-gray-300 placeholder:text-gray-400 rounded-lg h-14 text-gray-900 text-lg focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  autoComplete="off"
                  required
                />
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <button
                  type="button"
                  onClick={handleTogglePasswordVisibility}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              
            </div>

            <Button
              type="submit"
              variant="gradient"
              className="w-full py-6 text-lg font-bold"
              disabled={!isButtonEnabled}
            >
              Sign In
            </Button>
            <div className="text-center text-sm text-gray-700">
            
             <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                  Forgotten Password?
                </Link>
              
            </div>
          </form>
        </div>
      </div>

  <div className="w-full md:w-[60%] flex flex-col justify-center items-center relative overflow-hidden mt-6 md:mt-0 md:p-4 hidden sm:flex bg-cover bg-center" style={{backgroundImage: "url('/images/texagon_sva.svg')"}}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,white,transparent_30%),radial-gradient(circle_at_80%_70%,white,transparent_30%)]" />

      <h1 className="absolute top-0 left-0 z-10 text-3xl md:text-5xl font-extrabold text-white text-left drop-shadow-lg whitespace-pre-line">
        {displayText.split('\n').map((line, lineIndex) => (
          <div key={lineIndex}>
            {line.split(' ').map((word, wordIndex) => (
              <span key={wordIndex}>
                {word === '4IR' ? (
                  <span className="text-amber-300 ">{word}</span>
                ) : (
                  word
                )}
                {wordIndex < line.split(' ').length - 1 && ' '}
              </span>
            ))}
          </div>
        ))}
      </h1>
    </div>
    </div>
  );
};

export default LoginForm;
