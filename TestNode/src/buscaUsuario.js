async function buscaUsuario(id) {
    const usuarios = {
      1: { id: 1, nome: 'João' },
      2: { id: 2, nome: 'Maria' }
    };
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (usuarios[id]) {
          resolve(usuarios[id]);
        } else {
          reject(new Error('Usuário não encontrado'));
        }
      }, 100); // simulação de atraso de rede
    });
  }
  
  module.exports = buscaUsuario;
  