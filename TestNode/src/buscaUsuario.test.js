const buscaUsuario = require('./buscaUsuario');

test('CT001 - O usuário 1 deve ser Maria', async () => {
    const usuario = await buscaUsuario(1);
    expect(usuario.nome).toBe('Júlia');
  });

  test('CT002 - O usuário 1 deve ser João', async () => {
    const usuario = await buscaUsuario(1);
    expect(usuario.nome).toBe('João');
  });

test('CT003 - Usuário inexistente deve mostrar mensagem de erro', async () => {
  await expect(buscaUsuario(999)).rejects.toThrow('Usuário não encontrado');
});
