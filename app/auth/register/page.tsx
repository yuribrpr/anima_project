import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-6">
      <h1 className="mb-6 text-3xl font-bold">Criar conta</h1>
      <RegisterForm />
    </main>
  );
}
