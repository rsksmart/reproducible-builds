FROM openjdk:8-jdk-slim-buster as builder

RUN apt-get update -y && \
    apt-get install -qq --no-install-recommends git curl gnupg

WORKDIR /code/rskj

RUN gitrev=HOP-4.3.0 && \
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


FROM openjdk:8-jre-slim-buster as runner

RUN useradd -m rsk

WORKDIR /home/rsk

USER rsk
COPY --from=builder --chown=rsk:rsk /code/rskj/rskj-core/build/libs/rskj-core-* ./
COPY --from=builder --chown=rsk:rsk /root/.m2/repository/co/rsk/rskj-core/4.3.0-HOP/*.module ./
CMD ["java", "-cp", "rskj-core-4.3.0-HOP-all.jar", "co.rsk.Start"]
