// ============================================
// DISCORD BOT COURSE - APLICAÇÃO PRINCIPAL
// ============================================

// ============================================
// DADOS DO CURSO
// ============================================
const courseData = {
  title: "Discord Bot com Discord.js e TypeScript",
  modules: [
    {
      id: 1,
      title: "Fundamentos",
      icon: "🏗️",
      lessons: [
        { id: "1.1", title: "Introdução ao Node.js", duration: "15 min" },
        { id: "1.2", title: "Instalando o Node.js e npm", duration: "10 min" },
        { id: "1.3", title: "Introdução ao TypeScript", duration: "20 min" },
        { id: "1.4", title: "Configurando o tsconfig.json", duration: "15 min" },
        { id: "1.5", title: "Estrutura de Projetos", duration: "12 min" }
      ]
    },
    {
      id: 2,
      title: "Primeiros Passos com Discord.js",
      icon: "🤖",
      lessons: [
        { id: "2.1", title: "O que é o Discord.js?", duration: "10 min" },
        { id: "2.2", title: "Criando a Aplicação no Discord", duration: "20 min" },
        { id: "2.3", title: "Instalando o Discord.js", duration: "10 min" },
        { id: "2.4", title: "Fazendo o Bot Logar", duration: "25 min" },
        { id: "2.5", title: "Intents e Partials", duration: "18 min" }
      ]
    },
    {
      id: 3,
      title: "Eventos e Comandos",
      icon: "⚡",
      lessons: [
        { id: "3.1", title: "Sistema de Eventos", duration: "15 min" },
        { id: "3.2", title: "Evento messageCreate", duration: "20 min" },
        { id: "3.3", title: "Comandos de Prefixo", duration: "25 min" },
        { id: "3.4", title: "Evento interactionCreate", duration: "18 min" },
        { id: "3.5", title: "Registrando Slash Commands", duration: "22 min" }
      ]
    },
    {
      id: 4,
      title: "Componentes Interativos",
      icon: "🎨",
      lessons: [
        { id: "4.1", title: "Embeds", duration: "20 min" },
        { id: "4.2", title: "Botões", duration: "25 min" },
        { id: "4.3", title: "Select Menus", duration: "22 min" },
        { id: "4.4", title: "Modals (Formulários)", duration: "20 min" },
        { id: "4.5", title: "Combinando Componentes", duration: "18 min" }
      ]
    },
    {
      id: 5,
      title: "Arquitetura Profissional",
      icon: "🏛️",
      lessons: [
        { id: "5.1", title: "Handler de Comandos", duration: "30 min" },
        { id: "5.2", title: "Handler de Eventos", duration: "25 min" },
        { id: "5.3", title: "Estrutura Profissional de Pastas", duration: "20 min" },
        { id: "5.4", title: "Sistema de Cooldown", duration: "22 min" },
        { id: "5.5", title: "Sistema de Permissões", duration: "20 min" }
      ]
    },
    {
      id: 6,
      title: "Erros, Logging e Deploy",
      icon: "🛡️",
      lessons: [
        { id: "6.1", title: "Tratamento de Erros (try/catch)", duration: "18 min" },
        { id: "6.2", title: "Sistema de Logging Profissional", duration: "25 min" },
        { id: "6.3", title: "Erros Comuns e Como Evitá-los", duration: "20 min" },
        { id: "6.4", title: "Deploy e Variáveis de Ambiente", duration: "30 min" }
      ]
    },
    {
      id: 7,
      title: "Banco de Dados",
      icon: "🗄️",
      lessons: [
        { id: "7.1", title: "Por que Usar Banco de Dados?", duration: "12 min" },
        { id: "7.2", title: "Persistência com JSON (fs)", duration: "20 min" },
        { id: "7.3", title: "SQLite com better-sqlite3", duration: "35 min" },
        { id: "7.4", title: "MongoDB com Mongoose", duration: "40 min" },
        { id: "7.5", title: "Comparando as Abordagens", duration: "15 min" }
      ]
    },
    {
      id: 8,
      title: "Sistemas Avançados",
      icon: "⚙️",
      lessons: [
        { id: "8.1", title: "Sistema de Economia", duration: "40 min" },
        { id: "8.2", title: "Sistema de Níveis e XP", duration: "35 min" },
        { id: "8.3", title: "Moderação Automática", duration: "30 min" },
        { id: "8.4", title: "Integração com APIs Externas", duration: "30 min" }
      ]
    },
    {
      id: 9,
      title: "Projeto Final e Deploy",
      icon: "🚀",
      lessons: [
        { id: "9.1", title: "Planejando o Bot Completo", duration: "20 min" },
        { id: "9.2", title: "Construindo o Bot (Guiado)", duration: "60 min" },
        { id: "9.3", title: "Deploy no Railway / Render", duration: "30 min" },
        { id: "9.4", title: "Boas Práticas e Próximos Passos", duration: "15 min" }
      ]
    }
  ]
};

