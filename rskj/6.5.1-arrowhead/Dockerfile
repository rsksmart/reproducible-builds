FROM eclipse-temurin:17-jdk@sha256:08295ab0f5007a37cbcc6679a8447a7278d9403f9f82acd80ed08cd10921e026 as builder

RUN apt-get update -y && \
    apt-get install -qq --no-install-recommends git curl gnupg

WORKDIR /code/rskj

RUN gitrev=ARROWHEAD-6.5.1 && \
    git init && \
    git remote add origin https://github.com/rsksmart/rskj.git && \
    git fetch --depth 1 origin tag "$gitrev" && \
    git checkout "$gitrev"

RUN gpg --keyserver https://secchannel.rsk.co/SUPPORT.asc --recv-keys 1DC9157991323D23FD37BAA7A6DBEAC640C5A14B && \
    gpg --verify --output SHA256SUMS SHA256SUMS.asc && \
    sha256sum --check SHA256SUMS && \
    ./configure.sh && \
    ./gradlew --no-daemon clean build -x test && \
    ./gradlew publishRskjPublicationToMavenLocal


FROM eclipse-temurin:17-jre@sha256:f1515395c0695910a3ca665e973cc11013d1f50d265e61cb8c9156e999d914b4 as runner

RUN useradd -m rsk

WORKDIR /home/rsk

USER rsk
COPY --from=builder --chown=rsk:rsk /code/rskj/rskj-core/build/libs/rskj-core-* ./
COPY --from=builder --chown=rsk:rsk /root/.m2/repository/co/rsk/rskj-core/6.5.1-ARROWHEAD/*.module ./
CMD ["java", "-cp", "rskj-core-6.5.1-ARROWHEAD-all.jar", "co.rsk.Start"]
