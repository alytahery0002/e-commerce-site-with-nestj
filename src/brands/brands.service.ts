import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Ibrands,brands} from './entities/brand.schema'
import { createBrands } from './dto/create-brand.dto';


@Injectable()
export class BrandsService {

    constructor(
        @InjectModel(brands.name) private brandsmodel: Model <Ibrands>
    ){}

  create(createBrand: createBrands) {
    const newBrand=new this.brandsmodel(createBrand)
  }

  findAll() {
    const AllBrands=this.brandsmodel.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} brand`;
  }

  update(id: number, updateBrand: createBrands) {
    return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
