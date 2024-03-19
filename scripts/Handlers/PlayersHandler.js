import { name } from "ejs";


 class Player {
    constructor(posX, posY, id, nickname, guildName1, currentHealth, initialHealth, items, flagId) {
        this.posX = posX;
        this.posY = posY;
        this.oldPosX = posX;
        this.oldPosY = posY;
        this.id = id;
        this.nickname = nickname;
        this.guildName = guildName1;
        this.hX = 0;
        this.hY = 0;
        this.currentHealth = currentHealth;
        this.initialHealth = initialHealth;
        this.items = items;
        this.flagId = flagId;
        this.mounted = false; // Initialize mounted status as false
    }

    setMounted(mounted) {
        this.mounted = mounted;
    }
}

export class PlayersHandler {
    constructor(settings) {
        this.playersInRange = [];
        this.localPlayer = new Player();
        this.invalidate = false;

        this.settings = settings;

        this.ignorePlayers = [];
        this.ignoreGuilds = [];
        this.ignoreAlliances = [];

        this.alreadyIgnoredPlayers = [];

        this.settings.ignoreList.forEach((element) => {
            const name = element['Name'];

            switch (element['Type']) {
                case 'Player':
                    this.ignorePlayers.push(name);
                    break;

                case 'Guild':
                    this.ignoreGuilds.push(name);
                    break;

                case 'Alliance':
                    this.ignoreAlliances.push(name);
                    break;
            
                default: // Default is player
                    this.ignorePlayers.push(name);
                    break;
            }
        });
    }

    getPlayersInRange() {
        try {
            return [...this.playersInRange]; // Create a copy of the array
        } finally {

        }
    }

    updateItems(id, Parameters) {

        let items = null;

        try {
            items = Parameters[2];
        }
        catch
        {
            items = null;
        }

        if (items != null) {
            this.playersInRange.forEach(playerOne => {
                if (playerOne.id === id) {
                    playerOne.items = items;
                }
            });
        }
    }

    handleNewPlayerEvent(Parameters)
    {
        if (!this.settings.settingDot)
            return;

        if (this.alreadyIgnoredPlayers.find(name => name === nickname.toUpperCase()))
            return;

        /* General */
        const id = Parameters[0];
        const nickname = Parameters[1];

        if (this.ignorePlayers.find(name => name === nickname.toUpperCase()))
        {
            this.alreadyIgnoredPlayers.push(nickname.toUpperCase());
            return;
        }

        const guildName = String(Parameters[8]); 

        if (this.ignoreGuilds.find(name => name === guildName.toUpperCase()))
        {
            this.alreadyIgnoredPlayers.push(nickname.toUpperCase());
            return;
        }

        const ally = String(Parameters[48]);

        console.log(Parameters);

        // TODO
        /*if (this.ignoreAlliances.find(name => name === ally.toUpperCase()))
        {
            this.alreadyIgnoredPlayers.push(nickname.toUpperCase());
            return;
        }*/

        /* Position */
        var positionArray = Parameters[14];
        const posX = positionArray[0];
        const posY = positionArray[1];

        /* Health */
        const currentHealth = Parameters[20];
        const initialHealth = Parameters[21];

        /* Items & flag */
        const items = Parameters[38];
        const flagId = Parameters[51];

        this.addPlayer(posX, posY, id, nickname, guildName, currentHealth, initialHealth, items, this.settings.settingSound, flagId);
    }

    handleMountedPlayerEvent(id, parameters)
    {
        let ten = parameters[10];
    
        let mounted = parameters[11];

        if (mounted == "true" || mounted == true)
        {
            this.updatePlayerMounted(id, true);
        } 
        else if (ten == "-1")
        {
            this.updatePlayerMounted(id, true);
        } 
        else
        {
            this.updatePlayerMounted(id, false);
        }
    }

    addPlayer(posX, posY, id, nickname, guildName, currentHealth, initialHealth, items, sound, flagId)
    {
        const existingPlayer = this.playersInRange.find(player => player.id === id);
     
        if (existingPlayer) return;

        const player = new Player(posX, posY, id, nickname, guildName, currentHealth, initialHealth, items, flagId);
        this.playersInRange.push(player);

        if (!sound) return;

        const audio = new Audio('/sounds/player.mp3');
        audio.play();
    }

    updateLocalPlayerNextPosition(posX, posY) {
        // TODO: Implement update local player next position
        throw new Error('Not implemented');
    }

    updatePlayerMounted(id, mounted)
    {
        for (const player of this.playersInRange) {
            if (player.id === id) {
                player.setMounted(mounted);
                break;
            }
        }
    }

    removePlayer(id)
    {
        this.playersInRange = this.playersInRange.filter(player => player.id !== id);
    }

    updateLocalPlayerPosition(posX, posY) {
        // Implement a local player lock mechanism
        this.localPlayer.posX = posX;
        this.localPlayer.posY = posY;
    }

    localPlayerPosX() {
        // Implement a local player lock mechanism
        return this.localPlayer.posX;
    }

    localPlayerPosY() {
        // Implement a local player lock mechanism
        return this.localPlayer.posY;
     }

    updatePlayerPosition(id, posX, posY)
    {
        for (const player of this.playersInRange)
        {
            if (player.id === id)
            {
                player.posX = posX;
                player.posY = posY;
            }
        }
    }

    UpdatePlayerHealth(Parameters)
    {
        var uPlayer = this.playersInRange.find(player => player.id === Parameters[0]);

        if (!uPlayer) return;

        uPlayer.currentHealth = Parameters[2];
        uPlayer.initialHealth = Parameters[3];
    }

    clear()
    {
        this.playersInRange = [];
    }
}