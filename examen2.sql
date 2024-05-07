CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);
INSERT INTO usuario (nombre, password) VALUES ('usuario', 'Password1');
INSERT INTO usuario (nombre, password) VALUES ('usuario2', 'password2');
ALTER TABLE usuario 
ADD COLUMN placa VARCHAR(255);
ADD COLUMN hsalida TIMEusuariousuario;

SELECT * FROM usuario;
ALTER TABLE usuario CHANGE correo_electronico email VARCHAR(255);
ALTER TABLE usuario CHANGE hentrada hentrada time(255);
ALTER TABLE usuario CHANGE hentrada entrada time;
ALTER TABLE usuario CHANGE hsalida salida time;

DELETE FROM usuario WHERE id IN (1, 2);
ALTER TABLE usuario DROP COLUMN hentrada;
ALTER TABLE usuario DROP COLUMN hsalida;
CREATE TABLE producto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    cantidad INT NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    usuario_id BIGINT,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);
