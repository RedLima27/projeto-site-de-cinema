# CineMax

Projeto web front-end de cinema com layout responsivo, compra de ingressos e bomboniere.

## O que está pronto
- Navegação entre seções: Em Cartaz, Em Breve, Ingressos e Bomboniere
- Compra de ingresso com verificação de CPF e idade
- Seleção de poltrona: Comum, VIP e IMAX
- Carrinho de bomboniere com quantidade e total dinâmico
- Modal de pagamento com PIX e cartão
- Geração de códigos de ingresso e retirada
- Integração básica com módulo de segurança em `security/security.js`

## Estrutura do projeto
```
CineDragon/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── security/
│   ├── security.js
│   ├── security-config.json
│   ├── README.md
│   └── PAYMENT.md
├── ESTRUTURA.md
├── README.md
└── .gitignore
```

## Como usar
1. Abra `index.html` no navegador.
2. Navegue pelas abas e preencha os formulários.
3. Finalize a compra com PIX ou cartão.

## Observações
- O projeto é apenas front-end.
- O pagamento e o ingresso são simulados localmente.
- A pasta `security/` contém o módulo e a documentação de proteção.

## Publicação no GitHub
- Confirme que `index.html` está na raiz.
- Mantém os caminhos relativos de `assets/css/style.css` e `assets/js/script.js`.
- Use a branch `main` ou `gh-pages` para GitHub Pages.
