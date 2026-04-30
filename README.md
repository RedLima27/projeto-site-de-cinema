# 🐉 CineDragon

Sistema de cinema com compra de ingressos, bomboniere e verificação de idade.

## Modificações recentes

### Interface
- Modo claro/escuro com botão ☀️/🌙 na navegação — preferência salva entre sessões
- Tema dinâmico por filme — hero muda de cor a cada 8 segundos conforme o filme em destaque
- Relógio em tempo real corrigido
- Botão Voltar corrigido — navega apenas uma página atrás, sem ciclar

### Em Breve
- Cards redesenhados com poster maior (160px)
- Badge de classificação etária sobre o poster
- Tema de cor por gênero ao clicar no filme

### Ingressos
- Mapa de poltronas integrado na própria página (sem abrir nova aba)
- Seleção de múltiplas poltronas — até 12 por compra
- Tipo de entrada por poltrona: Inteira, Meia-Estudante ou Meia-60+
- Campo de RA individual por poltrona meia-estudante — ao menos um obrigatório no grupo
- Meia-60+ aplicada automaticamente pela data de nascimento
- Resumo da composição do pedido antes do pagamento

### Verificação de idade
- Popup obrigatório antes do pagamento para filmes com classificação
- Filmes 18+ permitem compra a partir de 16 anos com aviso de responsabilidade
- Validação apenas por data de nascimento — sem estimativa por CPF

### Back-end
- Filmes carregados do banco MySQL em tempo real e atualizados a cada 5 minutos
- Para adicionar um filme basta inserir na tabela `films` — aparece no site automaticamente
- CPF hasheado com SHA-256 antes de qualquer gravação (LGPD)

## Como iniciar

```bash
cd backend
npm start
```

Acesse `http://localhost:3000` — o servidor serve o front-end automaticamente.
