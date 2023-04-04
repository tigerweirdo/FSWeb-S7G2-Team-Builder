import React, { useState, useEffect } from "react";

export default function EkipFormu({ ekipUyesiEkle, duzenlenenUye }) {
  const [uye, setUye] = useState({
    ad: "",
    eposta: "",
    rol: "",
  });

  useEffect(() => {
    setUye(duzenlenenUye || { ad: "", eposta: "", rol: "" });
  }, [duzenlenenUye]);

  const degisiklikleriKontrolEt = (event) => {
    setUye({ ...uye, [event.target.name]: event.target.value });
  };

  const formuGonder = (event) => {
    event.preventDefault();
    ekipUyesiEkle(uye);
    setUye({ ad: "", eposta: "", rol: "" });
  };

  return (
    <form onSubmit={formuGonder}>
      <label>
        Ad:
        <input
          type="text"
          name="ad"
          value={uye.ad}
          onChange={degisiklikleriKontrolEt}
        />
      </label>
      <label>
        Eposta:
        <input
          type="email"
          name="eposta"
          value={uye.eposta}
          onChange={degisiklikleriKontrolEt}
        />
      </label>
      <label>
        Rol:
        <input
          type="text"
          name="rol"
          value={uye.rol}
          onChange={degisiklikleriKontrolEt}
        />
      </label>
      <button type="submit">{duzenlenenUye ? "Güncelle" : "Ekle"} Üye</button>
    </form>
  );
}
