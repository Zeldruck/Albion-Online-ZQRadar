
class Settings
{
    constructor()
    {
        //#region Initialization
        this.images = {};
        this.item_images = {}
        this.map_images = {}
        //#endregion

        //#region Maps
        this.showMapBackground = false;
        //#endregion

        //#region Players
        this.settingDot = false;
        this.settingNickname = false;
        this.settingHealth = false;
        this.settingMounted = false;
        this.settingItems = false;
        this.settingItemsDev = false;
        this.settingDistance = false;
        this.settingGuild = false;
        this.scale = 4.0;
        this.settingSound = false;
        //#endregion

        this.ignoreList = [];

        // Array or string delimited by ';'
        // Array => for & if
        // String => Find in string
        //#region Static ressources 
        this.harvestingFiberTiers = [false, false, false, false, false, false, false, false];
        this.harvestingFiberEnchants = [false, false, false, false, false, false];

        this.harvestingLogTiers = [false, false, false, false, false, false, false, false];
        this.harvestingLogEnchants = [false, false, false, false, false, false];

        this.harvestingHideTiers = [false, false, false, false, false, false, false, false];
        this.harvestingHideEnchants = [false, false, false, false, false, false];

        this.harvestingOreTiers = [false, false, false, false, false, false, false, false];
        this.harvestingOreEnchants = [false, false, false, false, false, false];

        this.harvestingRockTiers = [false, false, false, false, false, false, false, false];
        this.harvestingRockEnchants = [false, false, false, false, false, false];
        //#endregion

        //#region Living ressources
        this.harvestingLivingFiberTiers = [false, false, false, false, false, false, false, false];
        this.harvestingLivingFiberEnchants = [false, false, false, false, false, false];

        this.harvestingLivingLogTiers = [false, false, false, false, false, false, false, false];
        this.harvestingLivingLogEnchants = [false, false, false, false, false, false];

        this.harvestingLivingHideTiers = [false, false, false, false, false, false, false, false];
        this.harvestingLivingHideEnchants = [false, false, false, false, false, false];

        this.harvestingLivingOreTiers = [false, false, false, false, false, false, false, false];
        this.harvestingLivingOreEnchants = [false, false, false, false, false, false];

        this.harvestingLivingRockTiers = [false, false, false, false, false, false, false, false];
        this.harvestingLivingRockEnchants = [false, false, false, false, false, false];

        this.livingResourcesHP = false;
        this.livingResourcesID = false;
        //#endregion

        //#region Dungeons
        this.mistSolo = false;
        this.mistDuo = false;
        this.mistEnchants = [false, false, false, false, false];

        this.dungeonSolo = false;
        this.dungeonDuo = false;
        this.dungeonEnchants = [false, false, false, false, false];
        //#endregion

        //#region Enemies
        this.enemyLevels = [false, false, false, false, false];

        this.avaloneDrones = false;
        this.showUnmanagedEnemies = false;

        //#region Mists
        this.bossCrystalSpider = false;
        this.bossFairyDragon = false;
        this.bossVeilWeaver = false;
        this.bossGriffin = false;
        //#endregion

        this.enemiesHP = false;
        this.enemiesID = false;
        //#endregion

        //#region Chests
        this.chestGreen = false;
        this.chestBlue = false;
        this.chestPurple = false;
        this.chestYellow = false;
        //#endregion  
    }

    preloadImageAndAddToList(path, container)
    {
        return new Promise((resolve, reject) =>
        {
            switch (container)
            {
                case "Resources":
                    if (this.images[path])
                    {
                        resolve();
                    }
                    else
                    {
                        const img = new Image();

                        img.onload = () =>
                        {
                            this.images[path] = img;
                            resolve();
                        };

                        img.onerror = () => 
                        {
                            this.images[path] = null;
                            reject();
                        };

                        img.src = path;
                    }

                    break;

                case "Maps":
                    if (this.map_images[path])
                    {
                        resolve();
                    }
                    else
                    {
                        const img = new Image();

                        img.onload = () =>
                        {
                            this.map_images[path] = img; 
                            resolve();
                        };

                        img.onerror = () =>
                        {
                            this.map_images[path] = null;
                            reject();
                        };

                        img.src = path;
                    }

                    break;

                case "Items":
                    if (this.item_images[path])
                    {
                        resolve();
                    }
                    else
                    {
                        const img = new Image();

                        img.onload = () =>
                        {
                            this.item_images[path] = img; 
                            resolve();
                        };

                        img.onerror = () =>
                        {
                            this.item_images[path] = null;
                            reject();
                        };

                        img.src = path;
                    }

                    break;

                default:
                    reject();
                    break;
            }
        });
    }

