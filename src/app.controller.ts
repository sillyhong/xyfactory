import { Controller, Get, Req, Res } from '@nestjs/common';
import { NextService } from './next/next.service';
// import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly next: NextService) {}

  @Get('about-us')
  getAboutUs(@Req() req: any, @Res() res: any) {
    console.log('req123 about-us', req.url);
    // 把原本由Nest处理的主页转交给next
    return this.next.render('/AboutUs', req, res);
  }

  @Get('contact-us')
  getContactUs(@Req() req: any, @Res() res: any) {
    console.log('req123 about-us', req.url);
    // 把原本由Nest处理的主页转交给next
    return this.next.render('/ContactUs', req, res);
  }

  @Get('product')
  getProduct(@Req() req: any, @Res() res: any) {
    console.log('req123 product', req.url);
    // 把原本由Nest处理的主页转交给next
    return this.next.render('/Product', req, res);
  }

  @Get()
  getHome(@Req() req: any, @Res() res: any) {
    console.log('req123 home', req.url);
    // 把原本由Nest处理的主页转交给next
    return this.next.render('/Home', req, res);
  }
}
