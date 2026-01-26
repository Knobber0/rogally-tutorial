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

	- 11. Q: **How do i uninstall this?**

	      A: Just delete the Engine.ini and game will use the default one.



### Cyberpunk 2077 

1. General Performance Improvements (ini Tweaks) - Updated for 2.0 by TheManualEnhancer - Link can be found [here](https://www.nexusmods.com/cyberpunk2077/mods/7330?tab=description)

2. Requirements: 

|Mod name | Notes |
|---------|-------|
|Cyber Engine Tweaks |	Only for CET version|
|Native Settings UI   |	Only for CET version|

3. What does this mod change?

::: details What does this do (most features are optional in the CET mod version)?
- Changes autosave interval from 5 minutes to 10 minutes (along with a few other saving/loading tweaks)... Note: This is no longer included as of game v2.0, as it breaks Phantom Liberty story progression. If you'd like, you can fully disable autosaves using my No More Autosaves mod.

- Very slightly reduces LODs for decals...

- Disables ASYNC Compute (Alternate version available without this for modern GPUs, i.e.: GTX 10XX or newer... Could be worse on some newer cards, though, so you may want to try both)...

- Makes the game utilize multiple CPU cores slightly better

- Makes the game utilize GPU/VRAM better (will increase VRAM usage, but should only do so if you have VRAM to spare)

- Optional "RTX_Tweaks" download that very slightly reduces RT lighting and reflections (alternate version that reduces them moreso)... Seems to give a nice boost to FPS lows while using RT :)

- Optional "RTX_Tweaks_75Percent_Distances" download that reduces some RT tracing distances/radii to 75% of their values... This is done with a one-line tweak... Just changed "UnitsToMeters" from 1.00 to 0.75... So is completely compatible with other tweaks that adjust the main values (like my other RTX tweaks)... Also, you can easily change this value to anything you want... Increase to boost distance, decrease to lower distance...

- Optional "Res_Scaling_Tweaks" download to slightly reduce FSR/DLSS/DRS quality, which seems to provide a decent boost to FPS highs/lows while not impacting visuals too much...

- Optional "Mip_Bias_Tweak" download that reduces Mip Bias from 1.00 to 0.75... This will use more VRAM and provide a sharper image while also slightly boosting performance if you have spare VRAM... If you're short on VRAM, try increasing the bias to 1.25-1.5 or higher...

- Optional "Feature_Toggles" download that toggles some graphical features (on or off) that aren't super noticeable in trade of a few extra FPS... Check the file if you want to see which features, but I suggest to try to see if you can spot differences in-game first... Should be fun...

- Optional "Rain_Tweaks" download that toggles Rainmap and ScreenSpace rain effects off... Used to be part of the "0Feature_Toggles" file prior to v1.1 of that file... Separated because it's more noticeable than the other tweaks... People that downloaded v1.0 should update if they want these features enabled (or remove the lines about rain from the file)...

- Optional "Extreme_Feature_Toggles" download that combines the feature toggles and rain tweaks above, plus more toggles... Found in the "Miscellaneous" files... See article for list of toggles...

- Optional "Lighting_Shadows_Tweaks" download that reduces some lighting and shadows settings... Will only really make any difference to FPS if you're VRAM-limited (or possibly RAM/HDD speed-limited)...

:::

- 4. Installation:

	- 1. For the installation the creator provides a video on how to install most cyberpunk mods which will be linked but is not guaranteed to work on linux. As well as the instructions he provides do not apply to linux. The [video](https://www.youtube.com/watch?v=JQKFUlc3KBM&feature=youtu.be). Regardless the installation process is still rather similar you just have to find ``Steam\steamapps\common\Cyberpunk 2077`` directory, which should normally be in ``/home/YOURUSERNAME/.local/share/Steam/``


- 5. Uninstallation:

	- 1. Delete the included ini files from your (e.g.: /home/YOURUSERNAME/Steam/steamapps/common/Cyberpunk 2077/engine/config/platform/pc) folder... Their filenames will all start with the number 0 (zero)...

- 6. Know issues with the mod:

	- 1. May cause slight hitches/stuttering during initial game launches and loading of savegames... Doesn't really affect the loading speed, though (if anything it's faster, at least on an SSD... Untested on a HDD)...

	- 2. Potential loss of autosave data due to the autosave changes... Back up your saves if you're worried about this... The changes to this help keep the game running smoother (higher 1%/0.1% FPS lows)... You can also choose not to install the ini file containing these tweaks, named "0SavingLoadingTweaks.ini", or uninstall (delete) it before launching the game for the first time... *Note: This doesn't appear to actually break any saves, but still always good practice to backup every now and then... Check [here on PCGW](https://www.pcgamingwiki.com/wiki/Cyberpunk_2077#Save_game_data_location) for save game file locations...*

	- 3. For info about compatibility with other mods/tweaks, check the "Bugs" tab (and maybe the "Posts")

::: info Note by the creator

Note:
The "Vanilla shots aren't actually vanilla performance... They also include all of my other performance tweaks... I'd be a good 5-10FPS lower without them than what it says in any of the "Vanilla" shots...

Also, the in-game benchmark results in the last images were super consistent... I ran it 4 times for each and the results were basically identical each test... The highest the "minimum FPS" got for untweaked was 22FPS, and I saw the drop every time... It happens right before the camera pans up near the end of the benchmark... It dropped in the same place with the tweaks, but as you can see, it kept me above 30FPS (screenshot is from the worst lows for each)...

I can't test RTX/DLSS due to only having an AMD RX 480, but according to comments these tweaks seem to work fine :)

Join his [discord](https://discord.com/invite/redmodding) for any of his help

:::