    GetPreloadedImage(path, container)
    {
        switch (container)
        {
            case "Resources":
                return this.images[path];

            case "Maps":
                return this.map_images[path];

            case "Items":
                return this.item_images[path];

            default:
                return null;
        }
    }

    ClearPreloadedImages(container)
    {
        switch (container)
        {
            case "Resources":
                this.images = {};
                break;

            case "Maps":
                this.map_images = {};
                break;

            case "Items":
                this.item_images = {};
                break;

            case "_ALL_":
                this.images = {};
                this.map_images = {};
                this.item_images = {};
                break;
        }
    }

    returnLocalBool(item) {
        if (localStorage.getItem(item) == "true") {
            return true;
        }
        else {
            return false;
        }


    }

    update()
    {
        this.showMapBackground = this.returnLocalBool("settingShowMap");

        //#region Players
        this.settingDot = this.returnLocalBool("settingDot");
        this.settingNickname = this.returnLocalBool("settingNickname");
        this.settingHealth = this.returnLocalBool("settingHealth");
        this.settingMounted = this.returnLocalBool("settingMounted");
        this.settingItems = this.returnLocalBool("settingItems");
        this.settingItemsDev = this.returnLocalBool("settingItemsDev");
        this.settingDistance = this.returnLocalBool("settingDistance");
        this.settingGuild = this.returnLocalBool("settingGuild");
        this.settingSound = this.returnLocalBool("settingSound");
        //#endregion


        //#region Resources
        /* Static harvestables */
        // Tier
        this.harvestingFiberTiers[0] = this.returnLocalBool("settingRawFiberT1");
        this.harvestingFiberTiers[1] = this.returnLocalBool("settingRawFiberT2");
        this.harvestingFiberTiers[2] = this.returnLocalBool("settingRawFiberT3");
        this.harvestingFiberTiers[3] = this.returnLocalBool("settingRawFiberT4");
        this.harvestingFiberTiers[4] = this.returnLocalBool("settingRawFiberT5");
        this.harvestingFiberTiers[5] = this.returnLocalBool("settingRawFiberT6");
        this.harvestingFiberTiers[6] = this.returnLocalBool("settingRawFiberT7");
        this.harvestingFiberTiers[7] = this.returnLocalBool("settingRawFiberT8");
        // Enchant
        this.harvestingFiberEnchants[0] = this.returnLocalBool("settingRawFiberE0");
        this.harvestingFiberEnchants[1] = this.returnLocalBool("settingRawFiberE1");
        this.harvestingFiberEnchants[2] = this.returnLocalBool("settingRawFiberE2");
        this.harvestingFiberEnchants[3] = this.returnLocalBool("settingRawFiberE3");
        this.harvestingFiberEnchants[4] = this.returnLocalBool("settingRawFiberE4");

        // Tier
        this.harvestingRockTiers[0] = this.returnLocalBool("settingRawRockT1");
        this.harvestingRockTiers[1] = this.returnLocalBool("settingRawRockT2");
        this.harvestingRockTiers[2] = this.returnLocalBool("settingRawRockT3");
        this.harvestingRockTiers[3] = this.returnLocalBool("settingRawRockT4");
        this.harvestingRockTiers[4] = this.returnLocalBool("settingRawRockT5");
        this.harvestingRockTiers[5] = this.returnLocalBool("settingRawRockT6");
        this.harvestingRockTiers[6] = this.returnLocalBool("settingRawRockT7");
        this.harvestingRockTiers[7] = this.returnLocalBool("settingRawRockT8");
        // Enchant
        this.harvestingRockEnchants[0] = this.returnLocalBool("settingRawRockE0");
        this.harvestingRockEnchants[1] = this.returnLocalBool("settingRawRockE1");
        this.harvestingRockEnchants[2] = this.returnLocalBool("settingRawRockE2");
        this.harvestingRockEnchants[3] = this.returnLocalBool("settingRawRockE3");
        this.harvestingRockEnchants[4] = this.returnLocalBool("settingRawRockE4");

        // Tier
        this.harvestingOreTiers[0] = this.returnLocalBool("settingRawOreT1");
        this.harvestingOreTiers[1] = this.returnLocalBool("settingRawOreT2");
        this.harvestingOreTiers[2] = this.returnLocalBool("settingRawOreT3");
        this.harvestingOreTiers[3] = this.returnLocalBool("settingRawOreT4");
        this.harvestingOreTiers[4] = this.returnLocalBool("settingRawOreT5");
        this.harvestingOreTiers[5] = this.returnLocalBool("settingRawOreT6");
        this.harvestingOreTiers[6] = this.returnLocalBool("settingRawOreT7");
        this.harvestingOreTiers[7] = this.returnLocalBool("settingRawOreT8");
        // Enchant
        this.harvestingOreEnchants[0] = this.returnLocalBool("settingRawOreE0");
        this.harvestingOreEnchants[1] = this.returnLocalBool("settingRawOreE1");
        this.harvestingOreEnchants[2] = this.returnLocalBool("settingRawOreE2");
        this.harvestingOreEnchants[3] = this.returnLocalBool("settingRawOreE3");
        this.harvestingOreEnchants[4] = this.returnLocalBool("settingRawOreE4");

        // Tier
        this.harvestingHideTiers[0] = this.returnLocalBool("settingRawHideT1");
        this.harvestingHideTiers[1] = this.returnLocalBool("settingRawHideT2");
        this.harvestingHideTiers[2] = this.returnLocalBool("settingRawHideT3");
        this.harvestingHideTiers[3] = this.returnLocalBool("settingRawHideT4");
        this.harvestingHideTiers[4] = this.returnLocalBool("settingRawHideT5");
        this.harvestingHideTiers[5] = this.returnLocalBool("settingRawHideT6");
        this.harvestingHideTiers[6] = this.returnLocalBool("settingRawHideT7");
        this.harvestingHideTiers[7] = this.returnLocalBool("settingRawHideT8");
        // Enchant
        this.harvestingHideEnchants[0] = this.returnLocalBool("settingRawHideE0");
        this.harvestingHideEnchants[1] = this.returnLocalBool("settingRawHideE1");
        this.harvestingHideEnchants[2] = this.returnLocalBool("settingRawHideE2");
        this.harvestingHideEnchants[3] = this.returnLocalBool("settingRawHideE3");
        this.harvestingHideEnchants[4] = this.returnLocalBool("settingRawHideE4");

        // Tier
        this.harvestingLogTiers[0] = this.returnLocalBool("settingRawLogT1");
        this.harvestingLogTiers[1] = this.returnLocalBool("settingRawLogT2");
        this.harvestingLogTiers[2] = this.returnLocalBool("settingRawLogT3");
        this.harvestingLogTiers[3] = this.returnLocalBool("settingRawLogT4");
        this.harvestingLogTiers[4] = this.returnLocalBool("settingRawLogT5");
        this.harvestingLogTiers[5] = this.returnLocalBool("settingRawLogT6");
        this.harvestingLogTiers[6] = this.returnLocalBool("settingRawLogT7");
        this.harvestingLogTiers[7] = this.returnLocalBool("settingRawLogT8");
        // Enchant
        this.harvestingLogEnchants[0] = this.returnLocalBool("settingRawLogE0");
        this.harvestingLogEnchants[1] = this.returnLocalBool("settingRawLogE1");
        this.harvestingLogEnchants[2] = this.returnLocalBool("settingRawLogE2");
        this.harvestingLogEnchants[3] = this.returnLocalBool("settingRawLogE3");
        this.harvestingLogEnchants[4] = this.returnLocalBool("settingRawLogE4");


        /* Living harvestables */
        // Tier
        this.harvestingLivingFiberTiers[0] = this.returnLocalBool("settingLivingFiberT1");
        this.harvestingLivingFiberTiers[1] = this.returnLocalBool("settingLivingFiberT2");
        this.harvestingLivingFiberTiers[2] = this.returnLocalBool("settingLivingFiberT3");
        this.harvestingLivingFiberTiers[3] = this.returnLocalBool("settingLivingFiberT4");
        this.harvestingLivingFiberTiers[4] = this.returnLocalBool("settingLivingFiberT5");
        this.harvestingLivingFiberTiers[5] = this.returnLocalBool("settingLivingFiberT6");
        this.harvestingLivingFiberTiers[6] = this.returnLocalBool("settingLivingFiberT7");
        this.harvestingLivingFiberTiers[7] = this.returnLocalBool("settingLivingFiberT8");
        // Enchant
        this.harvestingLivingFiberEnchants[0] = this.returnLocalBool("settingLivingFiberE0");
        this.harvestingLivingFiberEnchants[1] = this.returnLocalBool("settingLivingFiberE1");
        this.harvestingLivingFiberEnchants[2] = this.returnLocalBool("settingLivingFiberE2");
        this.harvestingLivingFiberEnchants[3] = this.returnLocalBool("settingLivingFiberE3");
        this.harvestingLivingFiberEnchants[4] = this.returnLocalBool("settingLivingFiberE4");

        // Tier
        this.harvestingLivingRockTiers[0] = this.returnLocalBool("settingLivingRockT1");
        this.harvestingLivingRockTiers[1] = this.returnLocalBool("settingLivingRockT2");
        this.harvestingLivingRockTiers[2] = this.returnLocalBool("settingLivingRockT3");
        this.harvestingLivingRockTiers[3] = this.returnLocalBool("settingLivingRockT4");
        this.harvestingLivingRockTiers[4] = this.returnLocalBool("settingLivingRockT5");
        this.harvestingLivingRockTiers[5] = this.returnLocalBool("settingLivingRockT6");
        this.harvestingLivingRockTiers[6] = this.returnLocalBool("settingLivingRockT7");
        this.harvestingLivingRockTiers[7] = this.returnLocalBool("settingLivingRockT8");
        // Enchant
        this.harvestingLivingRockEnchants[0] = this.returnLocalBool("settingLivingRockE0");
        this.harvestingLivingRockEnchants[1] = this.returnLocalBool("settingLivingRockE1");
        this.harvestingLivingRockEnchants[2] = this.returnLocalBool("settingLivingRockE2");
        this.harvestingLivingRockEnchants[3] = this.returnLocalBool("settingLivingRockE3");
        this.harvestingLivingRockEnchants[4] = this.returnLocalBool("settingLivingRockE4");

        // Tier
        this.harvestingLivingOreTiers[0] = this.returnLocalBool("settingLivingOreT1");
        this.harvestingLivingOreTiers[1] = this.returnLocalBool("settingLivingOreT2");
        this.harvestingLivingOreTiers[2] = this.returnLocalBool("settingLivingOreT3");
        this.harvestingLivingOreTiers[3] = this.returnLocalBool("settingLivingOreT4");
        this.harvestingLivingOreTiers[4] = this.returnLocalBool("settingLivingOreT5");
        this.harvestingLivingOreTiers[5] = this.returnLocalBool("settingLivingOreT6");
        this.harvestingLivingOreTiers[6] = this.returnLocalBool("settingLivingOreT7");
        this.harvestingLivingOreTiers[7] = this.returnLocalBool("settingLivingOreT8");
        // Enchant
        this.harvestingLivingOreEnchants[0] = this.returnLocalBool("settingLivingOreE0");
        this.harvestingLivingOreEnchants[1] = this.returnLocalBool("settingLivingOreE1");
        this.harvestingLivingOreEnchants[2] = this.returnLocalBool("settingLivingOreE2");
        this.harvestingLivingOreEnchants[3] = this.returnLocalBool("settingLivingOreE3");
        this.harvestingLivingOreEnchants[4] = this.returnLocalBool("settingLivingOreE4");

        // Tier
        this.harvestingLivingHideTiers[0] = this.returnLocalBool("settingLivingHideT1");
        this.harvestingLivingHideTiers[1] = this.returnLocalBool("settingLivingHideT2");
        this.harvestingLivingHideTiers[2] = this.returnLocalBool("settingLivingHideT3");
        this.harvestingLivingHideTiers[3] = this.returnLocalBool("settingLivingHideT4");
        this.harvestingLivingHideTiers[4] = this.returnLocalBool("settingLivingHideT5");
        this.harvestingLivingHideTiers[5] = this.returnLocalBool("settingLivingHideT6");
        this.harvestingLivingHideTiers[6] = this.returnLocalBool("settingLivingHideT7");
        this.harvestingLivingHideTiers[7] = this.returnLocalBool("settingLivingHideT8");
        // Enchant
        this.harvestingLivingHideEnchants[0] = this.returnLocalBool("settingLivingHideE0");
        this.harvestingLivingHideEnchants[1] = this.returnLocalBool("settingLivingHideE1");
        this.harvestingLivingHideEnchants[2] = this.returnLocalBool("settingLivingHideE2");
        this.harvestingLivingHideEnchants[3] = this.returnLocalBool("settingLivingHideE3");
        this.harvestingLivingHideEnchants[4] = this.returnLocalBool("settingLivingHideE4");

        // Tier
        this.harvestingLivingLogTiers[0] = this.returnLocalBool("settingLivingLogT1");
        this.harvestingLivingLogTiers[1] = this.returnLocalBool("settingLivingLogT2");
        this.harvestingLivingLogTiers[2] = this.returnLocalBool("settingLivingLogT3");
        this.harvestingLivingLogTiers[3] = this.returnLocalBool("settingLivingLogT4");
        this.harvestingLivingLogTiers[4] = this.returnLocalBool("settingLivingLogT5");
        this.harvestingLivingLogTiers[5] = this.returnLocalBool("settingLivingLogT6");
        this.harvestingLivingLogTiers[6] = this.returnLocalBool("settingLivingLogT7");
        this.harvestingLivingLogTiers[7] = this.returnLocalBool("settingLivingLogT8");
        // Enchant
        this.harvestingLivingLogEnchants[0] = this.returnLocalBool("settingLivingLogE0");
        this.harvestingLivingLogEnchants[1] = this.returnLocalBool("settingLivingLogE1");
        this.harvestingLivingLogEnchants[2] = this.returnLocalBool("settingLivingLogE2");
        this.harvestingLivingLogEnchants[3] = this.returnLocalBool("settingLivingLogE3");
        this.harvestingLivingLogEnchants[4] = this.returnLocalBool("settingLivingLogE4");

        this.livingResourcesHP = this.returnLocalBool("settingLivingResourcesHP");
        this.livingResourcesID = this.returnLocalBool("settingLivingResourcesID");
        //#endregion

        //#region Enemies
        this.enemyLevels[0] = this.returnLocalBool("settingNormalEnemy");
        this.enemyLevels[1] = this.returnLocalBool("settingMediumEnemy");
        this.enemyLevels[2] = this.returnLocalBool("settingEnchantedEnemy");
        this.enemyLevels[3] = this.returnLocalBool("settingMiniBossEnemy");
        this.enemyLevels[4] = this.returnLocalBool("settingBossEnemy");

        this.avaloneDrones = this.returnLocalBool("settingAvaloneDrones");
        this.showUnmanagedEnemies = this.returnLocalBool("settingShowUnmanagedEnemies");

        this.enemiesHP = this.returnLocalBool("settingEnemiesHP");
        this.enemiesID = this.returnLocalBool("settingEnemiesID");

        //#region Mists
        // TODO
        // Mists beasts
        this.bossCrystalSpider = this.returnLocalBool("settingBossCrystalSpider");
        this.bossFairyDragon = this.returnLocalBool("settingBossFairyDragon");
        this.bossVeilWeaver = this.returnLocalBool("settingBossVeilWeaver");
        this.bossGriffin = this.returnLocalBool("settingBossGriffin");
        //#endregion
        //#endregion
        
        //#region Chests
        this.chestGreen = this.returnLocalBool("settingChestGreen");
        this.chestBlue = this.returnLocalBool("settingChestBlue");
        this.chestPurple = this.returnLocalBool("settingChestPurple");
        this.chestYellow = this.returnLocalBool("settingChestYellow");
        //#endregion

        //#region Mists
        this.mistSolo = this.returnLocalBool("settingMistSolo");
        this.mistDuo = this.returnLocalBool("settingMistDuo");


        this.mistEnchants[0] = this.returnLocalBool("settingMistE0");
        this.mistEnchants[1] = this.returnLocalBool("settingMistE1");
        this.mistEnchants[2] = this.returnLocalBool("settingMistE2");
        this.mistEnchants[3] = this.returnLocalBool("settingMistE3");
        this.mistEnchants[4] = this.returnLocalBool("settingMistE4");
        //#endregion

        //#region Dungeons
        this.dungeonEnchants[0] = this.returnLocalBool("settingDungeonE0");
        this.dungeonEnchants[1] = this.returnLocalBool("settingDungeonE1");
        this.dungeonEnchants[2] = this.returnLocalBool("settingDungeonE2");
        this.dungeonEnchants[3] = this.returnLocalBool("settingDungeonE3");
        this.dungeonEnchants[4] = this.returnLocalBool("settingDungeonE4");

        this.dungeonSolo = this.returnLocalBool("settingDungeonSolo");
        this.dungeonDuo = this.returnLocalBool("settingDungeonDuo");
        //#endregion

        this.ignoreList = JSON.parse(localStorage.getItem("ignoreList")) || [];
        
    }
}