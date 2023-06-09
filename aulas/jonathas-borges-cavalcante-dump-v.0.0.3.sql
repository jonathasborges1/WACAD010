CREATE TABLE IF NOT EXISTS projetos (
  id INT NOT NULL,
  nome VARCHAR(100),
  data_inicio DATE,
  data_fim DATE,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS departamentos (
 id INT NOT NULL,
 nome VARCHAR(45) NOT NULL,
 sigla VARCHAR(45) NOT NULL,
 projetos_id INT NOT NULL,
 PRIMARY KEY (id),
 INDEX fk_projetos_index (projetos_id ASC),
 CONSTRAINT fk_projetos_index FOREIGN KEY (projetos_id) REFERENCES projetos (id)
);

CREATE TABLE IF NOT EXISTS funcionarios (
 matricula INT NOT NULL,
 nome VARCHAR(45) NOT NULL,
 endereco VARCHAR(45) NOT NULL,
 fone VARCHAR(45) NULL,
 email VARCHAR(45) NULL,
 departamentos_id INT NOT NULL,
 PRIMARY KEY (matricula, departamentos_id),
 UNIQUE INDEX email_UNIQUE (email ASC),
 INDEX fk_departamentos_index (departamentos_id ASC),
 CONSTRAINT fk_departamentos_index FOREIGN KEY (departamentos_id) REFERENCES departamentos (id)
);

CREATE TABLE IF NOT EXISTS dependentes (
 id INT NOT NULL,
 funcionarios_matricula INT NOT NULL,
 funcionarios_departamentos_id INT NOT NULL,
 nome VARCHAR(45) NOT NULL,
 PRIMARY KEY (id, funcionarios_matricula, funcionarios_departamentos_id),
 INDEX fk_funcionarios_index (funcionarios_matricula ASC, funcionarios_departamentos_id ASC),
 CONSTRAINT fk_dependentes_funcionarios FOREIGN KEY (funcionarios_matricula, funcionarios_departamentos_id) REFERENCES funcionarios (matricula, departamentos_id)
);

INSERT INTO projetos (id, nome, data_inicio, data_fim)  VALUES
(1, 'Projeto A', '2023-01-01', '2023-06-30'),
(2, 'Projeto B', '2023-02-15', '2023-05-15'),
(3, 'Projeto C', '2023-03-10', '2023-07-31');

INSERT INTO departamentos (id, nome, sigla, projetos_id) VALUES 
(1, 'Departamento 1', 'DPT1', 1),
(2, 'Departamento 2', 'DPT2', 2),
(3, 'Departamento 3', 'DPT3', 1),
(4, 'Departamento 4', 'DPT4', 3);

INSERT INTO funcionarios (matricula, nome, endereco, fone, email, departamentos_id) VALUES 
(1001, 'João Silva', 'Rua A, 123', '9999-1111', 'joao@example.com', 1), 
(1002, 'Maria Santos', 'Rua B, 456', '8888-2222', 'maria@example.com', 2), 
(1003, 'Pedro Oliveira', 'Rua C, 789', '7777-3333', 'pedro@example.com', 3),
(1004, 'Ana Santos', 'Rua D, 999', '888-1234', 'ana@example.com', 4);

INSERT INTO dependentes (id, funcionarios_matricula, funcionarios_departamentos_id, nome) VALUES 
(1, 1001, 1, 'Filho 1'),
(2, 1001, 1, 'Filho 2'),
(3, 1002, 2, 'Filho 1');