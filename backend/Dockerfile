#backend
FROM openjdk:17-jdk-slim

WORKDIR /app

# Maven Wrapper をコピー
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# 依存関係をキャッシュするためのビルド
RUN ./mvnw dependency:go-offline

# ソースコード全体をコピーしてビルド
COPY src ./src
RUN ./mvnw package -DskipTests

# アプリケーションの起動
CMD ["java", "-jar", "target/codescope-0.0.1-SNAPSHOT.jar"]
