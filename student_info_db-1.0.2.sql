-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 06, 2023 at 11:04 AM
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
-- Table structure for table `answers_tbl`
--

CREATE TABLE `answers_tbl` (
  `student_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `Answer_Int` int(11) NOT NULL,
  `Answer_Str` varchar(250) NOT NULL,
  `Answer_Time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category_tbl`
--

CREATE TABLE `category_tbl` (
  `ID` int(11) NOT NULL,
  `Category_Text` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `category_tbl`
--

INSERT INTO `category_tbl` (`ID`, `Category_Text`) VALUES
(1, 'saasa'),
(2, 'aljanksm');

-- --------------------------------------------------------

--
-- Table structure for table `question_tbl`
--

CREATE TABLE `question_tbl` (
  `ID` int(11) NOT NULL,
  `Category_ID` int(11) NOT NULL,
  `Question_Type` int(11) NOT NULL,
  `Question_Text` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `question_tbl`
--

INSERT INTO `question_tbl` (`ID`, `Category_ID`, `Question_Type`, `Question_Text`) VALUES
(1, 1, 2, 'michael'),
(3, 1, 1, 'what is 1 div 1'),
(4, 1, 2, 'adsda'),
(5, 1, 2, 'adsda'),
(6, 1, 2, 'adsda'),
(7, 1, 2, 'adsda'),
(8, 1, 2, 'adsda'),
(9, 1, 2, 'adsda'),
(10, 1, 2, 'adsda'),
(11, 1, 2, 'adsda'),
(12, 1, 2, 'adsda'),
(13, 1, 2, 'adsda'),
(17, 2, 2, 'adsda'),
(18, 2, 2, 'adsda');

-- --------------------------------------------------------

--
-- Table structure for table `users_tbl`
--

CREATE TABLE `users_tbl` (
  `ID` int(11) NOT NULL,
  `First_Name` varchar(250) NOT NULL,
  `Last_Name` varchar(250) NOT NULL,
  `Email` varchar(250) NOT NULL,
  `CellPhoneNum` int(11) NOT NULL,
  `Study_Field` int(11) NOT NULL,
  `Native_Lan` varchar(250) NOT NULL,
  `ID_Num` int(11) NOT NULL,
  `Password` varchar(250) NOT NULL,
  `LVL` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers_tbl`
--
ALTER TABLE `answers_tbl`
  ADD KEY `question_id` (`question_id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `category_tbl`
--
ALTER TABLE `category_tbl`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `question_tbl`
--
ALTER TABLE `question_tbl`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Category_ID` (`Category_ID`);

--
-- Indexes for table `users_tbl`
--
ALTER TABLE `users_tbl`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Password` (`Password`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category_tbl`
--
ALTER TABLE `category_tbl`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `question_tbl`
--
ALTER TABLE `question_tbl`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users_tbl`
--
ALTER TABLE `users_tbl`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers_tbl`
--
ALTER TABLE `answers_tbl`
  ADD CONSTRAINT `answers_tbl_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `question_tbl` (`ID`),
  ADD CONSTRAINT `answers_tbl_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `users_tbl` (`ID`);

--
-- Constraints for table `question_tbl`
--
ALTER TABLE `question_tbl`
  ADD CONSTRAINT `question_tbl_ibfk_1` FOREIGN KEY (`Category_ID`) REFERENCES `category_tbl` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
