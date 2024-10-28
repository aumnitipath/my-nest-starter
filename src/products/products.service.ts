import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private prodectModel: Model<ProductDocument>,
  ) {}
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const result = new this.prodectModel(createProductDto);
    return result.save();
  }

  async findAll(): Promise<Product[]> {
    return this.prodectModel.find().exec();
  }

  async findOne(id: string): Promise<Product> {
    return this.prodectModel.findById(id).exec();
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const result = this.prodectModel
      .findByIdAndUpdate(id, updateProductDto, {
        new: true,
      })
      .exec();
    return result;
  }

  async remove(id: string) {
    try {
      const result = await this.prodectModel.findByIdAndDelete(id).exec();
      if (!result) {
        throw new NotFoundException('id not found');
      }
      return {
        message: 'Delete successful',
      };
    } catch (error) {
      throw error;
    }
  }
}
