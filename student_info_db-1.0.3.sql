-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 15, 2023 at 08:43 AM
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
  `Answer_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `Answer_Int` int(11) NOT NULL,
  `Answer_Str` varchar(250) NOT NULL,
  `Answer_Time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `answers_tbl`
--

INSERT INTO `answers_tbl` (`Answer_id`, `student_id`, `question_id`, `Answer_Int`, `Answer_Str`, `Answer_Time`) VALUES
(1, 1, 3, 4, 'hell yea!', '2023-09-07 21:00:00'),
(2, 2, 3, 4, 'yes!', '2023-09-06 21:00:00'),
(3, 3, 4, 8, 'no way!', '2023-09-06 21:00:00');

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
(18, 2, 2, 'adsda'),
(19, 2, 2, 'adsda');

-- --------------------------------------------------------

--
-- Table structure for table `users_tbl`
--

CREATE TABLE `users_tbl` (
  `ID` int(11) NOT NULL,
  `First_Name` varchar(250) NOT NULL,
  `Last_Name` varchar(250) NOT NULL,
  `Email` varchar(250) NOT NULL,
  `CellPhoneNum` varchar(250) NOT NULL,
  `Study_Field` tinyint(11) NOT NULL,
  `Native_Lang` varchar(250) NOT NULL,
  `ID_Num` varchar(250) NOT NULL,
  `Password` varchar(250) NOT NULL,
  `LVL` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users_tbl`
--

INSERT INTO `users_tbl` (`ID`, `First_Name`, `Last_Name`, `Email`, `CellPhoneNum`, `Study_Field`, `Native_Lang`, `ID_Num`, `Password`, `LVL`) VALUES
(1, 'zion', 'amar', 'mnh868441@gamil.com', '539212153', 2, 'undefined', '212007306', 'onaod', 'student'),
(4, 'zion', 'amar', 'mnh868441@gamil.com', '539212153', 2, 'undefined', '212007306', 'onaopooij0id', 'student'),
(6, 'zion', 'amar', 'mnh868441@gamil.com', '539212153', 2, 'ibiub', '212007306', 'lkn', 'student');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers_tbl`
--
ALTER TABLE `answers_tbl`
  ADD PRIMARY KEY (`Answer_id`),
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
-- AUTO_INCREMENT for table `answers_tbl`
--
ALTER TABLE `answers_tbl`
  MODIFY `Answer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `category_tbl`
--
ALTER TABLE `category_tbl`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `question_tbl`
--
ALTER TABLE `question_tbl`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `users_tbl`
--
ALTER TABLE `users_tbl`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
