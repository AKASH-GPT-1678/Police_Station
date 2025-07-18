import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class AssetHistory {

    @PrimaryColumn()
    id: string

    @Column()
    assetId: string

    @Column()
    movedTo: string

    @Column()
    movedFrom: string


    @Column()
    createdAt: Date


}
