# Roles-permissions/Dockerfile
FROM openjdk:17
WORKDIR /app
COPY target/roles-permisos-1.0.0.jar app.jar
EXPOSE 3004
ENTRYPOINT ["java", "-jar", "app.jar"]
