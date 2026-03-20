# FATEC-217_2026-1-TPII - PROJETO 02

## 👨‍🎓 Aluno
Johnny da Silva Franco de Lima  
RA: 2171392511047

---

## 📌 Padrão GOF
Abstract Factory

---

## 📖 Descrição
Este projeto implementa o padrão de projeto **Abstract Factory** em JavaScript.

O sistema simula uma fábrica de robôs para diferentes linhas de produção, garantindo que os produtos criados sejam compatíveis entre si.

As linhas disponíveis são:
- 🚗 Automotiva
- 💻 Eletrônica

Cada fábrica cria dois tipos de robôs:
- Robô Montador
- Robô Inspetor

---

## 🏗️ Estrutura do Projeto

- Robô Montador
- Robô Inspetor

---

src/
├── abstract/
│ ├── RoboFactory.js
│ ├── RoboMontador.js
│ └── RoboInspetor.js
│
├── concreteProducts/
│ ├── RoboMontadorAutomotivo.js
│ ├── RoboMontadorEletronico.js
│ ├── RoboInspetorAutomotivo.js
│ └── RoboInspetorEletronico.js
│
├── factories/
│ ├── AutomotivaFactory.js
│ └── EletronicosFactory.js
│
├── client/
│ └── Application.js
│
└── main.js


---

## ⚙️ Como Executar

No terminal, execute:

```bash
node src/main.js

