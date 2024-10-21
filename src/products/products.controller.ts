import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}
  @Get()
  getAllProducts() {
    return this.productService.findAll();
  }

  @Post()
  addProduct(@Body() product) {
    return this.productService.create(product);
  }
}
