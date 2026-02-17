import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-6">
      <h1 className="mb-6 text-3xl font-bold">Entrar</h1>
      <LoginForm />
    </main>
  );
}
