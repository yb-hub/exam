/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50527
 Source Host           : localhost:3306
 Source Schema         : online_exam

 Target Server Type    : MySQL
 Target Server Version : 50527
 File Encoding         : 65001

 Date: 27/10/2019 19:45:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for paper
-- ----------------------------
DROP TABLE IF EXISTS `paper`;
CREATE TABLE `paper`  (
  `id` int(11) NOT NULL COMMENT '试卷id',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '试卷标题',
  `type` int(1) NULL DEFAULT NULL COMMENT '考试类型（1为小测试，2为期中考试，3为期末考试）',
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '考试描述',
  `course_id` int(10) NULL DEFAULT NULL COMMENT '考试科目id',
  `grade` int(1) NULL DEFAULT NULL COMMENT '考试年级',
  `limit_time` int(3) NULL DEFAULT NULL COMMENT '考试时间（单位为分钟）',
  `total_score` int(3) NULL DEFAULT NULL COMMENT '总分',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for question
-- ----------------------------
DROP TABLE IF EXISTS `question`;
CREATE TABLE `question`  (
  `id` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '题目id',
  `subject_id` int(10) NULL DEFAULT NULL COMMENT '科目id(工科，理科，文科)',
  `major_id` int(10) NULL DEFAULT NULL COMMENT '专业id(计算机)',
  `course_id` int(10) NULL DEFAULT NULL COMMENT '课程id(数据结构)',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '题目名称',
  `type` int(10) NULL DEFAULT NULL COMMENT '题目类型（1为选择题，2为多项选择，3为判断题，4为简答题）',
  `options` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '选项（json字符串）',
  `right_option` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '选择题的正确选项(数组，可能是多选题)',
  `judge_answer` int(1) NULL DEFAULT NULL COMMENT '判断题的正确答案（0为正确，1为错误）',
  `score` int(1) NULL DEFAULT NULL COMMENT '题目的分值',
  `analysis` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '题目解析',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;
