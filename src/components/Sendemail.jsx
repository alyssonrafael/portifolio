"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alerta from "./Alerta";

function Sendemail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alerta, setAlerta] = useState({ msg: "", tipo: "" });

  function sendemail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setAlerta({ msg: "Preencha todos os campos", tipo: "erro" });
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_edsgycq",
        "template_c0rrx9o",
        templateParams,
        "01_uZAHchHYCFapPF"
      )
      .then(
        (response) => {
          setAlerta({ msg: "Sucesso: e-mail enviado", tipo: "sucesso" });
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          setAlerta({ msg: "ERRO: " + err, tipo: "erro" });
        }
      );
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={sendemail} className="space-y-4">
        <input
          className="w-full border-2 border-gray-300 dark:bg-gray-900 dark:border-white rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 dark:focus:border-purple-500"
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className="w-full border-2 border-gray-300 dark:bg-gray-900 dark:border-white rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 dark:focus:border-purple-500"
          type="text"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className="w-full border-2 h-35 resize-none  border-gray-300 dark:bg-gray-900 dark:border-white rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 dark:focus:border-purple-500"
          placeholder="Enter your message..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>

        <button
          type="submit"
          className="w-full border bg-blue-500 dark:bg-gray-900 text-white rounded-md px-4 py-2 hover:bg-blue-600 dark:hover:bg-gray-950 cursor-pointer transition duration-500 ease-in-out transform hover:scale-105 dark:hover:text-purple-600 dark:hover:border-purple-600"
        >
          Send
        </button>
      </form>
      {alerta.msg && <Alerta msg={alerta.msg} tipo={alerta.tipo} />}
    </div>
  );
}

export default Sendemail;
