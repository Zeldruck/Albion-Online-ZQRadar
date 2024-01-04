export class MobsDrawing extends DrawingUtils
{
    constructor(Settings)
    {
        super(Settings);
    }

    interpolate(mobs, mists, lpX, lpY, t)
    {
        for (const mobOne of mobs)
        {
            const hX = -1 * mobOne.posX + lpX;
            const hY = mobOne.posY - lpY;

            if (mobOne.hY == 0 && mobOne.hX == 0)
            {
                mobOne.hX = hX;
                mobOne.hY = hY;
            }

            mobOne.hX = this.lerp(mobOne.hX, hX, t);
            mobOne.hY = this.lerp(mobOne.hY, hY, t);
        }

        for (const mistOne of mists)
        {
            const hX = -1 * mistOne.posX + lpX;
            const hY = mistOne.posY - lpY;

            if (mistOne.hY == 0 && mistOne.hX == 0)
            {
                mistOne.hX = hX;
                mistOne.hY = hY;

            }

            mistOne.hX = this.lerp(mistOne.hX, hX, t);
            mistOne.hY = this.lerp(mistOne.hY, hY, t);
        }
    }

    invalidate(ctx, mobs, mists)
    {
        for (const mobOne of mobs)
        {
            if (mobOne.type == EnemyType.Boss && !this.settings.bossEnemies)
            {
                continue;
            }
            else if (mobOne.type == EnemyType.Drone && !this.settings.doneEnemies) 
            {
                continue;
            } 
            else
            {
                // TODO
                // Check tier and enchant for each type
                /*if (mobOne.type == 0 || mobOne.type == 1 && !this.settings.mobTiers[mobOne.tier - 1])
                {
                    continue;
                }

                if (!this.settings.mobEnchants[mobOne.enchantmentLevel])
                {
                    continue; 
                }*/
            }
            

            const point = this.transformPoint(mobOne.hX, mobOne.hY);

            if (mobOne.type == EnemyType.LivingSkinnable)
            {
                // Change folder to animals
                this.DrawCustomImage(ctx, point.x, point.y, "hide_" + mobOne.tier + "_" + mobOne.enchantmentLevel, "Resources", 40);
            }
            else if (mobOne.type == EnemyType.LivingHarvestable)
            {
                // Change folder to animals
                if (mobOne.name.includes("wood"))
                {
                    this.DrawCustomImage(ctx, point.x, point.y, "Logs_" + mobOne.tier + "_" + mobOne.enchantmentLevel, "Resources", 40);
                }
                else
                {
                    this.DrawCustomImage(ctx, point.x, point.y, mobOne.name + "_" + mobOne.tier + "_" + mobOne.enchantmentLevel, "Resources", 40);
                }
            }
            else if (mobOne.type == EnemyType.Boss)
            {
                // Change folder to enemies
                this.DrawCustomImage(ctx, point.x, point.y, this.name, "Resources", 40);

            }
            else if (mobOne.type == EnemyType.Drone)
            {
                // Change folder to enemies
                this.DrawCustomImage(ctx, point.x, point.y, "droneicon", "Resources", 40);
            }
            else
            {
                // TODO
                if (mobOne.enchantmentLevel == 1)
                {
                    this.drawFilledCircle(ctx, point.x, point.y, 15, "green");
                }
                else if (mobOne.enchantmentLevel == 2)
                {
                    this.drawFilledCircle(ctx, point.x, point.y, 15, "#45BDEE");
                }
                else if (mobOne.enchantmentLevel == 3)
                {
                    this.drawFilledCircle(ctx, point.x, point.y, 15, "purple");
                }
                else if (mobOne.enchantmentLevel == 4)
                {
                    this.drawFilledCircle(ctx, point.x, point.y, 15, "yellow");
                }
                else
                {
                    this.drawFilledCircle(ctx, point.x, point.y, 10, "#4169E1");
                }             
            }

            let drawHp = false;
            let drawId = false;

            if (mobOne.type == EnemyType.LivingHarvestable || mobOne.type == EnemyType.LivingSkinnable)
            {
                drawHp = this.settings.livingResourcesHp;
                drawId = this.settings.livingResourcesID;
            }
            else
            {
                drawHp = this.settings.enemiesHP;
                drawId = this.settings.enemiesID;
            }

            if (drawHp)
            {
                const textWidth = ctx.measureText(mobOne.health).width;
                this.drawTextItems(point.x - textWidth /2, point.y + 24, mobOne.health, ctx, "12px", "yellow");
            }

            if (drawId)
            {
                this.drawText(point.x, point.y - 20, mobOne.typeId, ctx);
            }
        }

        /* Mist portals */
        for (const mistsOne of mists)
        {
            if (!this.settings.mistEnchants[mistsOne.enchant])
            {
                continue;
            }

            if ((this.settings.mistSolo && mistsOne.type == 0) || (this.settings.mistDuo == true && mistsOne.type == 1))
            {
                // Change image folder
                const point = this.transformPoint(mistsOne.hX, mistsOne.hY);
                this.DrawCustomImage(ctx, point.x, point.y, "mist_" + mistsOne.enchant, "Resources", 30);
            }
        }
    }
}
