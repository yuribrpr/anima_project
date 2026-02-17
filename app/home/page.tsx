import Link from "next/link";
import { AuthGuard } from "@/components/auth/auth-guard";
import { LogoutButton } from "@/components/auth/logout-button";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <AuthGuard>
      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-4xl font-bold text-slate-900">Bem-vindo ao Anima Project!</h1>
            <LogoutButton />
          </div>
          <p className="mt-4 max-w-2xl text-slate-600">
            Você está na homepage inicial do jogo. Próximos passos: perfil de treinador, inventário, mapa e sistema de batalha.
          </p>

          <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Roadmap curto prazo</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>Persistir sessão e proteger rotas privadas.</li>
              <li>Criar modelo de criaturas (raridade, nível, evolução).</li>
              <li>Iniciar protótipo de batalha por turnos.</li>
            </ul>
          </div>

          <Link href="/">
            <Button variant="outline" className="mt-8">
              Voltar para landing page
            </Button>
          </Link>
        </div>
      </main>
    </AuthGuard>
  );
}
