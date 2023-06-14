-- Inserindo dados na tabela categorias
INSERT INTO categorias (id, descricao)
VALUES (1, 'Eletrônicos'),
       (2, 'Roupas'),
       (3, 'Acessórios');

-- Inserindo dados na tabela produtos
INSERT INTO produtos (id, descricao, preco, quantidade, categoria_id, data_criacao, data_alteracao)
VALUES (1, 'Smartphone', 1500.00, 10, 1, '2023-06-01 09:00:00', '2023-06-02 14:30:00'),
       (2, 'Notebook', 2500.00, 5, 1, '2023-06-03 11:45:00', '2023-06-04 16:20:00'),
       (3, 'Camiseta', 50.00, 20, 2, '2023-06-05 08:15:00', '2023-06-06 10:10:00'),
       (4, 'Calça', 80.00, 15, 2, '2023-06-07 13:20:00', '2023-06-08 09:45:00');

-- Inserindo dados na tabela clientes
INSERT INTO clientes (id, nome, endereco, email, data_criacao, data_alteracao)
VALUES (1, 'João Silva', 'Rua das Flores, 123', 'joao@email.com', '2023-06-01 09:00:00', '2023-06-01 09:00:00'),
       (2, 'Maria Santos', 'Av. Principal, 456', 'maria@email.com', '2023-06-02 14:30:00', '2023-06-03 16:00:00');

-- Inserindo dados na tabela vendas
INSERT INTO vendas (id, cliente_id, produto_id, data_venda)
VALUES (1, 1, 1, '2023-06-03 10:30:00'),
       (2, 1, 3, '2023-06-05 15:20:00'),
       (3, 2, 2, '2023-06-07 11:00:00');
