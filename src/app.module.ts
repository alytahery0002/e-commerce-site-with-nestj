import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
// import { CategoryModule } from './category/category.module';
// import { BrandsModule } from './brands/brands.module';
// import { ShoppingModule } from './shopping/shopping.module';
// import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),    
    
    ProductsModule,
    
    
    AuthModule,
    
    
    // OrderModule,
    
    // CategoryModule,
    
    // BrandsModule,
    
    // ShoppingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
