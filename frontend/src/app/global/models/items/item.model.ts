export class ItemModel {

  public name!: string;
  public description!: string;
  public price!: number;
  public selected?: boolean

  constructor(model?: any) {
    Object.assign(this, model);
  }
}

