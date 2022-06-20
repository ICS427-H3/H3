-- Reset Password so we are all same 
SET PASSWORD FOR 'root'@'localhost' = 'Password123';
FLUSH PRIVILEGES;


-- Create DB
CREATE DATABASE IF NOT EXISTS `StickerEcommerce` 
/*!40100 DEFAULT CHARACTER SET utf8mb4 
COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;