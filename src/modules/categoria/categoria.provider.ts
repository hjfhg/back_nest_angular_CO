import { DataSource } from "typeorm";
import { Categoria } from "./entities/categoria.entity";
import { Inject } from "@nestjs/common";

export const categoriaProviders = [ 
    {
        provide:'CATEGORIA_REPOSITORY',
        useFactory: (dataSourse:DataSource)=>dataSourse.getRepository(Categoria),
        inject:[ 'DATABASE_CONNECTION']
    }
]