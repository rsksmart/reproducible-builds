# RSK Reproducible Builds

This repository is an effort to create reproducible builds of [RSKj's][1] dependencies.

## Why

RSKj is an open-source project, and as most projects it depends on other open-source components.
Current Java tools such as Maven or Gradle only provide basic reproducibility support, and it is not enabled by default.
Most of our dependencies don't implement it, and we can't independently verify the path from source code to binary code on public repositories.

RSK will work on building and publishing reproducible versions on of these libraries.

For more details visit the [Reproducible Builds][2] website.

[1]: https://github.com/rsksmart/rskj
[2]: https://reproducible-builds.org
