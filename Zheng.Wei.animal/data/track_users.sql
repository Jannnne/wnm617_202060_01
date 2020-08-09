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
(1,'Sykes Sanders','user1','user1@gmail.com',md5('pass'),'2020-01-12 03:00:19','https://via.placeholder.com/400/883/fff/?text=user1'),
(2,'Cunningham Dickson','user2','user2@gmail.com',md5('pass'),'2020-07-01 01:56:23','https://via.placeholder.com/400/757/fff/?text=user2'),
(3,'Sara Sweeney','user3','user3@gmail.com',md5('pass'),'2020-02-05 01:53:08','https://via.placeholder.com/400/899/fff/?text=user3'),
(4,'Shelby Chaney','user4','user4@gmail.com',md5('pass'),'2020-05-10 11:47:22','https://via.placeholder.com/400/955/fff/?text=user4'),
(5,'Dena Santana','user5','user5@gmail.com',md5('pass'),'2020-04-03 05:05:09','https://via.placeholder.com/400/926/fff/?text=user5'),
(6,'Luann Hall','user6','user6@gmail.com',md5('pass'),'2020-02-07 02:23:21','https://via.placeholder.com/400/793/fff/?text=user6'),
(7,'Jeannie Pacheco','user7','user7@gmail.com',md5('pass'),'2020-03-05 04:31:15','https://via.placeholder.com/400/851/fff/?text=user7'),
(8,'Marisol Kane','user8','user8@gmail.com',md5('pass'),'2020-02-25 03:41:57','https://via.placeholder.com/400/972/fff/?text=user8'),
(9,'Ines Lara','user9','user9@gmail.com',md5('pass'),'2020-06-11 12:40:23','https://via.placeholder.com/400/966/fff/?text=user9'),
(10,'Mooney Cooke','user10','user10@gmail.com',md5('pass'),'2020-07-06 06:08:30','https://via.placeholder.com/400/842/fff/?text=user10');