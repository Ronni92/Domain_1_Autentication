# Imagen base
FROM node:18
# Crear directorio de trabajo
WORKDIR /app
# Copiar archivos del microservicio
COPY package*.json ./
RUN npm install
COPY . .
# Exponer el puerto correcto
EXPOSE 3001
# Comando para iniciar la app
CMD ["node", "app.js"]