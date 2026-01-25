# This section will cover how to build a custom kernel 

> Credits to [linux-tkg](https://github.com/Frogging-Family/linux-tkg).

## Why do we need a custom kernel?

- The reason being is that when you use default linux kernel it is not optimized for youre device specifically and is pretty bloated, thats why we build custom kernels that have patches and changes that can help us improve performance.

## What are the downsides of a custom kernel?

- As of now really the only real downside is if you wanna upgrade your kernel version you have to compile manually and wait for tkg to port the patches, but this is not that much of a problem because the Rog Ally has a pretty powerfull cpu that can compile the kernel pretty fast when combined with ccache.

## How do i start?

- 1. You start by cloning the linux-tkg project into youre choosen directory. You can clone by using the following command:

```bash
git clone https://github.com/Frogging-Family/linux-tkg.git
```
- 2. Before starting to use it we wanna make a custom configuration that tkg can recognize, we can do that by running following commands:


```bash
mkdir ~/.config/frogminer
``` 
- 3. After you have made this directory you need to copy the ``customization.cfg`` file from youre ``linux-tkg`` directory into the ``~/.config/frogminer`` directory, you also need to rename it to ``linux-tkg.cfg``


## Which options should i use?

- This table will present which options we will be using and how they affect the compilation and what changes they make.

::: info Note

- Lots of the options just apply patches from other kernels, theres so many patches that its too much to cover in a single website and would need a full on documetation on itself

:::

| Changes | What it does    |
|---------|-----------------|
|_kernel_on_diet="false" | Compiles without neccesery modules to improve compilation speed, **NOTE: Instead of this you CAN use modprobed-db to improve the speed even more** |   
|_debugdisable="true" | Disables debugging features of the kernel to improve compilation speed. |
|_STRIP="true" | Likely to aswell improve compilation speed, not really properly explained in the configuration file. |
|_cpusched="bore" or _cpusched="eevdf" | Both are schedulers for the kernel that manage resouces. You can try either of these, really depends on which kernel version youre trying to compile. |
|_lto_mode="full" | Will increase compilation time in response to improving kernel speed and kernel size. To find out more about LTO you can check [here](https://gcc.gnu.org/wiki/LinkTimeOptimization). |
|_ftracedisable="true" | Disables FUNCTION_TRACER/GRAPH_TRACER, lowering overhead but limiting debugging and analyzing of kernel functions |
|_numadisable="true" | Lowers overhead but breaks Cuda on Nvidia systems |
|_misc_adds="true" | Enables misc additions, not much explained |
|_tickless="2" | Uses idle tickless, tends to perform better on all systems rather then full tickless |
|_glitched_base="true" | Various patches and tweaks from Zen/Liquorix, Xanmod and the community |
|_zenify="true" | A selection of patches from Zen/Liquorix kernel and additional tweaks for a better gaming experience |
|_compileroptlevel="1" | Optimizes kernel for performance, to find more about compiler opt levels check [here](https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html). |
|_timer_freq="500" | Far as i can tell and find about, it just lowers timer interupts, 500-750 tends to be a good option from the information i've found |
|_default_cpu_gov="ondemand" | Uses more resources when theres more demand, if this appears to lower the performance you can try schedutil. **NOTE: Performance governor will reduce battery life by a lot**. |
|_aggressive_ondemand="true" | Enforces ondemand governor stronger. |
|_tcp_cong_alg="bbr" | Uses a better TCP IPv4 Algorythm. Just a general network improvement |
|_clear_patches="true" | Clearlinux patches |

::: info Usefull note

- If you have any kernel arguments/parameters you wanna use, you can use the ``_custom_commandline=""`` setting.
