import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type LoginFormData = {
  email: string;
  password: string;
};

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  function onSubmit(data: LoginFormData) {
    console.log("Login enviado:", data);
    // aqui você chamaria sua API de autenticação
  }

  return (
    <section className="bg-white rounded-2xl border border-slate-200 px-5 py-6 flex flex-col gap-4">
      <header className="space-y-1">
        <h1 className="text-lg font-semibold text-slate-900">
          Acesse o portal
        </h1>
        <p className="text-xs text-slate-500">
          Entre usando seu e-mail e senha cadastrados
        </p>
      </header>

      <form
        className="space-y-3"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <label className="flex flex-col gap-1 text-xs text-slate-700">
          <span>E-MAIL</span>
          <input
            type="email"
            placeholder="exemplo@mail.com"
            className="form-input px-3 py-2 rounded-lg border-slate-300 text-sm
                       focus:border-blue-600 focus:ring-blue-600"
            {...register("email", {
              required: "Informe seu e-mail.",
            })}
          />
          {errors.email && (
            <span className="text-[11px] text-red-600">
              {errors.email.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-1 text-xs text-slate-700">
          <span>SENHA</span>
          <input
            type="password"
            placeholder="Digite sua senha"
            className="form-input px-3 py-2 rounded-lg border-slate-300 text-sm
                       focus:border-blue-600 focus:ring-blue-600"
            {...register("password", {
              required: "Informe sua senha.",
            })}
          />
          {errors.password && (
            <span className="text-[11px] text-red-600">
              {errors.password.message}
            </span>
          )}
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-1 inline-flex w-full items-center justify-center
                     rounded-lg bg-stone-950 px-3 py-2 text-sm font-medium
                     text-slate-50 hover:bg-slate-900 disabled:opacity-70
                     disabled:cursor-default transition"
        >
          Entrar
        </button>
      </form>

      <footer className="pt-3 border-t border-slate-200 flex flex-col gap-2 text-xs text-slate-500">
        <p className="text-black text-sm"><strong>Ainda não tem uma conta?</strong></p>
        <span>Cadstre agora mesmo</span>
        <Link
          to="/register"
          className="inline-flex items-center justify-center rounded-lg
                     border border-none bg-slate-300
                     px-3 py-2 text-sm font-medium text-black
                     hover:bg-slate-100 transition"
        >
          Criar conta
        </Link>
      </footer>
    </section>
  );
}
