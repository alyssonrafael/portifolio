import { useState, useEffect } from "react";

function Alerta({ msg, tipo, key }) { //definindo atmbem o key para que sempre que clicar o estado ser alterado fazendo assim renderizar novamente
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (msg) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [msg, key]); 

  const alertColor = tipo === 'sucesso' ? 'bg-green-500' : 'bg-red-500';

  return (
    <>
      {visible && (
        <div
          className={`p-4 text-white ${alertColor} rounded fixed top-16 right-0 m-4`}
        >
          {msg}
        </div>
      )}
    </>
  );
}

export default Alerta;
