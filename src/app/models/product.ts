export class Product {
  constructor(
    public id?: number,
    public name?: string,
    public category_id?: number,
    public category?: string,
    public code?: string,
    public price?: string,
    public details: any[] = [{}],
    public created_at?: string,
    public updated_at?: string
  ) { }
}
