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

            // Obtener el nombre de la imagen basado en el parámetro 3
            let imageName = footprint.name.toLowerCase().replace("shared_track_", "");
            if (footprint.type === 'SOLO') {
                imageName = `solo_${imageName}`;
            } else if (footprint.type === 'GROUP') {
                imageName = `group_${imageName}`;
            }

            this.DrawCustomImage(ctx, point.x, point.y, imageName, 'Resources', 60);
        }
    }
}
