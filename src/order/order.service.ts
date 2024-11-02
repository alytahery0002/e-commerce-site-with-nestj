// import { Injectable,NotFoundException } from '@nestjs/common';
// import {InjectModel} from '@nestjs/mongoose'
// import {Model, model} from 'mongoose';
// import {orders,Iorders} from './schema/order.schema'
// import{OrderItem,IorderItem} from './schema/orderItem.schema'
// import {UserService} from '../user/user.service'
// import {ProductsService} from '../products/products.service'
// import { CreateOrderDto } from './dto/create-order.dto';
// import { UpdateOrderDto } from './dto/update-order.dto';

// @Injectable()
// export class OrderService {

//   constructor(@InjectModel(orders.name) private orderModel:Model<Iorders>,
//               @InjectModel(OrderItem.name) private OrderItemModel:Model<IorderItem>,

//               private UserService:UserService,
//               private ProductsService:ProductsService,

//   ){}

//   async create(createOrderDto: CreateOrderDto) {
//     const{userId,product}=createOrderDto;
//     const user = await this.UserService.findOneById(userId);
//     user.lastName='99';
//     const Product = await this.ProductsService.findOne (product.productId);
//     if (!product) {
//       throw new NotFoundException(`Product with ID ${product.productId} not found`);
//     }
   
//     const orderItem = await new this.OrderItemModel({
//       product,
//       price: Product.price
//     });


//     const order=await this.orderModel.findOne({userId})
    
//     if(! order){
//       const newOrder=new this.orderModel({
//         userId,
//         total: orderItem.price,
//         orderItem
//       })
//        ; newOrder.save();
       
//     }
//     else{
//       //check
//       let orderItemsUser: IorderItem[] = [];
//       orderItemsUser=order.orderItems
//       orderItemsUser.push(orderItem)
//       //how to update a founded order
//       const UpdateOrder=await this.orderModel.findOneAndUpdate({userId},{'$set':{orderItems:orderItemsUser}})
//     }
//   }

//   findAll() {
//     return this.orderModel.find();
//   }

//   async updateOrderStatus(id: number, updateOrderStatusDto) {
//     const order = await this.orderModel.findByIdAndUpdate(id,{'$set':{status:updateOrderStatusDto.status}});
//     if (!order) {
//       throw new NotFoundException('Order not found');
//     }
  
//     return order;
//   }

//   async update(id: number, updateOrderStatusDto) {
//     const order = await this.orderModel.findByIdAndUpdate(id,{'$set':{updateOrderStatusDto}});
//     if (!order) {
//       throw new NotFoundException('Order not found');
//     }
  
//     return order;
//   }

//   async remove(id: number) {
//     await this.orderModel.findByIdAndUpdate(id);
//   }
// }
