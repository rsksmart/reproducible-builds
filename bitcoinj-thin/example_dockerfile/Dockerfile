FROM ubuntu:20.04 AS builder

ENV DEBIAN_FRONTEND=noninteractive
## For ARM64 (Mac Silicon) you might want to change this to /usr/lib/jvm/java-8-openjdk-arm64/
ENV JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64/
RUN apt-get update -y && \
    apt-get install -qq --no-install-recommends openjdk-8-jdk file unzip git strip-nondeterminism && \
    apt-get install -qq --no-install-recommends maven

WORKDIR /code/bitcoinj-thin

RUN gitrev=v0.14.4-rsk-19 && \
    git init && \
    git remote add origin https://github.com/rsksmart/bitcoinj-thin.git && \
    git fetch --depth 1 origin tag "$gitrev" && \
    git checkout "$gitrev"

RUN mvn clean package -DskipTests
RUN strip-nondeterminism ./target/bitcoinj-thin-*

FROM ubuntu:20.04 AS runner

ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update -y && \
    apt-get install -qq --no-install-recommends openjdk-8-jre 


RUN useradd -m rsk

WORKDIR /home/bitcoinj-thin

USER rsk
COPY --from=builder --chown=rsk:rsk /code/bitcoinj-thin/* ./
