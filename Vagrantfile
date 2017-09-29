# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.provision "file", source: "~/.ssh/id_rsa", destination: "~/.ssh/id_rsa"
  config.vm.provision "file", source: "~/.ssh/id_rsa.pub", destination: "~/.ssh/id_rsa.pub"
  config.vm.provision "shell", inline: <<-SHELL
    apt-get install software-properties-common
    add-apt-repository -y ppa:ethereum/ethereum
    apt-get update
    apt-get install -y git unzip wget curl ethereum

    echo Installing NodeJS 8x ...
    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    apt-get install -y nodejs
    npm install -g npm@latest
    npm install -g nodemon
    npm install -g solc
  SHELL

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
