import "./App.css";
import React, { useState } from "react";
import EkipFormu from "./components/Form";

function App() {
  const [takimUyeleri, setTakimUyeleri] = useState([
    {
      ad: "Temmuz Çetiner",
      eposta: "temmuzcetiner@example.com",
      rol: "Promt Engineer",
    },
    {
      ad: "İrem Korkut",
      eposta: "iremkorkut@example.com",
      rol: " Data-Scientist",
    },
    {
      ad: "Murat Necati",
      eposta: "munec@example.com",
      rol: "Backend Developer",
    },
  ]);

  const ekipUyesiEkle = (uye) => {
    if (duzenlenenUye !== null) {
    
      setTakimUyeleri(
        takimUyeleri.map((m) => {
          if (m === duzenlenenUye) {
            return uye;
          } else {
            return m;
          }
        })
      );
      setDuzenlenenUye(null);
    } else {
     
      setTakimUyeleri([...takimUyeleri, uye]);
    }
  };

  const [duzenlenenUye, setDuzenlenenUye] = useState(null);

  const duzenlemeyeAl = (uye) => {
    setDuzenlenenUye(uye);
  };

  return (
    <div className="container">
      <h1>Takım Üyeleri</h1>
      <ul>
        {takimUyeleri.map((uye, index) => (
          <li key={index}>
            {uye.ad} - {uye.eposta} - {uye.rol}
            <button onClick={() => duzenlemeyeAl(uye)}>Düzenle</button>
          </li>
        ))}
      </ul>
      <EkipFormu ekipUyesiEkle={ekipUyesiEkle} duzenlenenUye={duzenlenenUye} />
    </div>
  );
}

export default App;
