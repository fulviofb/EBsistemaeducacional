# Roadmap — Eurípedes Barsanulfo · Sistema Educacional

> Documento vivo. Atualizado conforme decisões da equipe.
> Última revisão: Abril 2026

---

## ✅ Fase atual — MVP Guia do Educador (em produção)

- [x] Tela de abertura com 8 unidades regulares + 9 especiais
- [x] Ilustrações por unidade (estilo aquarela/cartoon)
- [x] Planejador de rotina com 24 momentos
- [x] Seletor de 4 aulas por unidade (D1)
- [x] Momentos diferenciadores com sugestões CEEE (D3)
- [x] Banco de 18 atividades vinculadas aos momentos
- [x] Gerador de plano de aula por aula (PDF/impressão)
- [x] Jornada da Semana com visão das 4 aulas
- [x] Logo institucional Eurípedes Barsanulfo
- [x] Sidebar responsiva (mobile + desktop)

---

## 🔵 Próximas etapas — Melhorias imediatas

### 1. Campos de Experiência — Detalhamento BNCC
- [ ] Expandir a aba "Campos de Exp." com o detalhamento completo de cada habilidade do BNCC
- [ ] Para cada código (ex: EI02EO01), exibir: descrição oficial, objetivos de aprendizagem, exemplos práticos
- [ ] Filtro por campo (IME, EO, CG, TS, EF, ET, PC)
- [ ] Vinculação direta com os momentos que trabalham cada habilidade
- **Referência:** Base Nacional Curricular Comum — Educação Infantil

### 2. Caderno de Atividades — Clareza e integração
- O Caderno de Atividades é um **material impresso** entregue aos alunos
- Cada aula tem uma atividade específica no caderno (Atividade 1, 2, 3, 4)
- A equipe pedagógica ainda está desenvolvendo a parte gráfica final
- **O que o sistema precisa fazer:**
  - [ ] Tornar mais claro na aba "Orientações" que o Momento 16 (Caderno) é vinculado ao caderno impresso
  - [ ] Exibir a instrução da atividade do caderno correspondente a cada aula
  - [ ] Quando o caderno gráfico estiver pronto: disponibilizar PDF para download por unidade/aula
  - [ ] Área de preview da página do caderno correspondente à aula (como a imagem referência: citação + instrução + espaço para atividade)

---

## 🟡 Fase 2 — Autenticação e Perfis

### 3. Página de Login
- [ ] Tela de login institucional com a identidade visual do Sistema EB
- [ ] Dois perfis de acesso:
  - **Professor(a):** acessa o Guia do Educador, planeja aulas, registra observações
  - **Coordenador(a) / Diretor(a):** visão geral de todas as turmas, acompanhamento dos planos
- [ ] Integração com Supabase Auth (email + senha ou SSO institucional)
- [ ] Dados do professor salvos na nuvem (hoje são salvos só no localStorage)
- [ ] Coordenador(a) pode ver e comentar os planos dos professores

### 4. Persistência em nuvem
- [ ] Migrar de localStorage para Supabase (banco já conectado)
- [ ] Estrutura: `planejamentos[escola_id][professor_id][unidade][aula][momento]`
- [ ] Histórico de planejamentos por semana/mês
- [ ] Exportação em lote dos planos da turma

---

## 🟠 Fase 3 — Acompanhamento do Aluno

### 5. Módulo de Registro de Desenvolvimento (inspirado no Escribo Primeira Infância)
- Referência: https://escribo.com/escribo-primeira-infancia/
- O professor registra o desenvolvimento de cada criança durante e após as aulas
- **Funcionalidades previstas:**
  - [ ] Registro por momento/atividade: o que a criança fez, como reagiu, dificuldades
  - [ ] Upload de fotos das atividades realizadas (portfólio digital)
  - [ ] Avaliação por competência/habilidade BNCC por criança
  - [ ] Relatório de desenvolvimento individual por criança (para família)
  - [ ] Relatório de turma para o coordenador
  - [ ] Possível integração ou link com o Escribo se houver API disponível
- **Formato:** pode ser aplicativo mobile dedicado (PWA ou React Native) com link para o Guia do Educador
- **A estudar:** verificar API/parceria com Escribo · avaliar desenvolvimento próprio vs integração

### 6. Comunicação com a Família
- [ ] Relatório de desenvolvimento para envio às famílias (PDF ou link)
- [ ] Registro das atividades do Caderno de Atividades realizadas

---

## 🔴 Fase 4 — Expansão do Sistema

### 7. Ensino Fundamental I–IX
- O sistema atual cobre Educação Infantil (a partir de 3 anos)
- Estrutura pedagógica do Fundamental é diferente: matérias por disciplina, múltiplos professores, períodos de 50 min
- [ ] Definir o "container" pedagógico do Fundamental (equivalente aos 24 momentos da EI)
- [ ] Adaptar o Guia do Educador para a estrutura do Fundamental
- [ ] Manter unificado na mesma plataforma

### 8. Rede de Escolas
- O IEE possui 44 escolas operacionais + internacionais (Angola e Honduras)
- [ ] Multi-escola: cada escola com seus professores e coordenadores
- [ ] Dashboard da rede para a coordenação nacional (OSCEIA/CEEE)
- [ ] Gestão de acesso por escola/mantenedora

---

## 📌 Decisões pendentes

| Decisão | Status | Responsável |
|---|---|---|
| Graphic design final do Caderno de Atividades | ⏳ Em desenvolvimento | Equipe CEEE |
| Modelo de autenticação (SSO vs email) | 🔍 A definir | Fulvio + TI |
| Desenvolvimento próprio vs integração Escribo | 🔍 A estudar | Fulvio + equipe |
| Cronograma do Fundamental I | ⏳ Aguardando EI validada | CEEE |
| Ilustrações unidades 5–8 | ⏳ Pendente geração Gemini | Fulvio |

---

## 🛠 Stack técnica atual

| Camada | Tecnologia |
|---|---|
| Frontend | React + TypeScript + Vite + Tailwind CSS |
| Hospedagem | Vercel (auto-deploy via GitHub) |
| Repositório | GitHub — fulviofb/EBsistemaeducacional |
| Banco (futuro) | Supabase (já conectado) |
| Auth (futuro) | Supabase Auth |
| Mobile (futuro) | PWA ou React Native |

---

*Eurípedes Barsanulfo · Sistema Educacional · IEE*
