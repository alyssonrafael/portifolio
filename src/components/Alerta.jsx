import { useState, useEffect } from "react";

function Alerta({ msg, tipo }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;

    if (msg) {
      setVisible(true);

      timer = setTimeout(() => {
        setVisible(false);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [msg]);

  const alertColor = tipo === 'sucesso' ? 'bg-green-500' : 'bg-red-500';

  return (
    <>
      {visible && (
        <div
          className={`p-4 text-white ${alertColor} rounded fixed bottom-0 right-0 m-4`}
        >
          {msg}
        </div>
      )}
    </>
  );
}

export default Alerta;
