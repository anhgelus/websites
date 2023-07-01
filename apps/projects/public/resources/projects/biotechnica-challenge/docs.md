## Installation

To play with this modpack, you must install it on the server-side and on the client-side.

### Client Side

To install it on the client-side, install it as a normal Modrinth modpack.

Follow [these instructions](https://docs.modrinth.com/docs/modpacks/playing_modpacks/) if you don't know how to install it.

If you don't know wich launcher used, I recommend you to use the [PrismLauncher](https://prismlauncher.org/).

### Server Side

There are two ways to install the modpack on the server side: [Docker](https://www.docker.com) and [mrpack-install](https://github.com/nothub/mrpack-install).

After installing the server, don't forget to set up Simple Voice Chat by editing the file `config/voicechat/voicechat-server.properties`
(necessary if you are using Docker or a custom setup) and to look at the 
[Player Tracking Compass](https://modrinth.com/mod/player-tracking-compass) mod.

#### Docker

Follow these steps to install it with Docker:

1. Install Docker
2. Clone the repo `git clone https://github.com/anhgelus/biotechnica-challenge.git`
3. Go into the folder called "docker" inside the cloned repo `cd biotechnica-challenge/docker`
4. Rename the `.env.example` into `.env` `mv .env.example .env`
5. Setup the environment variables inside the `.env`
    * `MODPACK_LINK` - Direct link to download the modpack (get it from Modrinth). It should look like this `https://cdn.modrinth.com/data/t8UHSB82/versions/IDTqzFur/BioTechnica-Challenge-0.6.0.mrpack` (outdated link here but the latest should look very similar to this)
    * `EULA` - Accept the Minecraft's EULA
    * `MEMORY` - The memory used by the server (at least 2G)
6. And start the container ! `docker compose up -d --build`

#### mrpack-install

Follow these steps to install the modpack with mrpack-install:

1. Install mrpack-install
2. Get a direct link to download the modpack. It should look like this `https://cdn.modrinth.com/data/t8UHSB82/versions/IDTqzFur/BioTechnica-Challenge-0.6.0.mrpack`.
3. Run `mrpack-install LINK_TO_THE_MODPACK`. It will create a folder called `mc`
4. Go into this folder `cd mc`
5. Start the server with `java -jar quilt-server-launch.jar nogui`.

#### Generating the server with Docker but running it outside of Docker

You don't want to install mrpack-install?

Just follow the steps to install it with Docker and stop it when Minecraft server start (you can see when it starts with `docker compose logs`).

It will create a folder called `minecraft-data` and follow these steps:

1. Give you the "own" of the folder `chown -R user:user minecraft-data` (don't forget to replace "user" by your username)
2. Go into this folder `cd minecraft-data`
3. Start the server with `java -jar quilt-server-launch.jar nogui`.

## Usage

The datapack included in the modpack provide some commands to help the management of the game.

### Commands

- `/function biotechnica-life:killer/i_am_the_killer` - Set the player as the killer
- `/function biotechnica-life:killer/i_am_not_the_killer` - Remove a player from the killer list (if he was the killer)
- `/function biotechnica-life:start` - Start the game (it will reset the world by cleaning all the players' inventories,
teleport them to the spawn and set the time to 0)

### Pre-generate the world

You can pre-generate the world to avoid lag when the players explore the world.

To do that, you can use [Chunky](https://modrinth.com/plugin/chunky) which is included in the modpack.
