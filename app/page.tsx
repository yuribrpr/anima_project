import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-100">
      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center">
        <p className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">Alpha inicial</p>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">Anima Project</h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          Um browser game inspirado em Pokémon/Digimon, com criaturas evolutivas, batalhas estratégicas e progressão online.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/auth/register">
            <Button size="lg">Criar conta</Button>
          </Link>
          <Link href="/auth/login">
            <Button size="lg" variant="outline">
              Entrar
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
