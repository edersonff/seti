import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="fixed-full flex-center">
      <div>
        <div className="mb-20">
          <h1 className="text-6xl mb-4 font-ibm-plex-serif">
            Página não encontrada
          </h1>
          <p>
            {/* pagina não encontrada pois só foi feito homepage para a empresa, como um exemplo do que eu Ederson Franzen Fagundes, posso fazer, e vou pedir para a empresa me contatar para terminar o serviço se ela gostou do site */}
            Este é um protótipo de home-page para a{" "}
            <span className="bg-primary px-2 py-0.5 text-white font-bold">
              Seti
            </span>
            , caso tenha interesse, vamos trabalhar juntos! 🚀
          </p>
        </div>
        <div className="flex flex-wrap gap-10 justify-between">
          <Link
            target="_blank"
            href="https://wa.me/5547996556538"
            className="text-xl px-8 py-2 bg-teal-500 text-white font-medium rounded-full hover:bg-teal-600"
          >
            Fale comigo no WhatsApp
          </Link>

          <Link
            href="/"
            className="text-xl px-8 py-2 bg-slate-950 text-white font-medium rounded-full hover:bg-slate-900"
          >
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
