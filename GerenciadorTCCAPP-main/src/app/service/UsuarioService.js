import ApiService from '../ApiService'

class UsuarioService extends ApiService {


  constructor() {
    super('/aluno')
  }

  executarLogin(credenciais) {
    return this.post('/login', credenciais)
  }

  cadastrarUsuario(credenciais) {
    return this.post('/add', credenciais)
  }

  getListaCursos() {
    return this.get('/getCursos')
  }
}
export default UsuarioService