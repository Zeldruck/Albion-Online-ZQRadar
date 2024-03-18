class Fish
{
    constructor(id, posX, posY, name)
    {
        this.id = id;
        this.posX = posX;
        this.posY = posY;
        this.name = name;
        this.hX = 0;
        this.hY = 0;
    }
}

export class FishingHandler
{
    constructor(settings)
    {
        this.settings = settings;
        this.fishes = [];
    }

    NewFishEvent(Parameters)
    {
        //if (!this.settings.showFish) return;

        if (Parameters[4] == undefined || Parameters[4] == "")
            return;

        console.log("New Fishing Zone:");
        console.log(Parameters);
        console.log();

        const id = Parameters[0];

        if (this.fishes.some(fish => fish.id === id))
            return;

        this.fishes.push(new Fish(id, Parameters[1][0], Parameters[1][1]));
    }

    FishingEnd(Parameters)
    {
        //if (!this.settings.showFish) return;

        console.log("Fishing END:");
        console.log(Parameters);
        console.log();

        const id = Parameters[0];

        if (!this.fishes.some(fish => fish.id === id))
            return;

            this.RemoveCage(id);
    }

    RemoveFish(id)
    {
        this.fishes = this.fishes.filter(fish => fish.id !== id);
    }
}