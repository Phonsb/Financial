import React from 'react';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='sign-up'>
      <button className='btn'>LogOut</button>
    </Link>
  );
}
export default Button;