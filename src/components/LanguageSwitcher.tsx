"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 px-3 py-1.5 rounded-full bg-secondary/80 backdrop-blur-md border border-border text-sm font-medium hover:bg-secondary transition-colors"
    >
      {language === 'it' ? '🇮🇹 IT' : '🇬🇧 EN'}
    </button>
  );
}
