import Link from "next/link";

export default function TopMenuItem ( {title, pageRef} : {title: string, pageRef: string}) {
  return (
    <Link href={pageRef} className="relative z-10 inline-block cursor-pointer rounded px-4 py-2 text-sm font-semibold uppercase tracking-wider text-orange-800 transition hover:bg-orange-50 hover:text-orange-950">
      {title}
    </Link>
  );
}
