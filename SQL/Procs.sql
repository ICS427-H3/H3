USE `stickerecommerce`;
DROP procedure IF EXISTS `stickerecommerce`.`ComboBox_StatesTbl_Proc`;
;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ComboBox_StatesTbl_Proc`()
BEGIN
	
    Select
		StateID,
        CONCAT(StateName, ', ', StateAbbrev)  As State,
        StateName,
        StateAbbrev
	From stickerecommerce.statestbl;
    
END$$
DELIMITER ;



USE `stickerecommerce`;
DROP procedure IF EXISTS `stickerecommerce`.`Insert_StickersTbl_Proc`;
;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Insert_StickersTbl_Proc`(
	StickerName	varchar(100),
    StickerDesc	varchar(200),
    StickerPrice		decimal(5,2),
    StickerImage		text
)
BEGIN

	Insert into stickerecommerce.stickers (
		name,
        description,
        price,
        image
    ) values (
		StickerName,
        StickerDesc,
        StickerPrice,
        StickerImage
    );

END$$
DELIMITER ;



USE `stickerecommerce`;
DROP procedure IF EXISTS `stickerecommerce`.`Insert_UserInfo_Proc`;
;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Insert_UserInfo_Proc`(
	name varchar(100), 
    email varchar(100), 
    password varchar(200),
    address varchar(100),
    zipcode int,
    state varchar(20)
)
BEGIN
	IF EXISTS (
		SELECT UserEmail 
        from stickerecommerce.userstbl 
        where email = Useremail)
    THEN
		Select
			0 As Status,
            'Email already in use' As ErrorMessage;
    ELSE
		Insert into stickerecommerce.userstbl (
			username, 
			useremail, 
			userpassword, 
			useraddress, 
			zipcode, 
			state
		) values (
			name,
			email,
			sha2(password, 512),
			address,
			zipcode,
			state
		);
    
		Select 
			1 as Status,
            '' as ErrorMessage;
    END IF;
    
END$$
DELIMITER ;



USE `stickerecommerce`;
DROP procedure IF EXISTS `stickerecommerce`.`Security_CheckLogin_Proc`;
;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Security_CheckLogin_Proc`(
	email		varchar(100),
    password	varchar(100)
)
BEGIN
    declare hashed varchar(300); 
    Declare UserID INT;
    set hashed = (select SHA2(password, 512));
    Set UserID =  (SELECT UT.UserID FROM `stickerecommerce`.`UsersTbl` UT
				where useremail = email and userpassword = hashed);
    
    IF EXISTS (SELECT 1 
				FROM `stickerecommerce`.`UsersTbl` 
				where useremail = email and userpassword = hashed)
	THEN                
		Select
			1 as Status,
            UserID,
            '' as ErrorMessage;
	ELSE 
		Select
			0 as Status,
            null as UserID,
            'Incorrect Email or Password' as ErrorMessage;
    END IF;
    
END$$
DELIMITER ;



USE `stickerecommerce`;
DROP procedure IF EXISTS `stickerecommerce`.`View_AllStickers_Proc`;
;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `View_AllStickers_Proc`(
)
BEGIN
	Select
		StickerID,
        name,
        description,
        price,
        image
	From stickers;
END$$
DELIMITER ;



USE `stickerecommerce`;
DROP procedure IF EXISTS `stickerecommerce`.`Insert_Carttbl_proc`;
;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Insert_Carttbl_proc`(
	UserID		int,
    StickerID	int,
    Quantity	int
)
BEGIN
	INSERT INTO `stickerecommerce`.Carttbl (
		StickerID,
        UserID,
        DateAdded,
        Quantity
    ) values (
		StickerID,
        UserID,
        now(),
        quantity
    );
    
    
END$$
DELIMITER ;


USE `stickerecommerce`;
DROP procedure IF EXISTS `stickerecommerce`.`View_UserCart_Proc`;
;
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `View_UserCart_Proc`(
    UserID    int
)
sp: BEGIN
    
    IF NOT EXISTS( SELECT 1 FROM `stickerecommerce`.`carttbl` CTbl where CTbl.UserID = UserID)
    THEN
        Select
            '' AS StickerID,
            '' AS name,
            '' AS price,
            '' AS description,
            '' AS image,
            '' AS UserID,
            '' AS Quantity,
            '' AS DateAdded;
        Leave sp;
    ELSE
        Select
            Stbl.StickerID,
            Stbl.name,
            Stbl.price,
            Stbl.description,
            Stbl.image,
            UserID,
            Quantity,
            DateAdded
        FROM `stickerecommerce`.`carttbl` Ctbl
        INNER JOIN `stickerecommerce`.`stickers` Stbl ON
            Ctbl.StickerID = Stbl.StickerID
        Where Ctbl.UserID = UserID;
        
    END IF;

END$$
DELIMITER ;