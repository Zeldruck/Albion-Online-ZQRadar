export class MapDrawing extends DrawingUtils 
{
    constructor(Settings)
    {
        super(Settings);
    }
    
    interpolate(curr_map, lpX, lpY , t)
    {
        const hX = lpX;
        const hY = -lpY;
        
        curr_map.hX = this.lerp(curr_map.hX, hX, t);
        curr_map.hY = this.lerp(curr_map.hY, hY, t);
    }

    Draw(ctx, curr_map)
    {
        //const point = this.transformPoint(curr_map.hX, curr_map.hY);

        if (curr_map.id < 0)
            return;

        this.DrawImageMap(ctx, curr_map.hX*4, curr_map.hY*4, curr_map.id.toString(), 825*4);
    }

    DrawImageMap(ctx, x, y, drawTo, size)
    {
        if (drawTo === undefined || drawTo.toLowerCase().includes("undefined"))
            return;

        // Fill background => if no map image or corner not glitchy
        ctx.fillStyle = '#1a1c23';
        ctx.fillRect(0, 0, ctx.width, ctx.height);

        if (!this.settings.settingShowMap) return;

        const src = "/images/Maps/" + drawTo + ".png";

        const preloadedImage = this.settings.GetPreloadedImage(src, "maps");


        if (preloadedImage)
        {
            ctx.save();

            /*

            const angle = -0.7071;

            let newX = x * angle - y * angle;
            let newY = x * angle + y * angle;
            newX *= 4;
            newY *= 4;

            newX += 250;
            newY += 250;

            return { x: newX, y: newY };

            */

            /*ctx.translate(250, 250);
            //ctx.translate(-newX, -newY);
            //ctx.rotate(0.7071);
            ctx.rotate(0.785398);
            ctx.translate(-x, -y);
            ctx.scale(1, -1);
            
             
            ctx.drawImage(preloadedImage, -size/2, -size/2, size, size);
            ctx.restore();*/

            ctx.scale(1, -1);
            ctx.translate(250, -250);
            
            ctx.rotate(-0.785398);
            ctx.translate(-x, y);
            //ctx.translate(-x, -y);
             
            ctx.drawImage(preloadedImage, -size/2, -size/2, size, size);
            ctx.restore();
        }
        else
        {
            this.settings.preloadImageAndAddToList(src, "maps");
        }
    }
}