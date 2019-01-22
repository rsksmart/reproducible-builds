FROM openjdk:8u171

RUN apt update
RUN apt install -y --no-install-recommends file unzip maven git strip-nondeterminism

RUN git clone https://github.com/rsksmart/bitcoinj-thin.git /code/bitcoinj-thin

WORKDIR /code/bitcoinj-thin
RUN git checkout v0.14.4-rsk-6

RUN mvn clean package -DskipTests
RUN strip-nondeterminism ./target/bitcoinj-thin-0.14.4-rsk-6.jar
