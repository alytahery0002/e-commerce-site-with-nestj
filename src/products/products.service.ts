import { Injectable,NotFoundException  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Iproducts,products } from 'src/products/schema/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(products.name) private  productsModel: Model<Iproducts>){}

  async create(  CreateProductDto:CreateProductDto) {
    const newProduct=await new this.productsModel(CreateProductDto)
    const result = await newProduct.save();
    return result;
  }

  async findAll() {
     const products=await this.productsModel.find();
     if(!products || products.length==0){
      throw new NotFoundException('products data not found!'); 
     }
    return products;
  }

  async findOne(id: number) {
    const product=await this.productsModel.findById(id);
    if(!product){
     throw new NotFoundException('product data not found!'); 
    }
   return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product=await this.productsModel.findByIdAndUpdate(id,updateProductDto,{new:true})
    console.log(product)
  }

  async remove(id: string) {
    const deletedStudent = await this.productsModel.findByIdAndDelete(id);
  }
}
