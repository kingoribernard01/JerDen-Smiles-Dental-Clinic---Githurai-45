// Fix: Added React import to resolve missing 'React' namespace error
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  content: string;
  rating: number;
}

export interface Benefit {
  title: string;
  description: string;
}