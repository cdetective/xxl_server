/*
 Navicat Premium Data Transfer

 Source Server         : 本地
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : xxl

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 10/01/2020 16:11:55
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_highs
-- ----------------------------
DROP TABLE IF EXISTS `t_highs`;
CREATE TABLE `t_highs`  (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `_name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `_score` bigint(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 24 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_highs
-- ----------------------------
INSERT INTO `t_highs` VALUES (2, '虚位以待', 1000);
INSERT INTO `t_highs` VALUES (3, '虚位以待', 1000);
INSERT INTO `t_highs` VALUES (4, '虚位以待', 1000);
INSERT INTO `t_highs` VALUES (5, '虚位以待', 1000);
INSERT INTO `t_highs` VALUES (6, '虚位以待', 1000);
INSERT INTO `t_highs` VALUES (7, '虚位以待', 1000);
INSERT INTO `t_highs` VALUES (8, '虚位以待', 1000);
INSERT INTO `t_highs` VALUES (9, '虚位以待', 1000);
INSERT INTO `t_highs` VALUES (10, '虚位以待', 1000);
INSERT INTO `t_highs` VALUES (11, '虚位以待', 1000);
INSERT INTO `t_highs` VALUES (12, '虚位以待', 1000);
INSERT INTO `t_highs` VALUES (13, '虚位以待', 1000);
INSERT INTO `t_highs` VALUES (14, '虚位以待', 1000);
INSERT INTO `t_highs` VALUES (15, '虚位以待', 1000);
INSERT INTO `t_highs` VALUES (16, '虚位以待', 1000);
INSERT INTO `t_highs` VALUES (17, '虚位以待', 1000);
INSERT INTO `t_highs` VALUES (18, '虚位以待', 1000);
INSERT INTO `t_highs` VALUES (19, '虚位以待', 1000);
INSERT INTO `t_highs` VALUES (20, '虚位以待', 1000);
INSERT INTO `t_highs` VALUES (21, '虚位以待', 1000);
INSERT INTO `t_highs` VALUES (22, '虚位以待', 1000);

SET FOREIGN_KEY_CHECKS = 1;
