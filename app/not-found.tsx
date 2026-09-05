import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-28 text-center sm:px-6">
      <p className="stamp mb-4 inline-block px-3 py-1 text-[10px]">Lost in the smoke</p>
      <h1 className="font-display text-5xl tracking-wide uppercase">That cut is gone</h1>
      <p className="mt-4 text-muted">The page you want is not on the counter.</p>
      <Link href="/" className="btn-ember mt-8 inline-flex px-7 py-3.5 text-xs font-semibold">
        Back to the pit
      </Link>
    </section>
  );
}
