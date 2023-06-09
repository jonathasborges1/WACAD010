-- Tabela de Categorias
CREATE TABLE categorias (
  id INT PRIMARY KEY,
  descricao VARCHAR(50)
);

-- Tabela de Produtos
CREATE TABLE produtos (
  id INT PRIMARY KEY,
  descricao VARCHAR(100),
  preco DECIMAL(10, 2),
  quantidade INT,
  categoria_id INT,
  data_criacao DATETIME,
  data_alteracao DATETIME,
  FOREIGN KEY (categoria_id) REFERENCES categorias (id)
);

-- Tabela de Clientes
CREATE TABLE clientes (
  id INT PRIMARY KEY,
  nome VARCHAR(50),
  endereco VARCHAR(100),
  email VARCHAR(50),
  data_criacao DATETIME,
  data_alteracao DATETIME
);

-- Tabela de Vendas
CREATE TABLE Vendas (
  id INT PRIMARY KEY,
  cliente_id INT,
  produto_id INT,
  data_venda DATETIME,
  FOREIGN KEY (cliente_id) REFERENCES clientes (id),
  FOREIGN KEY (produto_id) REFERENCES produtos (id)
);
