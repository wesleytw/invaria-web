import Link from 'next/link';

export const Twitter = () => (
  // <Link className="text-invar-purple hover:underline z-20"
  //   href='#'
  //   onClick={(e) => {
  //     window.open('https://twitter.com/InVarFinance');
  //     e.preventDefault();
  //   }}
  // >
  <a className='mr-3' href='https://twitter.com/InVarFinance' target="_blank" rel="noopener noreferrer">
    <img className="rounded w-10" src="/twitter_1.svg" alt="Logo" />
  </a>
  // </Link>
);

export const Discord = () => (
  // <Link className="text-invar-purple hover:underline z-20"
  //   href='#'
  //   onClick={(e) => {
  //     window.open('https://discord.gg/BrzPWYut4p')
  //     e.preventDefault();
  //   }}
  // >
  <a className='mr-3' href='https://discord.gg/BrzPWYut4p' target="_blank" rel="noopener noreferrer">

    <img className="rounded w-10" src="/discord_1.svg" alt="Logo" />
  </a>
  // </Link>
);

export const OpenLink = ({ link, children }) => (
  <a className=' text-invar-purple hover:underline' href={link} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
  // </Link>
);

export const ButtonMailto = () => (
  // <Link className="text-invar-purple hover:underline"
  //   href='#'
  //   onClick={(e) => {
  //     window.location.href = 'mailto:info@invar.finance';
  //     e.preventDefault();
  //   }}
  // >
  <a className=' text-invar-purple hover:underline' href='mailto:info@invar.finance' target="_blank" rel="noopener noreferrer">
    {`info@invar.finance`}
  </a>
  // {/* </Link> */ }
);