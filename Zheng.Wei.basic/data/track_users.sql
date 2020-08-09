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
(1,'Shelley Lang','user1','user1@gmail.com',md5('pass'),'2020-06-07 03:16:54','https://via.placeholder.com/400/894/fff/?text=user1'),
(2,'Patrica Silva','user2','user2@gmail.com',md5('pass'),'2020-03-08 11:01:04','https://via.placeholder.com/400/722/fff/?text=user2'),
(3,'Elvira Beck','user3','user3@gmail.com',md5('pass'),'2020-07-09 12:15:20','https://via.placeholder.com/400/987/fff/?text=user3'),
(4,'Olive Fowler','user4','user4@gmail.com',md5('pass'),'2020-06-19 10:27:30','https://via.placeholder.com/400/866/fff/?text=user4'),
(5,'Emerson Flowers','user5','user5@gmail.com',md5('pass'),'2020-02-12 10:11:55','https://via.placeholder.com/400/761/fff/?text=user5'),
(6,'Juliette Hudson','user6','user6@gmail.com',md5('pass'),'2020-04-12 06:48:08','https://via.placeholder.com/400/798/fff/?text=user6'),
(7,'Lena Moon','user7','user7@gmail.com',md5('pass'),'2020-05-31 07:50:28','https://via.placeholder.com/400/897/fff/?text=user7'),
(8,'Dianna Perry','user8','user8@gmail.com',md5('pass'),'2020-02-09 02:16:30','https://via.placeholder.com/400/810/fff/?text=user8'),
(9,'Natasha Short','user9','user9@gmail.com',md5('pass'),'2020-07-14 11:23:26','https://via.placeholder.com/400/794/fff/?text=user9'),
(10,'Socorro Ruiz','user10','user10@gmail.com',md5('pass'),'2020-04-26 12:39:00','https://via.placeholder.com/400/886/fff/?text=user10');