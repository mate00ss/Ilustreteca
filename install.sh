#!/bin/bash
DISTRO_ID_LIKE=$(awk -F= '$1=="ID_LIKE" { print $2 }' /etc/os-release)
# DISTRO_ID=$(awk -F= '$1=="ID" { print $2 }' /etc/os-release)

## PACOTES A INSTALAR
## PACKAGES TO INSTALL


## INSTALANDO PACOTES COM BASE NO TIPO DE DISTRO
## INSTALLING PACKAGES BASED ON DISTRO TYPE
if [ "$DISTRO_ID_LIKE" == "arch" ]
then
    echo "Sistema detectado: $DISTRO_ID_LIKE"
    sleep 2

    PKGS=(systemctl mariadb nodejs git)
    sudo pacman -Syq --noconfirm "$PKGS"

elif [ "$DISTRO_ID_LIKE" == "debian" ] || [ "$DISTRO_ID_LIKE" == "ubuntu" ]
then
    echo "Sistema detectado: $DISTRO_ID_LIKE"
    sleep 2

    PKGS=(systemctl mariadb-server nodejs git)
    sudo apt-get -q install $PKGS -y

fi

## HABILITANDO E INICIANDO O SERVIÇO MARIADB
## ENABLING AND STARTING THE MARIADB SERVICE
sudo systemctl enable mariadb && sudo systemctl start mariadb


## CRIANDO A INSTALAÇÃO DO MARIADB
## CREAATING MARIADB INSTALLATION
sudo mariadb-install-db