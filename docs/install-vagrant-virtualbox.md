## Windows
1. Install `chocolatey`
Run Command Prompt as administrator and paste the Cmd.exe command copied from `https://chocolatey.org/install#install-with-cmdexe` section.

It should look similar to the following command:
```
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```
After the installation is finished, restart the machine.

2. Install dotnet4.5

Note This is required for the vagrant installation later, see more: https://github.com/teracyhq/dev/issues/348#issuecomment-315068962
Run Command Prompt as administrator and type the following command:

```
choco install dotnet4.5 --version 4.5.20120822 -y
```
After the installation is finished, restart the machine.

3. Install `cygwin` and `cyg-get` 

Type the command below on the opened Command Prompt:
```
choco install cygwin --version 2.8.0 -y --ignore-checksums
choco install cyg-get --version 1.2.1 -y
```

4. Install git, virtualbox and vagrant

Install git:
```
$ cyg-get.bat git
```

Install virtualbox (>=5.1):
```
$ choco install virtualbox --version 5.1.14 -y
```

Install vagrant (>=1.8.7, >=1.9.1):
```
$ choco install vagrant --version 1.9.1 -y
```

## MacOS
1. Install Homebrew and Homebrew Cask
http://brew.sh/
https://caskroom.github.io/

2. Install virtualbox and vagrant

a. Install virtualbox (>=5.1):
```
$ brew cask install virtualbox
```

b. Install vagrant (>=1.8.7, >=1.9.1):
```
$ brew cask install vagrant
```

## Linux (Ubuntu)
1. Install git
```
$ sudo apt-get update
$ sudo apt-get install -y git
```

2. Install virtualbox (>=5.1):
```
$ sudo sh -c "echo 'deb http://download.virtualbox.org/virtualbox/debian '$(lsb_release -cs)' contrib non-free' > /etc/apt/sources.list.d/virtualbox.list" \
&& wget -q http://download.virtualbox.org/virtualbox/debian/oracle_vbox_2016.asc -O- | sudo apt-key add - \
&& wget -q https://www.virtualbox.org/download/oracle_vbox.asc -O- | sudo apt-key add - \
&& sudo apt-get update && sudo apt-get install virtualbox-5.1 -y
```

3. Install vagrant (>=1.8.7, >=1.9.1):
```
$ version=1.9.1 && cd /tmp \
&& wget $(if [ `uname -m` == "x86_64" ]; then echo "https://releases.hashicorp.com/vagrant/$version/vagrant_${version}_x86_64.deb"; else echo "https://releases.hashicorp.com/vagrant/$version/vagrant_${version}_i686.deb"; fi;) \
&& sudo dpkg -i vagrant_${version}* && rm vagrant_${version}* && cd --

```

Refer from [https://goo.gl/1PLwwv](https://goo.gl/1PLwwv)
