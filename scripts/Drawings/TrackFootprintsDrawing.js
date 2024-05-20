export class TrackFootprintsDrawing extends DrawingUtils {
    constructor(Settings) {
        super(Settings);
    }

    interpolate(footprints, lpX, lpY, t) {
        for (const footprint of footprints) {
            const hX = -1 * footprint.posX + lpX;
            const hY = footprint.posY - lpY;

            if (footprint.hY == 0 && footprint.hX == 0) {
                footprint.hX = hX;
                footprint.hY = hY;
            }

            footprint.hX = this.lerp(footprint.hX, hX, t);
            footprint.hY = this.lerp(footprint.hY, hY, t);
        }
    }

    invalidate(ctx, footprints) {
        const showSolo = this.settings.returnLocalBool("settingFootTracksSolo");
        const showGroup = this.settings.returnLocalBool("settingFootTracksGroup");

        if (!showSolo && !showGroup) {
            return; // No dibujar huellas si ambos ajustes están deshabilitados
        }

        for (const footprint of footprints) {
            const isSolo = footprint.name.includes("SOLO");
            const isGroup = footprint.name.includes("GROUP");

            if ((isSolo && !showSolo) || (isGroup && !showGroup)) {
                continue; // Filtrar huellas según los ajustes
            }

            const point = this.transformPoint(footprint.hX, footprint.hY);
            this.drawFilledCircle(ctx, point.x, point.y, 10, "#FF6347"); // Dibujar un círculo lleno para las huellas

            // Dibujar nombre de la huella
            const textWidth = ctx.measureText(footprint.name).width;
            this.drawTextItems(point.x - textWidth / 2, point.y + 24, footprint.name, ctx, "12px", "yellow");
        }
    }
}
