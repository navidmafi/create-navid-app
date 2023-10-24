export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className={"text-5xl font-bold"}>Next.js + CNA</h1>
      <div
        className={
          "text-center flex flex-col justify-center items-center gap-5"
        }
      >
        <p className={"text-xl font-bold"}>Start By Editing </p>
        <pre className={"inline-flex bg-neutral-200 rounded p-1"}>
          app/index.tsx
        </pre>
      </div>
    </main>
  );
}
