import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../views/Login'
import Cadastro from '../views/Cadastro'
import Home from '../views/Home'
import Perfil from '../views/Perfil'
import Tcc from '../views/Tcc'
import RequireAuth from './RequireAuth'
import { UserLogedContextProvider } from '../context/UserLogedContext'
import Orientacao from '../views/Orientacao'
import OrientacaoProfessor from '../views/OrientacaoProfessor'

/*export default function Router(){
  return(
    <>
    <UserLogedContextProvider>
      <Routes>
          <Route path="/" element={<RequireAuth><Home/></RequireAuth>}/>
          <Route path="/home" element={<RequireAuth><Home /></RequireAuth>}/>
          <Route path="/perfil" element={<RequireAuth><Perfil/></RequireAuth>}/>
          <Route path="/tcc" element={<RequireAuth><Tcc/></RequireAuth>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/cadastro" element={<Cadastro />}/>
      </Routes>
    </UserLogedContextProvider>
   </>
  )
}*/

export default function Router() {
  return (
    <>
      <UserLogedContextProvider>
        <Routes>
          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/orientacao" element={<RequireAuth><Orientacao/></RequireAuth>} />
          <Route path="/orientacaoprofessor" element={<RequireAuth><OrientacaoProfessor/></RequireAuth>} />
          <Route path="/home" element={<Home />} />
          <Route path="/perfil" element={<RequireAuth><Perfil /></RequireAuth>} />
          <Route path="/tcc" element={<RequireAuth><Tcc /></RequireAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />}/>
        </Routes>
      </UserLogedContextProvider>
    </>
  )
}

