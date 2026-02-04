import React from 'react';

export type Page = 'home' | 'about' | 'services' | 'projects' | 'contact';

export interface NavItem {
  label: string;
  id: Page;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface ProjectItem {
  title: string;
  location: string;
  description: string;
  image: string;
  category: string;
}