import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

console.log(__dirname + "/../schemas/**/*.js");

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "todo.sqlite",
      entities: [__dirname + "/../schemas/**/*.js"],
      synchronize: true
    })
  ]
})
export class TypeormModule {}
