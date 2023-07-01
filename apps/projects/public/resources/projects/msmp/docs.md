## Installation

How to install the MSMP on your server?

### First steps

First of all, you must have a Spigot server for Minecraft 1.19.4: other versions are not supported.
If you don't know how to install it, you must look at the [official documentation](https://www.spigotmc.org/wiki/spigot-installation/).

Then, you can download these plugins:
- [MSMPCore](https://github.com/msmp-mc/msmp-core/releases)
- [AlteredRespawn](https://github.com/msmp-mc/altered-respawn/releases)
- [BasicMazeWorldGenerator](https://github.com/msmp-mc/basic-maze-world-generator/releases)

You must put these plugins in the `plugins` folder of your server.

Finally, you can start your server.

### Basic Configuration

When you start your server, you must wait a few seconds for the plugins to be loaded.
Then, you can stop your server.

You must have these files:
- `plugins/BasicMazeWorldGenerator/config.yml`
- `bukkit.yml`

If you don't have it, you must start your server again.

Now, download this application: [maze-generator-cli](https://github.com/msmp-mc/maze-generator-cli).
And enter this command to create a 36x36 chunks maze with one difficulty:
```bash
./maze-generator -s 100 -d 1 -o maze.txt -g 1
```
The maze will be saved in the `maze.txt` file.

Then, you must put this file in the `plugins/BasicMazeWorldGenerator` folder.

Now, you must edit the `bukkit.yml` file to enable the generation.
Add these lines at the end of the file:
```yml
worlds:
  YOUR_WORLD_NAME:
    generator: BasicMazeWorldGenerator
```
Don't forget to replace the `YOUR_WORLD_NAME` by the name of your world (by default it's `world`). Your world's name is the 
value inside the `level-name` in the server.properties file.

These lines will replace the default world generation by our custom generation.

Finally, you can start your server again and the basic configuration is finished.
