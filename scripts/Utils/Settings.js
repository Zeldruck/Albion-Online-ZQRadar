
class Settings
{
    constructor()
    {       
        this.images = {};
        this.map_images = {}

        this.showMapBackground = false;

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

        this.ignoreList = [];

        this.mobEnchants = [false, false, false, false, false];
        this.mobTiers = [false, false, false, false, false, false, false, false];
        this.mistEnchants = [false, false, false, false, false];
        this.dungeonEnchants = [false, false, false, false, false];

        this.dungeonSolo = false;
        this.dungeonDuo = false;
        this.mistSolo = false;
        this.mistDuo = false;

        this.mobHp = false;

        this.mobOther = false;
        this.mobSkinnable = false;
        this.mobHarvestable = false;
        this.mobBoss = false;
        this.mobDevMode = false;


        // Array or string delimited by ';'
        // Array => for & if
        // String => Find in string
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


        this.harvestingSize = false;
        this.drones = false;


        this.chestGreen = false;
        this.chestBlue = false;
        this.chestPurple = false;
        this.chestYellow = false;

        
    }

    preloadImageAndAddToList(path, container)
    {
        return new Promise((resolve, reject) =>
        {
            switch (container)
            {
                case "ressources":
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

                        img.onerror = reject;

                        img.src = path;
                    }

                    break;

                case "maps":
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

                        img.onerror = reject;

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
            case "ressources":
                return this.images[path];

            case "maps":
                return this.map_images[path];

            default:
                return null;
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


        this.settingDot = this.returnLocalBool("settingDot");
        this.settingNickname = this.returnLocalBool("settingNickname");
        


        this.settingHealth = this.returnLocalBool("settingHealth");
        this.settingMounted = this.returnLocalBool("settingMounted");

        this.settingItems = this.returnLocalBool("settingItems");
        this.settingItemsDev = this.returnLocalBool("settingItemsDev");


        this.settingDistance = this.returnLocalBool("settingDistance");
        this.settingGuild = this.returnLocalBool("settingGuild");
        this.settingSound = this.returnLocalBool("settingSound");

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
        
        this.harvestingSize = this.returnLocalBool("settingRawSize");
        this.mobDevMode = this.returnLocalBool("settingMobDevMode");



        this.mobTiers[0] = this.returnLocalBool("settingMobT1");
        this.mobTiers[1] = this.returnLocalBool("settingMobT2");
        this.mobTiers[2] = this.returnLocalBool("settingMobT3");
        this.mobTiers[3] = this.returnLocalBool("settingMobT4");
        this.mobTiers[4] = this.returnLocalBool("settingMobT5");
        this.mobTiers[5] = this.returnLocalBool("settingMobT6");
        this.mobTiers[6] = this.returnLocalBool("settingMobT7");
        this.mobTiers[7] = this.returnLocalBool("settingMobT8");

        this.mobEnchants[0] = this.returnLocalBool("settingMobE0");
        this.mobEnchants[1] = this.returnLocalBool("settingMobE1");
        this.mobEnchants[2] = this.returnLocalBool("settingMobE2");
        this.mobEnchants[3] = this.returnLocalBool("settingMobE3");
        this.mobEnchants[4] = this.returnLocalBool("settingMobE4");

        this.mobHp = this.returnLocalBool("settingMobShowHp");
        this.mobHarvestable = this.returnLocalBool("settingMobHarvestable");
        this.mobOther = this.returnLocalBool("settingMobOther");
        this.mobSkinnable = this.returnLocalBool("settingMobSkinnable");

        this.mobBoss = this.returnLocalBool("settingBossesOtherBosses");
        this.drones = this.returnLocalBool("settingBossesAvaloneDrones");

        
       
        this.chestGreen = this.returnLocalBool("settingChestGreen");
        this.chestBlue = this.returnLocalBool("settingChestBlue");
        this.chestPurple = this.returnLocalBool("settingChestPurple");
        this.chestYellow = this.returnLocalBool("settingChestYellow");

        this.mistSolo = this.returnLocalBool("settingMistSolo");
        this.mistDuo = this.returnLocalBool("settingMistDuo");


        this.mistEnchants[0] = this.returnLocalBool("settingMistE0");
        this.mistEnchants[1] = this.returnLocalBool("settingMistE1");
        this.mistEnchants[2] = this.returnLocalBool("settingMistE2");
        this.mistEnchants[3] = this.returnLocalBool("settingMistE3");
        this.mistEnchants[4] = this.returnLocalBool("settingMistE4");


        this.dungeonEnchants[0] = this.returnLocalBool("settingDungeonE0");
        this.dungeonEnchants[1] = this.returnLocalBool("settingDungeonE1");
        this.dungeonEnchants[2] = this.returnLocalBool("settingDungeonE2");
        this.dungeonEnchants[3] = this.returnLocalBool("settingDungeonE3");
        this.dungeonEnchants[4] = this.returnLocalBool("settingDungeonE4");



        this.dungeonSolo = this.returnLocalBool("settingDungeonSolo");
        this.dungeonDuo = this.returnLocalBool("settingDungeonDuo");
     

        this.ignoreList = JSON.parse(localStorage.getItem("ignoreList")) || [];

        
    }
}