FROM eclipse-temurin:17-jdk@sha256:08295ab0f5007a37cbcc6679a8447a7278d9403f9f82acd80ed08cd10921e026 as builder

RUN apt-get update -y && \
    apt-get install -y -qq --no-install-recommends git curl gnupg && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /code/powpeg-node

RUN gitrev=VETIVER-9.0.3.0 && \
    git init && \
    git remote add origin https://github.com/rsksmart/powpeg-node.git && \
    git fetch --depth 1 origin tag "$gitrev" && \
    git checkout "$gitrev"

RUN gpg --keyserver https://secchannel.rsk.co/SUPPORT.asc --recv-keys 1DC9157991323D23FD37BAA7A6DBEAC640C5A14B && \
    gpg --verify --output SHA256SUMS SHA256SUMS.asc && \
    sha256sum --check SHA256SUMS && \
    ./configure.sh && \
    ./gradlew --no-daemon clean build -x test

FROM eclipse-temurin:17-jre@sha256:f1515395c0695910a3ca665e973cc11013d1f50d265e61cb8c9156e999d914b4 as runner

RUN useradd -m rsk

WORKDIR /home/rsk

USER rsk
COPY --from=builder --chown=rsk:rsk /code/powpeg-node/build/libs/federate-node-* ./
