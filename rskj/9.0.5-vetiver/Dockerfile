FROM eclipse-temurin:17-jdk@sha256:b077006a4e93bbc3c07575d09b2fd528d7f720b3ee31ee879d2433e437dbcbb1 AS builder

RUN apt-get update -y && \
    apt-get install -y -qq --no-install-recommends git curl gnupg && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /code/rskj

RUN gitrev=VETIVER-9.0.5 && \
    git init && \
    git remote add origin https://github.com/rsksmart/rskj.git && \
    git fetch --depth 1 origin "$gitrev" && \
    git checkout FETCH_HEAD

RUN curl -sSL https://secchannel.rsk.co/SUPPORT.asc | gpg --import && \
    gpg --verify --output SHA256SUMS SHA256SUMS.asc && \
    sha256sum --check SHA256SUMS && \
    ./configure.sh && \
    ./gradlew --no-daemon clean build -x test -x checkstyleMain -x checkstyleTest -x checkstyleIntegrationTest && \
    ./gradlew publishRskjPublicationToMavenLocal


FROM eclipse-temurin:17-jre@sha256:ce7dece87d45d67f2534fa4941e0db105c0daf5094600d1cbf1eee30cc8173d6 AS runner

RUN useradd -m rsk

WORKDIR /home/rsk

USER rsk
COPY --from=builder --chown=rsk:rsk /code/rskj/rskj-core/build/libs/rskj-core-* ./
COPY --from=builder --chown=rsk:rsk /code/rskj/rskj-core/build/rskj-core-*.pom ./
COPY --from=builder --chown=rsk:rsk /root/.m2/repository/co/rsk/rskj-core/9.0.5-VETIVER/*.module ./

CMD ["java", "-cp", "rskj-core-9.0.5-VETIVER-all.jar", "co.rsk.Start"]
