## Presentation

license-generator is a CLI application helping to generate the `LICENSE` file for any open source project.

## Installation

To install the application, you need Go 1.19.

And run this command to install it:
```bash
$ go install github.com/anhgelus/license-generator@latest
```

If after installing the application your shell is saying "Command not found", it means that your `$PATH` is not correctly set.
To fix this issue, just enter this command (it will fix your path by adding the binaries installed by `go install`):
```bash
$ export PATH=${PATH}:`go env GOPATH`/bin
```

Now you can use it!
