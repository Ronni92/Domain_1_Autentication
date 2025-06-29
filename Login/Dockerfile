FROM node:18

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos al contenedor
COPY . .

# Instalar dependencias
RUN npm install

# Exponer puerto
EXPOSE 3000

# Comando para iniciar la app
CMD ["npm", "start"]
