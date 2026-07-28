'use client';

import React from 'react';
import MyEnName from '../MyEnName';

export default function MyName({ className = '' }) {
  return (
    <>
      <h1 className="sr-only">Sifat Rahman - ابراهيم الهتاري</h1>
      <h2 className="sr-only">Web Developer - مطور ويب</h2>

      <MyEnName id="svg-my-en-name" className={className} />
    </>
  );
}