// ============================================
// CONTEÚDO DAS AULAS
// ============================================
const lessonContent = {
  "1.1": {
    module: "Módulo 1: Fundamentos",
    title: "Introdução ao Node.js",
    duration: "15 min",
    content: `
      <h2>O que é o Node.js?</h2>
      <p>Antes de escrever uma única linha de código para o nosso bot, precisamos entender a fundação sobre a qual ele será construído: o <strong>Node.js</strong>.</p>
      <blockquote><p>Node.js é um ambiente de execução JavaScript construído sobre o motor V8 do Google Chrome. Ele permite que você execute código JavaScript fora do navegador, diretamente no seu computador ou servidor.</p></blockquote>
      <p>Historicamente, o JavaScript era uma linguagem exclusiva dos navegadores web. O Node.js mudou isso completamente, permitindo que desenvolvedores usassem JavaScript para criar aplicações de servidor, ferramentas de linha de comando, scripts de automação e, claro, bots para Discord.</p>

      <h2>Por que Node.js para Bots de Discord?</h2>
      <p>O Node.js é a escolha natural para o desenvolvimento de bots do Discord por várias razões técnicas e práticas:</p>
      <ul>
        <li><strong>Modelo Assíncrono e Não-Bloqueante:</strong> Bots de Discord precisam lidar com múltiplos eventos simultâneos — mensagens de diferentes servidores chegando ao mesmo tempo, respostas a comandos, etc. O Node.js foi projetado para isso. Seu modelo de I/O não-bloqueante permite que ele gerencie milhares de conexões simultâneas sem travar.</li>
        <li><strong>Discord.js:</strong> A biblioteca mais popular para criar bots de Discord, o Discord.js, é escrita em JavaScript/TypeScript e roda em Node.js. Ela tem uma comunidade enorme e uma documentação excelente.</li>
        <li><strong>Ecossistema npm:</strong> O Node Package Manager (npm) oferece acesso a centenas de milhares de bibliotecas de código aberto, permitindo que você adicione funcionalidades ao seu bot com facilidade.</li>
        <li><strong>JavaScript em Toda Parte:</strong> Se você já conhece JavaScript do front-end, a transição para o back-end com Node.js é muito suave.</li>
      </ul>

      <h2>Como o Node.js Funciona?</h2>
      <p>O coração do Node.js é o seu <strong>Event Loop</strong> (Loop de Eventos). Diferente de linguagens como Java ou Python que usam múltiplas threads para lidar com operações simultâneas, o Node.js usa uma única thread com um loop de eventos.</p>
      <p>Quando o Node.js encontra uma operação de I/O (como ler um arquivo, fazer uma requisição de rede ou esperar por uma mensagem do Discord), ele não para e espera. Em vez disso, ele registra um "callback" (uma função a ser chamada quando a operação terminar) e continua executando o restante do código. Quando a operação termina, o callback é adicionado à fila e executado no próximo ciclo do loop.</p>

      <div class="callout callout-info">
        <span class="callout-icon">💡</span>
        <div><strong>Analogia:</strong> Pense em um garçom em um restaurante. Um garçom ruim anotaria o pedido de uma mesa, iria à cozinha, ficaria parado esperando o prato ficar pronto e só então voltaria para a mesa. Um garçom eficiente (como o Node.js) anota o pedido, entrega à cozinha, e enquanto o prato não fica pronto, ele vai atender outras mesas. Quando a cozinha avisa que o prato está pronto, ele vai buscá-lo e entrega.</div>
      </div>

      <h2>Verificando a Instalação</h2>
      <p>Se você já instalou o Node.js (veremos isso na próxima aula), você pode verificar se está funcionando corretamente abrindo um terminal e digitando:</p>
      <pre><code class="language-bash">node --version
npm --version</code></pre>
      <p>Você deverá ver as versões instaladas do Node.js e do npm. Para este curso, recomendamos o uso da versão LTS (Long Term Support) mais recente do Node.js, que é a mais estável.</p>

      <div class="challenge-box">
        <div class="challenge-header">
          <span class="challenge-icon">🎯</span>
          <span class="challenge-title">Desafio Prático</span>
        </div>
        <ol>
          <li>Pesquise a história do Node.js: quem o criou e por quê?</li>
          <li>Crie um arquivo chamado <code>hello.js</code> com o conteúdo <code>console.log("Olá, Node.js!");</code> e execute-o com o comando <code>node hello.js</code> no terminal.</li>
          <li>Pesquise o que é o "Event Loop" do Node.js e tente explicar com suas próprias palavras como ele funciona.</li>
        </ol>
      </div>
    `
  },
  "1.2": {
    module: "Módulo 1: Fundamentos",
    title: "Instalando o Node.js e npm",
    duration: "10 min",
    content: `
      <h2>Instalação do Node.js</h2>
      <p>O Node.js pode ser instalado de várias maneiras. A forma mais recomendada para desenvolvedores é usar um gerenciador de versões, o que permite alternar facilmente entre diferentes versões do Node.js para diferentes projetos.</p>

      <h3>Opção 1: Instalação Direta (Mais Simples)</h3>
      <p>Acesse o site oficial <a href="https://nodejs.org" target="_blank">nodejs.org</a> e baixe o instalador da versão <strong>LTS (Long Term Support)</strong>. Esta é a versão mais estável e recomendada para a maioria dos projetos. Siga as instruções do instalador para o seu sistema operacional (Windows, macOS ou Linux).</p>

      <h3>Opção 2: Usando o NVM (Recomendado)</h3>
      <p>O <strong>NVM (Node Version Manager)</strong> é a forma preferida pelos desenvolvedores profissionais. Ele permite instalar e gerenciar múltiplas versões do Node.js no mesmo computador.</p>
      <p><strong>No macOS/Linux:</strong></p>
      <pre><code class="language-bash"># Instala o NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Reinicie o terminal e instale a versão LTS
nvm install --lts
nvm use --lts</code></pre>
      <p><strong>No Windows:</strong> Use o <a href="https://github.com/coreybutler/nvm-windows" target="_blank">nvm-windows</a>, que funciona de forma similar.</p>

      <h2>Verificando a Instalação</h2>
      <p>Após a instalação, abra um novo terminal e execute:</p>
      <pre><code class="language-bash">node --version   # Deve mostrar algo como v20.x.x
npm --version    # Deve mostrar algo como 10.x.x</code></pre>

      <h2>Entendendo o npm</h2>
      <p>O <strong>npm (Node Package Manager)</strong> é instalado automaticamente junto com o Node.js. Ele é o gerenciador de pacotes padrão do Node.js e sua principal ferramenta para:</p>
      <ul>
        <li><strong>Instalar dependências:</strong> <code>npm install nome-do-pacote</code></li>
        <li><strong>Gerenciar o projeto:</strong> através do arquivo <code>package.json</code></li>
        <li><strong>Executar scripts:</strong> <code>npm run nome-do-script</code></li>
      </ul>

      <h2>Inicializando um Projeto Node.js</h2>
      <p>Todo projeto Node.js começa com a criação de um arquivo <code>package.json</code>. Este arquivo descreve o projeto e lista suas dependências. Para criá-lo, navegue até a pasta do seu projeto no terminal e execute:</p>
      <pre><code class="language-bash">npm init -y</code></pre>
      <p>O flag <code>-y</code> responde "sim" para todas as perguntas padrão, criando o arquivo rapidamente. O resultado será um <code>package.json</code> básico como este:</p>
      <pre><code class="language-json">{
  "name": "meu-bot",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}</code></pre>

      <div class="callout callout-warning">
        <span class="callout-icon">⚠️</span>
        <div><strong>Atenção:</strong> Sempre use a versão LTS do Node.js para projetos em produção. As versões com número par (ex: 18, 20, 22) são versões LTS e recebem suporte de longo prazo. As versões com número ímpar são versões "Current" com as últimas funcionalidades, mas com suporte mais curto.</div>
      </div>

      <div class="challenge-box">
        <div class="challenge-header">
          <span class="challenge-icon">🎯</span>
          <span class="challenge-title">Desafio Prático</span>
        </div>
        <ol>
          <li>Instale o Node.js LTS no seu computador usando o método de sua preferência.</li>
          <li>Verifique a instalação com <code>node --version</code> e <code>npm --version</code>.</li>
          <li>Crie uma pasta chamada <code>meu-primeiro-bot</code> e, dentro dela, execute <code>npm init -y</code>.</li>
          <li>Abra o <code>package.json</code> gerado e altere o campo <code>"description"</code> para uma descrição do seu bot.</li>
        </ol>
      </div>
    `
  },
  "1.3": {
    module: "Módulo 1: Fundamentos",
    title: "Introdução ao TypeScript",
    duration: "20 min",
    content: `
      <h2>O que é TypeScript?</h2>
      <p>Se o JavaScript é a linguagem que roda no Node.js, por que estamos usando TypeScript? O <strong>TypeScript</strong> é um <em>superset</em> (superconjunto) do JavaScript criado pela Microsoft. Isso significa que todo código JavaScript válido também é código TypeScript válido, mas o TypeScript adiciona recursos poderosos que o JavaScript não possui nativamente.</p>
      <blockquote><p>TypeScript adiciona <strong>tipagem estática opcional</strong> ao JavaScript. Isso significa que você pode declarar explicitamente o tipo de cada variável, parâmetro de função e valor de retorno, e o compilador do TypeScript verificará se você está usando esses tipos corretamente antes mesmo de o código ser executado.</p></blockquote>

      <h2>Por que TypeScript para Bots?</h2>
      <p>Desenvolver um bot de Discord com TypeScript em vez de JavaScript puro oferece vantagens significativas:</p>
      <ul>
        <li><strong>Detecção de Erros Antecipada:</strong> O compilador do TypeScript encontra erros de tipo em tempo de desenvolvimento, antes que eles causem bugs em produção. Isso é especialmente valioso em projetos grandes.</li>
        <li><strong>Autocompletar Inteligente:</strong> Com TypeScript, seu editor de código (como o VS Code) consegue fornecer sugestões de autocompletar muito mais precisas e úteis, pois ele sabe exatamente que tipo de dado cada variável contém.</li>
        <li><strong>Código Mais Legível e Autodocumentado:</strong> As anotações de tipo funcionam como documentação inline, tornando o código mais fácil de entender e manter.</li>
        <li><strong>Refatoração Segura:</strong> Ao renomear uma variável ou mudar a assinatura de uma função, o TypeScript aponta todos os lugares no código que precisam ser atualizados.</li>
      </ul>

      <h2>Conceitos Básicos de Tipagem</h2>
      <p>Vamos ver como o TypeScript muda a forma como escrevemos código:</p>
      <pre><code class="language-typescript">// JavaScript puro - sem tipos
function saudar(nome) {
  return "Olá, " + nome;
}

// TypeScript - com tipos explícitos
function saudar(nome: string): string {
  return "Olá, " + nome;
}

// O TypeScript detecta o erro antes de executar
saudar(42); // ERRO: Argument of type 'number' is not assignable to parameter of type 'string'</code></pre>

      <h3>Tipos Primitivos</h3>
      <pre><code class="language-typescript">let nome: string = "Discord Bot";
let versao: number = 1.0;
let ativo: boolean = true;
let nulo: null = null;
let indefinido: undefined = undefined;</code></pre>

      <h3>Arrays e Objetos</h3>
      <pre><code class="language-typescript">// Arrays
let comandos: string[] = ["ping", "help", "ban"];
let numeros: number[] = [1, 2, 3];

// Objetos com Interface
interface Comando {
  nome: string;
  descricao: string;
  cooldown?: number; // O '?' torna a propriedade opcional
}

const pingComando: Comando = {
  nome: "ping",
  descricao: "Verifica a latência do bot"
};</code></pre>

      <h3>Union Types e Type Aliases</h3>
      <pre><code class="language-typescript">// Union Types: a variável pode ser de um tipo OU outro
let id: string | number = "user-123";
id = 456; // Também válido

// Type Alias: cria um nome para um tipo complexo
type Prefixo = "!" | "?" | "." | "/";</code></pre>

      <h2>TypeScript e Discord.js</h2>
      <p>O Discord.js foi escrito com suporte a TypeScript em mente. Isso significa que a biblioteca vem com definições de tipo completas, o que torna o desenvolvimento muito mais agradável. Você terá autocompletar para todos os métodos e propriedades dos objetos do Discord.js, como <code>Message</code>, <code>Guild</code>, <code>User</code>, e muito mais.</p>

      <div class="callout callout-info">
        <span class="callout-icon">💡</span>
        <div><strong>Importante:</strong> O TypeScript não roda diretamente no Node.js. Ele precisa ser <em>compilado</em> (transpilado) para JavaScript primeiro. Aprenderemos a configurar esse processo na próxima aula.</div>
      </div>

      <div class="challenge-box">
        <div class="challenge-header">
          <span class="challenge-icon">🎯</span>
          <span class="challenge-title">Desafio Prático</span>
        </div>
        <ol>
          <li>Instale o TypeScript globalmente: <code>npm install -g typescript</code></li>
          <li>Crie um arquivo <code>teste.ts</code> e escreva uma função com tipos que receba o nome de um usuário e retorne uma string de boas-vindas.</li>
          <li>Compile o arquivo com <code>tsc teste.ts</code> e observe o arquivo <code>teste.js</code> gerado.</li>
          <li>Intencionalmente passe um número onde um string é esperado e veja o erro que o TypeScript gera.</li>
        </ol>
      </div>
    `
  },
  "1.4": {
    module: "Módulo 1: Fundamentos",
    title: "Configurando o tsconfig.json",
    duration: "15 min",
    content: `
      <h2>O que é o tsconfig.json?</h2>
      <p>O arquivo <strong>tsconfig.json</strong> é o arquivo de configuração do compilador TypeScript (<code>tsc</code>). Ele fica na raiz do seu projeto e diz ao compilador como ele deve se comportar: quais arquivos compilar, para qual versão do JavaScript compilar, onde colocar os arquivos compilados, e muito mais.</p>

      <h2>Criando o tsconfig.json</h2>
      <p>Você pode criar o arquivo manualmente ou usar o comando:</p>
      <pre><code class="language-bash">npx tsc --init</code></pre>
      <p>Isso gera um <code>tsconfig.json</code> com muitas opções comentadas. Para o nosso bot, vamos usar uma configuração limpa e otimizada:</p>
      <pre><code class="language-json">{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}</code></pre>

      <h2>Explicando Cada Opção</h2>
      <table>
        <thead>
          <tr><th>Opção</th><th>Valor</th><th>O que faz</th></tr>
        </thead>
        <tbody>
          <tr><td><code>target</code></td><td><code>ES2020</code></td><td>Compila para a versão ES2020 do JavaScript, que o Node.js moderno suporta nativamente.</td></tr>
          <tr><td><code>module</code></td><td><code>commonjs</code></td><td>Usa o sistema de módulos CommonJS (<code>require</code>/<code>module.exports</code>), o padrão do Node.js.</td></tr>
          <tr><td><code>outDir</code></td><td><code>./dist</code></td><td>Os arquivos JavaScript compilados serão colocados na pasta <code>dist/</code>.</td></tr>
          <tr><td><code>rootDir</code></td><td><code>./src</code></td><td>O código-fonte TypeScript fica na pasta <code>src/</code>.</td></tr>
          <tr><td><code>strict</code></td><td><code>true</code></td><td>Habilita um conjunto de verificações de tipo mais rigorosas. Altamente recomendado.</td></tr>
          <tr><td><code>esModuleInterop</code></td><td><code>true</code></td><td>Permite importar módulos CommonJS com a sintaxe <code>import x from 'y'</code>.</td></tr>
          <tr><td><code>sourceMap</code></td><td><code>true</code></td><td>Gera arquivos de mapa que conectam o JavaScript compilado ao TypeScript original, facilitando o debug.</td></tr>
        </tbody>
      </table>

      <h2>Scripts no package.json</h2>
      <p>Agora, vamos adicionar scripts úteis ao nosso <code>package.json</code> para facilitar o desenvolvimento:</p>
      <pre><code class="language-json">{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "tsx watch src/index.ts",
    "register": "tsx src/register-commands.ts"
  }
}</code></pre>
      <p>Para o script <code>dev</code>, precisamos instalar o <code>tsx</code>, que executa TypeScript diretamente sem precisar compilar manualmente a cada mudança:</p>
      <pre><code class="language-bash">npm install -D tsx typescript @types/node</code></pre>

      <div class="callout callout-success">
        <span class="callout-icon">✅</span>
        <div><strong>Fluxo de Trabalho:</strong> Durante o desenvolvimento, use <code>npm run dev</code> para iniciar o bot com recarregamento automático. Para produção, use <code>npm run build</code> para compilar e depois <code>npm run start</code> para executar.</div>
      </div>

      <div class="challenge-box">
        <div class="challenge-header">
          <span class="challenge-icon">🎯</span>
          <span class="challenge-title">Desafio Prático</span>
        </div>
        <ol>
          <li>Na pasta do seu projeto, crie o <code>tsconfig.json</code> com a configuração apresentada.</li>
          <li>Instale as dependências de desenvolvimento: <code>npm install -D tsx typescript @types/node</code></li>
          <li>Adicione os scripts ao seu <code>package.json</code>.</li>
          <li>Crie a pasta <code>src/</code> e dentro dela um arquivo <code>index.ts</code> com apenas <code>console.log("Bot iniciando...");</code></li>
          <li>Execute <code>npm run dev</code> e verifique se a mensagem aparece no terminal.</li>
        </ol>
      </div>
    `
  },
  "1.5": {
    module: "Módulo 1: Fundamentos",
    title: "Estrutura de Projetos",
    duration: "12 min",
    content: `
      <h2>A Importância de uma Boa Estrutura</h2>
      <p>Um projeto bem organizado é a diferença entre um código que você consegue manter e expandir, e um código que se torna um "espaguete" impossível de entender depois de algumas semanas. Para o nosso bot, vamos estabelecer uma estrutura de pastas clara e escalável desde o início.</p>

      <h2>Estrutura Inicial do Projeto</h2>
      <p>Para começar, nossa estrutura será simples. Ela crescerá nos módulos seguintes à medida que adicionarmos mais funcionalidades:</p>
      <pre><code class="language-bash">meu-bot/
├── src/
│   ├── index.ts          # Ponto de entrada do bot
│   └── register-commands.ts  # Script para registrar Slash Commands
├── .env                  # Variáveis de ambiente (NUNCA enviar ao Git)
├── .gitignore            # Arquivos a ignorar no Git
├── package.json          # Metadados e dependências do projeto
├── tsconfig.json         # Configuração do TypeScript
└── README.md             # Documentação do projeto</code></pre>

      <h2>O Arquivo .env</h2>
      <p>O arquivo <code>.env</code> é onde armazenamos informações sensíveis, como o token do nosso bot. Ele <strong>jamais</strong> deve ser enviado para um repositório público no GitHub.</p>
      <pre><code class="language-bash">DISCORD_TOKEN=seu_token_aqui
CLIENT_ID=id_da_sua_aplicacao
GUILD_ID=id_do_seu_servidor_de_testes</code></pre>
      <p>Para ler essas variáveis no código, usamos a biblioteca <code>dotenv</code>:</p>
      <pre><code class="language-bash">npm install dotenv</code></pre>

      <h2>O Arquivo .gitignore</h2>
      <p>O <code>.gitignore</code> diz ao Git quais arquivos e pastas ignorar. Crie este arquivo na raiz do projeto:</p>
      <pre><code class="language-bash"># Dependências
node_modules/

# Arquivos de build
dist/

# Variáveis de ambiente (NUNCA commitar!)
.env

# Banco de dados local
*.db
*.sqlite

# Logs
logs/
*.log

# Sistema operacional
.DS_Store
Thumbs.db</code></pre>

      <div class="callout callout-danger">
        <span class="callout-icon">🚨</span>
        <div><strong>Atenção Crítica:</strong> Se você acidentalmente enviar seu token do Discord para o GitHub, qualquer pessoa pode usar seu bot para fins maliciosos. Vá imediatamente ao Discord Developer Portal, resete o token e adicione o <code>.env</code> ao <code>.gitignore</code> antes de fazer qualquer commit.</div>
      </div>

      <h2>Estrutura Profissional (Módulos Futuros)</h2>
      <p>À medida que avançarmos no curso, nossa estrutura evoluirá para algo como:</p>
      <pre><code class="language-bash">src/
├── commands/
│   ├── moderacao/
│   │   ├── ban.ts
│   │   └── kick.ts
│   ├── utilidades/
│   │   └── ping.ts
│   └── niveis/
│       └── level.ts
├── events/
│   ├── ready.ts
│   ├── interactionCreate.ts
│   └── messageCreate.ts
├── utils/
│   ├── logger.ts
│   └── database.ts
├── types/
│   └── index.ts
└── index.ts</code></pre>

      <div class="challenge-box">
        <div class="challenge-header">
          <span class="challenge-icon">🎯</span>
          <span class="challenge-title">Desafio Prático</span>
        </div>
        <ol>
          <li>Crie a estrutura de pastas inicial do projeto conforme apresentado.</li>
          <li>Crie o arquivo <code>.env</code> (deixe os valores em branco por enquanto) e o <code>.gitignore</code>.</li>
          <li>Instale o dotenv: <code>npm install dotenv</code></li>
          <li>No seu <code>src/index.ts</code>, adicione <code>import { config } from 'dotenv'; config();</code> no topo do arquivo.</li>
          <li>Inicialize um repositório Git: <code>git init && git add . && git commit -m "Estrutura inicial do projeto"</code></li>
        </ol>
      </div>
    `
  },
  "2.1": {
    module: "Módulo 2: Primeiros Passos com Discord.js",
    title: "O que é o Discord.js?",
    duration: "10 min",
    content: `
      <h2>Introdução ao Discord.js</h2>
      <p>O <strong>Discord.js</strong> é a biblioteca JavaScript/TypeScript mais popular para interagir com a API do Discord. Ela abstrai toda a complexidade de lidar diretamente com WebSockets, autenticação e requisições HTTP, fornecendo uma interface limpa e orientada a objetos para criar bots poderosos.</p>
      <blockquote><p>Discord.js é uma biblioteca Node.js poderosa que permite interagir com a API do Discord de forma fácil. Ela é mantida ativamente pela comunidade e possui uma documentação excelente em <a href="https://discord.js.org" target="_blank">discord.js.org</a>.</p></blockquote>

      <h2>Como a API do Discord Funciona?</h2>
      <p>Para entender o Discord.js, precisamos entender brevemente como a API do Discord funciona. Ela tem dois componentes principais:</p>
      <ul>
        <li><strong>Gateway (WebSocket):</strong> É uma conexão persistente e em tempo real entre o seu bot e os servidores do Discord. Através dela, o Discord envia eventos ao seu bot (como "uma mensagem foi enviada", "um usuário entrou no servidor", etc.). O Discord.js gerencia essa conexão automaticamente para você.</li>
        <li><strong>REST API:</strong> É uma API HTTP tradicional usada para enviar dados ao Discord (como enviar mensagens, criar canais, banir usuários, etc.). Quando você chama <code>message.reply("Olá!")</code>, o Discord.js faz uma requisição HTTP para a REST API do Discord nos bastidores.</li>
      </ul>

      <h2>Versões do Discord.js</h2>
      <p>Neste curso, usamos o <strong>Discord.js v14</strong>, que é a versão mais recente e estável. Ela introduziu mudanças significativas em relação às versões anteriores, incluindo suporte nativo a Slash Commands, componentes interativos e uma API mais consistente.</p>

      <div class="callout callout-warning">
        <span class="callout-icon">⚠️</span>
        <div><strong>Atenção:</strong> Se você encontrar tutoriais mais antigos na internet, eles podem usar o Discord.js v12 ou v13, que têm APIs diferentes. Sempre verifique a versão que o tutorial usa antes de seguir.</div>
      </div>

      <h2>O que Podemos Fazer com Discord.js?</h2>
      <table>
        <thead>
          <tr><th>Categoria</th><th>Exemplos</th></tr>
        </thead>
        <tbody>
          <tr><td>Mensagens</td><td>Enviar, editar, deletar, reagir a mensagens</td></tr>
          <tr><td>Membros</td><td>Banir, expulsar, dar cargos, silenciar</td></tr>
          <tr><td>Canais</td><td>Criar, editar, deletar canais de texto e voz</td></tr>
          <tr><td>Slash Commands</td><td>Criar e responder a comandos interativos</td></tr>
          <tr><td>Componentes</td><td>Botões, Select Menus, Modals</td></tr>
          <tr><td>Eventos</td><td>Reagir a qualquer evento do servidor</td></tr>
          <tr><td>Webhooks</td><td>Enviar mensagens sem o bot estar online</td></tr>
        </tbody>
      </table>

      <div class="challenge-box">
        <div class="challenge-header">
          <span class="challenge-icon">🎯</span>
          <span class="challenge-title">Desafio Prático</span>
        </div>
        <ol>
          <li>Acesse a documentação oficial do Discord.js em <a href="https://discord.js.org" target="_blank">discord.js.org</a> e explore a seção "Guide" (Guia).</li>
          <li>Pesquise sobre a diferença entre a Gateway API e a REST API do Discord.</li>
          <li>Pense em 3 funcionalidades que você gostaria de implementar no seu bot e anote-as.</li>
        </ol>
      </div>
    `
  },
  "2.2": {
    module: "Módulo 2: Primeiros Passos com Discord.js",
    title: "Criando a Aplicação no Discord",
    duration: "20 min",
    content: `
      <h2>O Discord Developer Portal</h2>
      <p>Antes de escrever qualquer código, precisamos criar uma "aplicação" no Discord. É através dessa aplicação que obteremos o token do bot, que é como uma senha que permite ao nosso código se conectar ao Discord.</p>
      <p>Acesse o <a href="https://discord.com/developers/applications" target="_blank">Discord Developer Portal</a> e faça login com sua conta do Discord.</p>

      <h2>Passo a Passo: Criando a Aplicação</h2>
      <h3>1. Criar a Aplicação</h3>
      <p>Clique no botão <strong>"New Application"</strong> no canto superior direito. Dê um nome à sua aplicação (este será o nome do bot) e clique em "Create".</p>

      <h3>2. Configurar o Bot</h3>
      <p>No menu lateral esquerdo, clique em <strong>"Bot"</strong>. Aqui você pode:</p>
      <ul>
        <li>Adicionar um ícone ao bot (opcional).</li>
        <li>Desmarcar a opção <strong>"Public Bot"</strong> se quiser que apenas você possa adicionar o bot a servidores (recomendado durante o desenvolvimento).</li>
        <li>Habilitar os <strong>Privileged Gateway Intents</strong> necessários (veremos isso na aula 2.5).</li>
      </ul>

      <h3>3. Obter o Token</h3>
      <p>Ainda na página "Bot", clique em <strong>"Reset Token"</strong> e confirme. O token será exibido uma única vez. <strong>Copie-o imediatamente</strong> e cole no seu arquivo <code>.env</code>:</p>
      <pre><code class="language-bash">DISCORD_TOKEN=seu_token_aqui</code></pre>

      <div class="callout callout-danger">
        <span class="callout-icon">🚨</span>
        <div><strong>Segurança Crítica:</strong> Trate seu token como uma senha. Nunca o compartilhe, nunca o coloque em código que vai para o GitHub, e nunca o mostre em streams ou vídeos. Se ele vazar, qualquer pessoa pode controlar seu bot. Resete-o imediatamente se isso acontecer.</div>
      </div>

      <h3>4. Convidar o Bot para um Servidor</h3>
      <p>Para testar o bot, você precisa adicioná-lo a um servidor. Crie um servidor de testes no Discord (recomendado) e siga estes passos:</p>
      <ol>
        <li>No Developer Portal, vá para <strong>"OAuth2" > "URL Generator"</strong>.</li>
        <li>Em "Scopes", marque <strong>bot</strong> e <strong>applications.commands</strong>.</li>
        <li>Em "Bot Permissions", marque as permissões necessárias. Para começar, selecione <strong>"Administrator"</strong> (apenas para testes! Em produção, use permissões mínimas).</li>
        <li>Copie a URL gerada na parte inferior da página, abra-a no navegador e selecione o servidor de testes.</li>
      </ol>

      <h3>5. Obter o CLIENT_ID e GUILD_ID</h3>
      <p>Precisamos de mais dois IDs para o nosso <code>.env</code>:</p>
      <ul>
        <li><strong>CLIENT_ID:</strong> É o ID da sua aplicação. Você o encontra na página "General Information" do Developer Portal.</li>
        <li><strong>GUILD_ID:</strong> É o ID do seu servidor de testes. Para obtê-lo, ative o "Modo Desenvolvedor" no Discord (Configurações > Avançado > Modo Desenvolvedor), depois clique com o botão direito no ícone do servidor e selecione "Copiar ID do servidor".</li>
      </ul>
      <pre><code class="language-bash">DISCORD_TOKEN=seu_token_aqui
CLIENT_ID=id_da_sua_aplicacao
GUILD_ID=id_do_seu_servidor_de_testes</code></pre>

      <div class="challenge-box">
        <div class="challenge-header">
          <span class="challenge-icon">🎯</span>
          <span class="challenge-title">Desafio Prático</span>
        </div>
        <ol>
          <li>Acesse o Discord Developer Portal e crie uma nova aplicação.</li>
          <li>Vá para a seção "Bot" e obtenha o token. Cole-o no seu <code>.env</code>.</li>
          <li>Crie um servidor de testes no Discord (se ainda não tiver um).</li>
          <li>Use o URL Generator para convidar o bot para o seu servidor de testes.</li>
          <li>Obtenha o CLIENT_ID e o GUILD_ID e adicione-os ao <code>.env</code>.</li>
        </ol>
      </div>
    `
  },
  "2.3": {
    module: "Módulo 2: Primeiros Passos com Discord.js",
    title: "Instalando o Discord.js",
    duration: "10 min",
    content: `
      <h2>Instalando as Dependências</h2>
      <p>Com a estrutura do projeto pronta e o token em mãos, é hora de instalar o Discord.js e suas dependências. No terminal, na raiz do seu projeto, execute:</p>
      <pre><code class="language-bash">npm install discord.js @discordjs/rest @discordjs/builders</code></pre>
      <p>Vamos entender o que cada pacote faz:</p>
      <ul>
        <li><strong>discord.js:</strong> A biblioteca principal. Contém o <code>Client</code>, os builders de componentes, as coleções e tudo mais que precisamos para interagir com o Discord.</li>
        <li><strong>@discordjs/rest:</strong> O cliente REST para fazer requisições à API do Discord, como registrar Slash Commands.</li>
        <li><strong>@discordjs/builders:</strong> Utilitários para construir objetos da API, como os dados de Slash Commands.</li>
      </ul>

      <h2>Verificando a Instalação</h2>
      <p>Após a instalação, você verá uma pasta <code>node_modules/</code> criada na raiz do projeto e o <code>package.json</code> atualizado com as dependências:</p>
      <pre><code class="language-json">{
  "dependencies": {
    "@discordjs/builders": "^1.x.x",
    "@discordjs/rest": "^2.x.x",
    "discord.js": "^14.x.x",
    "dotenv": "^16.x.x"
  },
  "devDependencies": {
    "@types/node": "^20.x.x",
    "tsx": "^4.x.x",
    "typescript": "^5.x.x"
  }
}</code></pre>

      <h2>Testando a Importação</h2>
      <p>Vamos verificar se o Discord.js foi instalado corretamente adicionando uma importação ao nosso <code>src/index.ts</code>:</p>
      <pre><code class="language-typescript">import { Client } from 'discord.js';
import { config } from 'dotenv';

config();

console.log('Discord.js importado com sucesso!');
console.log('Token:', process.env.DISCORD_TOKEN ? 'Encontrado ✅' : 'NÃO ENCONTRADO ❌');</code></pre>
      <p>Execute <code>npm run dev</code>. Se você ver "Discord.js importado com sucesso!" e "Token: Encontrado ✅", estamos prontos para o próximo passo!</p>

      <div class="challenge-box">
        <div class="challenge-header">
          <span class="challenge-icon">🎯</span>
          <span class="challenge-title">Desafio Prático</span>
        </div>
        <ol>
          <li>Execute o comando de instalação das dependências.</li>
          <li>Verifique se a pasta <code>node_modules/</code> foi criada e se o <code>package.json</code> foi atualizado.</li>
          <li>Adicione o código de teste ao <code>src/index.ts</code> e execute <code>npm run dev</code> para verificar se tudo está funcionando.</li>
        </ol>
      </div>
    `
  },
  "2.4": {
    module: "Módulo 2: Primeiros Passos com Discord.js",
    title: "Fazendo o Bot Logar",
    duration: "25 min",
    content: `
      <h2>O Objeto Client</h2>
      <p>O coração de qualquer bot Discord.js é o objeto <strong>Client</strong>. Ele representa a conexão do seu bot com o Discord. Através dele, você acessa todos os dados e métodos disponíveis: servidores, usuários, canais, e muito mais.</p>

      <h2>Criando o Cliente e Logando</h2>
      <p>Vamos escrever o código completo para fazer nosso bot se conectar ao Discord pela primeira vez:</p>
      <pre><code class="language-typescript">// src/index.ts
import { Client, GatewayIntentBits, Events } from 'discord.js';
import { config } from 'dotenv';

// Carrega as variáveis do arquivo .env
config();

// Cria o cliente do bot com as intents necessárias
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
  ]
});

// Evento disparado quando o bot fica online
client.once(Events.ClientReady, (readyClient) => {
  console.log(\`✅ Bot online! Logado como \${readyClient.user.tag}\`);
});

// Faz o bot se conectar ao Discord usando o token
client.login(process.env.DISCORD_TOKEN);</code></pre>

      <h2>Análise do Código</h2>
      <ul>
        <li><strong><code>new Client({ intents: [...] })</code>:</strong> Cria o cliente. O objeto de opções <strong>requer</strong> que você especifique as <em>intents</em> (intenções) que seu bot precisa. Elas dizem ao Discord quais tipos de eventos você quer receber. Falaremos mais sobre isso na aula 2.5.</li>
        <li><strong><code>client.once(Events.ClientReady, ...)</code>:</strong> Registra um listener de evento que será chamado <strong>apenas uma vez</strong>, quando o bot terminar de se conectar e estiver pronto. O <code>Events.ClientReady</code> é um enum que representa o nome do evento (<code>'ready'</code>).</li>
        <li><strong><code>client.login(token)</code>:</strong> Inicia o processo de conexão com o Discord usando o token fornecido. Esta é a última linha do arquivo, pois tudo o que acontece depois é orientado a eventos.</li>
      </ul>

      <h2>Executando o Bot</h2>
      <p>Execute <code>npm run dev</code> no terminal. Se tudo estiver configurado corretamente, você verá:</p>
      <pre><code class="language-bash">✅ Bot online! Logado como NomeDoSeuBot#0000</code></pre>
      <p>E no Discord, o status do seu bot mudará para online! Parabéns, você acabou de criar seu primeiro bot!</p>

      <div class="callout callout-info">
        <span class="callout-icon">💡</span>
        <div><strong>client.once vs client.on:</strong> Use <code>client.once</code> para eventos que devem ser tratados apenas uma vez (como o evento <code>ready</code>). Use <code>client.on</code> para eventos que podem ocorrer múltiplas vezes (como receber uma mensagem).</div>
      </div>

      <div class="challenge-box">
        <div class="challenge-header">
          <span class="challenge-icon">🎯</span>
          <span class="challenge-title">Desafio Prático</span>
        </div>
        <ol>
          <li>Escreva o código completo no seu <code>src/index.ts</code> e execute o bot.</li>
          <li>Verifique se o bot aparece como online no seu servidor de testes no Discord.</li>
          <li>Modifique a mensagem de log para incluir o número de servidores em que o bot está: <code>readyClient.guilds.cache.size</code>.</li>
        </ol>
      </div>
    `
  },
  "2.5": {
    module: "Módulo 2: Primeiros Passos com Discord.js",
    title: "Intents e Partials",
    duration: "18 min",
    content: `
      <h2>O que são Gateway Intents?</h2>
      <p>O Discord não envia todos os eventos para todos os bots por padrão. Para receber certos tipos de dados, você precisa declarar explicitamente quais <strong>Gateway Intents</strong> (intenções) o seu bot precisa. Isso é uma medida de privacidade e performance do Discord.</p>
      <blockquote><p>Intents são como "assinaturas" de eventos. Você diz ao Discord: "Meu bot precisa receber eventos de mensagens" ou "Meu bot precisa receber eventos de membros", e o Discord só enviará esses eventos para o seu bot.</p></blockquote>

      <h2>Tipos de Intents</h2>
      <p>O Discord.js fornece o enum <code>GatewayIntentBits</code> com todas as intents disponíveis:</p>
      <table>
        <thead>
          <tr><th>Intent</th><th>O que habilita</th><th>Privilegiada?</th></tr>
        </thead>
        <tbody>
          <tr><td><code>Guilds</code></td><td>Eventos de servidores (criar, deletar, atualizar)</td><td>Não</td></tr>
          <tr><td><code>GuildMembers</code></td><td>Eventos de membros (entrar, sair, atualizar)</td><td><strong>Sim</strong></td></tr>
          <tr><td><code>GuildMessages</code></td><td>Eventos de mensagens em servidores</td><td>Não</td></tr>
          <tr><td><code>MessageContent</code></td><td>Conteúdo das mensagens (texto)</td><td><strong>Sim</strong></td></tr>
          <tr><td><code>GuildVoiceStates</code></td><td>Eventos de canais de voz</td><td>Não</td></tr>
          <tr><td><code>DirectMessages</code></td><td>Mensagens diretas ao bot</td><td>Não</td></tr>
        </tbody>
      </table>

      <h2>Intents Privilegiadas</h2>
      <p>Algumas intents são marcadas como <strong>Privilegiadas</strong>. Para usá-las, você precisa habilitá-las manualmente no Discord Developer Portal (seção "Bot") E declará-las no código. Bots em mais de 100 servidores precisam da aprovação do Discord para usá-las.</p>
      <p>As intents privilegiadas mais comuns são:</p>
      <ul>
        <li><strong>GuildMembers:</strong> Necessária para receber eventos de entrada/saída de membros e para ter a lista completa de membros do servidor em cache.</li>
        <li><strong>MessageContent:</strong> Necessária para ler o conteúdo das mensagens. Sem ela, <code>message.content</code> estará vazio para mensagens de outros usuários.</li>
      </ul>

      <h2>Configuração Completa para o Nosso Bot</h2>
      <pre><code class="language-typescript">import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,           // Básico para qualquer bot
    GatewayIntentBits.GuildMembers,     // Para eventos de membros (PRIVILEGIADA)
    GatewayIntentBits.GuildMessages,    // Para receber mensagens
    GatewayIntentBits.MessageContent,   // Para ler o conteúdo das mensagens (PRIVILEGIADA)
  ]
});</code></pre>

      <div class="callout callout-warning">
        <span class="callout-icon">⚠️</span>
        <div><strong>Lembre-se:</strong> Para as intents privilegiadas (<code>GuildMembers</code> e <code>MessageContent</code>), você precisa habilitá-las no Discord Developer Portal em "Bot" > "Privileged Gateway Intents".</div>
      </div>

      <div class="challenge-box">
        <div class="challenge-header">
          <span class="challenge-icon">🎯</span>
          <span class="challenge-title">Desafio Prático</span>
        </div>
        <ol>
          <li>Vá ao Discord Developer Portal e habilite as intents privilegiadas <code>Server Members Intent</code> e <code>Message Content Intent</code>.</li>
          <li>Atualize o seu <code>src/index.ts</code> com as quatro intents mostradas acima.</li>
          <li>Reinicie o bot e verifique se ele ainda está funcionando corretamente.</li>
        </ol>
      </div>
    `
  }
};

