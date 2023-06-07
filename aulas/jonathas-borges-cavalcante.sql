-- Criação da tabela de Projetos
CREATE TABLE Projetos (
  id INT PRIMARY KEY,
  nome VARCHAR(100),
  data_inicio DATE,
  data_fim DATE,
  departamento_id INT
);

-- Criação da chave estrangeira para o departamento
ALTER TABLE Projetos
ADD CONSTRAINT fk_departamento
FOREIGN KEY (departamento_id)
REFERENCES Departamentos(id);


-- Criação da tabela de Departamentos
CREATE TABLE Departamentos (
  id INT PRIMARY KEY,
  nome VARCHAR(100),
  localizacao VARCHAR(100)
);

-- Criação da tabela de Funcionários
CREATE TABLE Funcionarios (
  id INT PRIMARY KEY,
  nome VARCHAR(100),
  cargo VARCHAR(100),
  departamento_id INT,
  salario DECIMAL(10, 2),
  data_contratacao DATE
);

-- Criação da chave estrangeira para o departamento
ALTER TABLE Funcionarios
ADD CONSTRAINT fk_departamento
FOREIGN KEY (departamento_id)
REFERENCES Departamentos(id);

-- Criação da tabela de Dependentes
CREATE TABLE Dependentes (
  id INT PRIMARY KEY,
  nome VARCHAR(100),
  funcionario_id INT,
  data_nascimento DATE,
  CONSTRAINT fk_funcionario
  FOREIGN KEY (funcionario_id)
  REFERENCES Funcionarios(id)
);

-- Dados fictícios para a tabela de Projetos
INSERT INTO Projetos (id, nome, data_inicio, data_fim, departamento_id) VALUES
(1, 'Projeto A', '2023-05-01', '2023-06-30', 1),
(2, 'Projeto B', '2023-06-15', '2023-08-15', 2),
(3, 'Projeto C', '2023-07-01', '2023-09-30', 1);

-- Dados fictícios para a tabela de Departamentos
INSERT INTO Departamentos (id, nome, localizacao) VALUES
(1, 'Departamento 1', 'Local 1'),
(2, 'Departamento 2', 'Local 2'),
(3, 'Departamento 3', 'Local 3');

-- Dados fictícios para a tabela de Funcionários
INSERT INTO Funcionarios (id, nome, cargo, departamento_id, salario, data_contratacao) VALUES
(1, 'Funcionário 1', 'Cargo 1', 1, 5000.00, '2022-01-15'),
(2, 'Funcionário 2', 'Cargo 2', 2, 6000.00, '2022-03-10'),
(3, 'Funcionário 3', 'Cargo 3', 1, 4500.00, '2022-05-20');

-- Dados fictícios para a tabela de Dependentes
INSERT INTO Dependentes (id, nome, funcionario_id, data_nascimento) VALUES
(1, 'Dependente 1', 1, '2005-08-12'),
(2, 'Dependente 2', 2, '2010-03-25'),
(3, 'Dependente 3', 3, '2014-11-05');