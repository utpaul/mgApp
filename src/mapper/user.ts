export class User {

  private _id:number;
  private _full_name:string;
  private _authority:string;

  constructor(parameters: {id?: number, full_name?: string,authority?:string}) {
    let {id, full_name, authority} = parameters;
    this._id = id;
    this._full_name = full_name;
    this._authority= authority;

  }


  set authority(value: string) {
    this._authority = value;
  }

  get authority(): string {
    return this._authority;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._full_name;
  }

  set name(value: string) {
    this._full_name = value;
  }

}