// Adicionar mais conteúdo para os módulos 3-9 (versões resumidas mas completas)
const additionalLessons = {
  "3.1": { module: "Módulo 3: Eventos e Comandos", title: "Sistema de Eventos", duration: "15 min", content: generateLessonContent("3.1", "Sistema de Eventos", "O Discord.js é baseado em eventos. Cada ação que acontece no Discord — uma mensagem enviada, um usuário entrando no servidor, uma reação adicionada — gera um evento que o seu bot pode ouvir e responder.", [
    { heading: "Como Funciona o Sistema de Eventos", text: "O objeto <code>Client</code> do Discord.js estende a classe <code>EventEmitter</code> do Node.js. Isso significa que podemos usar <code>client.on('nomeDoEvento', callback)</code> para registrar funções que serão chamadas quando um evento específico ocorrer." },
    { heading: "Registrando Listeners de Eventos", code: `// Evento: Bot ficou online
client.once(Events.ClientReady, (c) => {
  console.log(\`Online como \${c.user.tag}\`);
});

// Evento: Mensagem recebida
client.on(Events.MessageCreate, (message) => {
  console.log(\`Mensagem de \${message.author.tag}: \${message.content}\`);
});

// Evento: Membro entrou no servidor
client.on(Events.GuildMemberAdd, (member) => {
  console.log(\`\${member.user.tag} entrou no servidor!\`);
});`, lang: "typescript" },
    { heading: "Eventos Mais Usados", text: "Os eventos mais comuns em bots de Discord são: <code>ClientReady</code>, <code>MessageCreate</code>, <code>InteractionCreate</code>, <code>GuildMemberAdd</code>, <code>GuildMemberRemove</code>, <code>MessageDelete</code>, e <code>MessageUpdate</code>." }
  ], "Crie listeners para os eventos <code>GuildMemberAdd</code> e <code>GuildMemberRemove</code> que enviem uma mensagem de boas-vindas e despedida em um canal específico do servidor.") },
  "3.2": { module: "Módulo 3: Eventos e Comandos", title: "Evento messageCreate", duration: "20 min", content: generateLessonContent("3.2", "Evento messageCreate", "O evento <code>messageCreate</code> é disparado toda vez que uma mensagem é enviada em qualquer canal que o bot possa ver. É um dos eventos mais fundamentais para qualquer bot.", [
    { heading: "O Objeto Message", text: "O callback do evento recebe um objeto <code>Message</code> com todas as informações sobre a mensagem: o conteúdo, o autor, o canal, o servidor, e muito mais." },
    { heading: "Acessando Dados da Mensagem", code: `client.on(Events.MessageCreate, (message) => {
  // Ignora mensagens de bots (incluindo o próprio bot)
  if (message.author.bot) return;
  
  // Acessa dados da mensagem
  console.log('Conteúdo:', message.content);
  console.log('Autor:', message.author.tag);
  console.log('Canal:', message.channel.name);
  console.log('Servidor:', message.guild?.name);
  
  // Responde à mensagem
  if (message.content === 'olá') {
    message.reply('Olá! Como posso ajudar?');
  }
});`, lang: "typescript" },
    { heading: "Filtrando Mensagens", text: "É crucial sempre verificar <code>if (message.author.bot) return;</code> para evitar que o bot responda a si mesmo ou a outros bots, criando loops infinitos." }
  ], "Crie um listener de <code>messageCreate</code> que responda a pelo menos 3 palavras-chave diferentes com respostas personalizadas.") },
  "3.3": { module: "Módulo 3: Eventos e Comandos", title: "Comandos de Prefixo", duration: "25 min", content: generateLessonContent("3.3", "Comandos de Prefixo", "Antes dos Slash Commands, os bots usavam um sistema de prefixo: o usuário enviava uma mensagem começando com um caractere especial (como <code>!</code>) seguido do nome do comando.", [
    { heading: "Implementando Comandos de Prefixo", code: `const PREFIX = '!';

client.on(Events.MessageCreate, (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;
  
  // Divide a mensagem em comando e argumentos
  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  const commandName = args.shift()?.toLowerCase();
  
  if (commandName === 'ping') {
    message.reply(\`Pong! Latência: \${message.client.ws.ping}ms\`);
  } else if (commandName === 'oi') {
    message.reply(\`Olá, \${message.author.username}!\`);
  } else if (commandName === 'eco') {
    if (!args.length) return message.reply('Forneça um texto!');
    message.channel.send(args.join(' '));
  }
});`, lang: "typescript" },
    { heading: "Limitações dos Comandos de Prefixo", text: "Embora ainda funcionem, os comandos de prefixo têm limitações: requerem a intent <code>MessageContent</code> (privilegiada), não têm autocompletar nativo no Discord, e são menos seguros. Os Slash Commands são a abordagem moderna e recomendada." }
  ], "Crie um sistema de comandos de prefixo com pelo menos 5 comandos: <code>!ping</code>, <code>!oi</code>, <code>!eco</code>, <code>!info</code> e <code>!ajuda</code>.") },
  "3.4": { module: "Módulo 3: Eventos e Comandos", title: "Evento interactionCreate", duration: "18 min", content: generateLessonContent("3.4", "Evento interactionCreate", "O evento <code>interactionCreate</code> é o coração dos bots modernos. Ele é disparado quando qualquer tipo de interação ocorre: Slash Commands, cliques em botões, seleção em menus, envio de modals, e muito mais.", [
    { heading: "Tipos de Interação", text: "O objeto <code>Interaction</code> pode ser de vários tipos. É crucial verificar o tipo antes de processar, usando métodos como <code>interaction.isChatInputCommand()</code>, <code>interaction.isButton()</code>, <code>interaction.isStringSelectMenu()</code>, etc." },
    { heading: "Respondendo a Slash Commands", code: `client.on(Events.InteractionCreate, async (interaction) => {
  // Verifica se é um Slash Command
  if (!interaction.isChatInputCommand()) return;
  
  console.log(\`Comando recebido: /\${interaction.commandName}\`);
  
  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
  
  if (interaction.commandName === 'ola') {
    // Resposta efêmera (visível apenas para quem usou o comando)
    await interaction.reply({ 
      content: \`Olá, \${interaction.user.username}!\`,
      ephemeral: true 
    });
  }
});`, lang: "typescript" },
    { heading: "Respostas Efêmeras", text: "Adicionar <code>ephemeral: true</code> na resposta faz com que apenas o usuário que usou o comando veja a resposta. Útil para mensagens de erro ou informações privadas." }
  ], "Crie um listener de <code>interactionCreate</code> que responda a um Slash Command chamado <code>/ola</code> com uma mensagem personalizada e efêmera.") },
  "3.5": { module: "Módulo 3: Eventos e Comandos", title: "Registrando Slash Commands", duration: "22 min", content: generateLessonContent("3.5", "Registrando Slash Commands", "Slash Commands precisam ser registrados na API do Discord antes de aparecerem para os usuários. Este é um processo separado da execução do bot.", [
    { heading: "Script de Registro", code: `// src/register-commands.ts
import { REST, Routes, SlashCommandBuilder } from 'discord.js';
import { config } from 'dotenv';
config();

const commands = [
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Verifica a latência do bot.'),
  new SlashCommandBuilder()
    .setName('ola')
    .setDescription('O bot te saúda!')
    .addStringOption(option =>
      option.setName('nome')
        .setDescription('Seu nome')
        .setRequired(false)),
].map(cmd => cmd.toJSON());

const rest = new REST().setToken(process.env.DISCORD_TOKEN!);

(async () => {
  console.log('Registrando comandos...');
  await rest.put(
    Routes.applicationGuildCommands(
      process.env.CLIENT_ID!,
      process.env.GUILD_ID!
    ),
    { body: commands }
  );
  console.log('Comandos registrados com sucesso!');
})();`, lang: "typescript" },
    { heading: "Guild vs Global Commands", text: "Comandos de Guild (servidor) são registrados instantaneamente e ideais para testes. Comandos globais podem levar até 1 hora para aparecer em todos os servidores. Use comandos de Guild durante o desenvolvimento e globais em produção." }
  ], "Crie o script de registro e adicione pelo menos 3 Slash Commands com diferentes tipos de opções (string, integer, user). Execute <code>npm run register</code> e verifique se os comandos aparecem no Discord.") }
};

