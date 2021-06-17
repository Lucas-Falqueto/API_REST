import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Falqueto',
      email: 'Maria@gmail.com',
      idade: 19,
      peso: 70,
      altura: 1.7,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
