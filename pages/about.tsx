import * as React from 'react';
import HeaderConponent from './src/conponents/header';
export interface  AboutPageProps {
}

export default function AboutPage (props:  AboutPageProps) {
  return (
    <div>
        <HeaderConponent/>
        <span>About</span>
    </div>
  );
}