-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: localhost    Database: vacations
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `user_name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `is_admin` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `user_name_UNIQUE` (`user_name`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'Bibi','Netanyahu','moslini','145d9f70097c2419b81c6dba9c26b23a',0),(4,'Yoni','vidal','jonivid','26d11f27ccded0b8566f599d0d58bd95',0),(5,'Haim','kokoka','jonivid@gmail.com','b2367c84172ae8938a7aa7837be50a48',0),(8,'Sigi','kokoka','jddonivid@gmail.com','b2367c84172ae8938a7aa7837be50a48',0),(10,'Eliad','kokoka','jddondsadaivid@gmail.com','b2367c84172ae8938a7aa7837be50a48',0),(12,'Dani','kokoka','jddondsadaivasdadasdid@gmail.com','b2367c84172ae8938a7aa7837be50a48',0),(13,'Sigi','kokoka','13456@gmail.com','b2367c84172ae8938a7aa7837be50a48',0),(15,'Yoni','kokoka','134423423456@gmail.com','b2367c84172ae8938a7aa7837be50a48',0),(16,'Eliad','kokoka','sdd@gmail.com','b2367c84172ae8938a7aa7837be50a48',0),(18,'Sigi','kokoka','sdffd@gmail.com','b2367c84172ae8938a7aa7837be50a48',0),(19,'Bibi','kokoka','sdfddfd@gmail.com','b2367c84172ae8938a7aa7837be50a48',0),(20,'Eliad','kokoka','sdfddf111d@gmail.com','b2367c84172ae8938a7aa7837be50a48',0),(21,'Eliad','test1','tester1@gmail.com','b2367c84172ae8938a7aa7837be50a48',0),(22,'Eliad','Nahum','test2@gmail.com','b2367c84172ae8938a7aa7837be50a48',0),(23,'AdminUser','AdminUser','teter4@gmail.com','b2367c84172ae8938a7aa7837be50a48',1),(24,'esti','vidal','ter@g.com','b2367c84172ae8938a7aa7837be50a48',0),(25,'Yehonatan','Vidal','teter31.05@gmail.com','b2367c84172ae8938a7aa7837be50a48',0),(26,'Yehonatan2','Vidal','teter2d@gmail.com','b2367c84172ae8938a7aa7837be50a48',0),(27,'kipi','kipod','mode@gk.com','51da67f7d3b05efb7a522225ebe717c2',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-09 15:41:16
