/**
 * The collission mode of the rain.
 */
export enum CollisionMode {
    None,
    Whitelist,
    Blacklist,
    Function,
}

export class Rain {
    /**
     * Enable the rain effects instantly, or over a given easing function if tweenInfo is given.
     * @param tweenInfo - Optional tween information.
     */
    Enable(tweenInfo?: TweenInfo): void;

    /**
     * Disable the rain effects instantly, or over a given easing function if tweenInfo is given.
     * @param tweenInfo - Optional tween information.
     */
    Disable(tweenInfo?: TweenInfo): void;

    /**
     * Set the global color of all rain particles to a given Color3 value.
     * Sets the color instantly, or over a given easing function if tweenInfo is given.
     * Color sequences are not supported because this would lead to a messy effect.
     * The starting value is RAIN_DEFAULT_COLOR.
     * @param color - The color to set.
     * @param tweenInfo - Optional tween information.
     */
    SetColor(color: Color3, tweenInfo?: TweenInfo): void;

    /**
     * Set the global transparency of all rain effects. 0 = regular visibility, 1 = fully invisible.
     * Sets the transparency instantly, or over a given easing function if tweenInfo is given.
     * Clamped between 0 and 1, the starting value is RAIN_DEFAULT_TRANSPARENCY.
     * @param transparency - The transparency value to set.
     * @param tweenInfo - Optional tween information.
     */
    SetTransparency(transparency: number, tweenInfo?: TweenInfo): void;

    /**
     * Set the vertical falling speed of the rain particles. 0 = still, 1 = max falling speed.
     * Sets the speed instantly, or over a given easing function if tweenInfo is given.
     * Clamped between 0 and 1, the starting value is RAIN_DEFAULT_SPEEDRATIO.
     * @param ratio - The speed ratio to set.
     * @param tweenInfo - Optional tween information.
     */
    SetSpeedRatio(ratio: number, tweenInfo?: TweenInfo): void;

    /**
     * Set the intensity of the rain. 0 = no effects, 1 = full effects.
     * Sets the intensity instantly, or over a given easing function if tweenInfo is given.
     * Clamped between 0 and 1, the starting value is RAIN_DEFAULT_INTENSITYRATIO.
     * @param ratio - The intensity ratio to set.
     * @param tweenInfo - Optional tween information.
     */
    SetIntensityRatio(ratio: number, tweenInfo?: TweenInfo): void;

    /**
     * Set the global light emission of all rain effects.
     * Sets the light emission instantly, or over a given easing function if tweenInfo is given.
     * Clamped between 0 and 1, the starting value is RAIN_DEFAULT_LIGHTEMISSION.
     * @param ratio - The light emission ratio to set.
     * @param tweenInfo - Optional tween information.
     */
    SetLightEmission(ratio: number, tweenInfo?: TweenInfo): void;

    /**
     * Set the global light influence of all rain effects.
     * Sets the light influence instantly, or over a given easing function if tweenInfo is given.
     * Clamped between 0 and 1, the starting value is RAIN_DEFAULT_LIGHTINFLUENCE.
     * @param transparency - The light influence transparency to set.
     * @param tweenInfo - Optional tween information.
     */
    SetLightInfluence(transparency: number, tweenInfo?: TweenInfo): void;

    /**
     * Set the global max volume of rain instantly, or over a given easing function if tweenInfo is given.
     * The initial volume of the rain's soundgroup is RAIN_SOUND_BASEVOLUME.
     * @param volume - The volume to set.
     * @param tweenInfo - Optional tween information.
     */
    SetVolume(volume: number, tweenInfo?: TweenInfo): void;

    /**
     * Set a Y coordinate that marks the ceiling of the world. Above this spot, rain will act as if it's indoors.
     * Feed undefined to remove any previously set ceiling.
     * @param ceiling - The ceiling coordinate to set.
     */
    SetCeiling(ceiling: number | undefined): void;

    /**
     * Set the direction that rain falls from. The direction parameter should be a unit direction.
     * Sets the rain direction instantly, or over a given easing function if tweenInfo is given.
     * @param direction - The direction vector to set.
     * @param tweenInfo - Optional tween information.
     */
    SetDirection(direction: Vector3, tweenInfo?: TweenInfo): void;

    /**
     * Adjust the straight texture of the rain effect.
     * @param asset - The asset to set as the straight texture.
     */
    SetStraightTexture(asset: string): void;

    /**
     * Adjust the top-down texture of the rain effect.
     * @param asset - The asset to set as the top-down texture.
     */
    SetTopDownTexture(asset: string): void;

    /**
     * Adjust the splash texture of the rain effect.
     * @param asset - The asset to set as the splash texture.
     */
    SetSplashTexture(asset: string): void;

    /**
     * Adjust the sound effect of the rain effect.
     * @param asset - The asset to set as the sound effect.
     */
    SetSoundId(asset: string): void;

    /**
     * Sets the current way collisions are determined for the rain.
     * @param mode - The collision mode to set.
     */
    SetCollisionMode(mode: CollisionMode.None): void;

    /**
     * Sets the current way collisions are determined for the rain using a whitelist.
     * @param mode - The collision mode to set.
     * @param whitelist - The whitelist of instances to filter with.
     */
    SetCollisionMode(mode: CollisionMode.Whitelist, whitelist: Instance | Instance[]): void;

    /**
     * Sets the current way collisions are determined for the rain using a blacklist.
     * @param mode - The collision mode to set.
     * @param blacklist - The blacklist of instances to filter out.
     */
    SetCollisionMode(mode: CollisionMode.Blacklist, blacklist: Instance | Instance[]): void;

    /**
     * Sets the current way collisions are determined for the rain using a custom function.
     * @param mode - The collision mode to set.
     * @param f - The function that determines if a part can be hit by rain.
     */
    SetCollisionMode(mode: CollisionMode.Function, f: (part: BasePart) => boolean): void;
}
