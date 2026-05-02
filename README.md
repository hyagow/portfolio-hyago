# ✨ HYAGO WENDEL - O Portfólio!

> E aí! Este é o cantinho do nosso projeto. Dá uma olhada no que tem por aqui e como você pode ajudar (ou só botar pra rodar rapidinho!).

## 🚀 Como a Coisa Tá Andando:

### 📌 A Ideia Principal:

Resumindo: O que você tá vendo aqui é um(a) um portfólio pessoal maneiro, um app pra organizar seus projetos.

> A missão é mostrar o que eu sei fazer, resolver a vida de quem precisa organizar a agenda, criar sites, e-commerce e muito mais.

### 🌟 O que Rola Por Dentro (Funcionalidades):

- Tem o layout responsivo, funciona em celular, tablet, tudo!!
- Recebemos dados desde que você entre em contato, é claro.

## 💻 A Receita (Tecnologias):

A gente montou essa belezinha usando umas ferramentas top de linha. É pra garantir que o projeto seja rápido e fácil de manter:

| Ferramenta | O que faz por aqui? |
|------------|-------------------|
| React | É o coração da interface, faz a mágica de reatividade acontecer. |
| Vite | Vite pra ser super-rápido. |
| Tailwind CSS | Estilos na velocidade da luz! Pra deixar tudo bonito e responsivo sem sufoco. |
| TypeScript | Linguagem com tipagem. Ajuda a evitar uns bugs bobos, sabe? |
| Zustand / Flask / FastAPI / Django | Controla o estado global do app. Pra saber onde a informação tá em tempo real. |
| Firebase Firestore/SQL/NoSQL | Onde guardamos os dados. Pra que a informação persista de verdade. |

## 🎬 Bora Botar Pra Rodar? (Instalação):

Quer ver a mágica acontecer na sua máquina? É moleza, mas você vai precisar de algumas coisinhas antes:

### O que você precisa ter:

- **Node.js**: Versão 18 pra cima, tá?
- **npm ou yarn**: O seu gerenciador de pacotes favorito.
- **Git**: Pra conseguir clonar o código daqui.

### 1. Clonagem (Puxando o Código):

Abre o terminal e manda ver:

```bash
git clone [link do projeto]
cd [nome-do-seu-projeto]
```

### 2. Dependências (Baixando os Pacotes):

Agora é só instalar tudo que a gente usou no projeto:

```bash
# Se usa npm
npm install

# Se prefere yarn
yarn install
```

### 3. Segredos! (Variáveis de Ambiente):

Essa parte é séria, mas fácil. NUNCA coloque suas chaves no código público!

- Crie um arquivo chamado `.env.local` na raiz.
- Coloque suas chaves de API, senhas de banco e outros segredos lá dentro.

Exemplo de como deve ficar seu `.env.local`:

```env
# Exemplo de .env.local
VITE_FIREBASE_API_KEY="SUA_CHAVE_PRIVADA_AQUI"
VITE_DATABASE_URL="URL_DA_SUA_DB_AQUI"
```

**FIQUE ESPERTO!** O nosso `.gitignore` tá configurado pra IGNORAR esse arquivo. Isso é a garantia de que seus segredos ficam só com você.

## ▶️ Os Comandos Mágicos (Scripts):

Aqui estão os comandos que você mais vai usar:

| Comando | O que ele faz? |
|---------|----------------|
| `npm run dev` | Roda o projeto em modo desenvolvimento. Você consegue ver tudo em http://localhost:5173.(padrão) |
| `npm run build` | Cria a versão final e otimizada pra produção (vai pra pasta dist/). |
| `npm run preview` | Mostra como a versão de produção ficou (depois de rodar o build). |
| `npm run lint` | Dá aquela checada no código pra ver se tem algum erro de estilo. |
| `npm run format` | Arruma o código sozinho pra deixar tudo padronizado (usando o Prettier). |

## 📂 Organização da Casa (Estrutura):

Pra você não se perder, a estrutura tá assim:

```
.
├── node_modules/
├── src/
│   ├── components/  # Componentes pequenos e reutilizáveis (botões, cards, etc.)
│   ├── pages/       # As telas principais do app (Home, Contato, etc.)
│   ├── utils/       # Funções de apoio e quebra-galho
│   ├── assets/      # Imagens, ícones e fontes
│   └── App.jsx      # O ponto de partida do React
├── public/          # Coisas estáticas (favicon, etc.)
├── .gitignore       # Pra não subir arquivos desnecessários pro Git
├── .env.local       # Seus segredos (IGNORADO)
├── package.json     # Lista de ingredientes e scripts do projeto
└── README.md        # Este arquivo aqui!
```

## 🤝 Quer Dar uma Mãozinha? (Contribuição):

Se viu algo pra melhorar ou achou um bug, chega mais! A gente adora ajuda:

1. Faz um **fork** (cópia) do projeto.
2. Cria uma branch nova pra sua ideia (`git checkout -b feature/sua-ideia`).
3. Faz o commit das suas mudanças (`git commit -m 'feat: Adiciona aquela função nova que faltava'`).
4. Manda pra branch (`git push origin feature/sua-ideia`).
5. Abre um **Pull Request (PR)** contando o que você mudou.

## ⚖️ Licença:

O código aqui é aberto! Ele tá sob a **Licença MIT**.

Dá uma olhada no arquivo `LICENSE` se quiser os detalhes legais.

## 🧑 Quem Fez?

**Hyago Wendel** - Desenvolvedor Mão na Massa
[<img width="20" height="20" alt="image" src="https://github.com/user-attachments/assets/eed24d28-72cf-46ad-9501-c721aba47d10" />](https://www.linkedin.com/in/hyagow/)
<a href="mailto:hyagowtech@gmail.com"><img width="20" height="20" alt="image" src="https://github.com/user-attachments/assets/e56c579d-e20c-48f8-b5a0-821f218507be"/></a>

Feito com bastante entusiasmo e um pouquinho de dor de cabeça (mas valeu a pena! xD)
