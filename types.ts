import React from 'react';

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  isTyping?: boolean;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}