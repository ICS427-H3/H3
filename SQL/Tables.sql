-- Comment: Allow updates and delete without where clause
SET SQL_SAFE_UPDATES = 0;



Drop table if exists StickerEcommerce.`carttbl`;
CREATE TABLE `carttbl` (
  `StickerID` int NOT NULL,
  `UserID` int NOT NULL,
  `DateAdded` datetime NOT NULL,
  `Quantity` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`StickerID`,`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;




Drop table if exists StickerEcommerce.`statestbl`;
CREATE TABLE if not exists StickerEcommerce.`statestbl` (
  `StateID` int NOT NULL AUTO_INCREMENT,
  `StateName` varchar(32) DEFAULT NULL,
  `StateAbbrev` char(2) DEFAULT NULL,
  PRIMARY KEY (`StateID`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO stickerecommerce.StatesTbl (
statename, stateAbbrev)
VALUES ('Alabama', 'AL'),
       ('Alaska', 'AK'),
       ('Arizona', 'AZ'),
       ('Arkansas', 'AR'),
       ('California', 'CA'),
       ('Colorado', 'CO'),
       ('Connecticut', 'CT'),
       ('Delaware', 'DE'),
       ('District of Columbia', 'DC'),
       ('Florida', 'FL'),
       ('Georgia', 'GA'),
       ('Hawaii', 'HI'),
       ('Idaho', 'ID'),
       ('Illinois', 'IL'),
       ('Indiana', 'IN'),
       ('Iowa', 'IA'),
       ('Kansas', 'KS'),
       ('Kentucky', 'KY'),
       ('Louisiana', 'LA'),
       ('Maine', 'ME'),
       ('Maryland', 'MD'),
       ('Massachusetts', 'MA'),
       ('Michigan', 'MI'),
       ('Minnesota', 'MN'),
       ('Mississippi', 'MS'),
       ('Missouri', 'MO'),
       ('Montana', 'MT'),
       ('Nebraska', 'NE'),
       ('Nevada', 'NV'),
       ('New Hampshire', 'NH'),
       ('New Jersey', 'NJ'),
       ('New Mexico', 'NM'),
       ('New York', 'NY'),
       ('North Carolina', 'NC'),
       ('North Dakota', 'ND'),
       ('Ohio', 'OH'),
       ('Oklahoma', 'OK'),
       ('Oregon', 'OR'),
       ('Pennsylvania', 'PA'),
       ('Rhode Island', 'RI'),
       ('South Carolina', 'SC'),
       ('South Dakota', 'SD'),
       ('Tennessee', 'TN'),
       ('Texas', 'TX'),
       ('Utah', 'UT'),
       ('Vermont', 'VT'),
       ('Virginia', 'VA'),
       ('Washington', 'WA'),
       ('West Virginia', 'WV'),
       ('Wisconsin', 'WI'),
       ('Wyoming', 'WY');



Drop Table if exists StickerEcommerce.`stickers`;
CREATE TABLE if not exists StickerEcommerce.`stickers` (
  `StickerID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `price` decimal(5,2) NOT NULL,
  `image` text NOT NULL,
  PRIMARY KEY (`StickerID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



Drop table if exists StickerEcommerce.`userstbl`;
CREATE TABLE if not exists StickerEcommerce.`userstbl` (
  `UserID` int NOT NULL AUTO_INCREMENT,
  `Username` varchar(100) NOT NULL,
  `UserEmail` varchar(100) NOT NULL,
  `UserPassword` varchar(200) NOT NULL,
  `UserAddress` varchar(200) DEFAULT NULL,
  `Zipcode` int DEFAULT NULL,
  `State` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



Drop Table if exists StickerEcommerce.`wishlisttbl`;
CREATE TABLE `wishlisttbl` (
  `StickerID` int NOT NULL,
  `UserID` int NOT NULL,
  `DateAdded` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`StickerID`,`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



