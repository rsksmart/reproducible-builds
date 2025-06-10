FROM openjdk:8u232

RUN apt update
RUN apt install -y --no-install-recommends file unzip git maven strip-nondeterminism

RUN git clone https://github.com/bitletorg/weupnp.git /code/weupnp

WORKDIR /code/weupnp
RUN git checkout weupnp-0.1.4

RUN mvn clean package -DskipTests
RUN strip-nondeterminism ./target/weupnp-0.1.4.jar
