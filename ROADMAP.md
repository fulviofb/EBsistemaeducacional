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
- [x] Atividades sugeridas por momento na sidebar

---

## 🔵 Próximas etapas — Melhorias imediatas

### 1. Campos de Experiência — Detalhamento BNCC
- [ ] Expandir a aba "Campos de Exp." com o detalhamento completo de cada habilidade
- [ ] Para cada código (ex: EI02EO01), exibir: descrição oficial, objetivos, exemplos práticos
- [ ] Filtro por campo (IME, EO, CG, TS, EF, ET, PC)
- [ ] Vinculação direta com os momentos que trabalham cada habilidade
- **Referência:** Base Nacional Curricular Comum — Educação Infantil

### 2. Caderno de Atividades — Clareza e integração
- O Caderno de Atividades é um **material impresso** entregue aos alunos
- Cada aula tem uma atividade específica (Atividade 1, 2, 3, 4 por unidade)
- A equipe CEEE ainda está desenvolvendo a parte gráfica final
- **O que o sistema precisa fazer:**
  - [ ] Tornar explícito que o Momento 16 é vinculado ao caderno físico impresso
  - [ ] Exibir a instrução da atividade do caderno para cada aula (ex: "Faça um desenho de gratidão ao(à) professor(a)")
  - [ ] Quando o design gráfico final estiver pronto: PDF do caderno disponível por unidade/aula
  - [ ] Preview da página do caderno: citação âncora + instrução ao professor + espaço da atividade

---

## 🟡 Fase 2 — Autenticação e Perfis

### 3. Página de Login institucional
- [ ] Tela de login com identidade visual do Sistema EB
- [ ] Dois perfis de acesso:
  - **Professor(a):** acessa o Guia do Educador, planeja aulas, registra observações
  - **Coordenador(a) / Diretor(a):** visão geral de todas as turmas, acompanhamento dos planos
- [ ] Integração com Supabase Auth (email + senha ou SSO institucional)
- [ ] Dados do professor salvos na nuvem (hoje: localStorage apenas)
- [ ] Coordenador pode visualizar e comentar os planos dos professores

### 4. Persistência em nuvem
- [ ] Migrar de localStorage para Supabase
- [ ] Estrutura: `planejamentos[escola][professor][unidade][aula][momento]`
- [ ] Histórico de planejamentos por semana/mês
- [ ] Exportação em lote dos planos da turma

---

## 🟠 Fase 3 — Módulos OBSERVAR e PLANEJAR
> Inspirados nos módulos homônimos do Escribo Primeira Infância.
> O IEE precisa de funcionalidade equivalente, integrada ao seu currículo espírita e à rotina de 24 momentos.

---

### 5. Módulo OBSERVAR — Registro do desenvolvimento da criança

> *"Registrar a vida escolar dos estudantes de forma ágil, leve e aderente à dinâmica da sala de aula."*

O professor registra o que acontece com cada criança durante e após as aulas, gerando relatórios de aprendizagem para as famílias e a coordenação.

**Funcionalidades previstas:**

- [ ] **Cadastro de alunos por turma** — nome, foto, data de nascimento, responsável
- [ ] **Registro por momento/atividade** — campo rápido: o que a criança fez, como reagiu, dificuldades, conquistas
- [ ] **Avaliação formativa por habilidade BNCC** — para cada código (EI02EO01 etc.), registrar: Iniciando / Em desenvolvimento / Consolidado
- [ ] **Upload de fotos e evidências** — portfólio digital de cada criança
- [ ] **IA para síntese** — a partir dos registros, gerar rascunho do relatório em linguagem adequada para família
- [ ] **Relatório individual por criança** — customizado com identidade visual do Sistema EB, imprimível
- [ ] **Relatório de turma** — para reuniões pedagógicas e formação de professores
- [ ] **Intervenções** — identificar crianças que precisam de atenção individualizada ou coletiva

**Formato de uso:** prioritariamente mobile (celular do professor em sala), com sincronização automática

---

### 6. Módulo PLANEJAR — Gestão pedagógica integrada

> *"Criar planejamento, organizar agenda de trabalho e gerir o processo de ensino a partir do currículo, do calendário e dos recursos disponíveis."*

Evolução do Guia do Educador atual para uma gestão pedagógica completa da escola.

