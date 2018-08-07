FROM openjdk:8u171

RUN apt update
RUN apt install -y --no-install-recommends ant git unzip wget strip-nondeterminism file

RUN mkdir -p /opt/junit
RUN wget https://repo1.maven.org/maven2/junit/junit/4.12/junit-4.12.jar -O /opt/junit/junit.jar

RUN mkdir -p /opt/javamail
RUN wget https://repo1.maven.org/maven2/javax/mail/javax.mail-api/1.6.1/javax.mail-api-1.6.1.jar -O /opt/javamail/mail.jar

RUN mkdir -p /opt/jaf
RUN wget https://repo1.maven.org/maven2/javax/activation/activation/1.1.1/activation-1.1.1.jar -O /opt/jaf/activation.jar

ADD dependencies_shasums.txt /
RUN sha256sum --check /dependencies_shasums.txt

RUN git clone https://github.com/bcgit/bc-java.git /code/bc-java

WORKDIR /code/bc-java
RUN git checkout r1rv59
ADD 0001-Add-lcrypto-as-an-output-JAR.patch /code/bc-java
RUN git apply 0001-Add-lcrypto-as-an-output-JAR.patch

RUN ant -f ant/jdk15+.xml build-lw
RUN strip-nondeterminism ./build/artifacts/jdk1.5/jars/bclcrypto-jdk15on-159.jar