// Gerar conteúdo para módulos 4-9
const moduleLessons = {
  "4.1": { module: "Módulo 4: Componentes Interativos", title: "Embeds", duration: "20 min" },
  "4.2": { module: "Módulo 4: Componentes Interativos", title: "Botões", duration: "25 min" },
  "4.3": { module: "Módulo 4: Componentes Interativos", title: "Select Menus", duration: "22 min" },
  "4.4": { module: "Módulo 4: Componentes Interativos", title: "Modals (Formulários)", duration: "20 min" },
  "4.5": { module: "Módulo 4: Componentes Interativos", title: "Combinando Componentes", duration: "18 min" },
  "5.1": { module: "Módulo 5: Arquitetura Profissional", title: "Handler de Comandos", duration: "30 min" },
  "5.2": { module: "Módulo 5: Arquitetura Profissional", title: "Handler de Eventos", duration: "25 min" },
  "5.3": { module: "Módulo 5: Arquitetura Profissional", title: "Estrutura Profissional de Pastas", duration: "20 min" },
  "5.4": { module: "Módulo 5: Arquitetura Profissional", title: "Sistema de Cooldown", duration: "22 min" },
  "5.5": { module: "Módulo 5: Arquitetura Profissional", title: "Sistema de Permissões", duration: "20 min" },
  "6.1": { module: "Módulo 6: Erros, Logging e Deploy", title: "Tratamento de Erros (try/catch)", duration: "18 min" },
  "6.2": { module: "Módulo 6: Erros, Logging e Deploy", title: "Sistema de Logging Profissional", duration: "25 min" },
  "6.3": { module: "Módulo 6: Erros, Logging e Deploy", title: "Erros Comuns e Como Evitá-los", duration: "20 min" },
  "6.4": { module: "Módulo 6: Erros, Logging e Deploy", title: "Deploy e Variáveis de Ambiente", duration: "30 min" },
  "7.1": { module: "Módulo 7: Banco de Dados", title: "Por que Usar Banco de Dados?", duration: "12 min" },
  "7.2": { module: "Módulo 7: Banco de Dados", title: "Persistência com JSON (fs)", duration: "20 min" },
  "7.3": { module: "Módulo 7: Banco de Dados", title: "SQLite com better-sqlite3", duration: "35 min" },
  "7.4": { module: "Módulo 7: Banco de Dados", title: "MongoDB com Mongoose", duration: "40 min" },
  "7.5": { module: "Módulo 7: Banco de Dados", title: "Comparando as Abordagens", duration: "15 min" },
  "8.1": { module: "Módulo 8: Sistemas Avançados", title: "Sistema de Economia", duration: "40 min" },
  "8.2": { module: "Módulo 8: Sistemas Avançados", title: "Sistema de Níveis e XP", duration: "35 min" },
  "8.3": { module: "Módulo 8: Sistemas Avançados", title: "Moderação Automática", duration: "30 min" },
  "8.4": { module: "Módulo 8: Sistemas Avançados", title: "Integração com APIs Externas", duration: "30 min" },
  "9.1": { module: "Módulo 9: Projeto Final e Deploy", title: "Planejando o Bot Completo", duration: "20 min" },
  "9.2": { module: "Módulo 9: Projeto Final e Deploy", title: "Construindo o Bot (Guiado)", duration: "60 min" },
  "9.3": { module: "Módulo 9: Projeto Final e Deploy", title: "Deploy no Railway / Render", duration: "30 min" },
  "9.4": { module: "Módulo 9: Projeto Final e Deploy", title: "Boas Práticas e Próximos Passos", duration: "15 min" }
};

// Gerar conteúdo rico para as aulas dos módulos 4-9
Object.keys(moduleLessons).forEach(id => {
  const lesson = moduleLessons[id];
  lessonContent[id] = {
    module: lesson.module,
    title: lesson.title,
    duration: lesson.duration,
    content: generateFullLessonContent(id, lesson.title, lesson.module)
  };
});

// Merge additional lessons
Object.assign(lessonContent, additionalLessons);

// ============================================
// FUNÇÕES GERADORAS DE CONTEÚDO
// ============================================
function generateLessonContent(id, title, intro, sections, challenge) {
  let html = `<p>${intro}</p>`;
  sections.forEach(section => {
    html += `<h2>${section.heading}</h2>`;
    if (section.text) html += `<p>${section.text}</p>`;
    if (section.code) {
      html += `<pre><code class="language-${section.lang || 'typescript'}">${escapeHtml(section.code)}</code></pre>`;
    }
  });
  html += `<div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><p style="color:var(--text-secondary);font-size:14px;">${challenge}</p></div>`;
  return html;
}

