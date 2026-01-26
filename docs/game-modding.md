# This section will **NOT** cover how to mod every game out there but will cover some of the mods for the big and popular games.

## Where to get such mods?

- The most common places are github or nexusmods, but different sites may occur depending on your game.

## There will be few examples like Black Myth Wukong and Cyberpunk2077

### Black Myth Wukong


1. Ultimate Engine Tweaks by P40L0X - link to mod [here](https://www.nexusmods.com/blackmythwukong/mods/847?tab=description).

2. If you want to know exactly what every single optimization does and what their combined result is, P40L0X shared his info [here](https://docs.google.com/spreadsheets/d/1A71Q9jd0sm0MaCRWib8SJEY_urNk-Wuyl2pK5UI_4DI/edit?usp=sharing)

3. FAQ by P40L0X(Changed little):


	- 1. Q: **What to choose between the "VRR" and "No VRR" mod variants?**
	    
	     A: VRR stands for Variable Refresh Rate﻿, which can translate to G-Sync for NVIDIA or AMD Freesync for AMD.
	     You need to cross check if it is enabled both on your NVIDIA/AMD Control Panel and the Display itself (Monitor/TV)
	     If yes on both, use the "VRR" variant of the mod.
	     If no, use the "No VRR" variant instead.

	- 2. Q: **When I launch the game the modded Engine.ini is automatically deleted or reverted to default one?**

	     A: Make sure to set the Engine.ini as ``Read-Only`` this will vary depending on your Desktop environment or Window Manager.

	- 3. Q: **My CPU usage is skyrocketing to 100% after the mod**

	     A: This is initial shader compilation which may continue in-game even after the initial precompilation loading screen. Wait 4-5 minutes at max to let the game finish it and CPU usage / performance will return normal.

	- 4. Q: **I have noticeable ghosting**

	     A: Try using FSR4 if you dont mind some of the performance loss, but you will need to mod in FSR4 which will be covered later in the wiki.

	- 5. Q: **Will this make my visuals worse?**

	     A: No :)
		"Lossless" means this mod was created with the goal to optimize everything I could in Unreal Engine without sacrificing visuals and/or altering your in-game graphics' choices (except for Chromatic Aberration removal and Film Grain optimization which you can still revert back by changing their described lines within the Engine.ini itself)
		With improvements to AA, Sharpening, Motion Blur and DLSS/FSR/XeSS you should actually have even better visuals after the mod.

	- 6. Q: **Can i use this with other optimization mods?**

	     A: No unless they do **NOT** modify the Engine.ini then you can but if the mod does modify it, it will likely conflict and break.

	- 7. Q: **Will this Engine.ini disable Achievements?**

	     A: No, this mod does not disable any game features.

	- 8. Q: **Will this Engine.ini work/load also with future game patches?**

	     A: Yes just make sure the file is set to ``Read-Only``.

	- 9. Q: **The game crashes when opening it and/or during gameplay after a while**

	     A: Make sure your Rog Ally is actually stable under sustained load (e.g. you are not using an excessive overclock/undervolt). You can test it using OCCT (launch a 1 hour "CPU+RAM" test, followed by another 1 hour "3D Adaptive" test. If you have even a single error, you need to fix your PC stability first)
	   	Another solution if you use Vortex is to open it, go to the game section -> Load Order and click the last button ⛔ on the top bar ("Reset Plugins File")
		If even doing the above you still crash, try lowering PoolSizeVRAMPercentage=60 (both in [TextureStreaming] and [ConsoleVariables] sections of the .ini), then remember to set the .ini to ``Read-only`` again.

	- 10. Q: **Where do I see a full Changelog for all the updates done to the mod so far?**

	      A: Just go to the mod Description page and click the "Changelogs" button.

