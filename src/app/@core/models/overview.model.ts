export class Overview {
  public ID: number;
  public City: string;
  public Phone: string;

  constructor() {
    this.ID = 0;
    this.City = '';
    this.Phone = '';
  }
}
export class Country {
  public ID: number;
  public Country: string;
  public Area: number;
  public Population_Urban: number;
  public Population_Rural: number;
  public Population_Total: number;
  public GDP_Agriculture: number;
  public GDP_Industry: number;
  public GDP_Services: number;
  public GDP_Total: number;

  constructor() {
    this.ID = 0;
    this.Country = '';
    this.Area = 0;
    this.Population_Urban = 0;
    this.Population_Rural = 0;
    this.Population_Total = 0;
    this.GDP_Agriculture = 0;
    this.GDP_Industry = 0;
    this.GDP_Services = 0;
    this.GDP_Total = 0;
  }
}
