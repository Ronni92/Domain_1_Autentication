#!/bin/bash
# Detener y eliminar contenedor anterior si existe
sudo docker stop login-service || true
sudo docker rm login-service || true

# Descargar nueva imagen
sudo docker pull priscila454/login-service

# Ejecutar contenedor
sudo docker run -d --name login-service -p 3000:3000 priscila454/login-service
