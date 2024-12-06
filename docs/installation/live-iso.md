---
title: Live ISO Installation
description: Install BlackArch Linux using the Live ISO method
---

# Live ISO Installation Guide

## Download and Verify

1. **Download the ISO**

Download the latest ISO
```bash
wget https://blackarch.org/blackarch-linux-full.iso
```
Download checksums
```bash
wget https://blackarch.org/checksums.txt
```

2. **Verify the ISO**

Verify using SHA1
```bash
sha1sum -c checksums.txt
```

## Create Bootable USB

### Using dd (Linux/Unix)

Replace sdX with your USB device (e.g., sdb)
```bash
sudo dd bs=4M if=blackarch-linux-full.iso of=/dev/sdX status=progress
```

### Using Rufus (Windows)
1. Download Rufus from https://rufus.ie
2. Insert your USB drive
3. Select the BlackArch ISO
4. Choose 'DD Image Mode' when prompted
5. Click Start

## Boot Process

1. **BIOS Settings**
   - Enter BIOS/UEFI settings (usually F2, F12, or Del)
   - Disable Secure Boot
   - Enable USB boot
   - Set boot priority to USB first

2. **Boot Options**
   - Select 'Boot BlackArch Linux (x86_64)'
   - For NVIDIA users, select 'Boot BlackArch Linux (x86_64) with nvidia'
   - For compatibility mode, select 'Boot BlackArch Linux (x86_64) fallback'

## Installation Process

1. **Start the Installer**

```bash
blackarch-install
```

2. **Partition the Disk**

List available disks
```bash
lsblk
```
Create partitions using cfdisk
```bash
cfdisk /dev/sdX
```
Recommended partition scheme:
   - EFI System Partition (ESP): 512MB (if UEFI)
   - Swap: Equal to RAM size
   - Root (/): Remaining space

3. **Format Partitions**

Format EFI partition (if UEFI)
```bash
mkfs.fat -F32 /dev/sdX1
```
Format swap
```bash
mkswap /dev/sdX2
```
Format root partition
```bash
mkfs.ext4 /dev/sdX3
```
4. **Follow the Installer**
   - Select keyboard layout
   - Select language
   - Select timezone
   - Create root password
   - Create user account

## Post-Installation

1. **Update System**
```bash
sudo pacman -Syu
```

2. **Install Tools**
::: warning
Do not install all the tools by executing `sudo pacman -S blackarch`. This will cause havoc on your machine with dependancy conflicts and package corruption. Install packages as you need them!
:::
**Install a tool**
```bash
sudo pacman -S <package>
```

**Install by catagory**
```bash
sudo pacman -S blackarch-<catagory>
```
e.g., blackarch-wireless

3. **Basic Configuration**

Set timezone
```bash
sudo timedatectl set-timezone Region/City
```

Enable NetworkManager
```bash
sudo systemctl enable --now NetworkManager
```

## Troubleshooting

### Common Issues

1. **Boot Problems**
   - Verify ISO checksum
   - Try different USB ports
   - Use compatibility mode boot option

2. **Graphics Issues**
   - Use nomodeset boot parameter
   - Try nvidia boot option
   - Use fallback boot option

3. **Network Issues**
    
    Restart Network Manager
    ```bash
    sudo systemctl restart NetworkManager
    ```
    Check wireless interface
    ```bash
    iwctl
    ```
# Getting Help

- Visit our [Community Forum](/community/)
- Join IRC: #blackarch on Freenode
- Report issues on [GitHub](https://github.com/blackarch/blackarch)

## Additional Resources

- [Official BlackArch Documentation](https://blackarch.org/docs.html)
- [Tool Database](/tools/)
- [Community Guides](/guides/)