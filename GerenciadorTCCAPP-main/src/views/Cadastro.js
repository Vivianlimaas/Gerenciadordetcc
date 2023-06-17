import React, { useEffect, useState } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UsuarioService from '../app/service/UsuarioService';
import { borderRadius } from '@mui/system';

function Cadastro() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState(0);
  const [curso, setCurso] = useState('');
  const [listaCursos, setListaCursos] = useState([]);
  const [cadastrado, setCadastro] = useState(false);
  const [service, setService] = useState(new UsuarioService());
  const [orientadores, setOrientadores] = useState()

  function cadastrar() {
    console.log(email)
    console.log(nomeCompleto)
    console.log(cpf)
    console.log(dataNasc)
    console.log(senha)
    console.log(curso)
    service.cadastrarUsuario({
      email: email,
      nome: nomeCompleto, 
      cpf: cpf, 
      datanasc: dataNasc, 
      senha: senha, 
      cursoId: curso,
    })
      .then(response => {
        console.log("CADASTROU")
        setCadastro([true])
      })
      .catch(erro => {
        console.log("erro cadastro")
        console.log(erro.response)
      })
  }

  useEffect(() => {
    console.log("pega lista cursos")
    async function fetchData() {
      const response = await fetch('http://localhost:8080/curso/getCursos')
      const data = await response.json()
      const lista = data.map(objeto => ({ label: objeto.nome, key: objeto.idCurso }))
      setListaCursos(lista)
      console.log(lista)
    }
    fetchData();

  }, [])

  //REDUCE
  /*const result = data.reduce((acumulator, current) => (acumulator.push({label:current.nome, key:current.idcurso}), acumulator),[])
  console.log(result)
  setListaCursos(result)*/

  if (cadastrado) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <div className="container" style={{ marginTop: "10%", marginBottom: 300 }}>
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="p-4" style={{ backgroundColor: "#4C9BE8", border: "2px solid black", borderRadius: "30px", color: "black" }}>
              <div className="col-6">
                <h1>Cadastro</h1>
              </div>
              <div className="form-floating mb-1 pt-1">
                <input style={{ borderRadius: "10px" }} value={nomeCompleto}
                  type="nomeCompleto"
                  className="form-control"
                  id="floatingNome"
                  placeholder="NomeCompleto"
                  onChange={e => setNomeCompleto(e.target.value)}
                />
                <label htmlFor="floatingInput">Nome Completo</label>
              </div>
              <div className="form-floating mb-1 pt-1">
                <input style={{ borderRadius: "10px" }} value={cpf}
                  type="cpf"
                  className="form-control"
                  id="floatingCPF"
                  placeholder="CPF"
                  onChange={e => setCpf(e.target.value)}
                />
                <label htmlFor="floatingInput">CPF (apenas numeros)</label>
              </div>
              <div className="form-floating mb-1 pt-1">
                <input style={{ borderRadius: "10px" }} value={email}
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder="name@example.com"
                  onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating mb-1 pt-1">
                <input style={{ borderRadius: "10px" }} value={senha}
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={e => setSenha(e.target.value)}
                />
                <label htmlFor="floatingPassword">Senha (min 8 digitos com Maiuscula e Minuscula)</label>
              </div>
              <div className="form-floating mb-1 pt-1">
                <select style={{ borderRadius: "10px" }}
                  className="form-select" 
                  id="exampleSelect1" 
                  value={curso} 
                  onChange={(e) => setCurso(e.target.value)}
                >
                  <option key={0} value={0}>Selecione...</option>
                  {listaCursos.map(opt => (
                    <option key={opt.key} value={opt.key}>
                      {opt.label}
                    </option>))
                  }
                </select>
                <label htmlFor="floatingInput">Curso</label>
              </div>
              <div className="row justify-content-center">
                <div className="row">
                  <div className="col-6 mb-2 pt-2">
                    <div className="form-check">
                      <input onChange={e => setTipoUsuario(1)} className="form-check-input" type="radio" name="flexRadioDefault" id="1" />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Aluno
                      </label>
                    </div>
                    <div className="form-check" >
                      <input onChange={e => setTipoUsuario(2)} className="form-check-input" type="radio" name="flexRadioDefault" id="2" />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Professor
                      </label>
                    </div>
                  </div>

                  <div className="form-floating col-6 p-2 mb-4">
                    <div>
                      <label style={{ color: "black" }} htmlFor="mb-2 floatingInput">Data Nascimento</label>
                    </div>
                    <DatePicker
                      dateFormat="ddMMyyyy"
                      selected={dataNasc}
                      onChange={(date) => (setDataNasc(date))}
                      type="nome"
                      className="form-control rounded-pill"
                      placeholder="Data Nascimento"

                    />
                  </div>
                </div>
                <div className="" style={{ textAlign: "center" }}>
                  <button onClick={cadastrar} type="button" className="btn btn-light mb-2 pt-2" style={{ color: "black", backgroundColor: "white", borderRadius: "10px", width: "50%" }}>Cadastrar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="" style={{ textAlign: "center" }}>
            <NavLink to="/login">Ja tem conta? Login</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cadastro