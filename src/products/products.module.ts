import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import { productsSchema,products} from './schema/product.schema';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  imports:[MongooseModule.forFeature([{name:products.name,schema:productsSchema}])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
