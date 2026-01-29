# Installing Arch Linux

---

:::details Why Arch Linux?

This guide uses Arch Linux as it has the freedom to do anything. While other operating systems provide good integration, they have their own unaddressed issues or unnecessary bloat. For example, Bazzite is filled to the brim with flatpaks, which while some may consider flatpaks good, are generally pretty bad because of permission issues and unnecesary sandboxing resulting in worse performance. While on the other hand CachyOS is pretty decent it has a lot of bloat that isn't really necessary for the ROG Ally.

:::
## Prerequisites
- A USB drive (at least 4GB, preferably USB 3.0).
- Backup any important data on your ROG Ally as this process will wipe the drive.
- Internet access (Either WiFi or Ethernet)

## Installing Arch Linux

> [!WARNING]
> Make sure to boot into BIOS before and disable secure boot to avoid issues when install Arch Linux. While it is possible to install Arch Linux with secure boot enabled, it's not worth the trouble as of now. You can boot into BIOS by Holding ``Volume Up`` + ``Power``.

The installation phase is pretty simple, you can install Arch by following these few steps:

1. Download the [Arch Linux ISO](https://archlinux.org/download/) and [Rufus](https://rufus.ie/) from their official websites

2. Plug in your USB drive and flash it with the Arch Linux ISO file using Rufus

3. Reboot the device and boot into the boot selection menu (using ``Volume Down`` + ``Power``) and select your USB and select the ``Archlinux install medium`` option.

4. Connect to WiFi using iwd (via ``iwctl``) (check the [Arch Wiki page](https://wiki.archlinux.org/title/Iwctl) on it for more details) or connect with ethernet by plugging in a cable.

5. Once you're connected, type ``archinstall`` and follow the installation UI.

> [!TIP]
> By default Steam will launch in the standard desktop mode. To change that, modify the steam.desktop file in /usr/share/applications or /.local/share/applications by modifying the line containing "Exec=steam" to contain "-gamepadui", turning it into "Exec=steam -gamepadui"

> [!TIP]
> I recommend using KDE Plasma despite its bugs, bloat and poor settings because it will feel more familiar to most people. If you are more experienced I would suggest switching to WM/Window Manager because the workflow is keyboard based and they tend to use way less RAM. Personally I would suggest Hyprland because you can setup touch support, though I haven't tried yet.