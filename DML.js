-- Insertion dans la table CLIENT
INSERT INTO Client (ID_Client, Nom, Prenom, Adresse, Ville, CodePostal)
VALUES
(1, 'Dupont', 'Pierre', '123 Rue de Paris', 'Paris', '75001'),
(2, 'Martin', 'Sophie', '456 Avenue des Champs', 'Lyon', '69002'),
(3, 'Durand', 'Michel', '789 Boulevard de la République', 'Marseille', '13001');

-- Insertion dans la table COMMANDE
INSERT INTO Commande (ID_Commande, ID_Client, DateCommande)
VALUES
(1, 1, '2024-12-01'),
(2, 2, '2024-12-05'),
(3, 3, '2024-12-10');

-- Insertion dans la table PRODUIT
INSERT INTO Produit (ID_Produit, NomProduit, PrixUnitaire)
VALUES
(1, 'Ordinateur Portable', 1200),
(2, 'Smartphone', 800),
(3, 'Tablette', 600);

-- Insertion dans la table LIGNECOMMANDE
INSERT INTO LigneCommande (ID_Commande, ID_Produit, Quantite)
VALUES
(1, 1, 1),  -- Commande 1 : 1 Ordinateur Portable
(1, 2, 2),  -- Commande 1 : 2 Smartphones
(2, 3, 1),  -- Commande 2 : 1 Tablette
(3, 1, 1),  -- Commande 3 : 1 Ordinateur Portable
(3, 2, 3);  -- Commande 3 : 3 Smartphones
