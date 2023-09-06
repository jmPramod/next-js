import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div>
      <ul
        style={{
          display: 'flex',
          padding: '10px',
          border: '1px solid black',
          margin: '10px',
          gap: '10px',
        }}
      >
        <li>
          <Link href={'/'}>home</Link>
        </li>
        {/* <li><Link href={"/edit"}>edit</Link></li> */}
        <li>
          <Link href={'/create'}>create</Link>
        </li>
        <li>
          <Link href={'/read'}>read</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
