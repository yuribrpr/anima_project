"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient, hasSupabaseEnv } from "@/lib/supabase/client";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = getSupabaseClient();

    if (!supabase) {
      router.replace("/auth/login");
      return;
    }

    let subscribed = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!subscribed) return;

      if (!data.session) {
        router.replace("/auth/login");
        return;
      }

      setAuthorized(true);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        router.replace("/auth/login");
      }
    });

    return () => {
      subscribed = false;
      subscription.unsubscribe();
    };
  }, [router]);

  if (!hasSupabaseEnv()) {
    return (
      <div className="mx-auto mt-20 max-w-xl rounded-xl border border-amber-200 bg-amber-50 p-6 text-amber-900">
        <h2 className="text-lg font-semibold">Configure o Supabase para acessar a Home</h2>
        <p className="mt-2 text-sm">
          Defina <code>NEXT_PUBLIC_SUPABASE_URL</code> e <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> no
          <code> .env.local</code>.
        </p>
      </div>
    );
  }

  if (loading || !authorized) {
    return <p className="p-10 text-center text-slate-500">Carregando sessão...</p>;
  }

  return <>{children}</>;
}
