# Usa una imagen base ligera con Java 17
FROM eclipse-temurin:17-jdk-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el .jar generado desde target
COPY target/*.jar app.jar

# Expone el puerto donde Spring Boot escucha internamente
EXPOSE 3004

# Comando para ejecutar la app
ENTRYPOINT ["java", "-jar", "app.jar"]
