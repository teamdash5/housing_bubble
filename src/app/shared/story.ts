export class Story {
  constructor() {}
  private _description: string;
  
  public get description(): string {
    return this._description;
  }

  public static createStory(description: string): Story {
    const story = new Story();
    story._description = description;
    return story;
  }
}
