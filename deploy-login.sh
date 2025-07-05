#!/bin/bash

# Detener y eliminar el contenedor si existe
sudo docker stop login-service || true
sudo docker rm login-service || true

# Descargar la nueva imagen
sudo docker pull <priscila454>/login-service

# Ejecutar el contenedor
sudo docker run -d --name login-service -p 3000:3000 <priscila454>/login-service
