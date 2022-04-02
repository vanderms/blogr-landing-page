import Link from 'next/link';

interface Props {
  text: string;
  href: string;
  className?: string;
}

export default function NavlinkItem({ text, href, className }: Props) {
  return (
    <li>
      <Link href={href}>
        <a className={className ?? 'navlink'}>{text}</a>
      </Link>
    </li>
  );
}
