import Link from 'next/link';

export const Twitter = () => (
  <Link className="text-invar-purple hover:underline z-20"
    href='#'
    onClick={(e) => {
      window.open('https://twitter.com/InVarFinance');
      e.preventDefault();
    }}
  >
    <img className="rounded w-10" src="/twitter.svg" alt="Logo" />
  </Link>
);

export const Discord = () => (
  <Link className="text-invar-purple hover:underline z-20"
    href='#'
    onClick={(e) => {
      window.open('https://discord.gg/BrzPWYut4p')
      e.preventDefault();
    }}
  >
    <img className="rounded w-10" src="/discord.svg" alt="Logo" />
  </Link>
);

export const OpenLink = ({ link, children }) => (
  <Link className="text-invar-purple hover:underline z-20"
    href='#'
    onClick={(e) => {
      window.open(link)
      e.preventDefault();
    }}
  >
    {children}
  </Link>
);

export const ButtonMailto = () => (
  <Link className="text-invar-purple hover:underline"
    href='#'
    onClick={(e) => {
      window.location.href = 'mailto:info@invar.finance';
      e.preventDefault();
    }}
  >
    {`info@invar.finance`}
  </Link>
);