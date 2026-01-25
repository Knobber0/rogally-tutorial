# This section will cover on how to setup Deckyloader and neccesery plugins

> Credits to [SimpleDeckyTDP](https://github.com/aarron-lee/SimpleDeckyTDP) repo and [Deckyloader](https://github.com/SteamDeckHomebrew/decky-loader).

## What is Deckyloader?

Deckyloader is a plugin loader for steamdeck but works on other handhelds, such as this one.

## What plugins do we need?

We will install SimpleDeckyTDP plugin, which has several features. All the features are listed here below:

:::details SimpleDeckyTDP Features

- per game TDP Profiles (and optional separate AC Power Profiles)
- custom TDP limits
- Power Governor and Energy Performance Preference controls
- GPU Controls - *note, GPU Controls are not available on Intel*
- SMT control
- CPU Boost control* *note, AMD devices require a newer kernel for CPU boost controls*
- CPU boost controls appear automatically if it's available
- set TDP on AC Power events and suspend-resume events
- TDP Polling - useful for devices that change TDP in the background
- Desktop App - see Desktop App Section for more details
- Legion Go TDP via WMI calls (allows for TDP control with secure boot)
- ROG Ally TDP via WMI calls (allows for TDP control with secure boot)
- (For ROG Ally) Battery Charge Limit
- etc

:::

## Compatibility

- Tested on SteamOS, ChimeraOS, NobaraOS, SteamFork, and Bazzite.

- Other distros not tested. Intel support is experimental and still a work in progress.

- Currently NOT compatible with Nvidia or other discrete GPU systems, this plugin is currently for APUs only


## What are the requirements?

### Requirements For AMD:

- This plugin builds + ships ryzenadj for TDP control, but will prioritize any pre-installed ryzenadj binary that can be located in your PATH. ChimeraOS, Bazzite Deck Edition, and NobaraOS Deck edition, should already have ryzenadj pre-installed.

- Certain devices, such as the Steam Deck, Legion Go + S, ROG Ally, and Ally X, do not need ryzenadj for TDP control.

### Requirements For Intel(Experimental):

- Intel support was built for the intel_pstate scaling driver, and is still an experimental work in progress.

- To check if your system is compatible, run the following in terminal:

```bash
cat /sys/devices/system/cpu/cpufreq/policy*/scaling_driver

```

- If the scaling is ``intel_pstate``, then your device should be compatible


## Installation

### Prerequisites:

- Decky Loader must already be installed. To find out how to install deckyloader follow their wiki [here](https://github.com/SteamDeckHomebrew/decky-loader?tab=readme-ov-file#-installation)

### Quick Install / Update

- Run the following in terminal, then reboot. Note that this works both for installing or updating the plugin

```bash
curl -L https://github.com/aarron-lee/SimpleDeckyTDP/raw/main/install.sh | sh
```

## Are there CPU boost controls?

::: info Note

- Note, CPU Boost should generally be disabled for the ROG Ally and Ally X, CPU boost is known to cause excessive power draw on the Ally and Ally X

:::

- CPU Boost controls require a scaling-driver that supports CPU boost. Many distros, by default, use ``amd-pstate-epp`` as the scaling driver. You must be on a newer kernel for to get CPU Boost controls on ``amd-pstate-epp``
	- CPU boost controls will appear automatically if they're available

- If you previously changed to ``amd_pstate=passive`` for to get CPU boost controls on BazziteOS(In case any of you refuse to use archlinux), you can revert it via the following:

```bash
rpm-ostree kargs --delete-if-present=amd_pstate=passive
```

## How do i use this to gain performance?

::: info Note
- Note that every game **SHOULD** have its own Power Profile so you can get best performance and battery for each game respectively.
:::
- To gain performance you basically have to test youreself which TDP works best for you, how much power do you wanna use or how many cores, again even though its the same console the silicon is different and will not perform the same so even though you can be on basically identical hardware you may get different results, thats why i encourge you to test which settings work best for youre game.

