/* eslint-disable prettier/prettier */
import { AerolineaEntity } from "src/aerolinea/aerolinea.entity";
import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AeropuertoEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string;
 
    @Column()
    nombre: string;
 
    @Column()
    codigoIATA: string;
   
    @Column()
    pais: string;

    @Column()
    ciudad: string;

    @ManyToOne(() => AerolineaEntity, aerolinea => aerolinea.aeropuertos)
    aerolinea: AerolineaEntity;
}