function generateFullLessonContent(id, title, moduleName) {
  const contentMap = {
    "4.1": `
      <h2>O que são Embeds?</h2>
      <p>Embeds são mensagens ricas e formatadas que o Discord permite enviar. Em vez de texto simples, você pode criar cartões visuais com título, descrição, campos, imagens, cores e muito mais. São a forma padrão de apresentar informações de forma organizada e profissional.</p>
      <h2>Criando um Embed Básico</h2>
      <pre><code class="language-typescript">import { EmbedBuilder } from 'discord.js';

const embed = new EmbedBuilder()
  .setTitle('Informações do Servidor')
  .setDescription('Aqui estão as informações do servidor atual.')
  .setColor('#5865F2') // Cor em hex ou nome
  .addFields(
    { name: 'Membros', value: '1,234', inline: true },
    { name: 'Canais', value: '42', inline: true },
    { name: 'Criado em', value: '01/01/2020', inline: false }
  )
  .setThumbnail('https://url-da-imagem.com/icon.png')
  .setFooter({ text: 'Discord Bot Course' })
  .setTimestamp();

await interaction.reply({ embeds: [embed] });</code></pre>
      <h2>Propriedades do EmbedBuilder</h2>
      <table>
        <thead><tr><th>Método</th><th>Descrição</th></tr></thead>
        <tbody>
          <tr><td><code>setTitle()</code></td><td>Título do embed (máx. 256 chars)</td></tr>
          <tr><td><code>setDescription()</code></td><td>Descrição principal (máx. 4096 chars)</td></tr>
          <tr><td><code>setColor()</code></td><td>Cor da barra lateral (hex ou nome)</td></tr>
          <tr><td><code>addFields()</code></td><td>Adiciona campos (nome + valor)</td></tr>
          <tr><td><code>setThumbnail()</code></td><td>Imagem pequena no canto superior direito</td></tr>
          <tr><td><code>setImage()</code></td><td>Imagem grande na parte inferior</td></tr>
          <tr><td><code>setFooter()</code></td><td>Rodapé com texto e ícone opcional</td></tr>
          <tr><td><code>setTimestamp()</code></td><td>Adiciona a data/hora atual ao rodapé</td></tr>
        </tbody>
      </table>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Crie um comando <code>/serverinfo</code> que exibe um embed com informações do servidor (nome, membros, canais, data de criação).</li><li>Crie um comando <code>/userinfo</code> que exibe um embed com informações de um usuário (tag, ID, data de entrada, cargos).</li><li>Experimente diferentes cores e layouts para seus embeds.</li></ol></div>
    `,
    "4.2": `
      <h2>Botões Interativos</h2>
      <p>Botões permitem que os usuários interajam com o bot através de cliques, sem precisar digitar comandos. Eles são enviados junto com mensagens e disparam o evento <code>interactionCreate</code> quando clicados.</p>
      <h2>Criando Botões</h2>
      <pre><code class="language-typescript">import { ButtonBuilder, ButtonStyle, ActionRowBuilder } from 'discord.js';

// Cria os botões
const confirmarBtn = new ButtonBuilder()
  .setCustomId('confirmar')
  .setLabel('Confirmar')
  .setStyle(ButtonStyle.Success)
  .setEmoji('✅');

const cancelarBtn = new ButtonBuilder()
  .setCustomId('cancelar')
  .setLabel('Cancelar')
  .setStyle(ButtonStyle.Danger)
  .setEmoji('❌');

// Botões devem estar dentro de um ActionRow
const row = new ActionRowBuilder().addComponents(confirmarBtn, cancelarBtn);

// Envia a mensagem com os botões
await interaction.reply({
  content: 'Tem certeza que deseja continuar?',
  components: [row]
});

// Coleta a resposta do botão
const collector = interaction.channel.createMessageComponentCollector({
  filter: i => i.user.id === interaction.user.id,
  time: 30000 // 30 segundos
});

collector.on('collect', async (buttonInteraction) => {
  if (buttonInteraction.customId === 'confirmar') {
    await buttonInteraction.update({ content: 'Ação confirmada!', components: [] });
  } else {
    await buttonInteraction.update({ content: 'Ação cancelada.', components: [] });
  }
});</code></pre>
      <h2>Estilos de Botão</h2>
      <table>
        <thead><tr><th>Estilo</th><th>Cor</th><th>Uso</th></tr></thead>
        <tbody>
          <tr><td><code>Primary</code></td><td>Azul</td><td>Ação principal</td></tr>
          <tr><td><code>Secondary</code></td><td>Cinza</td><td>Ação secundária</td></tr>
          <tr><td><code>Success</code></td><td>Verde</td><td>Confirmação/sucesso</td></tr>
          <tr><td><code>Danger</code></td><td>Vermelho</td><td>Ação destrutiva</td></tr>
          <tr><td><code>Link</code></td><td>Cinza c/ ícone</td><td>Link externo (usa URL em vez de customId)</td></tr>
        </tbody>
      </table>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Crie um comando <code>/confirmar-ban</code> que exibe um embed com informações do usuário a ser banido e dois botões: "Confirmar" e "Cancelar".</li><li>Implemente a lógica de coleta de interação para processar o clique em cada botão.</li><li>Adicione um timeout: se nenhum botão for clicado em 30 segundos, edite a mensagem para "Tempo esgotado."</li></ol></div>
    `,
    "4.3": `
      <h2>Select Menus</h2>
      <p>Select Menus são menus suspensos que permitem ao usuário escolher uma ou mais opções de uma lista. São ideais para quando você tem muitas opções e não quer poluir a interface com botões.</p>
      <h2>Criando um Select Menu</h2>
      <pre><code class="language-typescript">import { StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder } from 'discord.js';

const menu = new StringSelectMenuBuilder()
  .setCustomId('escolha-cor')
  .setPlaceholder('Escolha sua cor favorita')
  .setMinValues(1)
  .setMaxValues(1)
  .addOptions(
    new StringSelectMenuOptionBuilder()
      .setLabel('Vermelho')
      .setDescription('A cor do fogo e da paixão')
      .setValue('vermelho')
      .setEmoji('🔴'),
    new StringSelectMenuOptionBuilder()
      .setLabel('Azul')
      .setDescription('A cor do céu e do mar')
      .setValue('azul')
      .setEmoji('🔵'),
    new StringSelectMenuOptionBuilder()
      .setLabel('Verde')
      .setDescription('A cor da natureza')
      .setValue('verde')
      .setEmoji('🟢'),
  );

const row = new ActionRowBuilder().addComponents(menu);

await interaction.reply({ content: 'Qual é sua cor favorita?', components: [row] });

// Coleta a resposta
const collector = interaction.channel.createMessageComponentCollector({
  filter: i => i.isStringSelectMenu() && i.user.id === interaction.user.id,
  time: 30000
});

collector.on('collect', async (selectInteraction) => {
  const escolha = selectInteraction.values[0];
  await selectInteraction.update({ content: \`Você escolheu: \${escolha}!\`, components: [] });
});</code></pre>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Crie um comando <code>/escolher-cargo</code> que exibe um Select Menu com 5 cargos de interesse (ex: Programador, Designer, Gamer). Ao selecionar, o bot deve dar o cargo ao usuário.</li><li>Permita a seleção de múltiplos cargos usando <code>setMaxValues(3)</code>.</li></ol></div>
    `,
    "4.4": `
      <h2>Modals (Formulários)</h2>
      <p>Modals são janelas pop-up que aparecem para o usuário, permitindo que ele preencha um formulário com campos de texto. São ideais para coletar informações mais longas, como uma sugestão ou um relatório de bug.</p>
      <h2>Criando e Exibindo um Modal</h2>
      <pre><code class="language-typescript">import { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } from 'discord.js';

// Cria o modal
const modal = new ModalBuilder()
  .setCustomId('sugestao-modal')
  .setTitle('Enviar Sugestão');

// Cria os campos de texto
const tituloInput = new TextInputBuilder()
  .setCustomId('titulo-input')
  .setLabel('Título da Sugestão')
  .setStyle(TextInputStyle.Short)
  .setRequired(true)
  .setMaxLength(100);

const descricaoInput = new TextInputBuilder()
  .setCustomId('descricao-input')
  .setLabel('Descreva sua sugestão')
  .setStyle(TextInputStyle.Paragraph)
  .setRequired(true)
  .setMinLength(20);

// Cada input deve estar em seu próprio ActionRow
const row1 = new ActionRowBuilder().addComponents(tituloInput);
const row2 = new ActionRowBuilder().addComponents(descricaoInput);

modal.addComponents(row1, row2);

// Mostra o modal (só pode ser feito como primeira resposta a uma interação)
await interaction.showModal(modal);

// Aguarda o envio do modal
const submitted = await interaction.awaitModalSubmit({ time: 60000 });
const titulo = submitted.fields.getTextInputValue('titulo-input');
const descricao = submitted.fields.getTextInputValue('descricao-input');

await submitted.reply(\`Sugestão recebida! Título: \${titulo}\`);</code></pre>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Crie um comando <code>/sugestao</code> que abre um modal com campos para título e descrição.</li><li>Ao receber o modal, envie a sugestão formatada em um embed para um canal específico de sugestões.</li><li>Responda ao usuário com uma confirmação efêmera.</li></ol></div>
    `,
    "4.5": `
      <h2>Combinando Componentes</h2>
      <p>O poder real dos componentes interativos aparece quando os combinamos. Você pode criar fluxos de interação complexos onde um botão abre um modal, ou uma seleção em um menu muda os botões disponíveis.</p>
      <h2>Exemplo: Painel de Moderação</h2>
      <pre><code class="language-typescript">// Comando /moderar cria um painel com botões de ação
async execute(interaction) {
  const usuario = interaction.options.getUser('usuario');
  
  const embed = new EmbedBuilder()
    .setTitle(\`Painel de Moderação: \${usuario.tag}\`)
    .setThumbnail(usuario.displayAvatarURL())
    .setColor('Orange');
  
  const row = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId(\`warn_\${usuario.id}\`).setLabel('Advertir').setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId(\`kick_\${usuario.id}\`).setLabel('Expulsar').setStyle(ButtonStyle.Danger),
    new ButtonBuilder().setCustomId(\`ban_\${usuario.id}\`).setLabel('Banir').setStyle(ButtonStyle.Danger),
  );
  
  await interaction.reply({ embeds: [embed], components: [row] });
}

// No interactionCreate, captura o clique nos botões
if (interaction.isButton()) {
  const [action, userId] = interaction.customId.split('_');
  
  if (action === 'warn') {
    // Abre um modal para pedir o motivo
    const modal = new ModalBuilder().setCustomId(\`warn-reason_\${userId}\`).setTitle('Motivo da Advertência');
    // ... adiciona input e mostra o modal
    await interaction.showModal(modal);
  }
}</code></pre>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Crie um painel de moderação completo que combina embeds, botões e modals.</li><li>Ao clicar em "Advertir" ou "Banir", abra um modal pedindo o motivo.</li><li>Ao confirmar, execute a ação e registre em um canal de logs.</li></ol></div>
    `,
    "5.1": `
      <h2>Por que Precisamos de um Handler?</h2>
      <p>Imagine ter 50 comandos diferentes. Colocar todos eles dentro de um único <code>if/else if</code> no arquivo <code>index.ts</code> seria um pesadelo de manutenção. Um <strong>handler de comandos</strong> resolve isso: ele lê automaticamente os arquivos de comando de uma pasta e os carrega, sem que você precise registrá-los manualmente.</p>
      <h2>Estrutura do Handler</h2>
      <pre><code class="language-typescript">// src/index.ts - Carregamento de Comandos
import fs from 'fs';
import path from 'path';
import { Collection } from 'discord.js';

// Adiciona a propriedade 'commands' ao Client
client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(commandsPath);

for (const folder of commandFolders) {
  const folderPath = path.join(commandsPath, folder);
  const commandFiles = fs.readdirSync(folderPath).filter(f => f.endsWith('.js'));
  
  for (const file of commandFiles) {
    const filePath = path.join(folderPath, file);
    const command = require(filePath).default;
    
    if (command.data && command.execute) {
      client.commands.set(command.data.name, command);
      console.log(\`Comando carregado: /\${command.data.name}\`);
    }
  }
}</code></pre>
      <h2>Estrutura de um Arquivo de Comando</h2>
      <pre><code class="language-typescript">// src/commands/utilidades/ping.ts
import { SlashCommandBuilder, CommandInteraction } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Verifica a latência do bot.'),
  
  async execute(interaction: CommandInteraction) {
    const latency = interaction.client.ws.ping;
    await interaction.reply(\`🏓 Pong! Latência: \${latency}ms\`);
  }
};</code></pre>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Implemente o handler de comandos no seu <code>index.ts</code>.</li><li>Crie a estrutura de pastas <code>src/commands/utilidades/</code> e mova seus comandos existentes para lá.</li><li>Verifique no console que todos os comandos estão sendo carregados ao iniciar o bot.</li></ol></div>
    `,
    "5.2": `
      <h2>Handler de Eventos</h2>
      <p>Assim como o handler de comandos, um handler de eventos carrega automaticamente os arquivos de evento de uma pasta, mantendo o <code>index.ts</code> limpo e organizado.</p>
      <h2>Implementando o Handler de Eventos</h2>
      <pre><code class="language-typescript">// src/index.ts - Carregamento de Eventos
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(f => f.endsWith('.js'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath).default;
  
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
  console.log(\`Evento carregado: \${event.name}\`);
}</code></pre>
      <h2>Estrutura de um Arquivo de Evento</h2>
      <pre><code class="language-typescript">// src/events/ready.ts
import { Events, Client } from 'discord.js';

export default {
  name: Events.ClientReady,
  once: true,
  execute(client: Client) {
    console.log(\`✅ Bot online como \${client.user?.tag}\`);
  }
};</code></pre>
      <pre><code class="language-typescript">// src/events/interactionCreate.ts
import { Events, Interaction } from 'discord.js';

export default {
  name: Events.InteractionCreate,
  once: false,
  async execute(interaction: Interaction) {
    if (!interaction.isChatInputCommand()) return;
    
    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) return;
    
    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: 'Ocorreu um erro!', ephemeral: true });
    }
  }
};</code></pre>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Implemente o handler de eventos.</li><li>Mova o evento <code>ready</code> e o evento <code>interactionCreate</code> para arquivos separados na pasta <code>src/events/</code>.</li><li>Adicione um evento <code>guildCreate</code> que loga quando o bot é adicionado a um novo servidor.</li></ol></div>
    `,
    "5.3": `
      <h2>A Estrutura Profissional Final</h2>
      <p>Com os handlers implementados, nossa estrutura de projeto está madura e pronta para escalar. Veja como ela fica:</p>
      <pre><code class="language-bash">src/
├── commands/
│   ├── moderacao/
│   │   ├── ban.ts
│   │   └── kick.ts
│   └── utilidades/
│       ├── ping.ts
│       └── userinfo.ts
├── events/
│   ├── ready.ts
│   ├── interactionCreate.ts
│   └── messageCreate.ts
├── utils/
│   └── logger.ts
├── types/
│   └── index.ts    # Extensões de tipo do Discord.js
└── index.ts</code></pre>
      <h2>Estendendo os Tipos do Discord.js</h2>
      <p>Para adicionar a propriedade <code>commands</code> ao <code>Client</code> sem erros de TypeScript, precisamos estender a interface do Discord.js:</p>
      <pre><code class="language-typescript">// src/types/index.ts
import { Collection } from 'discord.js';

declare module 'discord.js' {
  interface Client {
    commands: Collection<string, any>;
  }
}</code></pre>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Organize todos os seus arquivos na estrutura de pastas profissional.</li><li>Crie o arquivo <code>src/types/index.ts</code> para estender os tipos do Discord.js.</li><li>Certifique-se de que o bot ainda funciona corretamente após a reorganização.</li></ol></div>
    `,
    "5.4": `
      <h2>Sistema de Cooldown</h2>
      <p>Um sistema de cooldown impede que usuários usem o mesmo comando repetidamente em um curto período, prevenindo spam e sobrecarga do bot.</p>
      <h2>Implementação com Collection</h2>
      <pre><code class="language-typescript">// src/events/interactionCreate.ts
const cooldowns = new Collection<string, Collection<string, number>>();

// Dentro do execute:
if (!cooldowns.has(command.data.name)) {
  cooldowns.set(command.data.name, new Collection());
}

const now = Date.now();
const timestamps = cooldowns.get(command.data.name);
const cooldownAmount = (command.cooldown || 3) * 1000;

if (timestamps.has(interaction.user.id)) {
  const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;
  if (now < expirationTime) {
    const timeLeft = ((expirationTime - now) / 1000).toFixed(1);
    return interaction.reply({
      content: \`Aguarde \${timeLeft}s antes de usar /\${command.data.name} novamente.\`,
      ephemeral: true
    });
  }
}

timestamps.set(interaction.user.id, now);
setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);</code></pre>
      <h2>Definindo Cooldown por Comando</h2>
      <pre><code class="language-typescript">// Em qualquer arquivo de comando
export default {
  cooldown: 10, // 10 segundos de cooldown
  data: new SlashCommandBuilder()...
  async execute(interaction) { ... }
};</code></pre>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Implemente o sistema de cooldown no seu handler de interações.</li><li>Adicione a propriedade <code>cooldown</code> a pelo menos 3 comandos com valores diferentes.</li><li>Teste: use um comando, tente usá-lo novamente e veja a mensagem de cooldown.</li></ol></div>
    `,
    "5.5": `
      <h2>Sistema de Permissões</h2>
      <p>O Discord.js v14 oferece uma forma elegante de restringir comandos a usuários com permissões específicas usando <code>setDefaultMemberPermissions</code>.</p>
      <h2>Restringindo Comandos por Permissão</h2>
      <pre><code class="language-typescript">import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Bane um usuário do servidor.')
    .addUserOption(option =>
      option.setName('usuario').setDescription('Usuário a banir').setRequired(true))
    .addStringOption(option =>
      option.setName('motivo').setDescription('Motivo do banimento'))
    // Apenas membros com a permissão BanMembers podem ver e usar este comando
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
  
  async execute(interaction) {
    const user = interaction.options.getUser('usuario');
    const reason = interaction.options.getString('motivo') || 'Sem motivo';
    
    const member = await interaction.guild.members.fetch(user.id);
    if (!member.bannable) {
      return interaction.reply({ content: 'Não posso banir este usuário.', ephemeral: true });
    }
    
    await member.ban({ reason });
    await interaction.reply(\`\${user.tag} foi banido. Motivo: \${reason}\`);
  }
};</code></pre>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Implemente os comandos <code>/ban</code> e <code>/kick</code> com as permissões corretas.</li><li>Crie um comando <code>/limpar</code> que deleta mensagens, restrito a <code>ManageMessages</code>.</li><li>Teste com um usuário sem permissão para verificar que o comando não aparece para ele.</li></ol></div>
    `,
    "6.1": `
      <h2>Tratamento de Erros com try/catch</h2>
      <p>O bloco <code>try...catch</code> é o mecanismo fundamental para lidar com erros em JavaScript/TypeScript. Sem ele, um erro não tratado pode crashar o bot inteiro.</p>
      <h2>Implementação no Handler de Comandos</h2>
      <pre><code class="language-typescript">// src/events/interactionCreate.ts
try {
  await command.execute(interaction);
} catch (error) {
  console.error(\`Erro no comando \${interaction.commandName}:\`, error);
  
  const errorMessage = { content: 'Ocorreu um erro ao executar este comando!', ephemeral: true };
  
  if (interaction.replied || interaction.deferred) {
    await interaction.followUp(errorMessage);
  } else {
    await interaction.reply(errorMessage);
  }
}</code></pre>
      <h2>Tratamento de Erros Específicos da API</h2>
      <pre><code class="language-typescript">try {
  await member.ban({ reason });
} catch (error) {
  if (error.code === 50013) {
    // Missing Permissions
    await interaction.reply({ content: 'Sem permissão para banir este usuário.', ephemeral: true });
  } else if (error.code === 10007) {
    // Unknown Member
    await interaction.reply({ content: 'Usuário não encontrado no servidor.', ephemeral: true });
  } else {
    throw error; // Re-lança erros desconhecidos para o handler global
  }
}</code></pre>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Adicione try/catch ao seu handler de interações.</li><li>Crie um comando <code>/force-error</code> que lança um erro intencional para testar o handler.</li><li>Adicione tratamento específico para o erro 50013 nos seus comandos de moderação.</li></ol></div>
    `,
    "6.2": `
      <h2>Logging Profissional com Winston</h2>
      <p>O Winston é uma biblioteca de logging flexível que permite registrar mensagens em diferentes níveis de severidade e enviá-las para múltiplos destinos (console, arquivo, etc.).</p>
      <h2>Configurando o Winston</h2>
      <pre><code class="language-bash">npm install winston</code></pre>
      <pre><code class="language-typescript">// src/utils/logger.ts
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(({ level, message, timestamp }) => {
      return \`\${timestamp} [\${level}]: \${message}\`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

export default logger;</code></pre>
      <h2>Usando o Logger</h2>
      <pre><code class="language-typescript">import logger from '../utils/logger';

// Substitua console.log por:
logger.info('Bot online!');
logger.warn('Aviso importante');
logger.error('Erro crítico:', error);</code></pre>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Instale o Winston e crie o utilitário de logger.</li><li>Substitua todos os <code>console.log</code> do projeto pelo logger.</li><li>Verifique os arquivos de log gerados na pasta <code>logs/</code>.</li></ol></div>
    `,
    "6.3": `
      <h2>Erros Comuns e Como Evitá-los</h2>
      <p>Conhecer os erros mais comuns antecipadamente pode poupar horas de depuração. Veja os principais e suas soluções:</p>
      <table>
        <thead><tr><th>Erro</th><th>Causa</th><th>Solução</th></tr></thead>
        <tbody>
          <tr><td>Cannot read properties of undefined</td><td>Acessar propriedade de objeto null/undefined</td><td>Use optional chaining <code>?.)</code> ou verifique antes</td></tr>
          <tr><td>Missing Permissions (50013)</td><td>Bot sem permissão para executar ação</td><td>Verifique permissões do bot e hierarquia de cargos</td></tr>
          <tr><td>Interaction already replied</td><td>Chamar reply() duas vezes</td><td>Use <code>followUp()</code> ou <code>editReply()</code> após a primeira resposta</td></tr>
          <tr><td>Unknown Interaction (timeout 3s)</td><td>Não responder em 3 segundos</td><td>Use <code>deferReply()</code> no início de comandos lentos</td></tr>
          <tr><td>Token vazado</td><td>.env no Git</td><td>Adicione .env ao .gitignore e resete o token</td></tr>
        </tbody>
      </table>
      <h2>Prevenindo o Timeout de 3 Segundos</h2>
      <pre><code class="language-typescript">async execute(interaction) {
  // Primeira linha para comandos lentos
  await interaction.deferReply();
  
  // Operação demorada (API externa, banco de dados, etc.)
  const data = await fetchFromExternalAPI();
  
  // Edita a resposta com o resultado
  await interaction.editReply(\`Resultado: \${data}\`);
}</code></pre>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Revise seus comandos e adicione <code>deferReply()</code> aos que fazem operações lentas.</li><li>Verifique seu <code>.gitignore</code> para garantir que <code>.env</code> está listado.</li><li>Adicione optional chaining (<code>?.</code>) onde necessário para prevenir erros de null.</li></ol></div>
    `,
    "6.4": `
      <h2>Deploy e Variáveis de Ambiente</h2>
      <p>Para que seu bot fique online 24/7, você precisa hospedá-lo em um servidor na nuvem. Plataformas como Railway e Render são ideais para bots de Discord.</p>
      <h2>Preparando para o Deploy</h2>
      <pre><code class="language-json">// package.json - Scripts essenciais
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js"
  }
}</code></pre>
      <h2>Processo de Deploy no Railway</h2>
      <ol style="color:var(--text-secondary);font-size:15px;margin-left:20px;">
        <li style="margin-bottom:8px;">Envie seu código para o GitHub (sem o <code>.env</code>!)</li>
        <li style="margin-bottom:8px;">Crie uma conta em <a href="https://railway.app" target="_blank">railway.app</a></li>
        <li style="margin-bottom:8px;">Crie um novo projeto e conecte ao repositório do GitHub</li>
        <li style="margin-bottom:8px;">Vá para a aba "Variables" e adicione todas as variáveis do seu <code>.env</code></li>
        <li style="margin-bottom:8px;">O Railway fará o build e deploy automaticamente</li>
      </ol>
      <h2>Variáveis de Ambiente em Produção</h2>
      <pre><code class="language-bash"># No painel do Railway/Render, adicione:
DISCORD_TOKEN=seu_token_real
CLIENT_ID=seu_client_id
GUILD_ID=id_do_servidor  # Opcional em produção</code></pre>
      <div class="callout callout-info">
        <span class="callout-icon">💡</span>
        <div><strong>Deploy Contínuo:</strong> Após configurar, qualquer <code>git push</code> para a branch main atualiza automaticamente o bot em produção.</div>
      </div>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Crie um repositório no GitHub e envie seu código.</li><li>Faça o deploy em Railway ou Render.</li><li>Configure as variáveis de ambiente na plataforma.</li><li>Verifique nos logs da plataforma que o bot ficou online.</li></ol></div>
    `,
    "7.1": `
      <h2>Por que Usar Banco de Dados?</h2>
      <p>Sem um banco de dados, seu bot perde toda a memória ao reiniciar. Sistemas como economia, níveis, configurações de servidor e histórico de moderação exigem persistência de dados.</p>
      <h2>Casos de Uso</h2>
      <table>
        <thead><tr><th>Funcionalidade</th><th>Dados Necessários</th></tr></thead>
        <tbody>
          <tr><td>Sistema de Níveis</td><td>XP e nível de cada usuário por servidor</td></tr>
          <tr><td>Economia</td><td>Saldo, inventário, transações</td></tr>
          <tr><td>Configurações</td><td>Prefixo, canal de logs, cargo de membro</td></tr>
          <tr><td>Moderação</td><td>Histórico de advertências, bans</td></tr>
        </tbody>
      </table>
      <h2>Opções de Banco de Dados</h2>
      <table>
        <thead><tr><th>Opção</th><th>Tipo</th><th>Ideal Para</th></tr></thead>
        <tbody>
          <tr><td>Arquivo JSON</td><td>Arquivo</td><td>Projetos pessoais pequenos</td></tr>
          <tr><td>SQLite</td><td>SQL Local</td><td>A maioria dos bots (recomendado)</td></tr>
          <tr><td>MongoDB</td><td>NoSQL Nuvem</td><td>Bots de grande escala</td></tr>
        </tbody>
      </table>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Pense nas funcionalidades do seu bot e liste quais dados precisam ser persistidos.</li><li>Decida qual abordagem de banco de dados faz mais sentido para o seu projeto.</li></ol></div>
    `,
    "7.2": `
      <h2>Persistência com JSON</h2>
      <p>A abordagem mais simples: usar o módulo <code>fs</code> do Node.js para ler e escrever arquivos JSON. Ideal para aprendizado e projetos muito pequenos.</p>
      <h2>Implementação</h2>
      <pre><code class="language-typescript">import fs from 'fs/promises';
import path from 'path';

const dbPath = path.join(__dirname, '../../db.json');

// Ler dados
async function readDB() {
  const data = await fs.readFile(dbPath, 'utf8');
  return JSON.parse(data);
}

// Escrever dados
async function writeDB(data: object) {
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
}

// Exemplo de uso em um comando
async execute(interaction) {
  const db = await readDB();
  db.count = (db.count || 0) + 1;
  await writeDB(db);
  await interaction.reply(\`Contador: \${db.count}\`);
}</code></pre>
      <div class="callout callout-warning"><span class="callout-icon">⚠️</span><div><strong>Limitações:</strong> Não use em produção com muitos usuários. Problemas de concorrência podem corromper os dados.</div></div>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Crie um arquivo <code>db.json</code> e implemente as funções <code>readDB</code> e <code>writeDB</code>.</li><li>Crie um comando <code>/contar</code> que incrementa um contador e o persiste no JSON.</li></ol></div>
    `,
    "7.3": `
      <h2>SQLite com better-sqlite3</h2>
      <p>SQLite é um banco de dados SQL que roda a partir de um único arquivo. É a escolha ideal para a maioria dos bots: rápido, confiável e sem necessidade de servidor externo.</p>
      <h2>Configuração</h2>
      <pre><code class="language-bash">npm install better-sqlite3
npm install -D @types/better-sqlite3</code></pre>
      <pre><code class="language-typescript">// src/utils/database.ts
import Database from 'better-sqlite3';
import path from 'path';

const db = new Database(path.join(__dirname, '../../data.db'));
db.pragma('journal_mode = WAL');

db.exec(\`
  CREATE TABLE IF NOT EXISTS user_xp (
    user_id TEXT NOT NULL,
    guild_id TEXT NOT NULL,
    xp INTEGER DEFAULT 0,
    level INTEGER DEFAULT 1,
    PRIMARY KEY (user_id, guild_id)
  );
\`);

export default db;</code></pre>
      <h2>Operações CRUD</h2>
      <pre><code class="language-typescript">// INSERT / UPDATE (Upsert)
const stmt = db.prepare(\`
  INSERT INTO user_xp (user_id, guild_id, xp) VALUES (?, ?, ?)
  ON CONFLICT(user_id, guild_id) DO UPDATE SET xp = xp + excluded.xp
\`);
stmt.run(userId, guildId, xpToAdd);

// SELECT
const data = db.prepare('SELECT * FROM user_xp WHERE user_id = ? AND guild_id = ?').get(userId, guildId);

// Transação (para operações atômicas)
const transfer = db.transaction((from, to, amount) => {
  db.prepare('UPDATE economy SET balance = balance - ? WHERE user_id = ?').run(amount, from);
  db.prepare('UPDATE economy SET balance = balance + ? WHERE user_id = ?').run(amount, to);
});
transfer(senderId, recipientId, 100);</code></pre>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Configure o SQLite no seu projeto.</li><li>Crie tabelas para configurações de servidor e XP de usuários.</li><li>Implemente os comandos <code>/setprefix</code> e <code>/level</code> usando SQLite.</li></ol></div>
    `,
    "7.4": `
      <h2>MongoDB com Mongoose</h2>
      <p>MongoDB é um banco de dados NoSQL orientado a documentos. Com o Mongoose, você define schemas e models para interagir com o banco de forma orientada a objetos.</p>
      <h2>Configuração</h2>
      <pre><code class="language-bash">npm install mongoose</code></pre>
      <pre><code class="language-typescript">// src/utils/database.ts
import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI!);
  console.log('MongoDB conectado!');
};</code></pre>
      <h2>Criando um Schema e Model</h2>
      <pre><code class="language-typescript">// src/models/GuildConfig.ts
import { Schema, model } from 'mongoose';

const guildConfigSchema = new Schema({
  guildId: { type: String, required: true, unique: true },
  prefix: { type: String, default: '!' },
  logChannel: { type: String }
});

export default model('GuildConfig', guildConfigSchema);</code></pre>
      <h2>Operações com Mongoose</h2>
      <pre><code class="language-typescript">import GuildConfig from '../models/GuildConfig';

// Criar ou atualizar (upsert)
await GuildConfig.findOneAndUpdate(
  { guildId },
  { prefix: newPrefix },
  { upsert: true, new: true }
);

// Buscar
const config = await GuildConfig.findOne({ guildId });
const prefix = config?.prefix || '!';</code></pre>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Crie uma conta no MongoDB Atlas e obtenha a string de conexão.</li><li>Configure o Mongoose no projeto.</li><li>Crie models para GuildConfig e UserXP.</li><li>Refatore seus comandos para usar o Mongoose.</li></ol></div>
    `,
    "7.5": `
      <h2>Comparando as Abordagens</h2>
      <p>Cada abordagem tem seus pontos fortes. A escolha certa depende do tamanho e complexidade do seu bot.</p>
      <table>
        <thead><tr><th>Característica</th><th>JSON</th><th>SQLite</th><th>MongoDB</th></tr></thead>
        <tbody>
          <tr><td>Configuração</td><td>Nenhuma</td><td>Simples</td><td>Requer conta externa</td></tr>
          <tr><td>Performance</td><td>Lenta</td><td>Muito rápida</td><td>Rápida (depende da rede)</td></tr>
          <tr><td>Concorrência</td><td>Ruim</td><td>Boa (WAL)</td><td>Excelente</td></tr>
          <tr><td>Escalabilidade</td><td>Nenhuma</td><td>Limitada</td><td>Ilimitada</td></tr>
          <tr><td>Recomendado Para</td><td>Aprendizado</td><td>95% dos bots</td><td>Bots massivos</td></tr>
        </tbody>
      </table>
      <h2>Recomendação</h2>
      <div class="callout callout-success"><span class="callout-icon">✅</span><div><strong>Para a maioria dos bots:</strong> Use <strong>SQLite</strong>. É rápido, confiável, não precisa de serviço externo e suporta a carga de praticamente qualquer bot de Discord.</div></div>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Decida qual banco de dados usar no seu projeto final e justifique a escolha.</li><li>Certifique-se de que toda a lógica de banco de dados está centralizada em utilitários reutilizáveis.</li></ol></div>
    `,
    "8.1": `
      <h2>Sistema de Economia</h2>
      <p>Sistemas de economia são uma das funcionalidades mais engajadoras em bots de Discord. Usuários ganham moedas, as gastam em lojas e competem no ranking.</p>
      <h2>Estrutura do Banco de Dados</h2>
      <pre><code class="language-sql">CREATE TABLE IF NOT EXISTS economy (
  user_id TEXT NOT NULL,
  guild_id TEXT NOT NULL,
  balance INTEGER DEFAULT 0,
  PRIMARY KEY (user_id, guild_id)
);</code></pre>
      <h2>Comando /trabalhar</h2>
      <pre><code class="language-typescript">export default {
  cooldown: 3600, // 1 hora
  data: new SlashCommandBuilder().setName('trabalhar').setDescription('Ganhe moedas!'),
  async execute(interaction) {
    const earnings = Math.floor(Math.random() * 200) + 50;
    
    db.prepare(\`
      INSERT INTO economy (user_id, guild_id, balance) VALUES (?, ?, ?)
      ON CONFLICT(user_id, guild_id) DO UPDATE SET balance = balance + excluded.balance
    \`).run(interaction.user.id, interaction.guildId, earnings);
    
    await interaction.reply(\`Você trabalhou e ganhou **\${earnings}** moedas! 💰\`);
  }
};</code></pre>
      <h2>Comando /pagar (com Transação)</h2>
      <pre><code class="language-typescript">const transfer = db.transaction((senderId, recipientId, guildId, amount) => {
  const senderData = db.prepare('SELECT balance FROM economy WHERE user_id = ? AND guild_id = ?').get(senderId, guildId);
  if (!senderData || senderData.balance < amount) throw new Error('INSUFFICIENT_FUNDS');
  
  const updateStmt = db.prepare(\`
    INSERT INTO economy (user_id, guild_id, balance) VALUES (?, ?, ?)
    ON CONFLICT(user_id, guild_id) DO UPDATE SET balance = balance + excluded.balance
  \`);
  updateStmt.run(senderId, guildId, -amount);
  updateStmt.run(recipientId, guildId, amount);
});</code></pre>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Implemente os comandos <code>/saldo</code>, <code>/trabalhar</code> e <code>/pagar</code>.</li><li>Crie um comando <code>/ranking</code> que mostra os 10 mais ricos do servidor.</li><li>Adicione um comando <code>/daily</code> com cooldown de 24 horas.</li></ol></div>
    `,
    "8.2": `
      <h2>Sistema de Níveis e XP</h2>
      <p>Usuários ganham XP por enviar mensagens e sobem de nível ao acumular XP suficiente. É um sistema clássico de gamificação.</p>
      <h2>Ganho de XP no messageCreate</h2>
      <pre><code class="language-typescript">const xpCooldowns = new Collection<string, number>();
const xpToNextLevel = (level: number) => 5 * (level ** 2) + 50 * level + 100;

client.on(Events.MessageCreate, async (message) => {
  if (message.author.bot || !message.inGuild()) return;
  
  const key = \`\${message.guildId}-\${message.author.id}\`;
  if (xpCooldowns.has(key) && Date.now() - xpCooldowns.get(key) < 60000) return;
  
  const xpToAdd = Math.floor(Math.random() * 11) + 15;
  
  db.prepare(\`
    INSERT INTO user_xp (user_id, guild_id, xp) VALUES (?, ?, ?)
    ON CONFLICT(user_id, guild_id) DO UPDATE SET xp = xp + excluded.xp
  \`).run(message.author.id, message.guildId, xpToAdd);
  
  const userData = db.prepare('SELECT * FROM user_xp WHERE user_id = ? AND guild_id = ?').get(message.author.id, message.guildId);
  
  if (userData.xp >= xpToNextLevel(userData.level)) {
    db.prepare('UPDATE user_xp SET level = level + 1, xp = 0 WHERE user_id = ? AND guild_id = ?').run(message.author.id, message.guildId);
    message.channel.send(\`🎉 \${message.author} subiu para o **nível \${userData.level + 1}**!\`);
  }
  
  xpCooldowns.set(key, Date.now());
});</code></pre>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Implemente o sistema de ganho de XP no evento <code>messageCreate</code>.</li><li>Crie os comandos <code>/level</code> e <code>/leaderboard</code>.</li><li>Adicione uma barra de progresso visual no embed do <code>/level</code>.</li></ol></div>
    `,
    "8.3": `
      <h2>Moderação Automática</h2>
      <p>O Auto-Mod pode filtrar palavras proibidas, detectar spam e punir automaticamente usuários que violam as regras do servidor.</p>
      <h2>Filtro de Palavras</h
2>
      <pre><code class="language-typescript">client.on(Events.MessageCreate, async (message) => {
  if (message.author.bot || !message.inGuild()) return;
  if (message.member?.permissions.has('ManageMessages')) return;
  
  const blockedWords = db.prepare('SELECT word FROM blocked_words WHERE guild_id = ?')
    .all(message.guildId).map(r => r.word);
  
  const hasBlockedWord = blockedWords.some(word => message.content.toLowerCase().includes(word));
  
  if (hasBlockedWord) {
    await message.delete();
    const warn = await message.channel.send(\`\${message.author}, sua mensagem foi removida.\`);
    setTimeout(() => warn.delete(), 5000);
  }
});</code></pre>
      <h2>Anti-Spam</h2>
      <pre><code class="language-typescript">const antiSpam = new Collection<string, number[]>();

// No messageCreate:
const timestamps = antiSpam.get(userId) || [];
timestamps.push(Date.now());
antiSpam.set(userId, timestamps.filter(ts => Date.now() - ts < 5000));

if (antiSpam.get(userId).length > 5) {
  await message.member.timeout(60000, 'Spam detectado');
  message.channel.send(\`\${message.author} foi silenciado por spam.\`);
  antiSpam.delete(userId);
}</code></pre>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Implemente o filtro de palavras com comandos para gerenciar a lista.</li><li>Adicione o sistema anti-spam com timeout automático.</li><li>Crie um sistema de advertências que bane automaticamente após 3 warns.</li></ol></div>
    `,
    "8.4": `
      <h2>Integração com APIs Externas</h2>
      <p>Com <code>axios</code>, seu bot pode buscar dados de qualquer API da internet, transformando-o em uma ponte entre o Discord e o mundo.</p>
      <h2>Instalação</h2>
      <pre><code class="language-bash">npm install axios</code></pre>
      <h2>Exemplo: Foto de Gato Aleatório</h2>
      <pre><code class="language-typescript">import axios from 'axios';

export default {
  data: new SlashCommandBuilder().setName('gato').setDescription('Foto aleatória de gato!'),
  async execute(interaction) {
    await interaction.deferReply();
    
    const response = await axios.get('https://api.thecatapi.com/v1/images/search');
    const catUrl = response.data[0].url;
    
    const embed = new EmbedBuilder()
      .setTitle('Miau! 🐱')
      .setImage(catUrl)
      .setColor('Random');
    
    await interaction.editReply({ embeds: [embed] });
  }
};</code></pre>
      <h2>Exemplo: Clima com Chave de API</h2>
      <pre><code class="language-typescript">// .env: OPENWEATHER_API_KEY=sua_chave

async execute(interaction) {
  await interaction.deferReply();
  const city = interaction.options.getString('cidade');
  const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${process.env.OPENWEATHER_API_KEY}&units=metric&lang=pt_br\`;
  
  try {
    const { data } = await axios.get(url);
    const embed = new EmbedBuilder()
      .setTitle(\`Clima em \${data.name}\`)
      .setDescription(data.weather[0].description)
      .addFields(
        { name: 'Temperatura', value: \`\${data.main.temp}°C\`, inline: true },
        { name: 'Umidade', value: \`\${data.main.humidity}%\`, inline: true }
      );
    await interaction.editReply({ embeds: [embed] });
  } catch (e) {
    if (e.response?.status === 404) await interaction.editReply('Cidade não encontrada.');
    else throw e;
  }
}</code></pre>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Implemente o comando <code>/gato</code> usando a TheCatAPI.</li><li>Crie uma conta no OpenWeatherMap e implemente o comando <code>/clima</code>.</li><li>Explore outra API de sua escolha e crie um comando para ela.</li></ol></div>
    `,
    "9.1": `
      <h2>Planejando o Bot Completo</h2>
      <p>Um bom planejamento é 90% do trabalho. Vamos projetar um bot chamado "Server-Utils" com moderação, utilidades e sistema de níveis.</p>
      <h2>Funcionalidades Planejadas</h2>
      <table>
        <thead><tr><th>Categoria</th><th>Comando</th><th>Permissão</th></tr></thead>
        <tbody>
          <tr><td>Moderação</td><td>/ban, /kick, /clear</td><td>BanMembers, KickMembers, ManageMessages</td></tr>
          <tr><td>Utilidades</td><td>/userinfo, /serverinfo</td><td>Nenhuma</td></tr>
          <tr><td>Níveis</td><td>/level, /leaderboard</td><td>Nenhuma</td></tr>
          <tr><td>Config</td><td>/setlogchannel</td><td>ManageGuild</td></tr>
        </tbody>
      </table>
      <h2>Estrutura do Projeto</h2>
      <pre><code class="language-bash">src/
├── commands/
│   ├── moderacao/ (ban, kick, clear)
│   ├── utilidades/ (userinfo, serverinfo)
│   ├── niveis/ (level, leaderboard)
│   └── config/ (setlogchannel)
├── events/
│   ├── ready.ts
│   ├── interactionCreate.ts
│   └── xpGain.ts
├── utils/
│   ├── logger.ts
│   ├── database.ts
│   └── auditLogger.ts
└── index.ts</code></pre>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Crie a estrutura de pastas do projeto "Server-Utils".</li><li>Configure o package.json, tsconfig.json e .gitignore.</li><li>Inicialize o banco de dados com as tabelas necessárias.</li></ol></div>
    `,
    "9.2": `
      <h2>Construindo o Bot (Projeto Guiado)</h2>
      <p>Com o plano em mãos, vamos construir o bot passo a passo, integrando todos os sistemas aprendidos no curso.</p>
      <h2>Utilitário de Audit Log</h2>
      <pre><code class="language-typescript">// src/utils/auditLogger.ts
export async function logAction(client, guildId, title, fields) {
  const config = db.prepare('SELECT log_channel_id FROM server_configs WHERE guild_id = ?').get(guildId);
  if (!config?.log_channel_id) return;
  
  const channel = await client.channels.fetch(config.log_channel_id);
  const embed = new EmbedBuilder()
    .setTitle(title)
    .addFields(fields)
    .setColor('Blue')
    .setTimestamp();
  
  await channel.send({ embeds: [embed] });
}</code></pre>
      <h2>Comando /kick com Logging</h2>
      <pre><code class="language-typescript">async execute(interaction) {
  const user = interaction.options.getUser('usuario');
  const reason = interaction.options.getString('motivo') || 'Sem motivo';
  const member = await interaction.guild.members.fetch(user.id);
  
  if (!member.kickable) return interaction.reply({ content: 'Não posso expulsar este membro.', ephemeral: true });
  
  await member.kick(reason);
  await interaction.reply({ content: \`\${user.tag} foi expulso.\`, ephemeral: true });
  
  await logAction(interaction.client, interaction.guildId, 'Membro Expulso', [
    { name: 'Membro', value: user.tag },
    { name: 'Moderador', value: interaction.user.tag },
    { name: 'Motivo', value: reason }
  ]);
}</code></pre>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Implemente todos os comandos planejados.</li><li>Integre o auditLogger a todos os comandos de moderação.</li><li>Teste cada funcionalidade exaustivamente.</li></ol></div>
    `,
    "9.3": `
      <h2>Deploy no Railway / Render</h2>
      <p>O passo final: colocar seu bot no ar para operar 24/7 em um servidor na nuvem.</p>
      <h2>Checklist Pré-Deploy</h2>
      <ul>
        <li>✅ Scripts <code>build</code> e <code>start</code> no package.json</li>
        <li>✅ Arquivo <code>.env</code> no <code>.gitignore</code></li>
        <li>✅ Código enviado para o GitHub (sem dados sensíveis)</li>
        <li>✅ Banco de dados configurado para produção</li>
      </ul>
      <h2>Deploy no Railway</h2>
      <ol style="color:var(--text-secondary);font-size:15px;margin-left:20px;">
        <li style="margin-bottom:8px;">Acesse <a href="https://railway.app" target="_blank">railway.app</a> e conecte com GitHub</li>
        <li style="margin-bottom:8px;">Crie novo projeto > "Deploy from GitHub repo"</li>
        <li style="margin-bottom:8px;">Selecione o repositório do bot</li>
        <li style="margin-bottom:8px;">Vá em "Variables" e adicione todas as variáveis do .env</li>
        <li style="margin-bottom:8px;">Para SQLite: adicione um Volume com mount path <code>/data</code></li>
        <li style="margin-bottom:8px;">Acompanhe os logs e confirme que o bot ficou online</li>
      </ol>
      <h2>Banco de Dados em Produção</h2>
      <pre><code class="language-typescript">// Detecta ambiente de produção
const dbPath = process.env.NODE_ENV === 'production' 
  ? '/data/data.db'  // Volume persistente no Railway
  : 'data.db';       // Local durante desenvolvimento</code></pre>
      <div class="challenge-box"><div class="challenge-header"><span class="challenge-icon">🎯</span><span class="challenge-title">Desafio Prático</span></div><ol><li>Faça o deploy do seu bot "Server-Utils" em Railway ou Render.</li><li>Configure todas as variáveis de ambiente na plataforma.</li><li>Verifique nos logs que o bot está online e funcionando.</li></ol></div>
    `,
    "9.4": `
      <h2>Parabéns! Você Chegou ao Final!</h2>
      <p>Se você chegou até aqui e construiu o bot "Server-Utils", você percorreu uma jornada incrível. Você aprendeu fundamentos, arquitetura profissional, banco de dados, sistemas avançados e deploy.</p>
      <h2>O que Você Conquistou</h2>
      <ul>
        <li>✅ Node.js e TypeScript do zero</li>
        <li>✅ Discord.js e a API do Discord</li>
        <li>✅ Slash Commands, Embeds, Botões, Modals</li>
        <li>✅ Arquitetura profissional com handlers</li>
        <li>✅ Cooldowns, permissões, tratamento de erros</li>
        <li>✅ Banco de dados (JSON, SQLite, MongoDB)</li>
        <li>✅ Sistemas de economia, níveis e moderação</li>
        <li>✅ Integração com APIs externas</li>
        <li>✅ Deploy em produção 24/7</li>
      </ul>
      <h2>Próximos Passos</h2>
      <table>
        <thead><tr><th>Tópico</th><th>Descrição</th></tr></thead>
        <tbody>
          <tr><td>Sharding</td><td>Escalar o bot para mais de 2500 servidores</td></tr>
          <tr><td>Dashboard Web</td><td>Interface web para configurar o bot</td></tr>
          <tr><td>Design Patterns</td><td>Padrões de projeto para código mais limpo</td></tr>
          <tr><td>Open Source</td><td>Contribuir para projetos da comunidade</td></tr>
          <tr><td>Novas APIs</td><td>Integrar com mais serviços externos</td></tr>
        </tbody>
      </table>
      <div class="callout callout-success"><span class="callout-icon">🎉</span><div><strong>Continue construindo!</strong> A melhor forma de aprender é fazendo. Crie novos bots, experimente novas funcionalidades e compartilhe com a comunidade. Você está pronto!</div></div>
    `
  };

  return contentMap[id] || `<p>Conteúdo desta aula em construção. Consulte os arquivos de conteúdo do curso para mais detalhes.</p>`;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ============================================
// ESTADO DA APLICAÇÃO
// ============================================
let currentLessonId = null;
let completedLessons = new Set(JSON.parse(localStorage.getItem('completedLessons') || '[]'));
let openModules = new Set(JSON.parse(localStorage.getItem('openModules') || '[1]'));

// ============================================
// FUNÇÕES DE RENDERIZAÇÃO
// ============================================
function renderSidebar() {
  const nav = document.getElementById('sidebar-nav');
  const totalLessons = courseData.modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedCount = completedLessons.size;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  document.getElementById('progress-fill').style.width = `${progressPercent}%`;
  document.getElementById('progress-text').textContent = `${completedCount}/${totalLessons} aulas`;

  nav.innerHTML = courseData.modules.map(module => {
    const isOpen = openModules.has(module.id);
    const completedInModule = module.lessons.filter(l => completedLessons.has(l.id)).length;
    const allCompleted = completedInModule === module.lessons.length;

    return `
      <div class="module-group ${isOpen ? 'open' : ''}" data-module="${module.id}">
        <div class="module-header" onclick="toggleModule(${module.id})">
          <div class="module-header-left">
            <div class="module-badge ${allCompleted ? 'completed' : ''}">${allCompleted ? '✓' : module.id}</div>
            <span class="module-title">${module.icon} ${module.title}</span>
          </div>
          <span class="module-arrow">▶</span>
        </div>
        <div class="module-lessons">
          ${module.lessons.map(lesson => {
            const isCompleted = completedLessons.has(lesson.id);
            const isActive = currentLessonId === lesson.id;
            return `
              <a class="lesson-link ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" 
                 onclick="loadLesson('${lesson.id}')" href="#">
                <span class="lesson-dot"></span>
                ${lesson.id}. ${lesson.title}
              </a>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function toggleModule(moduleId) {
  if (openModules.has(moduleId)) {
    openModules.delete(moduleId);
  } else {
    openModules.add(moduleId);
  }
  localStorage.setItem('openModules', JSON.stringify([...openModules]));
  renderSidebar();
}

function loadLesson(lessonId) {
  currentLessonId = lessonId;
  const lesson = lessonContent[lessonId];

  if (!lesson) {
    showWelcome();
    return;
  }

  const mainArea = document.getElementById('lesson-area');
  const isCompleted = completedLessons.has(lessonId);

  // Encontra aulas anterior e próxima
  const allLessons = courseData.modules.flatMap(m => m.lessons);
  const currentIndex = allLessons.findIndex(l => l.id === lessonId);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  mainArea.innerHTML = `
    <div class="lesson-header">
      <div class="lesson-module-tag">📚 ${lesson.module}</div>
      <h1 class="lesson-title">${lesson.title}</h1>
      <div class="lesson-meta">
        <span class="lesson-meta-item">⏱️ ${lesson.duration}</span>
        <span class="lesson-meta-item">📖 Aula ${lessonId}</span>
        ${isCompleted ? '<span class="lesson-meta-item" style="color:var(--accent-green)">✅ Concluída</span>' : ''}
      </div>
    </div>
    <div class="lesson-content">
      ${lesson.content}
    </div>
    <div class="lesson-navigation">
      ${prevLesson ? `
        <a class="nav-btn" onclick="loadLesson('${prevLesson.id}')" href="#">
          <span class="nav-btn-icon">←</span>
          <div>
            <div class="nav-btn-text">Aula Anterior</div>
            <div class="nav-btn-title">${prevLesson.id}. ${prevLesson.title}</div>
          </div>
        </a>
      ` : '<div></div>'}
      
      <button class="complete-btn ${isCompleted ? 'done' : ''}" onclick="toggleComplete('${lessonId}')">
        ${isCompleted ? '✅ Concluída' : '✓ Marcar como Concluída'}
      </button>
      
      ${nextLesson ? `
        <a class="nav-btn nav-btn-right" onclick="loadLesson('${nextLesson.id}')" href="#">
          <div>
            <div class="nav-btn-text">Próxima Aula</div>
            <div class="nav-btn-title">${nextLesson.id}. ${nextLesson.title}</div>
          </div>
          <span class="nav-btn-icon">→</span>
        </a>
      ` : '<div></div>'}
    </div>
  `;

  // Atualiza breadcrumb
  document.getElementById('breadcrumb-current').textContent = `Aula ${lessonId}: ${lesson.title}`;

  // Aplica syntax highlighting
  highlightCode();

  // Adiciona botões de copiar
  addCopyButtons();

  // Scroll para o topo
  mainArea.scrollTop = 0;
  window.scrollTo(0, 0);

  // Atualiza sidebar
  renderSidebar();

  // Fecha sidebar no mobile
  if (window.innerWidth <= 900) {
    closeSidebar();
  }
}

function showWelcome() {
  const mainArea = document.getElementById('lesson-area');
  const totalLessons = courseData.modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const totalHours = Math.round(courseData.modules.reduce((acc, m) => 
    acc + m.lessons.reduce((a, l) => a + parseInt(l.duration), 0), 0) / 60);

  mainArea.innerHTML = `
    <div class="welcome-screen">
      <div class="welcome-icon">🤖</div>
      <h1>Discord Bot com Discord.js e TypeScript</h1>
      <p>Bem-vindo ao curso mais completo sobre desenvolvimento de bots para Discord! Aprenda do zero ao nível profissional, com exemplos reais, projetos práticos e uma arquitetura que escala.</p>
      
      <div class="welcome-stats">
        <div class="stat-card">
          <span class="stat-number">${courseData.modules.length}</span>
          <span class="stat-label">Módulos</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">${totalLessons}</span>
          <span class="stat-label">Aulas</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">${totalHours}h+</span>
          <span class="stat-label">Conteúdo</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">${completedLessons.size}</span>
          <span class="stat-label">Concluídas</span>
        </div>
      </div>

      <div class="welcome-modules">
        ${courseData.modules.map(m => `
          <div class="module-card" onclick="loadLesson('${m.lessons[0].id}')">
            <div class="module-card-icon">${m.icon}</div>
            <div class="module-card-title">Módulo ${m.id}: ${m.title}</div>
            <div class="module-card-count">${m.lessons.length} aulas</div>
          </div>
        `).join('')}
      </div>

      <button class="btn btn-primary" onclick="loadLesson('1.1')" style="font-size:15px;padding:12px 28px;">
        🚀 Começar o Curso
      </button>
    </div>
  `;

  document.getElementById('breadcrumb-current').textContent = 'Início';
  currentLessonId = null;
  renderSidebar();
}

function toggleComplete(lessonId) {
  if (completedLessons.has(lessonId)) {
    completedLessons.delete(lessonId);
  } else {
    completedLessons.add(lessonId);
  }
  localStorage.setItem('completedLessons', JSON.stringify([...completedLessons]));
  loadLesson(lessonId);
}

// ============================================
// SYNTAX HIGHLIGHTING
// ============================================
function highlightCode() {
  document.querySelectorAll('pre code').forEach(block => {
    const parent = block.parentElement;
    const lang = getLang(block);

    // Cria wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';

    // Header
    const header = document.createElement('div');
    header.className = 'code-block-header';
    header.innerHTML = `
      <span class="code-lang" data-lang="${lang}">${lang}</span>
      <button class="copy-btn" onclick="copyCode(this)">
        <span>📋</span> Copiar
      </button>
    `;

    // Captura o código original ANTES de aplicar highlight
    const code = block.textContent;
    // Guarda o código puro em um atributo data-
    block.setAttribute('data-original-code', code);
    // Aplica highlight
    block.innerHTML = applyHighlight(code, lang);

    // Monta estrutura
    parent.parentNode.insertBefore(wrapper, parent);
    wrapper.appendChild(header);
    wrapper.appendChild(parent);
  });
}

function getLang(block) {
  const classes = block.className.split(' ');
  for (const cls of classes) {
    if (cls.startsWith('language-')) return cls.replace('language-', '');
  }
  return 'code';
}

function applyHighlight(code, lang) {
  if (lang === 'bash') return highlightBash(code);
  if (lang === 'json') return highlightJson(code);
  if (lang === 'sql') return highlightSql(code);
  return highlightTypescript(code);
}

function highlightTypescript(code) {
  const escaped = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return escaped
    // Strings (antes das keywords para não conflitar)
    .replace(/(["'`])(?:(?!\1)[^\\]|\\.)*?\1/g, '<span class="token-string">$&</span>')
    // Comentários de linha
    .replace(/(\/\/[^\n]*)/g, '<span class="token-comment">$1</span>')
    // Comentários de bloco
    .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="token-comment">$1</span>')
    // Keywords
    .replace(/\b(import|export|from|default|const|let|var|function|async|await|return|if|else|for|while|try|catch|finally|throw|new|class|extends|implements|interface|type|enum|namespace|declare|readonly|public|private|protected|static|abstract|override)\b/g, '<span class="token-keyword">$1</span>')
    // Tipos TypeScript
    .replace(/\b(string|number|boolean|void|null|undefined|any|never|unknown|object|Array|Promise|Collection)\b/g, '<span class="token-type">$1</span>')
    // Booleanos e null
    .replace(/\b(true|false|null|undefined)\b/g, '<span class="token-boolean">$1</span>')
    // Números
    .replace(/\b(\d+\.?\d*)\b/g, '<span class="token-number">$1</span>');
}

function highlightBash(code) {
  const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return escaped
    .replace(/(#[^\n]*)/g, '<span class="token-comment">$1</span>')
    .replace(/\b(npm|node|npx|git|mkdir|cd|ls|cat|echo|curl|tsc|tsx)\b/g, '<span class="token-keyword">$1</span>')
    .replace(/(["'])(?:(?!\1)[^\\]|\\.)*?\1/g, '<span class="token-string">$&</span>');
}

function highlightJson(code) {
  const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return escaped
    .replace(/"([^"]+)":/g, '<span class="token-property">"$1"</span>:')
    .replace(/: ("([^"]*)")/g, ': <span class="token-string">$1</span>')
    .replace(/: (\d+\.?\d*)/g, ': <span class="token-number">$1</span>')
    .replace(/: (true|false|null)/g, ': <span class="token-boolean">$1</span>');
}

function highlightSql(code) {
  const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return escaped
    .replace(/\b(SELECT|INSERT|UPDATE|DELETE|FROM|WHERE|CREATE|TABLE|IF|NOT|EXISTS|PRIMARY|KEY|TEXT|INTEGER|DEFAULT|AND|OR|ON|CONFLICT|DO|SET|VALUES|INTO|LIMIT|ORDER|BY|DESC|ASC|NULL)\b/gi, '<span class="token-keyword">$&</span>');
}

// ============================================
// BOTÃO DE COPIAR CÓDIGO
// ============================================
function copyCode(btn) {
  const wrapper = btn.closest('.code-block-wrapper');
  const codeElement = wrapper.querySelector('code');
  // Pega o código original armazenado no atributo data-
  const code = codeElement.getAttribute('data-original-code') || codeElement.textContent;

  navigator.clipboard.writeText(code).then(() => {
    btn.innerHTML = '<span>✅</span> Copiado!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = '<span>📋</span> Copiar';
      btn.classList.remove('copied');
    }, 2000);
  });
}

function addCopyButtons() {
  // Os botões já são adicionados pelo highlightCode()
}

// ============================================
// SIDEBAR MOBILE
// ============================================
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-overlay').classList.add('visible');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('visible');
}

// ============================================
// INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  showWelcome();

  // Abre o primeiro módulo por padrão
  if (!openModules.size) {
    openModules.add(1);
  }

  // Event listeners
  document.getElementById('hamburger-btn').addEventListener('click', openSidebar);
  document.getElementById('sidebar-overlay').addEventListener('click', closeSidebar);

  // Botão de início
  document.getElementById('start-btn').addEventListener('click', () => loadLesson('1.1'));
});
