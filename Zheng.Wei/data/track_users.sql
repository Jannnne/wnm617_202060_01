CREATE TABLE IF NOT EXISTS `track_users` (
`id` INT NULL,
`name` VARCHAR(MAX) NULL,
`username` VARCHAR(MAX) NULL,
`email` VARCHAR(MAX) NULL,
`password` VARCHAR(MAX) NULL,
`date_create` VARCHAR(MAX) NULL,
`img` VARCHAR(MAX) NULL
);

INSERT INTO track_users VALUES
(1,'Galloway Macias','user1','user1@gmail.com','md5(''pass'')','2020-06-30 02:14:01','https://via.placeholder.com/400/826/fff/?text=user1'),
(2,'Nichols Ortega','user2','user2@gmail.com','md5(''pass'')','2020-01-13 03:42:08','https://via.placeholder.com/400/898/fff/?text=user2'),
(3,'Andrews Wall','user3','user3@gmail.com','md5(''pass'')','2020-06-22 09:39:31','https://via.placeholder.com/400/942/fff/?text=user3'),
(4,'Bell Church','user4','user4@gmail.com','md5(''pass'')','2020-03-15 05:55:55','https://via.placeholder.com/400/964/fff/?text=user4'),
(5,'Jefferson Mcneil','user5','user5@gmail.com','md5(''pass'')','2020-02-20 12:48:20','https://via.placeholder.com/400/741/fff/?text=user5'),
(6,'Weaver Clarke','user6','user6@gmail.com','md5(''pass'')','2020-01-24 07:40:54','https://via.placeholder.com/400/852/fff/?text=user6'),
(7,'Carmella Stokes','user7','user7@gmail.com','md5(''pass'')','2020-03-23 09:17:19','https://via.placeholder.com/400/826/fff/?text=user7'),
(8,'Lynnette Frye','user8','user8@gmail.com','md5(''pass'')','2020-01-05 05:28:34','https://via.placeholder.com/400/750/fff/?text=user8'),
(9,'Janna Kent','user9','user9@gmail.com','md5(''pass'')','2020-01-22 11:55:13','https://via.placeholder.com/400/719/fff/?text=user9'),
(10,'Naomi Craig','user10','user10@gmail.com','md5(''pass'')','2020-02-06 01:59:39','https://via.placeholder.com/400/762/fff/?text=user10');