import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

export function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>();

  function onSubmit(data: RegisterFormData) {
    console.log("Cadastro enviado:", data);
    // aqui você chamaria sua API
  }

  return (
    <section className="bg-white rounded-2xl border border-slate-200 px-5 py-6 flex flex-col gap-4">
      <header className="space-y-1">
        <h1 className="text-lg font-semibold text-slate-900">
          Crie sua conta
        </h1>
        <p className="text-xs text-slate-500">
          Informe seu nome, e-mail e senha
        </p>
      </header>

      <form
        className="space-y-3"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <label className="flex flex-col gap-1 text-xs text-slate-700">
          <span>NOME</span>
          <input
            type="text"
            placeholder="Digite o nome completo"
            className="form-input px-3 py-2 rounded-lg border-slate-300 text-sm
                       focus:border-blue-600 focus:ring-blue-600"
            {...register("name", {
              required: "Informe seu nome completo.",
              minLength: {
                value: 3,
                message: "O nome deve ter pelo menos 3 caracteres.",
              },
            })}
          />
          {errors.name && (
            <span className="text-[11px] text-red-600">
              {errors.name.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-1 text-xs text-slate-700">
          <span>E-mail</span>
          <input
            type="E-MAIL"
            placeholder="exemplo@mail.com"
            className="form-input px-3 py-2 rounded-lg border-slate-300 text-sm
                       focus:border-blue-600 focus:ring-blue-600"
            {...register("email", {
              required: "Informe seu e-mail.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Digite um e-mail válido.",
              },
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
              required: "Informe uma senha.",
              minLength: {
                value: 6,
                message: "Mínimo de 6 digitos.",
              },
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
          Cadastrar
        </button>
      </form>

      <footer className="pt-3 border-t border-slate-200 flex flex-col gap-2 text-xs text-slate-500">
        <p className=" text-black text-sm"><strong>Já tem uma conta?</strong></p>
        <span>Entre agora mesmo</span>
        <Link
          to="/login"
          className="inline-flex items-center justify-center rounded-lg
                     border border-none bg-slate-300
                     px-3 py-2 text-sm font-medium text-black
                     hover:bg-slate-100 transition"
        >
          Acessar conta
        </Link>
      </footer>
    </section>
  );
}
