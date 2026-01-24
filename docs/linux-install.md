# Installing Archlinux

## Why Archlinux?

I have choosen archlinux because it has aboslute freedom to do anything, but also because other operating systems while good intergration have their own issues nobody seems to address and just glazes the project. For example i have not choosen bazzite because it is filled to the brim with flatpaks, and flatpaks while some may consider "good" are generally pretty bad because of permission issues and uneccesery sandbox resulting in poor-er performance. While on the other hand CachyOS is pretty decent it just has tons of stuff that are not really neccesery for the Rog Ally.

## How to actually install Archlinux?

::: info

Make sure to boot into bios before and disable secure boot to avoid issues when install archlinux. While IT IS possible to install archlinux with secure boot enabled its not worth the trouble as of now. You can boot into bios by Holding ``Volume Up`` + ``Power``.

:::

The installation phase is pretty simple, you can install arch by following these few steps:

- 1. Download the archlinux iso from their website

- 2. Download Rufus

- 3. Plug in a USB drive(prefferably 3.0) and flash it with the archlinux iso file using rufus

- 4. Reboot the device and boot into bios and select youre usb and click on the ``Archlinux install medium`` option.

- 5. Now you need to connect to wifi, to do that check the archwiki page [here](https://wiki.archlinux.org/title/Iwctl) - You can also connect with ethernet by plugging in the cable.

- 6. Once youre connected type ``archinstall`` and follow the UI.

::: info

While for begginers i would suggest Kde Plasma despite its bugs and bloat and poor settings. If you are more experienced personally i would suggest just switching to WM/Window Manager because the workflow is keyboard based and they tend to use way less ram, personally i would suggest Hyprland because you can setup touch support although i have not tried yet.

Also when you install steam originaly its gona be in the standard desktop mode, to change that just modify the steam.desktop file in /usr/share/applications or /.local/share/applications and at "Exec=steam" add -gampadui so it looks like "Exec=steam -gamepadui"

:::


