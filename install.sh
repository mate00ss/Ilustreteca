#!bin/bash
pkgs=(mariadb nodejs)
sudo pacman -S "$pkgs"

sudo mariadb-install-db --user=root --basedir=/usr --datadir=/var/lib/mysql
sudo mariadb-secure-installation
""
""


sudo systemctl enable --now mariadb.service

