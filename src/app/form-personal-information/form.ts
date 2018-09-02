export class Form {
  constructor(
    public title?: string,
    public name?: string,
    public other_name?: boolean,
    public dob?: string,
    public nationality?: string,
    public right_to_reside?: boolean,
    public marital_status?: string,
    public smoker?: boolean,
    public phone_number?: string,
    public email?: string
  ) {}
}
