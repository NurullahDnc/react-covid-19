import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [veri, setVeri] = useState("");
  const [tarih, setTarih] = useState("");

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
      .then((res) => { setVeri(res.data[tarih]) })

      .catch((res) => { console.log(res) })
  }, [veri, tarih])




  return (
    <div className="App">
      <div className="container"> 
        <div className="row">
          <div className="col md-8 mx-auto mt-4">
            <h2 className="text-white text-center">
              Türkiye Covid-19 Arama Motoru
            </h2>
            <input
              className="form-control mt-5 my-3 bg"
              type="text"
              placeholder="GG/AA/YYYY"
              
              onChange={(e) => { setTarih(e.target.value )}}
            />
            <table className="table table-striped text-white">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Test Sayısı</th>
                  <th scope="col">Hasta Sayısı</th>
                  <th scope="col">Vefat Sayısı</th>
                </tr>
              </thead>
              <tbody>
                    {/*calısmadı */}
                  <tr className={veri === undefined ? "bg-warning" : "bg-success"}>

                    <th scope="row">{veri === undefined ? "Veri Bekleniyor" : veri.date}</th>
                    <td>{veri === undefined ? "Veri Bekleniyor" : veri.totalTests}</td>  {/*veri bos ise ekrana veri bekleniyor yaz, yoksa gelen veriyi yaz */}
                    <td>{veri === undefined ? "Veri Bekleniyor" : veri.totalPatients}</td>
                    <td>{veri === undefined ? "Veri Bekleniyor" : veri.totalDeaths}</td>

                  </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


//  const [tarih, setTarih] = useState("");  = ekleme  setTarih ile ?