**Funcionalidades previstas:**

- [ ] **Calendário letivo** — a escola cadastra datas, feriados, eventos especiais
- [ ] **Agenda por professor e turma** — gerada automaticamente a partir do calendário + unidades
- [ ] **Objetivos de curto prazo** — por bimestre/trimestre, por turma
- [ ] **Intencionalidade educativa** — cada atividade vinculada a um objetivo de aprendizagem
- [ ] **Gestão do dia a dia** — professor marca o que foi realizado, o que precisou ser adaptado
- [ ] **Coleta de dados para reuniões** — dados do OBSERVAR alimentam pautas pedagógicas
- [ ] **Replanejamento** — ajuste dos próximos bimestres com base nos dados coletados
- [ ] **IA para sugestões** — baseado nos registros do OBSERVAR, sugerir adaptações no planejamento

---

### 7. Análise estratégica — Desenvolver próprio vs. integrar Escribo

| Critério | Desenvolvimento próprio | Integração Escribo |
|---|---|---|
| **Aderência ao currículo espírita** | ✅ Total — IME, 24 momentos, história âncora | ❌ Nenhuma — currículo secular genérico |
| **Identidade visual IEE** | ✅ Completa | ❌ Identidade Escribo |
| **Custo** | Desenvolvimento único | Licença recorrente por escola/aluno |
| **Velocidade** | Mais lento | Mais rápido |
| **Dados** | ✅ Propriedade do IEE | ❌ Dados na plataforma Escribo |
| **Escala (44 escolas)** | ✅ Controlado | Depende de negociação |
| **IA integrada** | ✅ Claude API já disponível | Própria do Escribo |

**Recomendação:** desenvolver módulos próprios OBSERVAR e PLANEJAR, integrados ao Guia do Educador já existente.
O currículo espírita, os 24 momentos e a identidade do Sistema EB são diferenciais que nenhuma plataforma externa vai reproduzir.

---

## 🔴 Fase 4 — Expansão da Rede

### 8. Ensino Fundamental I–IX
- Sistema atual cobre Educação Infantil (a partir de 3 anos)
- Fundamental tem estrutura diferente: disciplinas, múltiplos professores, períodos de 50 min
- [ ] Definir o "container" pedagógico do Fundamental (após EI validada)
- [ ] Adaptar o Guia do Educador para a estrutura do Fundamental
- [ ] Manter unificado na mesma plataforma

### 9. Rede de 44 escolas + internacionais
- IEE possui 44 escolas operacionais + Angola e Honduras
- [ ] Multi-escola: cada escola com seus professores e coordenadores
- [ ] Dashboard da rede para coordenação nacional (OSCEIA/CEEE)
- [ ] Gestão de acesso por escola/mantenedora

---

## 📌 Decisões pendentes

| Decisão | Status | Responsável |
|---|---|---|
| Design gráfico final do Caderno de Atividades | ⏳ Em desenvolvimento | Equipe CEEE |
| Modelo de autenticação (SSO vs email) | 🔍 A definir | Fulvio + TI |
| OBSERVAR: dev próprio vs integração Escribo | 🔍 **Recomendado: dev próprio** | Fulvio + equipe |
| Cronograma do Fundamental I | ⏳ Aguardando EI validada | CEEE |
| Ilustrações unidades 5–8 | ⏳ Pendente geração Gemini | Fulvio |
| Modelo de dados Supabase (multi-escola) | 🔍 A definir | Fulvio + TI |

---

## 🛠 Stack técnica

| Camada | Tecnologia | Status |
|---|---|---|
| Frontend | React + TypeScript + Vite + Tailwind CSS | ✅ Em produção |
| Hospedagem | Vercel (auto-deploy via GitHub) | ✅ Em produção |
| Repositório | GitHub — fulviofb/EBsistemaeducacional | ✅ Ativo |
| Banco de dados | Supabase | 🔍 Conectado, aguardando auth |
| Autenticação | Supabase Auth | 🔍 Fase 2 |
| IA (relatórios/sugestões) | Claude API (Anthropic) | 🔍 Fase 3 |
| Mobile | PWA (prioridade) → React Native (futuro) | 🔍 Fase 3 |

---

*Eurípedes Barsanulfo · Sistema Educacional · IEE*
*44 escolas operacionais · Angola · Honduras*
