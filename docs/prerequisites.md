Before starting the project, we have to prepare platforms and dependencies. In this case, we have to have NodeJs and Geth.
## Prerequisites
- NodeJS 8+
- Geth
- Git
- IDE (Sublime, Visual Studio, Vim ...)

## Setup Development Enviroment
### Windows
We use Chocolaty to install NodeJS and Geth. For installing Choco, please see: [https://chocolatey.org/install#install-with-cmdexe](https://chocolatey.org/install#install-with-cmdexe)

Install NodeJs:
```
choco install nodejs
```
Install Geth
```
choco install geth-stable
```
Install Git
```
choco install git
```

### OSX
Install NodeJs:
```
brew install node
```
Install Geth:
```
brew tap ethereum/ethereum
brew install ethereum
```
Install Git:
```
brew install git
```

### Linux (Debian/Ubuntu)

Install NodeJs:
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
apt-get install -y nodejs
npm install -g npm@latest
```
Install Geth:
```
apt-get install software-properties-common
add-apt-repository -y ppa:ethereum/ethereum
apt-get update
apt-get install -y ethereum
```
Install Git:
```
apt-get install git
```

To confirm all installation is OK, we use command:
```
# Node
node --version
# NPM
npm --version
# Git
git --version
# Geth
geth version
```
