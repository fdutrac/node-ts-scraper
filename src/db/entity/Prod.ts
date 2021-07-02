import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 50 })
  name: string;

  @Column("double precision")
  price: number;

  @Column("integer")
  amount: number;

  @Column("timestamp")
  boughtAt: Date;
}
