-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 01, 2023 at 09:18 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student_info_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `category_id`
--

CREATE TABLE `category_id` (
  `ID` int(11) NOT NULL,
  `Category_Text` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `question_id`
--

CREATE TABLE `question_id` (
  `ID` int(11) NOT NULL,
  `Category_ID` int(11) NOT NULL,
  `Question_Type` int(11) NOT NULL,
  `Question_Text` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student_answers`
--

CREATE TABLE `student_answers` (
  `student_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `Answer_Int` int(11) NOT NULL,
  `Answer_Str` varchar(250) NOT NULL,
  `Answer_Time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student_id`
--

CREATE TABLE `student_id` (
  `ID` int(11) NOT NULL,
  `First_Name` varchar(250) NOT NULL,
  `Last_Name` varchar(250) NOT NULL,
  `Email` varchar(250) NOT NULL,
  `CellPhoneNum` int(11) NOT NULL,
  `Study_Field` int(11) NOT NULL,
  `Native_Lan` varchar(250) NOT NULL,
  `ID_Num` int(11) NOT NULL,
  `Password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category_id`
--
ALTER TABLE `category_id`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `question_id`
--
ALTER TABLE `question_id`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Category_ID` (`Category_ID`);

--
-- Indexes for table `student_answers`
--
ALTER TABLE `student_answers`
  ADD KEY `question_id` (`question_id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `student_id`
--
ALTER TABLE `student_id`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Password` (`Password`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category_id`
--
ALTER TABLE `category_id`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `question_id`
--
ALTER TABLE `question_id`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student_id`
--
ALTER TABLE `student_id`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `question_id`
--
ALTER TABLE `question_id`
  ADD CONSTRAINT `question_id_ibfk_1` FOREIGN KEY (`Category_ID`) REFERENCES `category_id` (`ID`);

--
-- Constraints for table `student_answers`
--
ALTER TABLE `student_answers`
  ADD CONSTRAINT `student_answers_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `question_id` (`ID`),
  ADD CONSTRAINT `student_answers_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `student_id` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
