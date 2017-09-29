# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.provision "file", source: "~/.ssh/id_rsa", destination: "~/.ssh/id_rsa"
  config.vm.provision "file", source: "~/.ssh/id_rsa.pub", destination: "~/.ssh/id_rsa.pub"
  config.vm.provision "shell", inline: <<-SHELL
    sudo apt-get update
    sudo apt-get install -y git unzip wget curl
    COMPOSE_VERSION=1.9.0

    echo Installing Docker ...
    sudo wget -qO- https://get.docker.com/ | sudo sh && sudo usermod -aG docker vagrant

    echo Installing Docker Compose
    sudo su -
    curl -L https://github.com/docker/compose/releases/download/${COMPOSE_VERSION}/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose

    echo Installing NodeJS 8x ...
    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    apt-get install -y nodejs
    npm install -g npm@latest
    npm install -g nodemon

  SHELL

  config.vm.synced_folder ".", "/vagrant", disabled: true
  config.vm.synced_folder ".", "/vagrant", disabled: true

  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.memory = 8192
    vb.cpus = 2
  end

  config.vm.define "dev" do |n1|
    n1.vm.hostname = "dev"
    # port user service
    n1.vm.network "forwarded_port", guest: 3000, host: 3000
  end
end
