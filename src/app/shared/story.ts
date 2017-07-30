export class Story {
  private _description: string;
  private _imagePath: string;

  public get description(): string {
    return this._description;
  }

  public get imagePath(): string {
    return this._imagePath;
  }

  public static createStory(description: string, imagePath: string = null): Story {
    const story = new Story();
    story._description = description;
    story._imagePath = imagePath;
    return story;
  }

  constructor() {}
}
