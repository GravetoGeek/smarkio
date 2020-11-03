-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema smarkiodb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema smarkiodb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `smarkiodb` DEFAULT CHARACTER SET utf8 ;
USE `smarkiodb` ;

-- -----------------------------------------------------
-- Table `smarkiodb`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smarkiodb`.`usuarios` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `data` DATETIME NOT NULL,
  PRIMARY KEY (`idusuario`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `smarkiodb`.`intencoes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smarkiodb`.`intencoes` (
  `idintencao` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `data` DATETIME NOT NULL,
  PRIMARY KEY (`idintencao`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `smarkiodb`.`status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smarkiodb`.`status` (
  `idstatus` INT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idstatus`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `smarkiodb`.`mensagens`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smarkiodb`.`mensagens` (
  `idmensagem` INT NOT NULL AUTO_INCREMENT,
  `texto` VARCHAR(500) NOT NULL,
  `data` DATETIME NOT NULL,
  `idstatus` INT NOT NULL,
  `idusuario` INT NOT NULL,
  `idintencao` INT NOT NULL,
  PRIMARY KEY (`idmensagem`),
  CONSTRAINT `fk_mensagens_status`
    FOREIGN KEY (`idstatus`)
    REFERENCES `smarkiodb`.`status` (`idstatus`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_mensagens_usuarios1`
    FOREIGN KEY (`idusuario`)
    REFERENCES `smarkiodb`.`usuarios` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_mensagens_intencoes1`
    FOREIGN KEY (`idintencao`)
    REFERENCES `smarkiodb`.`intencoes` (`idintencao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_mensagens_status_idx` ON `smarkiodb`.`mensagens` (`idstatus` ASC) VISIBLE;

CREATE INDEX `fk_mensagens_usuarios1_idx` ON `smarkiodb`.`mensagens` (`idusuario` ASC) VISIBLE;

CREATE INDEX `fk_mensagens_intencoes1_idx` ON `smarkiodb`.`mensagens` (`idintencao` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
